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
          <li><a href="#north">Synthesis</a></li>
        </ul>
        <div className="nav-meta">Strategy System / 2026</div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">Strategy System &nbsp;//&nbsp; 8 Frameworks, One Architecture</div>
          <h1 className="hero-title">The Formant <strong>Strategy</strong> Map</h1>
          <p className="hero-subtitle">From market to ICP to scale — a single reference architecture for how Formant wins the industrial AI category. Synthesized from the eight brand frameworks.</p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-label">TAM Horizon</div>
              <div className="hero-stat-value">$180B+</div>
              <div className="hero-stat-sub">Industrial AI + digital ops by 2030.</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Bullseye ARR</div>
              <div className="hero-stat-value">$100M</div>
              <div className="hero-stat-sub">ARR in 36 months — from &lt;$5M today.</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Alarm Outcome</div>
              <div className="hero-stat-value">55%</div>
              <div className="hero-stat-sub">Alarm reduction on Day 90 — proven.</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Wedge Deal</div>
              <div className="hero-stat-value">$1M</div>
              <div className="hero-stat-sub">FDE-led paid pilot, 12 weeks to outcome.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* THESIS */}
      <section className="thesis" id="thesis">
        <div className="container">
          <blockquote>
            Formant AI is the Palantir <em>inversion</em>: we compress eighteen months of Foundry-style deployment into a twelve-week paid pilot, and the ontology, pipelines, and platform that exist at the end are <strong style={{ color: 'var(--sm-horizon-glow)', fontWeight: 600 }}>yours, not ours</strong>.
          </blockquote>
          <cite>— The One-Sentence Thesis &nbsp;//&nbsp; distilled from all 8 frameworks</cite>
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
              <div className="fw-name">Where the industrial AI dollar actually lives.</div>
              <p className="fw-desc">Industrial AI is a horizon market — not a single line on a CapEx budget. TAM is huge and diffuse; SAM is where our Metaphysics ontology compounds; SOM is the reachable 120 Tier-1 accounts with a live digital mandate.</p>
            </div>
            <div className="fw-tag">Framework 01</div>
          </div>

          <div className="grid-3" style={{ marginBottom: 40 }}>
            <div className="card stat-card">
              <div className="stat-label">TAM — Total addressable</div>
              <div className="stat-value">$180B</div>
              <div className="stat-sub">Global industrial AI + digital ops + MES/historian modernization by 2030. All verticals, all geographies.</div>
            </div>
            <div className="card stat-card">
              <div className="stat-label">SAM — Serviceable</div>
              <div className="stat-value">$42B</div>
              <div className="stat-sub">High-mix, high-complexity manufacturing in North America + Western Europe + Asia-Pacific (semi, pharma, specialty chem, high-mix auto).</div>
            </div>
            <div className="card stat-card">
              <div className="stat-label">SOM — Serviceable obtainable</div>
              <div className="stat-value">$3.2B</div>
              <div className="stat-sub">~120 Tier-1 accounts with an active CDO/VP-Ops mandate and a stalled Foundry-style initiative. Our 36-month beachhead.</div>
            </div>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-eyebrow">Capital Flows</div>
              <div className="card-title">The Palantir inversion is underwritten</div>
              <p className="card-body">Tiger, a16z, Greenoaks, Index and the sovereign pools are all repositioning around "industrial-AI applications" vs. "general-purpose models." FDE-led platforms with short time-to-outcome are the thesis.</p>
            </div>
            <div className="card">
              <div className="card-eyebrow">Tailwinds</div>
              <div className="card-title">CapEx reshoring + labor attrition</div>
              <p className="card-body">$1T in US + EU manufacturing reshoring is unfolding right as skilled process/reliability engineers retire. The next plant manager will inherit a fleet with no one left who knows how the alarms were tuned.</p>
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
                <div className="prob-name">Process knowledge retiring with the workforce</div>
                <div className="prob-sub">The engineer who tuned the line 22 years ago is gone. Their "instinct" was never written down.</div>
              </div>
              <div className="prob-bar"><div className="prob-bar-fill" style={{ width: '91%' }}></div></div>
              <div className="prob-score">9.1 / 10</div>
            </div>
            <div className="prob-row">
              <div className="prob-rank">03</div>
              <div className="prob-text">
                <div className="prob-name">Yield excursions without clear root cause</div>
                <div className="prob-sub">Weeks of investigation, $10M+ in lost batches, a post-mortem that never propagates.</div>
              </div>
              <div className="prob-bar"><div className="prob-bar-fill" style={{ width: '87%' }}></div></div>
              <div className="prob-score">8.7 / 10</div>
            </div>
            <div className="prob-row">
              <div className="prob-rank">04</div>
              <div className="prob-text">
                <div className="prob-name">Foundry-style platforms that never leave the pilot</div>
                <div className="prob-sub">18 months in, one site live, the board is restless, the CDO's job is on the line.</div>
              </div>
              <div className="prob-bar"><div className="prob-bar-fill" style={{ width: '82%' }}></div></div>
              <div className="prob-score">8.2 / 10</div>
            </div>
            <div className="prob-row">
              <div className="prob-rank">05</div>
              <div className="prob-text">
                <div className="prob-name">Fragmented data across historian + MES + SCADA + lakehouse</div>
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
              <p className="fw-desc">One offer, three lanes. Every Tier-1 conversation funnels into the same 12-week wedge that converts into Horizon-2 platform revenue within 9–12 months.</p>
            </div>
            <div className="fw-tag">Framework 03</div>
          </div>

          <div className="offer-wrap">
            <div>
              <div className="offer-headline">The <span>12-Week Industrial AI Wedge</span> — FDE-led, outcome-anchored, yours to keep.</div>
              <p className="offer-sub">One pod. One plant. One measurable outcome — alarm reduction, yield-excursion copilot, or deviation triage. We bring the Metaphysics ontology, the FDE team, and the Judge. You keep everything we build.</p>
              <ul className="offer-list">
                <li>Week 1–2 — Architecture Audit: ontology draft, data-map, pilot SOW signed.</li>
                <li>Week 3–6 — FDE pod on-site, historian + MES + P&amp;ID ingestion, copilot live.</li>
                <li>Week 7–10 — In-plant validation with process + reliability engineers.</li>
                <li>Week 11–12 — Outcome-case readout: alarm reduction %, MTTR, $ impact.</li>
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
                <div className="offer-stat-sub">Horizon-2 platform deal.</div>
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
              <p className="fw-desc">No paid demand gen on day one. A 7–8-figure, FDE-led platform sale into a 5-person buying committee rewards compounding channels — founder-led outbound, analyst coverage, customer-as-media — not programmatic.</p>
            </div>
            <div className="fw-tag">Framework 04</div>
          </div>

          <div className="channel-stack">
            <div className="channel-row">
              <div className="channel-num">01</div>
              <div>
                <div className="channel-name">Founder-led executive outbound</div>
                <div className="channel-desc">CEO + Head of FDE run a weekly 30-account push into Tier-1 VP Ops / CDO / COO. Anchored on the Palantir Inversion thesis.</div>
              </div>
              <div>
                <div className="channel-kpi-label">Leading KPI</div>
                <div className="channel-kpi-value">10 Tier-1 first meetings / month</div>
              </div>
              <div>
                <div className="channel-kpi-label">Investment</div>
                <div className="channel-kpi-value">2 FTEs · $10K ops · no paid</div>
              </div>
            </div>
            <div className="channel-row">
              <div className="channel-num">02</div>
              <div>
                <div className="channel-name">Vertical conferences &amp; private dinners</div>
                <div className="channel-desc">Anchor 4 events/yr: SEMICON West, ISPE Annual, IndustryWeek M&amp;T, ARC Forum. Host 12-person dinners. Publish joint briefs.</div>
              </div>
              <div>
                <div className="channel-kpi-label">Leading KPI</div>
                <div className="channel-kpi-value">8–12 qualified convos / event</div>
              </div>
              <div>
                <div className="channel-kpi-label">Investment</div>
                <div className="channel-kpi-value">~$60K / event</div>
              </div>
            </div>
            <div className="channel-row">
              <div className="channel-num">03</div>
              <div>
                <div className="channel-name">Analyst &amp; thought-leader coverage</div>
                <div className="channel-desc">Brief 3 analysts/qtr (Gartner, ARC, LNS, Forrester). Co-publish a quarterly POV with a Tier-1 customer. CEO LinkedIn essays.</div>
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
              <div className="channel-num">04</div>
              <div>
                <div className="channel-name">SI + hyperscaler partner channel</div>
                <div className="channel-desc">Deloitte / Accenture / Kalypso + AWS Industrial / Snowflake Mfg. They bring relationships; we bring FDE leverage + ontology.</div>
              </div>
              <div>
                <div className="channel-kpi-label">Leading KPI</div>
                <div className="channel-kpi-value">25% of pipeline partner-sourced (mo 12)</div>
              </div>
              <div>
                <div className="channel-kpi-label">Investment</div>
                <div className="channel-kpi-value">1 partner lead · 20% rev-share</div>
              </div>
            </div>
            <div className="channel-row">
              <div className="channel-num">05</div>
              <div>
                <div className="channel-name">Customer-as-media flywheel</div>
                <div className="channel-desc">Every live customer → 90-day outcome brief + video + webinar. The asset that makes channels 1–4 compound. Gate nothing.</div>
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
              <div className="hook-label">Hook 01 &nbsp;//&nbsp; The Inversion</div>
              <div className="hook-text">"Your Foundry pilot is 18 months old, live at one site, and the board meeting is on Thursday. We ship the same outcome in 12 weeks — and you own the platform."</div>
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
              <div className="hook-label">Hook 04 &nbsp;//&nbsp; The Savings</div>
              <div className="hook-text">"$12–13M in annualized savings on a single plant. 55% alarm reduction on Day 90. The outcome brief is two pages. Want it?"</div>
            </div>
          </div>

          <div className="grid-4" style={{ marginTop: 40 }}>
            <div className="card">
              <div className="card-eyebrow">Format</div>
              <div className="card-title">LinkedIn long-form</div>
              <p className="card-body">CEO essay, 900–1,400 words. Anchored on a real customer outcome. One per two weeks. This is the flagship asset.</p>
            </div>
            <div className="card">
              <div className="card-eyebrow">Format</div>
              <div className="card-title">2-page outcome brief</div>
              <p className="card-body">Customer-specific. Quantified. PDF + landing page. Gated only by "who are you." Distributed into every AE conversation.</p>
            </div>
            <div className="card">
              <div className="card-eyebrow">Format</div>
              <div className="card-title">3-minute video loop</div>
              <p className="card-body">Atmospheric, mission-control aesthetic. Runs in executive briefings, on the homepage, at conferences. Zero voiceover.</p>
            </div>
            <div className="card">
              <div className="card-eyebrow">Format</div>
              <div className="card-title">Joint POV with analyst</div>
              <p className="card-body">Gartner / ARC / LNS co-authored on the industrial-AI platform thesis. One per quarter. Permission-structure content.</p>
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
              <div className="fw-name">Five competitors. One positioning gap.</div>
              <p className="fw-desc">None of them ship the Palantir Inversion. Each has a defensible strength and a systemic weakness Formant can exploit.</p>
            </div>
            <div className="fw-tag">Framework 06</div>
          </div>

          <div className="comp-matrix">
            <div className="comp-col">
              <div className="comp-name">Palantir Foundry for Manufacturing</div>
              <div className="comp-block"><span className="comp-block-label strength">Strength</span><span className="comp-block-text mute">FDE model at scale. Defense-grade security posture.</span></div>
              <div className="comp-block"><span className="comp-block-label weak">Weakness</span><span className="comp-block-text">18-month deployments. Customer never owns the platform. "Rented Palantir" fatigue.</span></div>
              <div className="comp-block"><span className="comp-block-label beat">Formant wins by</span><span className="comp-block-text">Shipping Foundry-equivalent in 12 weeks — and handing the ontology to the customer.</span></div>
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
            <div className="comp-col">
              <div className="comp-name">Legacy MES / historian stacks</div>
              <div className="comp-block"><span className="comp-block-label strength">Strength</span><span className="comp-block-text mute">Installed. Trusted by OT. Regulatory-safe.</span></div>
              <div className="comp-block"><span className="comp-block-label weak">Weakness</span><span className="comp-block-text">Zero AI compounding. No ontology. Losing the CDO's budget to anyone credible.</span></div>
              <div className="comp-block"><span className="comp-block-label beat">Formant wins by</span><span className="comp-block-text">Riding on top of them — read-only at the OT boundary — and delivering the AI layer they never will.</span></div>
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
              <div className="fw-name">From &lt;$5M ARR to $100M ARR in 36 months.</div>
              <p className="fw-desc">Four horizons. Each one converts FDE-led services into platform revenue at a progressively higher reuse ratio, until the system runs on its own taxonomy and the services team becomes leverage, not bottleneck.</p>
            </div>
            <div className="fw-tag">Framework 07</div>
          </div>

          <div className="horizon-track">
            <div className="horizon-cell">
              <div className="horizon-idx">Horizon 01 &nbsp;//&nbsp; 0–6 mo</div>
              <div className="horizon-name">Foundation</div>
              <div className="horizon-span">Months 0 — 6</div>
              <div className="horizon-body">3 lighthouse accounts closed. FDE pod v1 formed. Metaphysics ontology v1 shipped. Alarm-reduction outcome proven at one semi, one pharma.</div>
              <div className="horizon-metrics">
                <div className="horizon-metric-row"><span>ARR</span><span>$5–8M</span></div>
                <div className="horizon-metric-row"><span>Customers</span><span>3–5</span></div>
                <div className="horizon-metric-row"><span>Team</span><span>25–40</span></div>
                <div className="horizon-metric-row"><span>FDE reuse</span><span>15%</span></div>
              </div>
            </div>
            <div className="horizon-cell">
              <div className="horizon-idx">Horizon 02 &nbsp;//&nbsp; 6–12 mo</div>
              <div className="horizon-name">Repeatability</div>
              <div className="horizon-span">Months 6 — 12</div>
              <div className="horizon-body">Second FDE pod. Vertical playbooks for semi + pharma codified. First 3 outcome-case assets. Partner motion seeded with 2 SIs + 1 hyperscaler.</div>
              <div className="horizon-metrics">
                <div className="horizon-metric-row"><span>ARR</span><span>$15–22M</span></div>
                <div className="horizon-metric-row"><span>Customers</span><span>10–14</span></div>
                <div className="horizon-metric-row"><span>Team</span><span>60–80</span></div>
                <div className="horizon-metric-row"><span>FDE reuse</span><span>35%</span></div>
              </div>
            </div>
            <div className="horizon-cell">
              <div className="horizon-idx">Horizon 03 &nbsp;//&nbsp; 12–24 mo</div>
              <div className="horizon-name">Leverage</div>
              <div className="horizon-span">Months 12 — 24</div>
              <div className="horizon-body">Self-serve platform tier. Ontology templates per vertical. Partner-sourced pipeline hits 25%. FDE-to-AE ratio inverts. First international accounts.</div>
              <div className="horizon-metrics">
                <div className="horizon-metric-row"><span>ARR</span><span>$45–55M</span></div>
                <div className="horizon-metric-row"><span>Customers</span><span>28–38</span></div>
                <div className="horizon-metric-row"><span>Team</span><span>140–180</span></div>
                <div className="horizon-metric-row"><span>FDE reuse</span><span>55%</span></div>
              </div>
            </div>
            <div className="horizon-cell">
              <div className="horizon-idx">Horizon 04 &nbsp;//&nbsp; 24–36 mo</div>
              <div className="horizon-name">Platform Flywheel</div>
              <div className="horizon-span">Months 24 — 36</div>
              <div className="horizon-body">Ontology reuse compounds across the fleet. New accounts ramp in weeks, not months. FDE team is product leverage, not gating capacity. $100M ARR in reach.</div>
              <div className="horizon-metrics">
                <div className="horizon-metric-row"><span>ARR</span><span>$100M+</span></div>
                <div className="horizon-metric-row"><span>Customers</span><span>60+</span></div>
                <div className="horizon-metric-row"><span>Team</span><span>280–350</span></div>
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
              <div className="tier-label">Tier 01 &nbsp;//&nbsp; Bullseye</div>
              <div className="tier-name">Chase hard. Named-account. $1M+ wedges.</div>
              <p className="tier-body">$500M–$5B high-mix manufacturers in semiconductor, advanced pharma/bio, specialty chemicals, high-mix automotive. 3–20 plants. Digital mandate from a newly-hired CDO or VP Ops.</p>
              <div className="tier-meta">
                <div className="tier-meta-row"><span>Account count</span><span>~120</span></div>
                <div className="tier-meta-row"><span>Conversion target</span><span>25–30% to pilot in 90d</span></div>
                <div className="tier-meta-row"><span>Deal shape</span><span>$600K–$1.5M</span></div>
              </div>
            </div>
            <div className="tier t2">
              <div className="tier-label">Tier 02 &nbsp;//&nbsp; Stretch</div>
              <div className="tier-name">Land opportunistically. Sell the wedge.</div>
              <p className="tier-body">F&amp;B ($1B+), industrial conglomerates, CPG with continuous lines, specialty materials, battery / EV. Plant-GM-led buying. Alarm reduction or yield copilot as the entry.</p>
              <div className="tier-meta">
                <div className="tier-meta-row"><span>Account count</span><span>~200</span></div>
                <div className="tier-meta-row"><span>Conversion target</span><span>10–12% to wedge in 120d</span></div>
                <div className="tier-meta-row"><span>Deal shape</span><span>$300K–$800K</span></div>
              </div>
            </div>
            <div className="tier t3">
              <div className="tier-label">Tier 03 &nbsp;//&nbsp; Disqualify</div>
              <div className="tier-name">Do NOT chase. Route to partner.</div>
              <p className="tier-body">Single-plant &lt;$100M. Commodity discrete parts. Regulated utilities. Upstream O&amp;G unless M&amp;A-driven. Procurement-led RFPs with no exec sponsor.</p>
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
              <div className="persona-hook">"We compress 18 months of Foundry into 12 weeks — and you own the platform."</div>
            </div>
            <div className="persona">
              <div className="persona-role">Technical Champion</div>
              <div className="persona-title">VP Manufacturing IT</div>
              <div className="persona-hook">"Metaphysics ontology, your team, working pilot in 12 weeks. You keep the ontology."</div>
            </div>
            <div className="persona">
              <div className="persona-role">Data Sponsor</div>
              <div className="persona-title">VP Data / Lakehouse Owner</div>
              <div className="persona-hook">"We land inside your Snowflake / Databricks and return an ISA-95 ontology."</div>
            </div>
            <div className="persona">
              <div className="persona-role">End User</div>
              <div className="persona-title">Process / Reliability Eng.</div>
              <div className="persona-hook">"55% alarm reduction on Day 90. Copilot cites your P&amp;IDs back to you."</div>
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

      {/* NORTH STAR / SYNTHESIS */}
      <section className="north" id="north">
        <div className="container">
          <div className="north-eyebrow">—&nbsp; Synthesis &nbsp;//&nbsp; The North Star &nbsp;—</div>
          <h2 className="north-title">One thesis, eight frameworks, <strong>one system.</strong></h2>
          <p className="north-sub">The market wants what Palantir Foundry promised — but not from Palantir. Formant is the only company positioned to ship that outcome in 12 weeks and hand the platform to the customer. The eight frameworks converge on three operating principles.</p>

          <div className="north-principles">
            <div className="north-card">
              <div className="north-card-num">Principle 01</div>
              <div className="north-card-title">FDE leverage, not FDE scarcity.</div>
              <div className="north-card-body">Every FDE engagement is designed to produce reusable ontology artifacts — so the next deployment is 35%, then 55%, then 70% cheaper. Services is how we start; platform is what we become.</div>
            </div>
            <div className="north-card">
              <div className="north-card-num">Principle 02</div>
              <div className="north-card-title">Outcome first, platform second.</div>
              <div className="north-card-body">Never sell architecture to an economic buyer. Sell alarm reduction, yield, deviation triage, $ saved. The platform sells itself at expansion — when the outcome is already real.</div>
            </div>
            <div className="north-card">
              <div className="north-card-num">Principle 03</div>
              <div className="north-card-title">Inversion, not imitation.</div>
              <div className="north-card-body">Do not try to out-Palantir Palantir. Invert them: 12 weeks vs. 18 months, ontology owned vs. rented, AI-native vs. AI-added. Every channel, every asset, every hook reinforces the inversion.</div>
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
            <p className="footer-tag">To build an autonomous future with humans at the center. Physical-AI infrastructure for the world's plants.</p>
          </div>
          <div className="footer-meta">
            <div>Strategy System Infographic</div>
            <div>Version 2026.1</div>
            <div className="amber">Internal &amp; Confidential</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
