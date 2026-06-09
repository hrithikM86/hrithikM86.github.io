<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hrithik Mhatre</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink:       #1a1a2e;
    --ink-soft:  #4a4a6a;
    --ink-faint: #8888aa;
    --paper:     #f8f8fc;
    --surface:   #ffffff;
    --accent:    #2563eb;
    --accent-lt: #eff6ff;
    --accent-dk: #1d4ed8;
    --gold:      #b45309;
    --rule:      #e2e2ee;
    --mono:      'JetBrains Mono', monospace;
    --sans:      'Inter', system-ui, sans-serif;
    --serif:     'Playfair Display', Georgia, serif;
    --radius:    6px;
    --shadow:    0 1px 3px rgba(0,0,40,0.06), 0 4px 16px rgba(0,0,40,0.04);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--sans);
    font-size: 15px;
    line-height: 1.7;
    color: var(--ink);
    background: var(--paper);
    -webkit-font-smoothing: antialiased;
  }

  /* ── Layout ── */
  .page { max-width: 860px; margin: 0 auto; padding: 0 24px 80px; }

  /* ── Hero ── */
  .hero {
    padding: 72px 0 56px;
    border-bottom: 1px solid var(--rule);
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;
    align-items: end;
  }
  .hero-label {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 12px;
  }
  .hero h1 {
    font-family: var(--serif);
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    line-height: 1.1;
    color: var(--ink);
    letter-spacing: -0.02em;
  }
  .hero-sub {
    margin-top: 14px;
    font-size: 15px;
    color: var(--ink-soft);
    max-width: 480px;
    line-height: 1.65;
  }
  .hero-meta {
    text-align: right;
    font-size: 13px;
    color: var(--ink-faint);
    line-height: 2;
    white-space: nowrap;
  }
  .hero-meta a {
    color: var(--accent);
    text-decoration: none;
    font-family: var(--mono);
    font-size: 12px;
    display: block;
    transition: color 0.15s;
  }
  .hero-meta a:hover { color: var(--accent-dk); text-decoration: underline; }

  /* ── Nav ── */
  .nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(248,248,252,0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--rule);
    padding: 0;
    margin: 0 -24px;
  }
  .nav-inner {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    gap: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .nav-inner::-webkit-scrollbar { display: none; }
  .nav-inner a {
    font-size: 12px;
    font-weight: 500;
    color: var(--ink-soft);
    text-decoration: none;
    padding: 14px 14px;
    white-space: nowrap;
    border-bottom: 2px solid transparent;
    transition: color 0.15s, border-color 0.15s;
    letter-spacing: 0.02em;
  }
  .nav-inner a:hover { color: var(--accent); border-bottom-color: var(--accent); }

  /* ── Section ── */
  .section { padding: 56px 0 0; }
  .section-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 28px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--rule);
  }
  .section-header h2 {
    font-family: var(--serif);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--ink);
    letter-spacing: -0.01em;
  }
  .section-eyebrow {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--accent-lt);
    padding: 3px 8px;
    border-radius: 3px;
  }

  /* ── Education Cards ── */
  .edu-stack { display: flex; flex-direction: column; gap: 16px; }
  .edu-card {
    background: var(--surface);
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    padding: 20px 24px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px 16px;
    box-shadow: var(--shadow);
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .edu-card:hover {
    border-color: var(--accent);
    box-shadow: 0 2px 8px rgba(37,99,235,0.1);
  }
  .edu-card.featured { border-left: 3px solid var(--accent); }
  .edu-inst {
    font-weight: 600;
    font-size: 15px;
    color: var(--ink);
    grid-column: 1;
  }
  .edu-degree {
    font-size: 13.5px;
    color: var(--ink-soft);
    grid-column: 1;
    margin-top: 2px;
  }
  .edu-gpa {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--accent);
    font-weight: 500;
    grid-column: 2;
    grid-row: 1;
    text-align: right;
    white-space: nowrap;
  }
  .edu-year {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--ink-faint);
    grid-column: 2;
    grid-row: 2;
    text-align: right;
    white-space: nowrap;
  }

  /* ── Achievements ── */
  .achieve-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .achieve-list li {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: var(--surface);
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    padding: 14px 18px;
    font-size: 14px;
    line-height: 1.6;
    box-shadow: var(--shadow);
    transition: border-color 0.2s;
  }
  .achieve-list li:hover { border-color: var(--accent); }
  .achieve-num {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    background: var(--accent-lt);
    padding: 2px 6px;
    border-radius: 3px;
    white-space: nowrap;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* ── Publications ── */
  .pub-list { display: flex; flex-direction: column; gap: 16px; }
  .pub-card {
    background: var(--surface);
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    padding: 18px 22px;
    box-shadow: var(--shadow);
    transition: border-color 0.2s;
  }
  .pub-card:hover { border-color: var(--accent); }
  .pub-type {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--gold);
    background: #fef3c7;
    padding: 2px 7px;
    border-radius: 3px;
    display: inline-block;
    margin-bottom: 8px;
  }
  .pub-title {
    font-size: 14px;
    font-weight: 500;
    color: var(--ink);
    line-height: 1.5;
    margin-bottom: 6px;
  }
  .pub-venue {
    font-size: 13px;
    color: var(--ink-soft);
    font-style: italic;
    margin-bottom: 8px;
  }
  .pub-links { display: flex; gap: 10px; flex-wrap: wrap; }
  .pub-link {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    text-decoration: none;
    border: 1px solid var(--accent);
    padding: 2px 8px;
    border-radius: 3px;
    transition: background 0.15s, color 0.15s;
  }
  .pub-link:hover { background: var(--accent); color: #fff; }

  /* ── Experience ── */
  .exp-list { display: flex; flex-direction: column; gap: 0; }
  .exp-item {
    position: relative;
    padding-left: 28px;
    padding-bottom: 32px;
  }
  .exp-item::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 8px;
    bottom: 0;
    width: 1px;
    background: var(--rule);
  }
  .exp-item:last-child::before { display: none; }
  .exp-dot {
    position: absolute;
    left: 0;
    top: 6px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--surface);
    border: 2px solid var(--accent);
  }
  .exp-item.current .exp-dot { background: var(--accent); }
  .exp-header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 6px;
  }
  .exp-company {
    font-weight: 600;
    font-size: 15px;
    color: var(--ink);
  }
  .exp-role {
    font-size: 13.5px;
    color: var(--ink-soft);
    margin-bottom: 10px;
  }
  .exp-badge {
    font-family: var(--mono);
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 3px;
    background: var(--accent-lt);
    color: var(--accent);
  }
  .exp-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .exp-bullets li {
    font-size: 14px;
    color: var(--ink-soft);
    line-height: 1.6;
    padding-left: 16px;
    position: relative;
  }
  .exp-bullets li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-size: 12px;
    top: 2px;
  }

  /* ── Collapsible Projects ── */
  details {
    background: var(--surface);
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    margin-bottom: 10px;
    box-shadow: var(--shadow);
    transition: border-color 0.2s;
    overflow: hidden;
  }
  details[open] { border-color: var(--accent); }
  details > summary {
    padding: 16px 20px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    color: var(--ink);
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    transition: background 0.15s;
  }
  details > summary:hover { background: var(--accent-lt); }
  details > summary::-webkit-details-marker { display: none; }
  .summary-chevron {
    font-size: 10px;
    color: var(--ink-faint);
    transition: transform 0.2s;
    flex-shrink: 0;
  }
  details[open] .summary-chevron { transform: rotate(180deg); }
  .summary-left { display: flex; gap: 12px; align-items: center; }
  .proj-tag {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--ink-faint);
    background: var(--paper);
    padding: 2px 6px;
    border-radius: 3px;
    border: 1px solid var(--rule);
    white-space: nowrap;
  }
  .details-body {
    padding: 0 20px 18px;
    border-top: 1px solid var(--rule);
  }
  .details-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px 0 10px;
  }
  .details-links a {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    text-decoration: none;
    border: 1px solid var(--accent);
    padding: 2px 8px;
    border-radius: 3px;
    transition: background 0.15s, color 0.15s;
  }
  .details-links a:hover { background: var(--accent); color: #fff; }
  .details-guide {
    font-size: 13px;
    color: var(--ink-faint);
    margin-bottom: 10px;
    padding-top: 2px;
  }
  .details-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 4px;
  }
  .details-bullets li {
    font-size: 14px;
    color: var(--ink-soft);
    line-height: 1.6;
    padding-left: 16px;
    position: relative;
  }
  .details-bullets li::before {
    content: '·';
    position: absolute;
    left: 4px;
    color: var(--accent);
    font-weight: 700;
  }

  /* ── Skills ── */
  .skills-grid { display: flex; flex-direction: column; gap: 10px; }
  .skill-row {
    display: grid;
    grid-template-columns: 130px 1fr;
    gap: 12px;
    align-items: start;
    padding: 12px 0;
    border-bottom: 1px solid var(--rule);
  }
  .skill-row:last-child { border-bottom: none; }
  .skill-cat {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-faint);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding-top: 3px;
  }
  .skill-chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .chip {
    font-size: 13px;
    color: var(--ink-soft);
    background: var(--surface);
    border: 1px solid var(--rule);
    padding: 4px 10px;
    border-radius: 20px;
    transition: border-color 0.15s, color 0.15s;
  }
  .chip:hover { border-color: var(--accent); color: var(--accent); }
  .chip.highlight {
    background: var(--accent-lt);
    border-color: #bfdbfe;
    color: var(--accent-dk);
  }

  /* ── POR ── */
  .por-grid { display: flex; flex-direction: column; gap: 14px; }
  .por-card {
    background: var(--surface);
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    padding: 18px 22px;
    box-shadow: var(--shadow);
    transition: border-color 0.2s;
  }
  .por-card:hover { border-color: var(--accent); }
  .por-title {
    font-weight: 600;
    font-size: 14.5px;
    color: var(--ink);
    margin-bottom: 4px;
  }
  .por-org {
    font-size: 13px;
    color: var(--ink-faint);
    font-family: var(--mono);
    margin-bottom: 10px;
  }
  .por-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .por-bullets li {
    font-size: 14px;
    color: var(--ink-soft);
    line-height: 1.6;
    padding-left: 16px;
    position: relative;
  }
  .por-bullets li::before {
    content: '·';
    position: absolute;
    left: 4px;
    color: var(--accent);
    font-weight: 700;
  }

  /* ── Extra ── */
  .extra-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
  .extra-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    font-size: 14px;
    color: var(--ink-soft);
    line-height: 1.6;
    padding: 10px 0;
    border-bottom: 1px solid var(--rule);
  }
  .extra-item:last-child { border-bottom: none; }
  .extra-year {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    background: var(--accent-lt);
    padding: 2px 6px;
    border-radius: 3px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* ── Footer ── */
  .footer {
    margin-top: 80px;
    padding-top: 28px;
    border-top: 1px solid var(--rule);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--ink-faint);
    flex-wrap: wrap;
    gap: 8px;
  }
  .footer a { color: var(--accent); text-decoration: none; }
  .footer a:hover { text-decoration: underline; }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .hero { grid-template-columns: 1fr; }
    .hero-meta { text-align: left; }
    .skill-row { grid-template-columns: 1fr; gap: 6px; }
    .edu-card { grid-template-columns: 1fr; }
    .edu-gpa, .edu-year { grid-column: 1; text-align: left; }
  }

  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; animation: none !important; }
  }
