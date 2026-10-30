import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
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
    <>
      <header className="nav">
        <div className="nav-pill">
          <Link to="/" className="nav-logo" aria-label="Lilium Apps home">
            <img src="/logo.svg" alt="Lilium Apps" width="140" height="30" />
          </Link>
          <nav>
            <a href="/#apps">Apps</a>
            <a href="/#upcoming">Upcoming</a>
            <a href="/#about">About</a>
            <a className="nav-cta" href="/#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <span className="made-by">
          <img src="/mark.svg" alt="" width="22" height="22" />
          <span>© {new Date().getFullYear()} Lilium Apps</span>
        </span>
        <span>
          <a href={`mailto:${email}`}>{email}</a> · <a href={googlePlay}>Google Play</a>
        </span>
      </footer>
    </>
  )
}
