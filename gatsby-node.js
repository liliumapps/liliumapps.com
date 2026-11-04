const fs = require("fs")
const path = require("path")
const projects = require("./src/data/projects")

// Writes, into public/:
// - sitemap.xml (every page except 404s) and robots.txt, which points crawlers
//   at it. Submit https://<site>/sitemap.xml in Google Search Console.
// - llms.txt (https://llmstxt.org): the studio and its apps, for AI assistants,
//   from the same list as the home page (src/data/projects.js).
exports.onPostBuild = async ({ graphql }) => {
  const { data } = await graphql(`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          email
          googlePlay
        }
      }
      allSitePage {
        nodes {
          path
        }
      }
    }
  `)
  const meta = data.site.siteMetadata
  const siteUrl = meta.siteUrl
  const urls = data.allSitePage.nodes
    .map(node => node.path)
    .filter(p => !/^\/(404|dev-404-page)/.test(p))
    .sort()
    .map(p => `  <url><loc>${siteUrl}${p}</loc></url>`)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`
  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
  fs.writeFileSync(path.join("public", "sitemap.xml"), sitemap)
  const listed = projects.filter(p => p.listed)
  const app = p => {
    const links = [p.url && `[website](${p.url}/)`, p.store && `[Google Play](${p.store})`].filter(Boolean)
    return `- ${p.name} (${p.platforms.join(", ")}; ${p.status}): ${p.summary}${links.length ? ` ${links.join(", ")}` : ""}`
  }
  const llms = `# ${meta.title}

> ${meta.title} is a small, independent software studio. ${meta.description}

## Apps

${listed.filter(p => p.store).map(app).join("\n")}

## Links

- [Home page](${siteUrl}/): every app, and how to get in touch
- [Lilium Apps on Google Play](${meta.googlePlay}): all published apps
- [Email](mailto:${meta.email}): questions, feedback, and ideas
`
  fs.writeFileSync(path.join("public", "robots.txt"), robots)
  fs.writeFileSync(path.join("public", "llms.txt"), llms)
}