</style>
</head>
<body>
<div class="page">

<!-- ── Hero ── -->
<div class="hero">
  <div>
    <div class="hero-label">Portfolio · hrithikM86</div>
    <h1>Hrithik Mhatre</h1>
    <p class="hero-sub">Machine Learning Engineer at American Express, specialising in credit risk modelling. Civil Engineering graduate with CS minor from IIT Bombay. Research interests span computer vision, healthcare AI, and geospatial systems.</p>
  </div>
  <div class="hero-meta">
    <a href="https://github.com/hrithikM86" target="_blank">github.com/hrithikM86 ↗</a>
    <a href="https://www.linkedin.com/in/hrithik-mhatre/" target="_blank">linkedin ↗</a>
  </div>
</div>

<!-- ── Nav ── -->
<nav class="nav">
  <div class="nav-inner">
    <a href="#education">Education</a>
    <a href="#achievements">Achievements</a>
    <a href="#publications">Publications</a>
    <a href="#experience">Experience</a>
    <a href="#international">International</a>
    <a href="#research">Research</a>
    <a href="#projects">Projects</a>
    <a href="#responsibilities">Responsibilities</a>
    <a href="#skills">Skills</a>
    <a href="#extra">Activities</a>
  </div>
</nav>

<!-- ── Education ── -->
<section class="section" id="education">
  <div class="section-header">
    <h2>Education</h2>
    <span class="section-eyebrow">Academic</span>
  </div>
  <div class="edu-stack">

    <div class="edu-card">
      <div class="edu-inst">University of California, San Diego</div>
      <div class="edu-degree">Master of Science in Computer Science and Engineering</div>
      <div class="edu-gpa">MS CS&amp;E</div>
      <div class="edu-year">2026 – 2028</div>
    </div>

    <div class="edu-card featured">
      <div class="edu-inst">Indian Institute of Technology (IIT) Bombay</div>
      <div class="edu-degree">B.Tech in Civil Engineering &middot; Minor in Computer Science and Engineering</div>
      <div class="edu-gpa">GPA 8.95 / 10</div>
      <div class="edu-year">Graduated 2025</div>
    </div>

  </div>
