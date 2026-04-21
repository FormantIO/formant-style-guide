import './StrategyMap.css'

const FormantLogoMark = () => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-label="Formant">
    <rect x="40" y="14" width="71" height="21" fill="#F2F3F4" />
    <polygon points="9,108 72,108 40,43" fill="#F2F3F4" />
    <circle cx="78" cy="61" r="16" fill="#F2F3F4" />
  </svg>
)

export default function StrategyMap() {
  return (
    <div className="smap">
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          <div className="nav-logo-mark">
            <FormantLogoMark />
          </div>
          <span>FORMANT</span>
        </div>
        <ul className="nav-links">
          <li><a href="#thesis">Thesis</a></li>
          <li><a href="#f1">Market</a></li>
          <li><a href="#f2">Problems</a></li>
          <li><a href="#f3">Offer</a></li>
          <li><a href="#f4">Distribution</a></li>
          <li><a href="#f5">Content</a></li>
          <li><a href="#f6">Competitors</a></li>
          <li><a href="#f7">Scale</a></li>
          <li><a href="#f8">ICP</a></li>
          <li><a href="#f9">AI Agents</a></li>
          <li><a href="#north">Synthesis</a></li>
          <li className="nav-cross-item"><a href="/" className="nav-cross">Style Guide&nbsp;↗</a></li>
        </ul>
        <div className="nav-meta">Strategy System / 2026</div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">Strategy System &nbsp;//&nbsp; 9 Frameworks, One Architecture</div>
          <h1 className="hero-title">AI Incident Management<br />for <strong>Physical Operations</strong></h1>
          <p className="hero-subtitle">How Formant becomes the #1 AI incident management platform for physical operations — through brand, warm relationships, FDE-led delivery, and an AI-amplified GTM. Nine frameworks, one system.</p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-label">Downtime Market</div>
              <div className="hero-stat-value">$1.5T</div>
              <div className="hero-stat-sub">Annual industrial downtime cost worldwide.</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Category Leader</div>
              <div className="hero-stat-value">0</div>
              <div className="hero-stat-sub">No one owns AI incident management yet. We will.</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Alarm Outcome</div>
              <div className="hero-stat-value">55%</div>
              <div className="hero-stat-sub">Alarm reduction on Day 90 — proven.</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Window</div>
              <div className="hero-stat-value">NOW</div>
              <div className="hero-stat-sub">AI is ready. Category is forming. Move first.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* THESIS */}
      <section className="thesis" id="thesis">
        <div className="container">
          <blockquote>
            Physical operations run on uptime. Every unplanned incident in a semi fab, pharma plant, or energy facility costs <strong style={{ color: 'var(--sm-horizon-glow)', fontWeight: 600 }}>$250K+ per hour</strong>. The AI is ready, the category is forming, and no one owns it. Formant is the only company positioned to define "AI incident management for physical operations" — with FDE delivery, SCADA-native integration, and a brand built before the sales team arrives.
          </blockquote>
          <cite>— The Thesis &nbsp;//&nbsp; distilled from the 2026 GTM + 9 brand frameworks</cite>
        </div>
      </section>

      <div className="divider"></div>

      {/* FRAMEWORK 01 — MARKET BREAKDOWN */}
      <section className="block" id="f1">
        <div className="container">
          <div className="fw-head">
            <div className="fw-num">01</div>
            <div>
              <div className="section-label">Market Breakdown System</div>
              <div className="fw-name">Where the AI incident management dollar actually lives.</div>
              <p className="fw-desc">Physical operations is the next AI frontier — and nobody owns it yet. TAM is huge and diffuse; SAM is where SCADA-native AI incident management compounds; SOM is the reachable set of high-complexity plants with 10+ operators in the control room and a live digitalization mandate.</p>
            </div>
            <div className="fw-tag">Framework 01</div>
          </div>

          <div className="grid-3" style={{ marginBottom: 40 }}>
            <div className="card stat-card">
              <div className="stat-label">TAM — Total addressable</div>
              <div className="stat-value">$180B</div>
              <div className="stat-sub">Global industrial AI + OT modernization + incident management by 2030. All verticals, all geographies.</div>
            </div>
            <div className="card stat-card">
              <div className="stat-label">SAM — Serviceable</div>
              <div className="stat-value">$42B</div>
              <div className="stat-sub">High-complexity manufacturing in North America + Western Europe + Asia-Pacific — semi, pharma, energy, specialty chem.</div>
            </div>
            <div className="card stat-card">
              <div className="stat-label">SOM — Serviceable obtainable</div>
              <div className="stat-value">$3.2B</div>
              <div className="stat-sub">~120 Tier-1 accounts with an active digitalization mandate, 10+ operators/control room, and a measurable downtime cost.</div>
            </div>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-eyebrow">Category</div>
              <div className="card-title">"Physical AI" is forming now</div>
              <p className="card-body">Whoever builds the strongest brand and deepest ICP relationships will define the category — and be very hard to displace. Zero clear leaders today. The vocabulary is still being written; we write it.</p>
            </div>
            <div className="card">
              <div className="card-eyebrow">Tailwinds</div>
              <div className="card-title">CapEx reshoring + labor attrition</div>
              <p className="card-body">$1T in US + EU manufacturing reshoring is unfolding right as skilled process/reliability engineers retire. The next plant manager inherits a fleet with no one left who knows how the alarms were tuned.</p>
            </div>
            <div className="card">
              <div className="card-eyebrow">Shift</div>
              <div className="card-title">Ontology is the new data lake</div>
              <p className="card-body">Every Tier-1 account now has Snowflake or Databricks. The unsolved layer is the industrial ontology above it — ISA-95-aligned, process-aware, queryable by copilot. This is Formant Metaphysics.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FRAMEWORK 02 — PROBLEM PRIORITIZATION */}
      <section className="block alt" id="f2">
        <div className="container">
          <div className="fw-head">
            <div className="fw-num">02</div>
            <div>
              <div className="section-label">Problem Prioritization Engine</div>
              <div className="fw-name">The five problems we get paid to solve.</div>
              <p className="fw-desc">Scored on severity × frequency × willingness-to-pay × Formant-fit. The top five drive every wedge conversation.</p>
            </div>
            <div className="fw-tag">Framework 02</div>
          </div>

          <div className="prob-table">
            <div className="prob-row">
              <div className="prob-rank">01</div>
              <div className="prob-text">
                <div className="prob-name">Alarm floods → operator fatigue → missed excursions</div>
                <div className="prob-sub">2,000+ alarms/day per plant. Most ignored. When one matters, it hides in the noise.</div>
              </div>
              <div className="prob-bar"><div className="prob-bar-fill" style={{ width: '96%' }}></div></div>
              <div className="prob-score">9.6 / 10</div>
            </div>
            <div className="prob-row">
              <div className="prob-rank">02</div>
              <div className="prob-text">
                <div className="prob-name">Unplanned downtime costs $250K+ per hour</div>
                <div className="prob-sub">A single missed alarm in a semi fab or pharma plant scraps batches, violates compliance, and hits the boardroom.</div>
              </div>
              <div className="prob-bar"><div className="prob-bar-fill" style={{ width: '94%' }}></div></div>
              <div className="prob-score">9.4 / 10</div>
            </div>
            <div className="prob-row">
              <div className="prob-rank">03</div>
              <div className="prob-text">
                <div className="prob-name">Process knowledge retiring with the workforce</div>
                <div className="prob-sub">The engineer who tuned the line 22 years ago is gone. Their "instinct" was never written down.</div>
              </div>
              <div className="prob-bar"><div className="prob-bar-fill" style={{ width: '91%' }}></div></div>
              <div className="prob-score">9.1 / 10</div>
            </div>
            <div className="prob-row">
              <div className="prob-rank">04</div>
              <div className="prob-text">
                <div className="prob-name">Yield excursions without clear root cause</div>
                <div className="prob-sub">Weeks of investigation, $10M+ in lost batches, a post-mortem that never propagates across the fleet.</div>
              </div>
              <div className="prob-bar"><div className="prob-bar-fill" style={{ width: '87%' }}></div></div>
              <div className="prob-score">8.7 / 10</div>
            </div>
            <div className="prob-row">
              <div className="prob-rank">05</div>
              <div className="prob-text">
                <div className="prob-name">Fragmented data across SCADA + historian + MES + lakehouse</div>
                <div className="prob-sub">No unified ontology. Every AI effort forks the data model instead of compounding it.</div>
              </div>
              <div className="prob-bar"><div className="prob-bar-fill" style={{ width: '78%' }}></div></div>
              <div className="prob-score">7.8 / 10</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FRAMEWORK 03 — OFFER */}
      <section className="block" id="f3">
        <div className="container">
          <div className="fw-head">
            <div className="fw-num">03</div>
            <div>
              <div className="section-label">Offer Creation Framework</div>
              <div className="fw-name">The Architecture Audit → Paid Pilot → Platform.</div>
              <p className="fw-desc">One offer, three lanes. Every ICP conversation funnels into the same 12-week incident-management wedge that converts into platform revenue within 9–12 months.</p>
            </div>
            <div className="fw-tag">Framework 03</div>
          </div>

          <div className="offer-wrap">
            <div>
              <div className="offer-headline">The <span>12-Week Incident Management Wedge</span> — FDE-led, outcome-anchored, SCADA-native.</div>
              <p className="offer-sub">One pod. One plant. One measurable outcome — alarm reduction, yield-excursion copilot, or deviation triage. We deploy alongside your existing SCADA, historian, and MES — no rip and replace. You keep everything we build.</p>
              <ul className="offer-list">
                <li>Week 1–2 — Architecture Audit: ontology draft, data-map, pilot SOW signed.</li>
                <li>Week 3–6 — FDE pod on-site, historian + MES + P&amp;ID ingestion, copilot live.</li>
                <li>Week 7–10 — In-plant validation with process + reliability engineers.</li>
                <li>Week 11–12 — Outcome-case readout: alarm reduction %, downtime avoided, $ impact.</li>
              </ul>
            </div>
            <div className="offer-stat-grid">
              <div className="offer-stat">
                <div className="offer-stat-label">Deal shape</div>
                <div className="offer-stat-value">$600K–$1.5M</div>
                <div className="offer-stat-sub">Paid pilot. No freebies.</div>
              </div>
              <div className="offer-stat">
                <div className="offer-stat-label">Time to outcome</div>
                <div className="offer-stat-value">12 wks</div>
                <div className="offer-stat-sub">Measurable. Quoted.</div>
              </div>
              <div className="offer-stat">
                <div className="offer-stat-label">Alarm reduction</div>
                <div className="offer-stat-value">55%</div>
                <div className="offer-stat-sub">Day-90 benchmark.</div>
              </div>
              <div className="offer-stat">
                <div className="offer-stat-label">Expansion path</div>
                <div className="offer-stat-value">9–12 mo</div>
                <div className="offer-stat-sub">Platform expansion deal.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FRAMEWORK 04 — DISTRIBUTION */}
      <section className="block alt" id="f4">
        <div className="container">
          <div className="fw-head">
            <div className="fw-num">04</div>
            <div>
              <div className="section-label">Distribution Domination Plan</div>
              <div className="fw-name">Five channels, ordered by leverage.</div>
              <p className="fw-desc">No paid demand gen on day one. A 7–8-figure, FDE-led platform sale into a 5-person buying committee rewards compounding channels — warm outbound, SCADA partners, analyst coverage, customer-as-media — not programmatic.</p>
            </div>
            <div className="fw-tag">Framework 04</div>
          </div>

          <div className="channel-stack">
            <div className="channel-row">
              <div className="channel-num">01</div>
              <div>
                <div className="channel-name">Warm outbound — BD hire + founder-led</div>
                <div className="channel-desc">Industry-insider BD with existing ICP networks opens doors; Henrik + Jeff run a weekly 30-account push into VP Ops / CDO / COO. BD hire is the highest-leverage early investment.</div>
              </div>
              <div>
                <div className="channel-kpi-label">Leading KPI</div>
                <div className="channel-kpi-value">10 qualified discovery calls / mo</div>
              </div>
              <div>
                <div className="channel-kpi-label">Investment</div>
                <div className="channel-kpi-value">1 BD · base + commission heavy</div>
              </div>
            </div>
            <div className="channel-row">
              <div className="channel-num">02</div>
              <div>
                <div className="channel-name">SCADA + integrator + consultancy ecosystem</div>
                <div className="channel-desc">T1 SCADA vendors (Ignition / AVEVA / Rockwell / Emerson / Honeywell) • T2 OT integrators (Grantek / Avanceon / Maverick) • T3 OT consultancies + hyperscalers (Deloitte / Accenture OT, AWS Industrial, Snowflake Mfg).</div>
              </div>
              <div>
                <div className="channel-kpi-label">Leading KPI</div>
                <div className="channel-kpi-value">20–30% partner-sourced pipeline (mo 12)</div>
              </div>
              <div>
                <div className="channel-kpi-label">Investment</div>
                <div className="channel-kpi-value">1 partner lead · referral + co-sell</div>
              </div>
            </div>
            <div className="channel-row">
              <div className="channel-num">03</div>
              <div>
                <div className="channel-name">Vertical conferences &amp; intimate dinners</div>
                <div className="channel-desc">Speaking &gt; attending. ARC Industry Forum, Automation Fair (Rockwell), ODVA, Hannover Messe, LNS webcast. Host 10–15 person dinners the night before — lower cost, deeper conversations.</div>
              </div>
              <div>
                <div className="channel-kpi-label">Leading KPI</div>
                <div className="channel-kpi-value">8–12 qualified convos / event</div>
              </div>
              <div>
                <div className="channel-kpi-label">Investment</div>
                <div className="channel-kpi-value">~$60K / event · Henrik + Jeff on stage</div>
              </div>
            </div>
            <div className="channel-row">
              <div className="channel-num">04</div>
              <div>
                <div className="channel-name">Analyst &amp; thought-leadership</div>
                <div className="channel-desc">Brief 3 analysts/qtr (Gartner, ARC, LNS, Verdantix, Forrester). Co-publish a quarterly POV with a Tier-1 customer. Author the "State of AI Incident Management" report. Own the vocabulary.</div>
              </div>
              <div>
                <div className="channel-kpi-label">Leading KPI</div>
                <div className="channel-kpi-value">2 report inclusions / 12 mo</div>
              </div>
              <div>
                <div className="channel-kpi-label">Investment</div>
                <div className="channel-kpi-value">$15K / month</div>
              </div>
            </div>
            <div className="channel-row">
              <div className="channel-num">05</div>
              <div>
                <div className="channel-name">Customer-as-media flywheel</div>
                <div className="channel-desc">Every live customer → 90-day outcome brief + video + webinar + podcast episode. The asset that makes channels 1–4 compound. Gate nothing. Anonymized when needed.</div>
              </div>
              <div>
                <div className="channel-kpi-label">Leading KPI</div>
                <div className="channel-kpi-value">1 outcome case / qtr / customer</div>
              </div>
              <div>
                <div className="channel-kpi-label">Investment</div>
                <div className="channel-kpi-value">0.5 FTE · $5K / month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FRAMEWORK 05 — VIRAL CONTENT */}
      <section className="block" id="f5">
        <div className="container">
          <div className="fw-head">
            <div className="fw-num">05</div>
            <div>
              <div className="section-label">Viral Content Engine</div>
              <div className="fw-name">Hooks that travel between buyer, operator, and analyst.</div>
              <p className="fw-desc">Four hook archetypes, one narrative spine. Every piece of content maps back to one of these openings — so the brand feels authored, not automated.</p>
            </div>
            <div className="fw-tag">Framework 05</div>
          </div>

          <div className="hook-grid">
            <div className="hook">
              <div className="hook-label">Hook 01 &nbsp;//&nbsp; The Category</div>
              <div className="hook-text">"There is no #1 AI incident management platform for physical operations. The AI is ready. The category is forming. The window is open now. We're claiming it."</div>
            </div>
            <div className="hook">
              <div className="hook-label">Hook 02 &nbsp;//&nbsp; The Alarm</div>
              <div className="hook-text">"Your control room ignored 1,847 alarms last shift. Exactly one of them was going to kill yield. Want to know which?"</div>
            </div>
            <div className="hook">
              <div className="hook-label">Hook 03 &nbsp;//&nbsp; The Retirement</div>
              <div className="hook-text">"The engineer who tuned that line 22 years ago is gone. Her instinct was never written down. We turn it into a queryable ontology before the next hire starts."</div>
            </div>
            <div className="hook">
              <div className="hook-label">Hook 04 &nbsp;//&nbsp; The Downtime</div>
              <div className="hook-text">"$250K per hour is the average cost of unplanned downtime in your industry. 55% alarm reduction on Day 90. The outcome brief is two pages. Want it?"</div>
            </div>
          </div>

          <div className="grid-4" style={{ marginTop: 40 }}>
            <div className="card">
              <div className="card-eyebrow">Format</div>
              <div className="card-title">LinkedIn long-form</div>
              <p className="card-body">Henrik + Jeff essays, 900–1,400 words. Anchored on a real customer outcome. 2–3× / week cadence. Founders post, not just the company page.</p>
            </div>
            <div className="card">
              <div className="card-eyebrow">Format</div>
              <div className="card-title">Physical AI podcast</div>
              <p className="card-body">Bi-weekly. Guests are plant managers, ops directors, OT architects from ICP accounts — not vendors. Clip 60-sec insights for LinkedIn. Pitch recaps to trade press.</p>
            </div>
            <div className="card">
              <div className="card-eyebrow">Format</div>
              <div className="card-title">2-page outcome brief</div>
              <p className="card-body">Customer-specific. Quantified. PDF + landing page. Gated only by "who are you." Distributed into every AE conversation and nurture sequence.</p>
            </div>
            <div className="card">
              <div className="card-eyebrow">Format</div>
              <div className="card-title">State of AI Incident Mgmt</div>
              <p className="card-body">Long-form authored-by-Formant report. Gartner / ARC / LNS co-authored follow-ups. Quarterly. Permission-structure content that defines the category.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FRAMEWORK 06 — COMPETITOR WEAKNESS MAP */}
      <section className="block alt" id="f6">
        <div className="container">
          <div className="fw-head">
            <div className="fw-num">06</div>
            <div>
              <div className="section-label">Competitor Weakness Map</div>
              <div className="fw-name">Five competitors, two layers, one positioning gap.</div>
              <p className="fw-desc">Incumbents (SCADA/DCS/AIOps) sit below us; platform peers (Palantir/AspenTech/Cognite) sit beside us. None ship SCADA-native AI incident management with FDE leverage. That's our lane.</p>
            </div>
            <div className="fw-tag">Framework 06</div>
          </div>

          <p className="section-label" style={{ marginBottom: 18 }}>Layer 01 &nbsp;//&nbsp; Incumbents &amp; adjacent tools (ride on top)</p>
          <div className="comp-matrix" style={{ marginBottom: 48 }}>
            <div className="comp-col">
              <div className="comp-name">Legacy SCADA / DCS alarm mgmt</div>
              <div className="comp-block"><span className="comp-block-label strength">Strength</span><span className="comp-block-text mute">Installed. Trusted by OT. Regulatory-safe. Deep vendor relationships.</span></div>
              <div className="comp-block"><span className="comp-block-label weak">Weakness</span><span className="comp-block-text">Generate alarms but have no intelligence. No AI compounding. Alarm fatigue unsolved.</span></div>
              <div className="comp-block"><span className="comp-block-label beat">Formant wins by</span><span className="comp-block-text">Riding on top of them — read-only at the OT boundary — and delivering the AI layer they never will. Partner, don't replace.</span></div>
            </div>
            <div className="comp-col">
              <div className="comp-name">Legacy CMMS / maintenance tools</div>
              <div className="comp-block"><span className="comp-block-label strength">Strength</span><span className="comp-block-text mute">Work-order systems of record. Deep reliability-team adoption.</span></div>
              <div className="comp-block"><span className="comp-block-label weak">Weakness</span><span className="comp-block-text">Track maintenance, miss predictive signals. Reactive by design. Ignores real-time alarm streams.</span></div>
              <div className="comp-block"><span className="comp-block-label beat">Formant wins by</span><span className="comp-block-text">Feeding AI-prioritized incidents and predicted failures into the CMMS, not competing with it.</span></div>
            </div>
            <div className="comp-col">
              <div className="comp-name">IT-AIOps (Datadog, Splunk, New Relic)</div>
              <div className="comp-block"><span className="comp-block-label strength">Strength</span><span className="comp-block-text mute">Strong in IT incident management. Well-funded, mature platforms.</span></div>
              <div className="comp-block"><span className="comp-block-label weak">Weakness</span><span className="comp-block-text">Built for IT, not OT. No SCADA/historian/ISA-95 fluency. No physical-process ontology.</span></div>
              <div className="comp-block"><span className="comp-block-label beat">Formant wins by</span><span className="comp-block-text">Being purpose-built for OT — physical-process ontology, alarm tuning, P&amp;ID-aware copilot.</span></div>
            </div>
          </div>

          <p className="section-label" style={{ marginBottom: 18 }}>Layer 02 &nbsp;//&nbsp; Platform peers (compete for the same budget)</p>
          <div className="comp-matrix">
            <div className="comp-col">
              <div className="comp-name">Palantir Foundry for Manufacturing</div>
              <div className="comp-block"><span className="comp-block-label strength">Strength</span><span className="comp-block-text mute">FDE model at scale. Defense-grade security posture. Execution muscle.</span></div>
              <div className="comp-block"><span className="comp-block-label weak">Weakness</span><span className="comp-block-text">18-month deployments. Customer never owns the platform. "Rented Palantir" fatigue.</span></div>
              <div className="comp-block"><span className="comp-block-label beat">Formant wins by</span><span className="comp-block-text">Shipping a Foundry-class outcome in 12 weeks — SCADA-native, incident-focused, customer-owned.</span></div>
            </div>
            <div className="comp-col">
              <div className="comp-name">AspenTech / Hexagon</div>
              <div className="comp-block"><span className="comp-block-label strength">Strength</span><span className="comp-block-text mute">Incumbent process-industry footprint. Deep APC/process IP.</span></div>
              <div className="comp-block"><span className="comp-block-label weak">Weakness</span><span className="comp-block-text">Legacy architecture. AI bolted on, not native. Slow ontology work.</span></div>
              <div className="comp-block"><span className="comp-block-label beat">Formant wins by</span><span className="comp-block-text">AI-native ontology + copilot stack on top of their historian, not against it.</span></div>
            </div>
            <div className="comp-col">
              <div className="comp-name">Cognite Data Fusion</div>
              <div className="comp-block"><span className="comp-block-label strength">Strength</span><span className="comp-block-text mute">Strong industrial-data mesh. Good O&amp;G traction.</span></div>
              <div className="comp-block"><span className="comp-block-label weak">Weakness</span><span className="comp-block-text">Data-platform positioning without an AI application layer. Customers still DIY the copilot.</span></div>
              <div className="comp-block"><span className="comp-block-label beat">Formant wins by</span><span className="comp-block-text">Leading with the outcome (alarm, yield, deviation) and the copilot, not the pipes.</span></div>
            </div>
            <div className="comp-col">
              <div className="comp-name">Seeq</div>
              <div className="comp-block"><span className="comp-block-label strength">Strength</span><span className="comp-block-text mute">Beloved by process engineers. Time-series analytics UX.</span></div>
              <div className="comp-block"><span className="comp-block-label weak">Weakness</span><span className="comp-block-text">Analyst-tool scope. No ontology, no FDE motion, no platform expansion.</span></div>
              <div className="comp-block"><span className="comp-block-label beat">Formant wins by</span><span className="comp-block-text">Selling the executive outcome, with Seeq-class UX as a feature of a bigger platform.</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FRAMEWORK 07 — SCALE SYSTEM */}
      <section className="block" id="f7">
        <div className="container">
          <div className="fw-head">
            <div className="fw-num">07</div>
            <div>
              <div className="section-label">Scale System</div>
              <div className="fw-name">Near-term GTM commits + long-range platform thesis.</div>
              <p className="fw-desc">Two clocks. The near-term (12-month) GTM is what the sales team is executing now — measurable, committed. The long-range (36-month) thesis is where the platform flywheel takes us if the near-term milestones land.</p>
            </div>
            <div className="fw-tag">Framework 07</div>
          </div>

          <p className="section-label" style={{ marginBottom: 18 }}>Near-term &nbsp;//&nbsp; 12-Month GTM Commits</p>
          <div className="milestone-track" style={{ marginBottom: 48 }}>
            <div className="milestone-cell">
              <div className="milestone-idx">Month 03</div>
              <div className="milestone-name">Foundation</div>
              <div className="milestone-body">Website revamp live. Category narrative doc published. 2 blog posts + first podcast episodes. BD hiring underway. Target partner list + conference CFPs submitted.</div>
              <div className="milestone-metrics">
                <div className="milestone-metric-row"><span>Signed ARR</span><span>$50K+</span></div>
                <div className="milestone-metric-row"><span>Qualified pipe (SAOs)</span><span>5</span></div>
                <div className="milestone-metric-row"><span>Reference customers</span><span>1–2</span></div>
                <div className="milestone-metric-row"><span>% warm / partner pipe</span><span>20%</span></div>
              </div>
            </div>
            <div className="milestone-cell">
              <div className="milestone-idx">Month 06</div>
              <div className="milestone-name">Relationships</div>
              <div className="milestone-body">BD hire onboarded. Partner program launched — first SCADA partner MoU. 2+ conference appearances. Content engine running. First case study published. ABM program active.</div>
              <div className="milestone-metrics">
                <div className="milestone-metric-row"><span>Signed ARR</span><span>$200K+</span></div>
                <div className="milestone-metric-row"><span>Qualified pipe (SAOs)</span><span>20</span></div>
                <div className="milestone-metric-row"><span>Reference customers</span><span>3–4</span></div>
                <div className="milestone-metric-row"><span>% warm / partner pipe</span><span>40%</span></div>
              </div>
            </div>
            <div className="milestone-cell">
              <div className="milestone-idx">Month 12</div>
              <div className="milestone-name">Scale + Convert</div>
              <div className="milestone-body">5–8 active partners. 20–30% partner-sourced pipeline. 3+ ICP case studies. Analyst briefings live. All 5 AI GTM agents deployed. First signed ICP logos. Second FDE hire.</div>
              <div className="milestone-metrics">
                <div className="milestone-metric-row"><span>Signed ARR</span><span>$750K+</span></div>
                <div className="milestone-metric-row"><span>Qualified pipe (SAOs)</span><span>60</span></div>
                <div className="milestone-metric-row"><span>Reference customers</span><span>6–8</span></div>
                <div className="milestone-metric-row"><span>% warm / partner pipe</span><span>60%</span></div>
              </div>
            </div>
          </div>

          <p className="section-label" style={{ marginBottom: 18 }}>Long-range &nbsp;//&nbsp; 36-Month Platform Thesis</p>
          <div className="horizon-track">
            <div className="horizon-cell">
              <div className="horizon-idx">Horizon 01 &nbsp;//&nbsp; 0–6 mo</div>
              <div className="horizon-name">Foundation</div>
              <div className="horizon-span">Months 0 — 6</div>
              <div className="horizon-body">Category narrative live. BD hire onboarded. FDE pod v1 formed. Metaphysics ontology v1 shipped. Alarm-reduction outcome proven at one semi, one pharma.</div>
              <div className="horizon-metrics">
                <div className="horizon-metric-row"><span>ARR</span><span>$0.2–1M</span></div>
                <div className="horizon-metric-row"><span>Customers</span><span>3–5</span></div>
                <div className="horizon-metric-row"><span>Team</span><span>25–40</span></div>
                <div className="horizon-metric-row"><span>FDE reuse</span><span>15%</span></div>
              </div>
            </div>
            <div className="horizon-cell">
              <div className="horizon-idx">Horizon 02 &nbsp;//&nbsp; 6–12 mo</div>
              <div className="horizon-name">Repeatability</div>
              <div className="horizon-span">Months 6 — 12</div>
              <div className="horizon-body">Second FDE pod. Vertical playbooks for semi + pharma codified. First 3 outcome-case assets. Partner motion seeded with 2 SIs + 1 hyperscaler. All 5 AI agents deployed.</div>
              <div className="horizon-metrics">
                <div className="horizon-metric-row"><span>ARR</span><span>$1–5M</span></div>
                <div className="horizon-metric-row"><span>Customers</span><span>8–14</span></div>
                <div className="horizon-metric-row"><span>Team</span><span>40–60</span></div>
                <div className="horizon-metric-row"><span>FDE reuse</span><span>35%</span></div>
              </div>
            </div>
            <div className="horizon-cell">
              <div className="horizon-idx">Horizon 03 &nbsp;//&nbsp; 12–24 mo</div>
              <div className="horizon-name">Leverage</div>
              <div className="horizon-span">Months 12 — 24</div>
              <div className="horizon-body">Self-serve platform tier. Ontology templates per vertical. Partner-sourced pipeline hits 25%. FDE-to-AE ratio inverts. First international accounts.</div>
              <div className="horizon-metrics">
                <div className="horizon-metric-row"><span>ARR</span><span>$15–30M</span></div>
                <div className="horizon-metric-row"><span>Customers</span><span>25–38</span></div>
                <div className="horizon-metric-row"><span>Team</span><span>100–140</span></div>
                <div className="horizon-metric-row"><span>FDE reuse</span><span>55%</span></div>
              </div>
            </div>
            <div className="horizon-cell">
              <div className="horizon-idx">Horizon 04 &nbsp;//&nbsp; 24–36 mo</div>
              <div className="horizon-name">Platform Flywheel</div>
              <div className="horizon-span">Months 24 — 36</div>
              <div className="horizon-body">Ontology reuse compounds across the fleet. New accounts ramp in weeks, not months. FDE team is product leverage, not gating capacity. Category leadership locked.</div>
              <div className="horizon-metrics">
                <div className="horizon-metric-row"><span>ARR</span><span>$50–100M</span></div>
                <div className="horizon-metric-row"><span>Customers</span><span>60+</span></div>
                <div className="horizon-metric-row"><span>Team</span><span>200–280</span></div>
                <div className="horizon-metric-row"><span>FDE reuse</span><span>70%+</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FRAMEWORK 08 — ICP MAP */}
      <section className="block alt" id="f8">
        <div className="container">
          <div className="fw-head">
            <div className="fw-num">08</div>
            <div>
              <div className="section-label">The ICP Map</div>
              <div className="fw-name">Who we sell to — and who we refuse.</div>
              <p className="fw-desc">Three tiers. Five buying-committee roles. A weekly trigger sweep. Everything in frameworks 01–07 converges here: this is where strategy becomes pipeline.</p>
            </div>
            <div className="fw-tag">Framework 08</div>
          </div>

          <div className="tier-grid">
            <div className="tier t1">
              <div className="tier-label">Tier 01 &nbsp;//&nbsp; Bullseye — Start Here</div>
              <div className="tier-name">Semi + Pharma. Fast deal velocity. High budget.</div>
              <p className="tier-body">Semiconductors &amp; electronics manufacturing • pharmaceuticals &amp; biotech. $50M+ revenue. 10+ operators in a control room. Has SCADA, DCS, PLC, or historian. Digital mandate from CDO or VP Ops. Compliance pressure (FDA, ISO).</p>
              <div className="tier-meta">
                <div className="tier-meta-row"><span>Priority</span><span>⭐ Tier 1 — Start Here</span></div>
                <div className="tier-meta-row"><span>Deal velocity</span><span>Fast</span></div>
                <div className="tier-meta-row"><span>Deal shape</span><span>$300K–$1.5M</span></div>
              </div>
            </div>
            <div className="tier t2">
              <div className="tier-label">Tier 02 &nbsp;//&nbsp; Stretch</div>
              <div className="tier-name">Energy + Specialty Chem + High-mix Auto + O&amp;G.</div>
              <p className="tier-body">Power generation &amp; distribution • specialty chemicals • high-mix automotive &amp; tier-1 suppliers • oil &amp; gas (M&amp;A or digital-transformation-driven). Plant-GM or VP Ops-led buying. Alarm reduction or yield copilot as the entry.</p>
              <div className="tier-meta">
                <div className="tier-meta-row"><span>Priority</span><span>★ Tier 2 — Stretch</span></div>
                <div className="tier-meta-row"><span>Deal velocity</span><span>Medium</span></div>
                <div className="tier-meta-row"><span>Deal shape</span><span>$150K–$600K</span></div>
              </div>
            </div>
            <div className="tier t3">
              <div className="tier-label">Tier 03 &nbsp;//&nbsp; Disqualify</div>
              <div className="tier-name">Do NOT chase. Route to partner.</div>
              <p className="tier-body">Single-plant &lt;$50M revenue. Commodity discrete parts. Regulated utilities without a digital mandate. Procurement-led RFPs with no exec sponsor. &lt;10 operators in the control room (low alarm-volume environments).</p>
              <div className="tier-meta">
                <div className="tier-meta-row"><span>Policy</span><span>Auto-disqualify</span></div>
                <div className="tier-meta-row"><span>Route</span><span>Partner channel</span></div>
                <div className="tier-meta-row"><span>FDE impact</span><span>Protect capacity</span></div>
              </div>
            </div>
          </div>

          <p className="section-label" style={{ marginTop: 64, marginBottom: 18 }}>The Buying Committee &nbsp;//&nbsp; 5 roles, 5 hooks</p>
          <div className="persona-band">
            <div className="persona">
              <div className="persona-role">Economic Buyer</div>
              <div className="persona-title">COO / VP Ops / CDO</div>
              <div className="persona-hook">"Cut downtime costs by surfacing the right alarms at the right time — before they become crises."</div>
            </div>
            <div className="persona">
              <div className="persona-role">Technical Champion</div>
              <div className="persona-title">OT/IT Architect</div>
              <div className="persona-hook">"Deploys alongside your existing SCADA and historian — no rip and replace, full OT protocol support."</div>
            </div>
            <div className="persona">
              <div className="persona-role">Data Sponsor</div>
              <div className="persona-title">VP Data / Lakehouse Owner</div>
              <div className="persona-hook">"We land inside your Snowflake / Databricks and return an ISA-95 ontology you keep."</div>
            </div>
            <div className="persona">
              <div className="persona-role">End User</div>
              <div className="persona-title">Reliability / Process Engineer</div>
              <div className="persona-hook">"AI-prioritized incidents mean your team focuses on what matters — not noise. 55% alarm reduction on Day 90."</div>
            </div>
            <div className="persona">
              <div className="persona-role">Blocker</div>
              <div className="persona-title">CISO + Plant GM</div>
              <div className="persona-hook">"Read-only at the OT boundary, in your VPC. Red-team report attached."</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FRAMEWORK 09 — AI-AMPLIFIED GTM */}
      <section className="block" id="f9">
        <div className="container">
          <div className="fw-head">
            <div className="fw-num">09</div>
            <div>
              <div className="section-label">AI-Amplified GTM</div>
              <div className="fw-name">Five agents that scale the motion without scaling headcount.</div>
              <p className="fw-desc">Selling AI means running on AI. Five specialized GTM agents multiply what a small sales + marketing org can ship — signal monitoring, personalized outreach, content reuse, meeting prep, and partner activation.</p>
            </div>
            <div className="fw-tag">Framework 09</div>
          </div>

          <div className="agent-grid">
            <div className="agent">
              <div className="agent-idx">Agent 01</div>
              <div className="agent-name">Account Signal Monitor</div>
              <div className="agent-body">Tracks hiring, news, funding, digital-transformation announcements, and intent signals across ICP accounts in real time. Flags trigger events within hours, not weeks.</div>
              <div className="agent-meta">
                <div className="agent-meta-row"><span>Input</span><span>ICP list + trigger taxonomy</span></div>
                <div className="agent-meta-row"><span>Output</span><span>Weekly priority account digest</span></div>
              </div>
            </div>
            <div className="agent">
              <div className="agent-idx">Agent 02</div>
              <div className="agent-name">Personalized Outreach</div>
              <div className="agent-body">Drafts hyper-personalized outbound emails and LinkedIn messages at scale — referencing the account's plant operations, recent news, or digitalization priorities. Approved by BD before sending.</div>
              <div className="agent-meta">
                <div className="agent-meta-row"><span>Input</span><span>Account + contact context</span></div>
                <div className="agent-meta-row"><span>Output</span><span>Sequenced outbound drafts</span></div>
              </div>
            </div>
            <div className="agent">
              <div className="agent-idx">Agent 03</div>
              <div className="agent-name">Content Repurposing</div>
              <div className="agent-body">Turns one source (essay, podcast ep, customer win) into blog post, newsletter item, LinkedIn thread, sales collateral, and webinar abstract. One authored asset → five distributed ones.</div>
              <div className="agent-meta">
                <div className="agent-meta-row"><span>Input</span><span>1 long-form asset</span></div>
                <div className="agent-meta-row"><span>Output</span><span>5+ channel-specific pieces</span></div>
              </div>
            </div>
            <div className="agent">
              <div className="agent-idx">Agent 04</div>
              <div className="agent-name">Meeting &amp; Event Prep</div>
              <div className="agent-body">Briefs Henrik, Jeff, and the FDE team before every call with stakeholder research, plant-level specifics, likely objections, and persona-matched talking points. Pre-event dossiers for conferences and dinners.</div>
              <div className="agent-meta">
                <div className="agent-meta-row"><span>Input</span><span>Calendar + attendee list</span></div>
                <div className="agent-meta-row"><span>Output</span><span>1-page pre-call brief</span></div>
              </div>
            </div>
            <div className="agent">
              <div className="agent-idx">Agent 05</div>
              <div className="agent-name">Partner Activation</div>
              <div className="agent-body">Surfaces co-sell opportunities across SCADA vendors, integrators, and consultancies. Drafts partner outreach, joint-pitch templates, and account-mapping requests. Keeps the ecosystem warm.</div>
              <div className="agent-meta">
                <div className="agent-meta-row"><span>Input</span><span>Partner list + ICP overlap</span></div>
                <div className="agent-meta-row"><span>Output</span><span>Co-sell briefs + outreach</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* NORTH STAR / SYNTHESIS */}
      <section className="north" id="north">
        <div className="container">
          <div className="north-eyebrow">—&nbsp; Synthesis &nbsp;//&nbsp; The North Star &nbsp;—</div>
          <h2 className="north-title">One category to own, nine frameworks, <strong>one system.</strong></h2>
          <p className="north-sub">The market wants a purpose-built AI layer for physical operations — and nobody has claimed the category. Formant is the only company positioned to define, own, and defend it. The nine frameworks converge on three operating principles.</p>

          <div className="north-principles">
            <div className="north-card">
              <div className="north-card-num">Principle 01</div>
              <div className="north-card-title">Own the category before anyone else.</div>
              <div className="north-card-body">Brand does the heavy lifting before the sales team arrives. Define "AI incident management for physical operations" in every touchpoint — website, podcast, analyst briefings, content — until the vocabulary belongs to us.</div>
            </div>
            <div className="north-card">
              <div className="north-card-num">Principle 02</div>
              <div className="north-card-title">Outcome first, platform second.</div>
              <div className="north-card-body">Never sell architecture to an economic buyer. Sell alarm reduction, downtime prevented, incidents resolved, $ saved. The platform sells itself at expansion — when the outcome is already real.</div>
            </div>
            <div className="north-card">
              <div className="north-card-num">Principle 03</div>
              <div className="north-card-title">FDE leverage, amplified by AI.</div>
              <div className="north-card-body">Every FDE engagement produces reusable ontology artifacts — each next deployment is 35%, then 55%, then 70% cheaper. Five AI GTM agents multiply the sales + marketing motion. Services is how we start; platform + agents is what we become.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="nav-logo-mark" style={{ width: 40, height: 40 }}>
                <FormantLogoMark />
              </div>
              FORMANT
            </div>
            <p className="footer-tag">To build an autonomous future with humans at the center. AI incident management for the world's plants.</p>
          </div>
          <div className="footer-meta">
            <div>Strategy System Infographic</div>
            <div>Version 2026.2</div>
            <div className="amber">Internal &amp; Confidential</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
