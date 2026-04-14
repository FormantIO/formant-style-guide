import { useEffect } from 'react'
import './App.css'

function App() {
  // Fade-up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, Number(delay))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up').forEach((el, i) => {
      el.dataset.delay = (i % 4) * 80
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Video hover play
  useEffect(() => {
    document.querySelectorAll('.video-item video').forEach((v) => {
      v.addEventListener('mouseenter', () => v.play())
    })
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          <img src="formant-logo-white.svg" alt="Formant" />
        </a>
        <ul className="nav-links">
          <li><a href="#brand-story">Story</a></li>
          <li><a href="#color-palette">Color</a></li>
          <li><a href="#typography">Type</a></li>
          <li><a href="#voice">Voice</a></li>
          <li><a href="#motion">Motion</a></li>
          <li><a href="#ui-patterns">UI</a></li>
          <li><a href="#architecture">System</a></li>
          <li><a href="#icons">Icons</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="hero-banner.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">Brand Style Guide — 2026</p>
          <h1 className="hero-title">FORMANT</h1>
          <p className="hero-subtitle">The neutral convener of the Physical AI ecosystem. From operational chaos to systemic command.</p>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      {/* BRAND STORY */}
      <section id="brand-story">
        <div className="container">
          <p className="section-label fade-up">01 — Brand Story</p>
          <h2 className="section-title fade-up">The Architecture<br />of Clarity</h2>
          <p className="section-desc fade-up">Formant exists at the edge of perception—where noise becomes signal, and signal becomes action. We build the intelligence layer that gives industrial operations a memory, a voice, and a future.</p>

          <div className="story-grid">
            <div className="story-card fade-up">
              <h3>The Problem We Solve</h3>
              <p>Factories generate thousands of alarms per shift—but most of that signal is dark. Unstructured. Invisible. Worse: the operators who know how to read that noise are retiring, taking decades of irreplaceable knowledge with them. This is not a data problem. It is a visibility crisis.</p>
            </div>
            <div className="story-card fade-up">
              <h3>What We Build</h3>
              <p>Formant Metaphysics is a four-layer intelligence system that captures, structures, and compounds operational knowledge. Not a dashboard—a digital twin that finally speaks human. Every investigation compounds the system. Every operator action makes it smarter.</p>
            </div>
            <div className="story-card fade-up">
              <h3>Who We Are For</h3>
              <p>For the executive who needs one truth. For the engineer who wants their work to compound into something permanent. For the industrial AI market that needs a foundation—not just another tool in the stack, but the operating system the entire stack sits on.</p>
            </div>
            <div className="story-card fade-up">
              <h3>The North Star</h3>
              <p>The future of industrial operations shouldn't be complicated. It should be cinematic. A CEO feels the pulse of the floor. An alarm fires at 3am. No human wakes up. The system has already resolved it—because it has seen this pattern eight hundred times before.</p>
            </div>
          </div>

          <div className="manifesto-block fade-up">
            <blockquote>
              "Taste is the moat in an AI-driven world. In a world drowning in technically impressive content, what endures is judgment, curiosity, and resonance."
            </blockquote>
            <cite>Formant Marketing Manifesto — 2026</cite>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* COLOR PALETTE */}
      <section id="color-palette">
        <div className="container">
          <p className="section-label fade-up">02 — Color System</p>
          <h2 className="section-title fade-up">The Palette</h2>
          <p className="section-desc fade-up">Built from the atmosphere itself. Every color references a quality of light, terrain, or industrial precision—grounding the brand in the physical world it serves.</p>

          <div className="palette-group fade-up">
            <p className="palette-group-label">Primary Neutrals — 70–80% of Usage</p>
            <div className="palette-row">
              {[
                { bg: '#0A0F11', name: 'Deep Command', hex: '#0A0F11', usage: 'Backgrounds, base layer' },
                { bg: '#202428', name: 'Slate Mist', hex: '#202428', usage: 'Cards, secondary surfaces' },
                { bg: '#F2F3F4', name: 'Formant White', hex: '#F2F3F4', usage: 'Primary text, headlines', border: true },
                { bg: '#A3ABA9', name: 'System Neutral', hex: '#A3ABA9', usage: 'Body text, captions' },
              ].map((c) => (
                <div className="color-chip" key={c.hex}>
                  <div className="color-swatch" style={{ background: c.bg, ...(c.border ? { borderBottom: '1px solid rgba(0,0,0,0.08)' } : {}) }}></div>
                  <div className="color-info">
                    <div className="color-name">{c.name}</div>
                    <div className="color-hex">{c.hex}</div>
                    <div className="color-usage">{c.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="palette-group fade-up">
            <p className="palette-group-label">Atmospheric Accents — 40–60% of Usage</p>
            <div className="palette-row">
              {[
                { bg: '#4B5E53', name: 'Fog Green', hex: '#4B5E53', usage: 'Borders, dividers, muted accents' },
                { bg: '#2C4142', name: 'Ethereal Teal', hex: '#2C4142', usage: 'Active states, panels' },
                { bg: '#ACC3B3', name: 'Horizon Glow', hex: '#ACC3B3', usage: 'Primary CTAs, interactive elements' },
              ].map((c) => (
                <div className="color-chip" key={c.hex}>
                  <div className="color-swatch" style={{ background: c.bg }}></div>
                  <div className="color-info">
                    <div className="color-name">{c.name}</div>
                    <div className="color-hex">{c.hex}</div>
                    <div className="color-usage">{c.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="palette-group fade-up">
            <p className="palette-group-label">Functional UI Accents — Under 5% of Usage</p>
            <div className="palette-row">
              {[
                { bg: '#E8AB7F', name: 'Terminal Amber', hex: '#E8AB7F', usage: 'Warnings, eyebrow text, labels' },
                { bg: '#8B8CF4', name: 'Interface Iris', hex: '#8B8CF4', usage: 'AI states, system intelligence' },
              ].map((c) => (
                <div className="color-chip" key={c.hex}>
                  <div className="color-swatch" style={{ background: c.bg }}></div>
                  <div className="color-info">
                    <div className="color-name">{c.name}</div>
                    <div className="color-hex">{c.hex}</div>
                    <div className="color-usage">{c.usage}</div>
                  </div>
                </div>
              ))}
              <div className="color-chip" style={{ visibility: 'hidden' }}></div>
              <div className="color-chip" style={{ visibility: 'hidden' }}></div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* TYPOGRAPHY */}
      <section id="typography">
        <div className="container">
          <p className="section-label fade-up">03 — Typography</p>
          <h2 className="section-title fade-up">Type System</h2>
          <p className="section-desc fade-up">Three typefaces, each with a distinct role: Space Grotesk for command presence, Inter for precision and legibility, JetBrains Mono for machine-language and data.</p>

          <div className="type-grid fade-up">
            <div className="type-card">
              <p className="type-label">Display / Headlines</p>
              <div className="type-specimen-display">The fog of operations becomes clarity.</div>
              <div className="type-meta">
                <div className="type-meta-item"><span>Family</span><span>Space Grotesk</span></div>
                <div className="type-meta-item"><span>Weights</span><span>300, 500, 600, 700</span></div>
                <div className="type-meta-item"><span>Tracking</span><span>−0.02em to 0.08em</span></div>
                <div className="type-meta-item"><span>Use</span><span>Titles, hero, UI headings</span></div>
              </div>
            </div>
            <div className="type-card">
              <p className="type-label">Body / Interface</p>
              <div className="type-specimen-body">Our marketing is not a polished story about a finished future. It is an open, thoughtful, human record of building toward one. We build in public. We think in public. We learn in public.</div>
              <div className="type-meta">
                <div className="type-meta-item"><span>Family</span><span>Inter</span></div>
                <div className="type-meta-item"><span>Weights</span><span>300, 400, 500, 600</span></div>
                <div className="type-meta-item"><span>Leading</span><span>1.65 – 1.80</span></div>
                <div className="type-meta-item"><span>Use</span><span>Body text, labels, UI copy</span></div>
              </div>
            </div>
            <div className="type-card">
              <p className="type-label">Monospace / Data</p>
              <div className="type-specimen-mono">
                ALARM_CLASS → CRITICAL<br />
                CONFIDENCE → 0.94<br />
                STATUS → INVESTIGATING<br />
                PATTERN_ID → FM-0847
              </div>
              <div className="type-meta">
                <div className="type-meta-item"><span>Family</span><span>JetBrains Mono</span></div>
                <div className="type-meta-item"><span>Weights</span><span>300, 400, 500</span></div>
                <div className="type-meta-item"><span>Tracking</span><span>0.05em – 0.25em</span></div>
                <div className="type-meta-item"><span>Use</span><span>Data, labels, code, eyebrows</span></div>
              </div>
            </div>
            <div className="type-card">
              <p className="type-label">Hierarchy in Use</p>
              <div style={{ marginBottom: '10px' }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '11px', color: 'var(--terminal-amber)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>Eyebrow — JetBrains Mono 10px</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '26px', fontWeight: 600, color: 'var(--formant-white)', lineHeight: 1.2, marginBottom: '6px' }}>Headline — Space Grotesk 600</div>
                <div style={{ fontSize: '14px', color: 'var(--system-neutral)', lineHeight: 1.7, marginBottom: '10px' }}>Body copy — Inter 400, 14–16px. Clear, precise, and grounded in real-world constraints.</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: 'var(--fog-green)', letterSpacing: '0.1em' }}>CAPTION / META — MONO 10PX</div>
              </div>
            </div>
          </div>

          <div className="scale-row fade-up">
            <p className="scale-title">Type Scale — Space Grotesk</p>
            <div className="scale-item">
              <div className="scale-size-label">Display / 96px</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(32px,5vw,96px)', fontWeight: 300, color: 'var(--formant-white)', letterSpacing: '-0.02em', lineHeight: 1 }}>FORMANT</div>
            </div>
            <div className="scale-item">
              <div className="scale-size-label">H1 / 52px</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(24px,3vw,52px)', fontWeight: 500, color: 'var(--formant-white)', letterSpacing: '-0.02em' }}>The Visibility Crisis</div>
            </div>
            <div className="scale-item">
              <div className="scale-size-label">H2 / 32px</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(20px,2vw,32px)', fontWeight: 500, color: 'var(--formant-white)' }}>Intelligence that compounds</div>
            </div>
            <div className="scale-item">
              <div className="scale-size-label">H3 / 20px</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '20px', fontWeight: 600, color: 'var(--horizon-glow)' }}>Document Processing Layer</div>
            </div>
            <div className="scale-item">
              <div className="scale-size-label">Body / 16px</div>
              <div style={{ fontSize: '16px', color: 'var(--system-neutral)' }}>Precision in the physical world. Every alarm investigated builds the knowledge graph.</div>
            </div>
            <div className="scale-item">
              <div className="scale-size-label">Caption / 12px</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: 'var(--fog-green)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>System / Version 2.4 / Field Deployment</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* VOICE & TONE */}
      <section id="voice">
        <div className="container">
          <p className="section-label fade-up">04 — Voice &amp; Tone</p>
          <h2 className="section-title fade-up">The Brand Voice</h2>
          <p className="section-desc fade-up">Formant speaks from the intersection of digital intelligence and physical execution. Our voice is not about "automation theater" — it is about the transition from operational chaos to systemic command.</p>

          <div className="voice-principles">
            {[
              { num: '01 ——', title: 'Architectural Authority', body: 'We speak with the precision of an engineer and the vision of an architect. Short, punchy, declarative sentences. We avoid "hype" words in favor of technical accuracy — and treat our core entities (THE BRAIN, THE BODY, THE CONTEXT) as proper architectural constructs.' },
              { num: '02 ——', title: 'Cinematic Clarity', body: 'Much like our generative imagery, our language is atmospheric yet grounded. We use metaphors of light, mist, and horizons to describe the frontier of AI — framing the future of operations as a single, unified pulse felt by both CEOs and engineers.' },
              { num: '03 ——', title: 'The Human Oversight Nuance', body: 'We remain grounded in reality. True autonomy requires a "bounded" approach and reliable human-in-the-loop systems. We position Bounded Autonomy — not replacement — as the outcome. Operators are preserved, structured, and compounded.' },
              { num: '04 ——', title: 'Mission Control Tone', body: 'Calm, steady, and grounded. We do not perform urgency or certainty we haven\'t earned. We frame operational challenges as a "Visibility Crisis" — a loss of human meaning — not just a lack of data. The system provides command, not noise.' },
              { num: '05 ——', title: 'Compounding Intelligence', body: 'We position the system as an irreplaceable asset that learns over time. Success in the Physical AI ecosystem isn\'t hired — it\'s configured. One realization in the lab becomes a global standard across the fleet instantly.' },
              { num: '06 ——', title: 'Neutral Convener', body: 'Formant is the essential meeting point of frontier AI labs and hardware powerhouses. We speak with authority but without ego — not as a product, but as the operating system the entire Physical AI ecosystem sits on.' },
            ].map((v) => (
              <div className="voice-card fade-up" key={v.num}>
                <p className="voice-number">{v.num}</p>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>

          <div className="voice-do-dont fade-up">
            <div className="do-card">
              <p className="do-label">Do</p>
              {[
                ['Architectural Authority', 'Speak with the precision of an engineer and the vision of an architect.'],
                ['Mission Control Tone', 'Keep sentences short, punchy, and declarative.'],
                ['Power Pillars', 'Capitalize THE BRAIN, THE BODY, and THE CONTEXT as proper architectural entities.'],
                ['Functional Light', 'Use metaphors of light, mist, and horizons to describe navigating the AI frontier.'],
                ['Visibility Crisis', 'Frame operational challenges as a loss of human meaning, not just a lack of data.'],
                ['Compounding Intelligence', 'Position the system as an irreplaceable asset that learns over time.'],
                ['Cinematic Sentences', 'Describe the future of operations as a single, unified pulse felt by both CEOs and engineers.'],
              ].map(([b, t]) => (
                <div className="do-item" key={b}><strong>{b}:</strong> {t}</div>
              ))}
            </div>
            <div className="dont-card">
              <p className="dont-label">Don't</p>
              {[
                ['Avoid "Hype"', 'Never use generic marketing buzzwords or "automation theater."'],
                ['Avoid Passive Voice', 'Do not be vague or "fluffy." Remain calm, steady, and grounded.'],
                ['Avoid Traditional SaaS Vibes', 'Move away from "friendly" or bright aesthetics in favor of sophisticated mystery.'],
                ['Avoid "Scaling"', 'Do not use generic terms like "Scaling Up" when describing growth.'],
                ['Avoid "Dashboard"', 'Dashboards imply passive viewing. We provide THE INTERFACE for active command.'],
                ['Avoid "Replacement" Narratives', 'We do not replace operators; we structure, preserve, and compound their expertise.'],
                ['Avoid Technical Clutter', 'Don\'t get lost in the "math" of API calls; focus on the "meaning" of the business.'],
              ].map(([b, t]) => (
                <div className="dont-item" key={b}><strong>{b}:</strong> {t}</div>
              ))}
            </div>
          </div>

          {/* Brand Glossary */}
          <div className="fade-up" style={{ marginTop: '80px' }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: 'var(--terminal-amber)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--terminal-amber)' }}></span>
              Brand Glossary
            </p>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 500, color: 'var(--formant-white)', marginBottom: '12px', letterSpacing: '-0.02em' }}>The Formant Dictionary</h3>
            <p style={{ fontSize: '16px', color: 'var(--system-neutral)', marginBottom: '48px', maxWidth: '560px', lineHeight: 1.7 }}>Use this terminology to transform standard industry copy into the Formant "Systems Architect" voice. Every word choice is intentional.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { term: 'The Interface', badge: 'USE INSTEAD OF "DASHBOARD"', desc: 'Positions Formant as the essential meeting point of AI and robotics. Implies active command — not passive viewing.' },
                { term: 'Physical Agent', badge: 'USE INSTEAD OF "ROBOT"', desc: 'Elevates hardware to an intelligent entity. Signals that Formant operates at the intersection of AI cognition and physical execution.' },
                { term: 'Bounded Autonomy', badge: 'USE INSTEAD OF "AUTOMATION"', desc: 'Implies control, safety, and human-in-the-loop precision. Signals that we do not replace operators — we give them systemic command.' },
                { term: 'Algorithmic Propagation', badge: 'USE INSTEAD OF "ROBOT DEPLOYMENT"', desc: 'Focuses on the speed of intelligence rather than hardware logistics. One realization in the lab becomes a global standard across the fleet instantly.' },
                { term: 'Architecture Audit', badge: 'USE INSTEAD OF "DEMO" OR "SALES CALL"', desc: 'Positions the engagement as a diagnostic, not a pitch. Signals precision, expertise, and a consultative posture aligned with the builder audience.' },
                { term: 'Systemic Command', badge: 'DESIRED END-STATE FOR BUILDERS', desc: 'The aspiration we sell. The movement from operational chaos to a state of total command — where the system has already resolved the alarm before any human wakes up.' },
              ].map((g) => (
                <div key={g.term} style={{ background: 'var(--deep-command)', border: '1px solid rgba(163,171,169,0.1)', borderRadius: '4px', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '16px', fontWeight: 600, color: 'var(--horizon-glow)' }}>{g.term}</span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: 'var(--terminal-amber)', letterSpacing: '0.1em', border: '1px solid rgba(232,171,127,0.2)', padding: '3px 8px', borderRadius: '2px' }}>{g.badge}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--system-neutral)', lineHeight: 1.7 }}>{g.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Voice Samples */}
          <div className="fade-up" style={{ marginTop: '80px', background: 'var(--deep-command)', border: '1px solid rgba(163,171,169,0.1)', borderRadius: '4px', padding: '48px' }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: 'var(--terminal-amber)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '32px' }}>Voice Samples</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
              {[
                { label: 'The Hero Statement', quote: '"THE INTERFACE: A CURATED CONVERGENCE WHERE FRONTIER AI LABS MEET THE HARDWARE POWERHOUSES MOVING THE WORLD."' },
                { label: 'The Technical Insight', quote: '"SUCCESS IN THE PHYSICAL ECOSYSTEM ISN\'T HIRED — IT\'S CONFIGURED. ONE REALIZATION IN THE LAB BECOMES A GLOBAL STANDARD ACROSS THE FLEET INSTANTLY."' },
                { label: 'The Call to Action', quote: '"REQUEST AN ARCHITECTURE AUDIT. MOVE BEYOND THE FOG OF LEGACY OPERATIONS INTO A STATE OF TOTAL COMMAND."' },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: 'var(--system-neutral)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>{s.label}</p>
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '15px', fontWeight: 500, color: 'var(--formant-white)', lineHeight: 1.6 }}>{s.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* MOTION / VISUAL LIBRARY */}
      <section id="motion">
        <div className="container">
          <p className="section-label fade-up">05 — Visual Library</p>
          <h2 className="section-title fade-up">Visual Language</h2>
          <p className="section-desc fade-up">Desaturated cinematic landscapes. High-contrast command tones. The Generative Horizon represents the vast, untapped potential of the Physical AI frontier — where data is the primary light source, and every image implies structure, precision, and architectural stability.</p>

          {/* Visual Pillars */}
          <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginTop: '64px', marginBottom: '64px' }}>
            {[
              { label: 'Command Aesthetic', desc: 'Deep Command (#0A0F11) base simulates a mission-control environment where data is the primary light source.' },
              { label: 'Generative Horizon', desc: 'Desaturated cinematic landscapes (THE BRAIN, THE BODY, THE CONTEXT) representing the vast, untapped Physical AI frontier.' },
              { label: 'Systemic Grid', desc: 'System Neutral (#A0A8AB) lines and grids imply structure, precision, and architectural stability throughout the visual language.' },
              { label: 'Functional Glow', desc: 'High-vibrancy accents (Interface Iris #8B8CF4, Terminal Amber #E8A87F) used sparingly to guide the eye toward critical human oversight moments.' },
            ].map((p) => (
              <div key={p.label} style={{ background: 'var(--slate-mist)', border: '1px solid rgba(163,171,169,0.1)', borderRadius: '4px', padding: '24px 20px' }}>
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: 'var(--terminal-amber)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>{p.label}</p>
                <p style={{ fontSize: '13px', color: 'var(--system-neutral)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Video */}
          <div className="media-subsection-label fade-up">
            <span className="media-type-pill">▶ Video</span>
          </div>

          <div className="video-grid fade-up">
            <div className="video-item featured">
              <video autoPlay muted loop playsInline>
                <source src="9000-alerts.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay"></div>
              <div className="video-label">Hero — 9,000 Alerts a Day</div>
            </div>
            {[
              { src: '2.mp4', label: 'Loop 00' },
              { src: '0-2.mp4', label: 'Loop 01' },
              { src: '1-2.mp4', label: 'Loop 02' },
              { src: '1-3.mp4', label: 'Loop 03' },
              { src: '2-6.mp4', label: 'Loop 04' },
              { src: '0-5.mp4', label: 'Loop 05' },
              { src: '1-4.mp4', label: 'Loop 06' },
              { src: '1-5.mp4', label: 'Loop 07' },
              { src: '3-2.mp4', label: 'Loop 08' },
              { src: '3-5.mp4', label: 'Loop 09' },
            ].map((v) => (
              <div className="video-item" key={v.src}>
                <video autoPlay muted loop playsInline>
                  <source src={v.src} type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
                <div className="video-label">{v.label}</div>
              </div>
            ))}
          </div>

          {/* Image Prompt Guide */}
          <div className="fade-up" style={{ marginTop: '80px', background: 'var(--slate-mist)', border: '1px solid rgba(163,171,169,0.1)', borderRadius: '4px', padding: '40px 48px' }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: 'var(--terminal-amber)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '24px' }}>Generative Image Master Prompt</p>
            <p style={{ fontSize: '13px', color: 'var(--horizon-glow)', fontFamily: "'JetBrains Mono',monospace", lineHeight: 1.9, letterSpacing: '0.02em' }}>
              "Cinematic wide-angle shot of a desaturated, misty mountain range at twilight, representing the unknown territory of the AI frontier. The atmosphere is thick with fog and mystery. In the foreground, a minimalist, high-tech command console glows with Interface Iris (#8b8cf4) and Terminal Amber (#FFB800) light. The aesthetic is 'Systems Architect' — sophisticated, dark, and architectural. No clutter. The light source feels like a steady guide in a vast expanse. 8k resolution, Unreal Engine 5 render style."
            </p>
          </div>

          {/* Stills */}
          <div className="media-subsection-label fade-up" style={{ marginTop: '80px' }}>
            <span className="media-type-pill">⬜ Stills</span>
          </div>

          <p className="stills-category-label fade-up">Atmospheric &amp; Cinematic</p>
          <div className="stills-grid fade-up">
            <div className="still-item still-item--tall">
              <img src="still-01-lake-cabin.jpg" alt="Solitary figure by misty lake — amber light from cabin doorway" />
              <div className="video-overlay"></div>
              <div className="video-label">Figure — Lake &amp; Light</div>
            </div>
            <div className="still-item still-item--wide">
              <img src="still-02-mountain-signal.png" alt="Mountain peak with amber signal lines — Terminal Amber on Deep Command" />
              <div className="video-overlay"></div>
              <div className="video-label">Mountain — Signal Lines</div>
            </div>
            <div className="still-item">
              <img src="still-03-fog-arch-path.png" alt="Foggy mountain arch threshold and two figures on misty path" />
              <div className="video-overlay"></div>
              <div className="video-label">Threshold — Fog &amp; Path</div>
            </div>
          </div>

          <p className="stills-category-label fade-up" style={{ marginTop: '48px' }}>Operations &amp; Command</p>
          <div className="stills-grid fade-up">
            {[
              { src: 'still-04-workstation-fog-1.png', alt: 'Illuminated command workstation against dark foggy mountain landscape', label: 'Station — Mountain Fog I' },
              { src: 'still-05-workstation-fog-2.png', alt: 'Glowing workstation monitors in dense coastal fog — amber reflection', label: 'Station — Mountain Fog II' },
              { src: 'still-06-workstation-fog-3.png', alt: 'Remote command station with amber glow — vast foggy terrain', label: 'Station — Mountain Fog III' },
              { src: 'still-07-workstation-fog-4.png', alt: 'Operator at illuminated workstation against dark pyramid mountain', label: 'Station — Mountain Fog IV' },
            ].map((s) => (
              <div className="still-item" key={s.src}>
                <img src={s.src} alt={s.alt} />
                <div className="video-overlay"></div>
                <div className="video-label">{s.label}</div>
              </div>
            ))}
            <div className="still-item still-item--wide">
              <img src="still-08-command-room.png" alt="Curved command room with full monitor array — foggy mountain coast backdrop" />
              <div className="video-overlay"></div>
              <div className="video-label">Command Room — Active</div>
            </div>
          </div>

          <p className="stills-category-label fade-up" style={{ marginTop: '48px' }}>Product &amp; UI</p>
          <div className="stills-grid fade-up">
            <div className="still-item still-item--wide">
              <img src="still-09-interface-screens.png" alt="The Interface — data visualization screens in architectural space" />
              <div className="video-overlay"></div>
              <div className="video-label">The Interface — Command Screens</div>
            </div>
            <div className="still-item">
              <img src="still-10-ai-message.png" alt="Message AI — synthesizing Turbine 4 risk report from 20 years of maintenance data" />
              <div className="video-overlay"></div>
              <div className="video-label">UI — Message AI Interface</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* UI PATTERNS */}
      <section id="ui-patterns">
        <div className="container">
          <p className="section-label fade-up">06 — UI Components</p>
          <h2 className="section-title fade-up">Interface Patterns</h2>
          <p className="section-desc fade-up">Every interface element reflects the brand's precision and atmospheric depth. Minimal ornamentation. Maximum signal.</p>

          <div className="ui-components fade-up">
            <div>
              <p className="ui-section-title">Buttons</p>
              <div className="btn-showcase">
                <div><button className="btn btn-primary">Request Architecture Audit →</button></div>
                <div><button className="btn btn-secondary">Deploy Physical Agent</button></div>
                <div><button className="btn btn-ghost">View Documentation</button></div>
                <div><button className="btn btn-accent">Alert: Critical</button></div>
              </div>

              <br /><br />
              <p className="ui-section-title">Status Tags</p>
              <div className="tag-showcase">
                <span className="tag tag-mist">Resolved</span>
                <span className="tag tag-teal">Investigating</span>
                <span className="tag tag-amber">Warning</span>
                <span className="tag tag-iris">AI Active</span>
                <span className="tag tag-mist">Field Verified</span>
                <span className="tag tag-amber">9,000 Alarms</span>
              </div>
            </div>

            <div>
              <p className="ui-section-title">System Alerts</p>
              <div className="alert-showcase">
                <div className="alert alert-info">
                  <div className="alert-dot"></div>
                  <span>The Judge has classified this alarm as non-critical. Confidence: 94%.</span>
                </div>
                <div className="alert alert-warning">
                  <div className="alert-dot"></div>
                  <span>Pressure spike detected on Line 7. Upstream valve cycle correlation confirmed.</span>
                </div>
                <div className="alert alert-iris">
                  <div className="alert-dot"></div>
                  <span>Pattern FM-0847 recognized. AI resolving automatically—18th occurrence this month.</span>
                </div>
              </div>

              <br /><br />
              <p className="ui-section-title">Form Inputs</p>
              <div className="input-showcase">
                <div>
                  <label className="form-label">Plant Identifier</label>
                  <input className="form-input" type="text" placeholder="e.g. PLANT-TX-04" />
                </div>
                <div>
                  <label className="form-label">Alarm Classification</label>
                  <input className="form-input" type="text" placeholder="Search alarm database..." />
                </div>
              </div>
            </div>
          </div>

          {/* Data Display */}
          <div className="fade-up" style={{ marginTop: '64px', background: 'var(--deep-command)', border: '1px solid rgba(163,171,169,0.1)', borderRadius: '4px', padding: '40px' }}>
            <p className="ui-section-title">Data Display — Terminal Style</p>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', lineHeight: 2.2 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(163,171,169,0.1)', paddingBottom: '12px', marginBottom: '16px' }}>
                <span style={{ color: 'var(--system-neutral)', letterSpacing: '0.1em' }}>FIELD</span>
                <span style={{ color: 'var(--system-neutral)', letterSpacing: '0.1em' }}>VALUE</span>
                <span style={{ color: 'var(--system-neutral)', letterSpacing: '0.1em' }}>STATUS</span>
              </div>
              {[
                { field: 'ALARM_ID', value: 'ALM-2024-08742', status: 'RESOLVED', statusColor: 'var(--horizon-glow)' },
                { field: 'CONFIDENCE', value: '0.947', status: 'AI_VERIFIED', statusColor: 'var(--interface-iris)' },
                { field: 'OPERATOR', value: 'FIELD_DEPLOY_03', status: 'ONLINE', statusColor: 'var(--horizon-glow)' },
                { field: 'PATTERN_MATCH', value: 'FM-0847 × 18', status: 'COMPOUNDING', statusColor: 'var(--terminal-amber)' },
                { field: 'RESOLUTION_TIME', value: '00:00:03.4s', status: 'AUTO', statusColor: 'var(--interface-iris)' },
              ].map((row) => (
                <div key={row.field} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span style={{ color: 'var(--fog-green)' }}>{row.field}</span>
                  <span style={{ color: 'var(--formant-white)' }}>{row.value}</span>
                  <span style={{ color: row.statusColor }}>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ARCHITECTURE */}
      <section id="architecture">
        <div className="container">
          <p className="section-label fade-up">07 — System Architecture</p>
          <h2 className="section-title fade-up">Formant Metaphysics</h2>
          <p className="section-desc fade-up">Four layers of intelligence, each compounding on the last. Not a configuration—a system that learns. The difference between a replaceable accelerant and an irreplaceable asset.</p>

          <div className="arch-layers fade-up">
            {[
              { num: '04', name: 'The Core', desc: 'The unified intelligence layer. The system that learns your plant. Every engagement makes the next deployment faster, cheaper, and smarter.', tag: 'Irreplaceable Asset' },
              { num: '03', name: 'The Judge', desc: 'Evaluates each alarm, learns from operator feedback, makes increasingly precise triage decisions. Compounds with every investigation.', tag: 'Compounding Intelligence' },
              { num: '02', name: 'RAG System', desc: 'Surfaces the right plant context at the exact moment of investigation. Precision retrieval from structured operational knowledge.', tag: 'Contextual Retrieval' },
              { num: '01', name: 'Document Processing', desc: 'Transforms inert SOPs, P&IDs, and equipment manuals into queryable knowledge. The foundation of operational memory.', tag: 'Foundation Layer' },
            ].map((l) => (
              <div className="arch-layer" key={l.num}>
                <div className="arch-layer-num">{l.num}</div>
                <div className="arch-layer-content">
                  <div className="arch-layer-name">{l.name}</div>
                  <div className="arch-layer-desc">{l.desc}</div>
                </div>
                <div className="arch-layer-tag">{l.tag}</div>
              </div>
            ))}
          </div>

          <div className="manifesto-block fade-up" style={{ marginTop: '64px' }}>
            <blockquote>
              "A customer can replace an engineer. They cannot easily replace a system that has been learning their plant for eighteen months."
            </blockquote>
            <cite>Formant Metaphysics — The Power of Perspective</cite>
          </div>
        </div>
      </section>

      {/* ICONS */}
      <section id="icons">
        <div className="container">
          <p className="section-label fade-up">08 — Icon Library</p>
          <h2 className="section-title fade-up">Icon System</h2>
          <p className="section-desc fade-up">20 purpose-built icons representing the core concepts of Formant's physical AI vocabulary. Each icon is drawn at 64×64 on a 2px stroke grid — precise, open, and built to breathe in context.</p>

          {/* Usage guidance */}
          <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginTop: '56px', marginBottom: '64px' }}>
            {[
              { label: 'Format', body: <>SVG — scalable at any resolution. Use inline for color theming, or as <code style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: 'var(--horizon-glow)' }}>&lt;img&gt;</code> for static contexts.</> },
              { label: 'Grid & Stroke', body: '64×64 viewBox. 2px stroke weight. Linecap: round. Do not fill or outline in UI contexts — keep them open and atmospheric.' },
              { label: 'Color Usage', body: <>Default to <span style={{ color: 'var(--horizon-glow)' }}>Horizon Glow</span> for standard icons. Use <span style={{ color: 'var(--terminal-amber)' }}>Terminal Amber</span> for warnings (Anomaly, Alarm, Guardrail).</> },
            ].map((g) => (
              <div key={g.label} style={{ background: 'var(--slate-mist)', border: '1px solid rgba(163,171,169,0.1)', borderRadius: '4px', padding: '28px 24px' }}>
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: 'var(--terminal-amber)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>{g.label}</p>
                <p style={{ fontSize: '14px', color: 'var(--system-neutral)', lineHeight: 1.7 }}>{g.body}</p>
              </div>
            ))}
          </div>

          {/* Icon grid */}
          <div className="fade-up icon-grid-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '12px' }}>
            {[
              { file: '01-physical-agent', name: 'Physical Agent' },
              { file: '02-fleet', name: 'Fleet' },
              { file: '03-mission', name: 'Mission' },
              { file: '04-guardrail', name: 'Guardrail' },
              { file: '05-the-brain', name: 'The Brain' },
              { file: '06-context', name: 'Context' },
              { file: '07-the-interface', name: 'The Interface' },
              { file: '08-anomaly', name: 'Anomaly', warning: true },
              { file: '09-resolution', name: 'Resolution' },
              { file: '10-telemetry', name: 'Telemetry' },
              { file: '11-blueprint', name: 'Blueprint' },
              { file: '12-digital-twin', name: 'Digital Twin' },
              { file: '13-operator', name: 'Operator' },
              { file: '14-horizon', name: 'Horizon' },
              { file: '15-command', name: 'Command' },
              { file: '16-propagate', name: 'Propagate' },
              { file: '17-fde', name: 'FDE' },
              { file: '18-alarm', name: 'Alarm', warning: true },
              { file: '19-savings', name: 'Savings' },
              { file: '20-bounded-autonomy', name: 'Bounded Autonomy' },
            ].map((icon) => (
              <div className={`icon-card${icon.warning ? ' icon-card--warning' : ''}`} key={icon.file}>
                <div className="icon-preview"><img src={`${icon.file}.svg`} alt={icon.name} /></div>
                <div className="icon-name">{icon.name}</div>
                <div className="icon-file">{icon.file}</div>
              </div>
            ))}
          </div>

          {/* Size scale */}
          <div className="fade-up" style={{ background: 'var(--slate-mist)', border: '1px solid rgba(163,171,169,0.1)', borderRadius: '4px', padding: '40px', marginTop: '48px' }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: 'var(--terminal-amber)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '32px' }}>Size Scale — Operator Icon</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '40px', flexWrap: 'wrap' }}>
              {[
                { px: 16, label: '16px', sub: 'Inline' },
                { px: 24, label: '24px', sub: 'UI Label' },
                { px: 32, label: '32px', sub: 'Button' },
                { px: 48, label: '48px', sub: 'Card' },
                { px: 64, label: '64px', sub: 'Feature' },
                { px: 96, label: '96px', sub: 'Hero' },
              ].map((s) => (
                <div key={s.px} style={{ textAlign: 'center' }}>
                  <img src="13-operator.svg" style={{ width: `${s.px}px`, height: `${s.px}px`, display: 'block', margin: '0 auto 10px' }} alt="Operator" />
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '9px', color: 'var(--system-neutral)', letterSpacing: '0.1em' }}>{s.label}<br />{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              <img src="formant-logo-white.svg" alt="Formant" style={{ height: '52px', width: '52px', display: 'block', marginBottom: '16px' }} />
            </div>
            <div className="footer-tagline">To Build an Autonomous Future with Humans at the Center.</div>
          </div>
          <div className="footer-meta">
            <div>Brand Style Guide</div>
            <div>Version 2026.1</div>
            <div style={{ color: 'var(--terminal-amber)', marginTop: '8px' }}>Physical AI Infrastructure</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