</section>

<!-- ── Achievements ── -->
<section class="section" id="achievements">
  <div class="section-header">
    <h2>Scholastic Achievements</h2>
    <span class="section-eyebrow">Honours</span>
  </div>
  <ol class="achieve-list">
    <li><span class="achieve-num">01</span>Graduated rank 7 of 150+ students in the B.Tech Civil Engineering programme at IIT Bombay</li>
    <li><span class="achieve-num">02</span>Secured a perfect 10/10 Semester GPA in the 8th semester at IIT Bombay</li>
    <li><span class="achieve-num">03</span>99.17th percentile in JEE Main among over 1.5 million applicants</li>
    <li><span class="achieve-num">04</span>Top 2 percentile in JEE Advanced, competing among 150,000+ candidates</li>
  </ol>
</section>

<!-- ── Publications ── -->
<section class="section" id="publications">
  <div class="section-header">
    <h2>Publications &amp; Conferences</h2>
    <span class="section-eyebrow">Research</span>
  </div>
  <div class="pub-list">

    <div class="pub-card">
      <span class="pub-type">Journal · Under Review</span>
      <div class="pub-title">Lunar Geochemistry from X-ray Line Flux Ratios Using CLASS on Chandrayaan-2</div>
      <div class="pub-venue">The Planetary Science Journal &mdash; Co-author. Received coverage in major Indian newspapers.</div>
      <div class="pub-links">
        <a class="pub-link" href="https://arxiv.org/pdf/2508.15563" target="_blank">Paper ↗</a>
        <a class="pub-link" href="https://www.star-iitb.in/research/chandrayaan" target="_blank">News Coverage ↗</a>
      </div>
    </div>

    <div class="pub-card">
      <span class="pub-type">Journal · To Be Submitted</span>
      <div class="pub-title">Parkinson's Disease Classification using Speech under Data-Constrained Regime</div>
      <div class="pub-venue">IEEE Journal of Biomedical &amp; Health Informatics &mdash; Mayurakshi Mukherji, Hrithik Mhatre et al.</div>
      <div class="pub-links">
        <a class="pub-link" href="https://drive.google.com/file/d/1vyE_GrdCpSitCYxlcEz2168DFiIP4HtI/view" target="_blank">Paper ↗</a>
      </div>
    </div>

    <div class="pub-card">
      <span class="pub-type">Conference Poster</span>
      <div class="pub-title">Elemental Ratios from Chandrayaan-2: High-Resolution XRF Mapping of the Lunar Surface</div>
      <div class="pub-venue">Lunar &amp; Planetary Science Conference (LPSC), Houston, 2025 &mdash; Co-author</div>
      <div class="pub-links">
        <a class="pub-link" href="https://drive.google.com/file/d/1fK12Lo3S24XXCxZ_2zx-pmMl9QZu2jrh/view" target="_blank">Poster ↗</a>
      </div>
    </div>

    <div class="pub-card">
      <span class="pub-type">Conference Poster</span>
      <div class="pub-title">A Genetic Algorithm based Approach for Tuning Parameters of the Star Tracker Algorithms</div>
      <div class="pub-venue">42nd Meeting of the Astronomical Society of India, ISRO &amp; IISc Bangalore, 2024 &mdash; Kudupudi Puja Naga Prasanna, Hrithik Mhatre et al.</div>
      <div class="pub-links">
        <a class="pub-link" href="https://drive.google.com/file/d/13UmXFrOX49zODJPpjmVfJ5SC3AHlIE-f/view" target="_blank">Poster ↗</a>
      </div>
    </div>

    <div class="pub-card">
      <span class="pub-type">arXiv · Manuscript Under Development</span>
      <div class="pub-title">Pixels to Signals: A Real-Time Framework for Traffic Demand Estimation</div>
      <div class="pub-venue">Hrithik Mhatre et al.</div>
      <div class="pub-links">
        <a class="pub-link" href="https://arxiv.org/pdf/2510.24902" target="_blank">Paper ↗</a>
      </div>
    </div>

  </div>
