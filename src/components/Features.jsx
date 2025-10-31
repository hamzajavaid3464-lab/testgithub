import React from 'react'

const features = [
  {title: 'Add-ons & Extensions', body: 'Custom Google Workspace add-ons using Apps Script and modern UIs.'},
  {title: 'Automation', body: 'Scheduled jobs, triggers and workflows that run inside Sheets, Docs and Drive.'},
  {title: 'Integrations', body: 'Connect Sheets to APIs, BigQuery and external CRMs.'}
]

export default function Features() {
  return (
    <section id="features" className="container features">
      <h2>What we do</h2>
      <div className="feature-grid">
        {features.map((f) => (
          <div key={f.title} className="feature">
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
