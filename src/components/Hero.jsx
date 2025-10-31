import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <h2>We build Google Apps that save time and make teams happier</h2>
          <p className="lead">Artisan designs and develops Google Workspace add-ons, Apps Script automations, and smart Sheets integrations tailored to your workflows.</p>
          <p>
            <a className="btn" href="#contact">Get a consult</a>
            <a className="btn ghost" href="#work">See work</a>
          </p>
        </div>
        <div className="hero-visual" aria-hidden>
          <img src="/hero-illustration.svg" alt="Illustration" />
        </div>
      </div>
    </section>
  )
}