</section>

<!-- ── Experience ── -->
<section class="section" id="experience">
  <div class="section-header">
    <h2>Professional Experience</h2>
    <span class="section-eyebrow">Industry</span>
  </div>
  <div class="exp-list">

    <div class="exp-item current">
      <div class="exp-dot"></div>
      <div class="exp-header">
        <span class="exp-company">American Express</span>
        <span class="exp-badge">Full-Time</span>
      </div>
      <div class="exp-role">Credit &amp; Fraud Risk — Machine Learning Modeling Team</div>
      <ul class="exp-bullets">
        <li>Improved robustness and reliability of credit risk prediction models processing 125M+ monthly transactions by applying causal inference, targeted feature engineering, and interpretability techniques.</li>
        <li>Leveraged PySpark, Hive, and cloud services to build scalable data pipelines for high-volume analytics.</li>
        <li>Refined dependent-variable design and introduced market-aligned exclusion logic to reduce data noise, resulting in an 8.5% lift in defaulter sensitivity and a 0.3% gain in Gini and capture rate.</li>
        <li>Optimised credit line increase thresholds, improving identification of high-risk customers by 2% and strengthening portfolio-level risk controls.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-dot"></div>
      <div class="exp-header">
        <span class="exp-company">American Express</span>
        <span class="exp-badge">Internship</span>
      </div>
      <div class="exp-role">Credit &amp; Fraud Risk — Machine Learning Modeling Team &nbsp;·&nbsp; <a href="https://www.linkedin.com/in/archit-jain-4b027761/" style="color:var(--accent);font-size:13px;text-decoration:none;" target="_blank">Manager: Archit Jain</a></div>
      <ul class="exp-bullets">
        <li>Designed a two-step variable rationalisation framework using K-Means clustering and SHAP, PDP, and ALE importance scores.</li>
        <li>Applied Bayesian optimisation for hyperparameter tuning to address overfitting in previous-generation models.</li>
        <li>Developed a novel metric using basis points (bps) drop per variable in Gini and capture rate to assess model stability.</li>
        <li>Achieved a 50% reduction in model variables, driving a 30% improvement in stability for commercial risk models managing $100B in exposures. Received a Pre-Placement Offer (PPO).</li>
      </ul>
    </div>

  </div>
</section>

<!-- ── International ── -->
<section class="section" id="international">
  <div class="section-header">
    <h2>International Experience</h2>
    <span class="section-eyebrow">Global</span>
  </div>

  <details>
    <summary>
      <div class="summary-left">
        <span class="proj-tag">Civil · Design</span>
        Seismic Design Competition &mdash; San Francisco, USA
      </div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <ul class="details-bullets">
        <li>Core member of the Civil Engineering Tech Team, EERI IITB Student Chapter.</li>
        <li>Secured 8th place internationally as the sole Indian team, competing against 30+ universities across 10+ countries.</li>
        <li>Engineered a 19-storey skyscraper with 4 sky bridges, generating $0.38M+ revenue while ensuring negligible rooftop acceleration under seismic loading.</li>
        <li>Developed detailed 3D exterior models and renderings using 3ds Max, Revit, and V-Ray, integrating the design with San Francisco's cityscape.</li>
        <li>Implemented sustainable features for LEED compliance, including Xeriscaping and Double Sheet Eco-Sense Glass.</li>
      </ul>
    </div>
  </details>

