import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img src="/logo.svg" alt="Artisan logo" className="logo" />
            <h1>Artisan</h1>
          </div>
          <nav>
            <a href="#features">Services</a>
            <a href="#work">Work</a>
            <a href="#contact" className="cta">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />

        <section id="work" className="container work">
          <h2>Selected work</h2>
          <p>Examples of Google Workspace add-ons, Apps Script automations, and Sheets integrations we've built for clients.</p>
          <div className="cards">
            <article className="card">
              <h3>AutoReports</h3>
              <p>Automated reporting pipeline for executives pulling from Sheets & BigQuery.</p>
            </article>
            <article className="card">
              <h3>FormFlow</h3>
              <p>Custom Google Forms flow with approvals and Gmail notifications.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="container contact">
          <h2>Contact Artisan</h2>
          <p>Interested in a Google Apps project? Email <a href="mailto:hello@artisan.example">hello@artisan.example</a> or use the contact form (coming soon).</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Artisan — Google Apps Studio</p>
        </div>
      </footer>
    </div>
  )
}
