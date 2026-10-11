import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          github
          googlePlay
        }
      }
    }
  `)
  const { email, github, googlePlay } = site.siteMetadata
  return (
    <>
      <header className="nav">
        <Link to="/" className="nav-logo" aria-label="Lilium Apps home">
          <img src="/logo.svg" alt="Lilium Apps" width="168" height="36" />
        </Link>
        <nav>
          <a href="/#apps">Apps</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Lilium Apps</span>
        <span>
          <a href={`mailto:${email}`}>{email}</a> · <a href={googlePlay}>Google Play</a> ·{" "}
          <Link to="/privacy/lumen-files/">Lumen Files privacy</Link> · <a href={github}>GitHub</a>
        </span>
      </footer>
    </>
  )
}