</section>

<!-- ── Research ── -->
<section class="section" id="research">
  <div class="section-header">
    <h2>Research &amp; Development Projects</h2>
    <span class="section-eyebrow">R&amp;D</span>
  </div>

  <details>
    <summary>
      <div class="summary-left">
        <span class="proj-tag">MARL · CV · RL</span>
        Vision-Driven MARL Framework for Real-Time Traffic Signal Optimisation
      </div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://scholar.google.com/citations?user=nM_oGqQAAAAJ&hl=en" target="_blank">Guide: Prof. Archak Mittal ↗</a>
        <a href="https://drive.google.com/file/d/12JbkbaXc6_Ob8vs-hnuARdLMdhKwU72R/view" target="_blank">BTP 1 Report ↗</a>
        <a href="https://drive.google.com/file/d/1CWoLeOPZqNhGBXULxWbK-gzi0ut6awht/view" target="_blank">BTP 2 Report ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Designed a real-time vehicle detection framework with adaptive background modelling (61.5× faster than K-means) and foreground isolation using differencing, grayscale, binarisation, and morphological operations.</li>
        <li>Applied DBSCAN for vehicle detection on foreground — 2.3× faster than YOLO with better accuracy.</li>
        <li>Implemented Spatial-Temporal-Decoupled Masked Pre-training for forecasting traffic patterns.</li>
        <li>Integrated real-time and forecasted traffic data using SUMO and LibSignal into a hierarchical MARL model for proactive traffic signal optimisation.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left">
        <span class="proj-tag">XRF · Geospatial · ML</span>
        High-Resolution XRF Mapping of the Lunar Surface | Chandrayaan-2
      </div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://scholar.google.com/citations?user=DBpGmU4AAAAJ&hl=en" target="_blank">Guide: Prof. Varun Bhalerao ↗</a>
        <a href="https://www.star-iitb.in/" target="_blank">STAR Lab ↗</a>
        <a href="https://github.com/hrithikM86/InterIIT" target="_blank">GitHub ↗</a>
        <a href="https://drive.google.com/file/d/1an4j_8vN37vJ3eQEXD5U6o7toDzKZXHh/view" target="_blank">Report ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Won Gold Medal for ISRO's lunar mineral mapping challenge, competing against teams from 23 IITs at InterIIT Tech Meet 13.0.</li>
        <li>Designed spectral data preprocessing including background modelling and Gaussian fitting; developed a novel solar flare detection algorithm using Chandrayaan-2's CLASS data.</li>
        <li>Applied Gaussian Mixture Models for unsupervised clustering of lunar geochemical data, revealing compositional patterns.</li>
        <li>Generated the first high-resolution spatial map of XRF line ratios as GeoTIFF files at 5.3 km/pixel resolution.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left">
        <span class="proj-tag">Healthcare · NLP · ML</span>
        Enhanced Speech-Based Pipeline for Detecting Parkinson's Disease
      </div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://scholar.google.com.au/citations?user=86tKGf8AAAAJ&hl=en" target="_blank">Guide: Prof. Nirmal Punjabi ↗</a>
        <a href="https://drive.google.com/file/d/11CBdK_CVs3tUaXSHTrg8H9I78apUTcpE/view" target="_blank">Report ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Proposed OpenSmile-based pipeline with mRMR-selected features and grid-tuned ML and LSTM models.</li>
        <li>Used SHAP values to validate alignment of top voice-related features with established Parkinson's literature.</li>
        <li>Decision trees on point features (ROC: 1.0) and fine-tuned LSTMs on time-series data (ROC: 0.98).</li>
        <li>Outperformed the standard 22-feature baseline with an average 2% ROC gain; demonstrated richness of speech data over phonation with a 13.6% higher classification ROC on average.</li>
        <li>Showed that silence in PD data improves classification and highlights its diagnostic significance.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left">
        <span class="proj-tag">Computer Vision · GAN</span>
        Classification, Segmentation, and GAN on Concrete Crack Surfaces
      </div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://iitb.irins.org/profile/155634" target="_blank">Guide: Prof. Alankar Alankar ↗</a>
        <a href="https://github.com/hrithikM86/CS490-RnD-Classification-Segmentation-and-GAN-implementation-on-Concrete-Crack-Images/tree/main" target="_blank">GitHub ↗</a>
        <a href="https://drive.google.com/file/d/1bP5sF61247_-N9RSpgAwL7Wza82byGiX/view" target="_blank">Report ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Engineered a Deep Convolutional GAN (DCGAN) to synthetically generate concrete crack images.</li>
        <li>Fine-tuned ResNet50 on real and GAN-generated data — 99.3% classification accuracy, F1 score of 99%.</li>
        <li>Implemented U-Net in TensorFlow for crack surface segmentation — Dice Coefficient 75.3%, Mean IoU 61.3%.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left">
        <span class="proj-tag">Analytics · Public Health</span>
        Data-Driven Dashboard for Public Health Analytics | Maharashtra
      </div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://iitb.irins.org/profile/52104" target="_blank">Guide: Prof. Ganesh Ramkrishnan ↗</a>
        <a href="https://github.com/hrithikM86/DH307-Development-Of-An-Integrated-Dashboard-For-Public-Health-Systems" target="_blank">GitHub ↗</a>
        <a href="https://drive.google.com/file/d/1lcJPyNfwnnUf7R-Rm_Mb3eqABJe_uBY6/view" target="_blank">Report ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Built a data-driven dashboard for analytical insights on healthcare services across Maharashtra.</li>
        <li>Analysed district-level mental health trends, uncovering a 6-fold rise in cases post-COVID.</li>
        <li>Engineered a novel 'Health Index' variable identifying 11 of 34 districts with suboptimal services.</li>
      </ul>
    </div>
  </details>

