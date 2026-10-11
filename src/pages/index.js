import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SiteHead from "../components/Head"
import projects from "../data/projects"

const PRINCIPLES = [
  ["Private by default", "Your data stays on your device unless you choose otherwise."],
  ["Made with care", "Small, focused apps polished down to the details."],
  ["Built to last", "Native, fast, and maintained for the long run."],
]

export default function Home() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          googlePlay
        }
      }
    }
  `)
  const { email, googlePlay } = site.siteMetadata
  return (
    <Layout>
      <section className="hero">
        <img className="hero-mark" src="/mark.svg" alt="" width="132" height="132" />
        <h1>Thoughtful software for desktop and mobile.</h1>
        <p>
          Lilium Apps is a small, independent studio making private, carefully crafted apps
          for Windows, Mac, Linux, Android, and iPhone.
        </p>
        <a className="button" href="#apps">
          See our apps
        </a>{" "}
        <a className="button secondary" href={googlePlay}>
          Google Play
        </a>
      </section>

      <section id="apps" className="section">
        <h2>Apps</h2>
        <div className="grid">
          {projects
            .filter(p => p.listed)
            .map(p => (
              <article key={p.folder} className="card">
                <div className="card-top">
                  <h3>{p.url ? <a href={p.url}>{p.name}</a> : p.name}</h3>
                  <span className="status">{p.status}</span>
                </div>
                <p>{p.summary}</p>
                <ul className="tags">
                  {p.platforms.map(platform => (
                    <li key={platform}>{platform}</li>
                  ))}
                </ul>
              </article>
            ))}
        </div>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <div className="grid principles">
          {PRINCIPLES.map(([title, body]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Say hello</h2>
        <p>Questions, feedback, or ideas? We read every message.</p>
        <p>
          <a className="button" href={`mailto:${email}`}>
            {email}
          </a>{" "}
          <a className="button secondary" href={googlePlay}>
            Google Play
          </a>
        </p>
      </section>
    </Layout>
  )
}

export const Head = () => <SiteHead />
