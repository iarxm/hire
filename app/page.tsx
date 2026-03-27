const steps = [
  {
    label: "Hire",
    title: "We recruit into our own bench.",
    copy:
      "Candidates join Fieldstone directly, giving clients access to a managed workforce rather than disconnected resumes.",
  },
  {
    label: "Educate",
    title: "We prepare workers for real operating conditions.",
    copy:
      "Training covers sector fundamentals, safety, client expectations, reporting standards, and project-specific readiness.",
  },
  {
    label: "Deploy",
    title: "We subcontract talent onto priority assignments.",
    copy:
      "Employers get dependable coverage for launches, backfills, seasonal pressure, and specialist projects without rebuilding hiring from scratch.",
  },
];

const sectors = [
  {
    name: "Construction",
    className: "construction",
    title: "Project crews for active sites and scheduled phases.",
    copy:
      "General labor, site support, trades assistance, punch-list work, and short-notice ramp-up for contractors and developers.",
  },
  {
    name: "Education",
    className: "education",
    title: "Dependable people for schools, programs, and support operations.",
    copy:
      "Classroom aides, substitute support, program assistants, and operational staff for term-based or project-based educational demand.",
  },
  {
    name: "Healthcare",
    className: "healthcare",
    title: "Flexible coverage where continuity and compliance matter.",
    copy:
      "Care support, non-clinical operations, patient-facing assistance, and coverage roles for healthcare systems managing fluctuating need.",
  },
];

const employerBenefits = [
  {
    title: "Managed workforce",
    copy: "Workers arrive through a single operating standard and accountability model.",
  },
  {
    title: "Sector-specific preparation",
    copy: "Training is designed around field realities, not generic placement checklists.",
  },
  {
    title: "Faster deployment",
    copy: "Our bench shortens the distance between approved scope and boots-on-ground delivery.",
  },
];

const trustItems = [
  "Construction Crews",
  "Education Support Staff",
  "Healthcare Coverage Teams",
  "Project-Based Workforce Delivery",
];

export default function Home() {
  return (
    <main className="site-shell" id="home">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">F</span>
          <span className="brand-text">
            <strong>Fieldstone</strong>
            <span>Talent Company</span>
          </span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#model">Model</a>
          <a href="#sectors">Sectors</a>
          <a href="#operators">For Employers</a>
          <a href="#talent">For Talent</a>
        </nav>
        <a className="button button-outline" href="#contact">
          Book a Call
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Boutique Hiring + Training + Deployment</p>
          <h1>Project-specific teams, built from people we hire and train ourselves.</h1>
          <p className="hero-text">
            Fieldstone is a field-specific hiring company for construction, education,
            and healthcare. We recruit directly, invest in practical education, and
            subcontract reliable workers into time-sensitive roles for companies that
            need capable people on the ground.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contact">
              Hire a Team
            </a>
            <a className="button button-secondary" href="#talent">
              Join Fieldstone
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="panel-card">
            <p className="panel-label">Active Delivery Model</p>
            <ul className="metrics">
              <li>
                <strong>01</strong>
                <span>We source and hire talent directly into our workforce.</span>
              </li>
              <li>
                <strong>02</strong>
                <span>We train for site, schedule, compliance, and role readiness.</span>
              </li>
              <li>
                <strong>03</strong>
                <span>We deploy project-fit workers where demand spikes fast.</span>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="trust-band">
        <p>Built for labor gaps that cannot wait through slow recruiting cycles.</p>
        <div className="trust-grid">
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="model" id="model">
        <div className="section-heading">
          <p className="eyebrow">How It Works</p>
          <h2>A tighter operating model than staffing, and more flexible than full-time hiring.</h2>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.label}>
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sectors" id="sectors">
        <div className="section-heading">
          <p className="eyebrow">Sector Coverage</p>
          <h2>Three labor markets. One disciplined workforce pipeline.</h2>
        </div>
        <div className="sector-grid">
          {sectors.map((sector) => (
            <article className={`sector-card ${sector.className}`} key={sector.name}>
              <p className="sector-tag">{sector.name}</p>
              <h3>{sector.title}</h3>
              <p>{sector.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="operators" id="operators">
        <div className="operator-copy">
          <p className="eyebrow">For Employers</p>
          <h2>Use us when the job is defined, the timeline is tight, and the worker fit matters.</h2>
          <p>
            We are built for companies that need a partner to own sourcing, readiness,
            and deployment quality. That includes project launches, temporary expansions,
            specialized programs, and coverage during hiring gaps.
          </p>
        </div>
        <div className="operator-list">
          {employerBenefits.map((item) => (
            <div key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="talent" id="talent">
        <div className="talent-panel">
          <p className="eyebrow">For Talent</p>
          <h2>Get hired, get trained, and get placed into work that builds experience.</h2>
          <p>
            Fieldstone is designed for people who want structured entry points into
            practical sectors. We hire directly, equip you for the job, and place you
            onto assignments where performance leads to repeat opportunity.
          </p>
          <a className="button" href="#contact">
            Apply With Fieldstone
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Start Here</p>
          <h2>Need project-ready workers or want to join the workforce pipeline?</h2>
          <p>
            Tell us whether you are hiring for a project or looking to enter one of our
            sectors. We will shape the next step around the role, timeline, and readiness level.
          </p>
        </div>
        <form className="contact-form">
          <label>
            Your name
            <input type="text" name="name" placeholder="Jordan Hale" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="jordan@company.com" />
          </label>
          <label>
            I am
            <select name="audience" defaultValue="Hiring project workers">
              <option>Hiring project workers</option>
              <option>Applying for work</option>
              <option>Exploring partnership</option>
            </select>
          </label>
          <label>
            What do you need?
            <textarea
              name="message"
              rows={4}
              placeholder="Describe the project, workforce need, or sector you want to enter."
            />
          </label>
          <button type="submit" className="button">
            Send Inquiry
          </button>
        </form>
      </section>
    </main>
  );
}