</section>

<!-- ── Technical Projects ── -->
<section class="section" id="projects">
  <div class="section-header">
    <h2>Technical Projects</h2>
    <span class="section-eyebrow">Build</span>
  </div>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">Embedded · Astrometry</span>Star-Tracker based Attitude Determination System (STADS)</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://www.aero.iitb.ac.in/satlab/stads.php" target="_blank">SatLab ↗</a>
        <a href="https://scholar.google.com/citations?user=DBpGmU4AAAAJ&hl=en" target="_blank">Guide: Prof. Varun Bhalerao ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Enhanced Lost-in-Space star-matching algorithm, reducing hardware run time by 50%.</li>
        <li>Optimised star matching with Genetic Algorithm — 87% accuracy on 4 diverse constellations within 36 arc-seconds error.</li>
        <li>Integrated camera and Raspberry Pi for Hardware-in-the-Loop Simulations; automated 3-stage pipeline in headless mode.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">Optimisation · Env</span>Multi-Objective Optimisation of the Lake Problem</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://scholar.google.com/citations?user=VpsQcKoAAAAJ&hl=en" target="_blank">Guide: Prof. Riddhi Singh ↗</a>
        <a href="https://github.com/hrithikM86/Stochastic-Multi-Objective-Optimization-and-Uncertainty-Analysis-of-the-Lake-Problem" target="_blank">GitHub ↗</a>
        <a href="https://drive.google.com/file/d/1PYypVYhoAfWQLZlBek_08MFmRB7cZZXu/view" target="_blank">Report ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Developed a stochastic optimisation model to balance environmental and economic objectives in the lake pollution problem.</li>
        <li>Incorporated Monte Carlo simulations for uncertainty analysis; applied NSGA-II and MOEA/D for Pareto front generation.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">RL · Finance</span>Optimising Stock Trading with Reinforcement Learning</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://github.com/hrithikM86/Optimizing-Stock-Trading-with-Reinforcement-Learning" target="_blank">GitHub ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Explored DQN and DDPG algorithms using OpenAI Gym; built an RL-based trading environment with Actor-Critic (DDPG).</li>
        <li>Designed a robust action space and reward function for portfolio optimisation on G^SPC2018 stocks, achieving a $140 profit from a $5,000 investment.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">CV · Face Recog</span>Attendance Mate — Face Recognition Attendance System</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://makerbhavanfoundation.org/programs/" target="_blank">SANDBOX Program, IIT Bombay ↗</a>
        <a href="https://github.com/hrithikM86/Attendance-Mate-Face-Recognition-Attendance-System/tree/main" target="_blank">GitHub ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Selected and fully funded by The SANDBOX Program, IIT Bombay.</li>
        <li>Built pipeline using MTCNN for face extraction and Keras-VGGFace for embedding vectors.</li>
        <li>Fine-tuned a Siamese neural network with triplet loss, achieving 87.1% accuracy.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">NLP · Sentiment</span>Sentiment Analysis of Singapore Airlines Reviews</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://scholar.google.co.in/citations?user=_9ZKKbIAAAAJ&hl=en" target="_blank">Guide: Prof. Abir De ↗</a>
        <a href="https://github.com/hrithikM86/CS419-Sentiment-Analysis-of-Customer-Reviews-for-Singapore-Airlines-using-NLP/tree/main" target="_blank">GitHub ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Developed preprocessing pipeline with NLTK; trained CBOW and Skip-Gram embeddings from scratch.</li>
        <li>Compared pre-trained Word2Vec across SVM, XGBoost, and Neural Networks — achieved 91% accuracy in 5-class sentiment classification.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">GAN · Deep Learning</span>Deepfakes: GAN-based Face-swapping</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://github.com/hrithikM86/Deepfakes-GAN-based-Face-swapping" target="_blank">GitHub ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Studied AttGAN and Deepfakes architectures; implemented GAN-based face-swapping using TensorFlow and PyTorch.</li>
        <li>Deepened understanding of facial attribute editing and GAN training dynamics.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">Embedded · PCB</span>GCON-VEGATHON | IEEE-GCON 2023 | C-DAC &amp; IIT Guwahati</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://event.iitg.ac.in/GCON2023/" target="_blank">Website ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Top 15 semi-finalist out of 50+ competitors.</li>
        <li>Proposed a bare-metal embedded system with an OV2640 image sensor for star centroid extraction on a VEGA processor.</li>
        <li>Designed a PCB to integrate camera and VEGA board.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">LLM · RAG</span>AI-Powered PDF Chatbot</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://github.com/hrithikM86/AI-Powered-Chatbot" target="_blank">GitHub ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Built an AI-powered PDF chatbot using NLP, word embeddings, and similarity search (FAISS, LangChain).</li>
        <li>Implemented document similarity search across 1000+ text chunks via OpenAI's API.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">LLM · NLP · PyTorch</span>Neural Networks and Large Language Models</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://github.com/hrithikM86/Neural-Networks-and-Large-Language-Models/tree/main" target="_blank">GitHub ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Built a Gradio QnA bot with FLAN-T5 and GPU acceleration for real-time text generation.</li>
        <li>Custom binary neural network in PyTorch for image classification (81% accuracy); BERT-based sentiment model with Gradio interface (85% accuracy).</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">Credit Risk · XGBoost</span>Understanding Credit Score Models</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://github.com/hrithikM86/Understanding-Credit-Score-Models/tree/main" target="_blank">GitHub ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Data preprocessing, oversampling, feature engineering, and EDA on lending data.</li>
        <li>XGBoost classifier achieving 86% accuracy; researched AI/ML applications in credit score modelling.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">Seismic · SatLab</span>Great Lunar Expedition for Everyone (GLEE)</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://www.aero.iitb.ac.in/satlab/glee.php" target="_blank">Website ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Global mission for lunar surface science using chipsats.</li>
        <li>Cleaned and analysed earthquake data; implemented TDOA algorithm for seismic wave source localisation.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">Robotics · Arduino</span>Robotic Arm</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://github.com/hrithikM86/RoboCivs/tree/main" target="_blank">GitHub ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Programmable robotic arm with MG996R and SG90 servo motors, controlled via mobile app.</li>
        <li>Arduino UNO microcontroller interfacing Bluetooth module with mobile network for remote control.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">ML · Climate</span>Precipitation Prediction using ML</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://github.com/hrithikM86/Precipitation-Prediction-using-ML/tree/main" target="_blank">GitHub ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Random Forest and Logistic Regression models with oversampling for class imbalance — 98.03% accuracy, 98.01% ROC-AUC.</li>
        <li>Chi-squared test for feature selection; full EDA pipeline.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">Civil · Economics</span>Economic Evaluation of Jaipur Metro Phase-I</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://www.civil.iitb.ac.in/~vedagiri/" target="_blank">Guide: Prof. P. Vedagiri ↗</a>
        <a href="https://drive.google.com/file/d/1U5En6AjQqfEWCMDEojTa4Ltz4vm29C1G/view" target="_blank">Report ↗</a>
      </div>
      <ul class="details-bullets">
        <li>30-year cost-benefit and financial analysis modelling capital &amp; operating costs, maintenance, and salvage values.</li>
        <li>Forecasted ridership growth; monetised user benefits; assessed environmental externalities via shadow pricing.</li>
        <li>Economic IRR = <strong>18.6%</strong>, ENPV = <strong>Rs. 5,598 Cr</strong>, Financial IRR = <strong>8.24%</strong>.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">Civil · Transport</span>Urban Travel Demand Modelling and Traffic Assignment</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://www.civil.iitb.ac.in/~kvkrao/" target="_blank">Guide: Prof. K. V. Krishna Rao ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Household trip production models with regression; validated using R², t-tests, and F-statistics.</li>
        <li>Calibrated gravity models for trip distribution; implemented capacity restraint, MSA, and Frank-Wolfe assignment algorithms.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>
      <div class="summary-left"><span class="proj-tag">Civil · Simulation</span>Traffic Signal Design and Analysis</div>
      <span class="summary-chevron">▼</span>
    </summary>
    <div class="details-body">
      <div class="details-links">
        <a href="https://www.civil.iitb.ac.in/~velaga/" target="_blank">Guide: Prof. Nagendra R. Velaga ↗</a>
      </div>
      <ul class="details-bullets">
        <li>Processed real-time traffic data to build a structured dataset and estimate intersection load patterns.</li>
        <li>Designed an optimised signal timing plan; simulated and evaluated alternative signal groups in VISSIM.</li>
      </ul>
    </div>
  </details>

