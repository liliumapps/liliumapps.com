import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SiteHead from "../components/Head"
import projects from "../data/projects"

const PRINCIPLES = [
  ["Private by default", "Your data stays on your device unless you choose otherwise."],
  ["Made with care", "Small, focused apps polished down to the details, and fast on the hardware you already have."],
  ["Built to last", "Native, fast, and maintained for the long run."],
]

const listed = projects.filter(p => p.listed)
const published = listed.filter(p => p.store)
const tools = listed.filter(p => p.install && !p.store)

// A published app: its store banner over its words. The whole tile links to the
// app's site (the title's link stretches over it); the button goes to the store.
function AppCard({ app }) {
  const href = app.url || app.store
  return (
    <article className="app">
      <div className={app.store ? "app-banner" : "app-banner terminal"}>
        <img src={app.banner} alt="" width="1024" height="500" loading="lazy" decoding="async" />
      </div>
      <div className="app-text">
        <div className="card-top">
          <h3>
            <a className="stretched" href={href}>
              {app.name}
            </a>
          </h3>
          <span className="status">{app.status}</span>
        </div>
        <p>{app.summary}</p>
        <div className="app-actions">
          {app.store && (
            <a className="button" href={app.store}>
              Get it on Google Play
            </a>
          )}
          {app.install && (
            <a className="button" href={app.install}>
              Install
            </a>
          )}
          {app.source && (
            <a className="button ghost-dark" href={app.source}>
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

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
  const [lead, ...rest] = published
  return (
    <Layout>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="pill">
              <span>New</span> {lead.name} is on Google Play
            </p>
            <h1>Thoughtful software for desktop and mobile.</h1>
            <p className="hero-sub">
              Lilium Apps is a small, independent studio making private, carefully crafted apps for
              Android, iPhone, Windows, Mac, and Linux.
            </p>
            <div className="hero-actions">
              <a className="button light" href="#apps">
                See our apps
              </a>
              <a className="button ghost" href={googlePlay}>
                Google Play
              </a>
            </div>
            <p className="hero-note">Independent · Private by default · Made with care</p>
          </div>
          <div className="hero-media" aria-hidden="true">
            {rest[0] && <img className="hero-banner back" src={rest[0].banner} alt="" width="1024" height="500" />}
            <img className="hero-banner front" src={lead.banner} alt="" width="1024" height="500" />
          </div>
        </div>
      </section>

      <section id="apps" className="section">
        <p className="eyebrow center">Apps</p>
        <h2 className="center">On Google Play today</h2>
        <div className="apps">
          {published.map(app => (
            <AppCard key={app.folder} app={app} />
          ))}
        </div>
      </section>

      {tools.length > 0 && (
        <section id="tools" className="section">
          <p className="eyebrow center">Developer tools</p>
          <h2 className="center">For your terminal</h2>
          <div className={tools.length === 1 ? "apps single" : "apps"}>
            {tools.map(app => (
              <AppCard key={app.folder} app={app} />
            ))}
          </div>
        </section>
      )}

      <section id="about" className="section">
        <p className="eyebrow center">About</p>
        <h2 className="center">Software that respects the people who use it</h2>
        <div className="principle-grid">
          {PRINCIPLES.map(([title, body]) => (
            <div key={title} className="principle">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <h2>Say hello</h2>
        <p>Questions, feedback, or ideas? We read every message.</p>
        <div className="hero-actions center-actions">
          <a className="button light" href={`mailto:${email}`}>
            {email}
          </a>
          <a className="button ghost" href={googlePlay}>
            More apps on Google Play
          </a>
        </div>
      </section>
    </Layout>
  )
}

// Structured data so search results know the studio and its profiles.
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lilium Apps",
  url: "https://liliumapps.com/",
  logo: "https://liliumapps.com/icon-512.png",
  email: "liliumappshq@gmail.com",
  sameAs: [
    "https://play.google.com/store/apps/dev?id=6497481824038903914",
    "https://github.com/liliumapps",
  ],
}

export const Head = ({ location }) => <SiteHead pathname={location.pathname} jsonLd={JSON_LD} />