</section>

<!-- ── Responsibilities ── -->
<section class="section" id="responsibilities">
  <div class="section-header">
    <h2>Positions of Responsibility</h2>
    <span class="section-eyebrow">Leadership</span>
  </div>
  <div class="por-grid">

    <div class="por-card">
      <div class="por-title">Electrical Subsystem Head</div>
      <div class="por-org">Student Satellite Program (SatLab), IIT Bombay &nbsp;·&nbsp; <a href="https://www.aero.iitb.ac.in/satlab/" style="color:var(--accent);text-decoration:none;font-size:12px;" target="_blank">Learn More ↗</a></div>
      <ul class="por-bullets">
        <li>Led a 9-member interdisciplinary team on Hardware In-Loop Simulation of the STADS module.</li>
        <li>Executed a 3-step recruitment process to select 6 of 50+ applicants.</li>
        <li>Designed, mentored, and evaluated two technical hardware projects for the mini-project round.</li>
      </ul>
    </div>

    <div class="por-card">
      <div class="por-title">Senior Department Academic Mentor &amp; Subgroup Head</div>
      <div class="por-org">Civil Engineering Department, IIT Bombay &nbsp;·&nbsp; <a href="https://civildampiitb.github.io/" style="color:var(--accent);text-decoration:none;font-size:12px;" target="_blank">Learn More ↗</a></div>
      <ul class="por-bullets">
        <li>Monitored academic performance of 6 sophomores to provide personalised guidance and counselling.</li>
        <li>Led a 6-member team to survey departmental needs and facilitate effective mentorship delivery.</li>
        <li>Received the DAMP Special Recognition Award, given to 17 of 400 students for exceptional contributions.</li>
      </ul>
    </div>

  </div>
</section>

<!-- ── Skills ── -->
<section class="section" id="skills">
  <div class="section-header">
    <h2>Skills &amp; Relevant Courses</h2>
    <span class="section-eyebrow">Technical</span>
  </div>
  <div class="skills-grid">

    <div class="skill-row">
      <span class="skill-cat">Languages</span>
      <div class="skill-chips">
        <span class="chip highlight">Python</span>
        <span class="chip highlight">C / C++</span>
        <span class="chip">MATLAB</span>
      </div>
    </div>

    <div class="skill-row">
      <span class="skill-cat">ML / DL</span>
      <div class="skill-chips">
        <span class="chip highlight">TensorFlow</span>
        <span class="chip highlight">PyTorch</span>
        <span class="chip highlight">Scikit-learn</span>
        <span class="chip">OpenCV</span>
        <span class="chip">OpenAI Gym</span>
      </div>
    </div>

    <div class="skill-row">
      <span class="skill-cat">Big Data</span>
      <div class="skill-chips">
        <span class="chip highlight">PySpark</span>
        <span class="chip">Hive</span>
      </div>
    </div>

    <div class="skill-row">
      <span class="skill-cat">Mathematics</span>
      <div class="skill-chips">
        <span class="chip">Calculus</span>
        <span class="chip">Linear Algebra</span>
        <span class="chip">Differential Equations</span>
        <span class="chip">Probabilistic &amp; Statistical Methods</span>
      </div>
    </div>

    <div class="skill-row">
      <span class="skill-cat">CS Courses</span>
      <div class="skill-chips">
        <span class="chip">DSA</span>
        <span class="chip">DAA</span>
        <span class="chip">Computer Networks</span>
        <span class="chip">Intro to ML</span>
        <span class="chip">Logic for CS</span>
      </div>
    </div>

    <div class="skill-row">
      <span class="skill-cat">Certifications</span>
      <div class="skill-chips">
        <span class="chip">Deep Learning Specialisation (Andrew Ng)</span>
        <span class="chip">ML Specialisation (Andrew Ng)</span>
        <span class="chip">NLP Specialisation</span>
        <span class="chip">Data Science Bootcamp (WIDS)</span>
        <span class="chip">MATLAB Onramp</span>
      </div>
    </div>

  </div>
</section>

<!-- ── Extra ── -->
<section class="section" id="extra">
  <div class="section-header">
    <h2>Extracurricular Activities</h2>
    <span class="section-eyebrow">Beyond Class</span>
  </div>
  <ul class="extra-list">
    <li><span class="extra-year">2024</span>Guided 12+ students in developing a CNN-based model that translates ASL live video to text at SoC.</li>
    <li><span class="extra-year">2024</span>Facilitated an NLP-based project for 12+ students at WIDS to build a Shakespearean language chatbot.</li>
    <li><span class="extra-year">2022</span>Participated in XLR8 and built an advanced WiFi-controlled racing bot using the ESP32 micro-controller.</li>
    <li><span class="extra-year">2022</span>Developed a Bluetooth-controlled robotic arm with Arduino UNO, capable of precise movements.</li>
    <li><span class="extra-year">2022</span>Participated in RC plane competition and built a high-performance aircraft showcasing technical skills.</li>
    <li><span class="extra-year">2022</span>Mentored 10+ students at WIDS, from ML fundamentals to developing and testing models.</li>
    <li><span class="extra-year">2022</span>Dedicated 80+ hours to impactful community service as a volunteer for UMMEED under NSS.</li>
    <li><span class="extra-year">2022</span>Participated in the Versova Beach Cleanup organised by Abhyuday, IIT Bombay's social impact initiative.</li>
    <li><span class="extra-year">2022</span>Raised ₹1.5 Lakhs within a week to fund initial checkup and cancer treatment for a hostel staff member.</li>
  </ul>
</section>

<!-- ── Footer ── -->
<div class="footer">
  <span>Hrithik Mhatre &nbsp;·&nbsp; IIT Bombay &rsquo;25</span>
  <span>
    <a href="https://github.com/hrithikM86" target="_blank">GitHub</a> &nbsp;·&nbsp;
    <a href="https://www.linkedin.com/in/hrithik-mhatre/" target="_blank">LinkedIn</a>
  </span>
</div>

</div>
</body>
</html>
