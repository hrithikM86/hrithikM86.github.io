<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Hrithik Mhatre — MS in CS Applicant</title>
  <meta name="description" content="Portfolio — research, projects, publications, experience. Content from README.">

  <!-- Embedded minimal CSS (single-file for easy drop-in) -->
  <style>
    :root{
      --bg:#fbfbfb; --card:#fff; --muted:#6b7280; --text:#0f1724;
      --accent:#0b5fff; --radius:12px; --maxw:1100px;
    }
    *{box-sizing:border-box}
    body{
      margin:0; font-family:Inter,system-ui,Segoe UI,Roboto,Arial;
      -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
      background:var(--bg); color:var(--text); line-height:1.45;
      padding:28px 16px; display:flex; justify-content:center;
    }
    .container{width:100%; max-width:var(--maxw)}
    header{display:grid; grid-template-columns:1fr 420px; gap:22px; align-items:center}
    @media (max-width:880px){header{grid-template-columns:1fr}}
    .intro{
      background:linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.5));
      padding:22px; border-radius:var(--radius); box-shadow:0 8px 24px rgba(12,18,30,0.04)
    }
    .name{font-size:clamp(22px,4vw,34px);margin:0 0 6px 0;font-weight:700}
    .subtitle{margin:0 0 14px 0;color:var(--muted)}
    .cta-row{display:flex;gap:10px;flex-wrap:wrap}
    .btn{padding:10px 14px;border-radius:10px;text-decoration:none;font-weight:600}
    .btn.primary{background:var(--accent);color:#fff}
    .btn.ghost{background:transparent;border:1px solid rgba(11,95,255,0.12);color:var(--accent)}
    .cards{display:grid;gap:12px;grid-template-columns:repeat(2,1fr)}
    @media (max-width:880px){.cards{grid-template-columns:repeat(3,1fr)}}
    @media (max-width:520px){.cards{grid-template-columns:repeat(2,1fr)}}
    .card{padding:18px;border-radius:12px;background:var(--card);min-height:86px;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          cursor:pointer;border:1px solid rgba(12,18,30,0.04);transition:transform .18s, box-shadow .18s}
    .card:hover{transform:translateY(-6px);box-shadow:0 14px 30px rgba(12,18,30,0.06)}
    .card small{color:var(--muted);font-weight:600}
    main{margin-top:18px}
    section{margin:16px 0}
    .section-head{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:10px;
                 background:linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.5));cursor:pointer;border:1px solid rgba(12,18,30,0.03)}
    .section-title{font-weight:700;margin:0}
    .section-meta{color:var(--muted); font-size:0.95rem}
    .content{margin-top:12px;padding:14px;border-radius:10px;background:var(--card);border:1px solid rgba(12,18,30,0.04);
             overflow:hidden;transition:max-height .36s, opacity .28s}
    .content.collapsed{max-height:0;padding-top:0;padding-bottom:0;opacity:0;border:none}
    .item-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    @media (max-width:820px){.item-grid{grid-template-columns:1fr}}
    .item{padding:14px;border-radius:10px;background:linear-gradient(180deg,#fff,#fbfcff);border:1px solid rgba(12,18,30,0.04)}
    .item h4{margin:0 0 6px 0;font-size:1rem}
    .item p{margin:0 0 8px 0;color:var(--muted)}
    .tags{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px}
    .tag{font-size:0.82rem;padding:6px 8px;border-radius:999px;border:1px solid rgba(11,95,255,0.12);color:var(--accent);font-weight:600}
    .links{display:flex;gap:10px;flex-wrap:wrap}
    .links a{color:var(--accent);font-weight:600;text-decoration:none}
    table{width:100%;border-collapse:collapse;margin-top:8px}
    th,td{padding:10px;border:1px solid #eee;text-align:left}
    th{background:#fafaff;font-weight:700}
    footer{margin:28px 0 60px;color:var(--muted);text-align:center}
    .muted{color:var(--muted)}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="intro" role="banner">
        <h1 class="name">Hrithik Mhatre</h1>
        <p class="subtitle">MS in Computer Science applicant interested in AI and systems</p>
        <p class="muted">Clean portfolio showcasing research, projects, publications, and experience — focused on machine learning, computer vision, and system-scale engineering.</p>
        <div style="margin-top:12px" class="cta-row">
          <a class="btn primary" href="#contact" onclick="navTo(event,'contact')">Contact / Resume</a>
          <a class="btn ghost" href="#publications" onclick="navTo(event,'publications')">Publications</a>
        </div>
      </div>

      <nav aria-label="quick sections">
        <div class="cards" role="navigation">
          <div class="card" data-target="research" onclick="navTo(event,'research')">
            Research
            <small>Guides, reports, papers</small>
          </div>
          <div class="card" data-target="technical-projects" onclick="navTo(event,'technical-projects')">
            Projects
            <small>GitHub & demos</small>
          </div>
          <div class="card" data-target="professional-experience" onclick="navTo(event,'professional-experience')">
            Experience
            <small>Industry & internships</small>
          </div>
          <div class="card" data-target="publications" onclick="navTo(event,'publications')">
            Publications
            <small>Papers & posters</small>
          </div>
          <div class="card" data-target="skills-and-courses" onclick="navTo(event,'skills-and-courses')">
            Skills
            <small>Programming & courses</small>
          </div>
          <div class="card" data-target="contact" onclick="navTo(event,'contact')">
            Contact
            <small>Email / links</small>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <!-- Education -->
      <section id="education">
        <div class="section-head" onclick="toggle('education-body')">
          <div>
            <h3 class="section-title">Education</h3>
            <div class="section-meta">Indian Institute of Technology (IIT) Bombay</div>
          </div>
          <div class="section-meta">B.Tech Civil Engineering — Minor in CS — GPA: 8.95/10 (2025)</div>
        </div>
        <div id="education-body" class="content collapsed">
          <p><strong>IIT Bombay</strong><br>
          Bachelor of Technology in Civil Engineering with a Minor in Computer Science and Engineering<br>
          <strong>GPA:</strong> 8.95/10 — <strong>Graduated:</strong> 2025</p>
        </div>
      </section>

      <!-- Scholastic Achievements -->
      <section id="scholastic-achievements">
        <div class="section-head" onclick="toggle('scholastic-body')">
          <div>
            <h3 class="section-title">Scholastic Achievements</h3>
            <div class="section-meta">Academic highlights</div>
          </div>
        </div>
        <div id="scholastic-body" class="content collapsed">
          <ol>
            <li>Graduated with rank 7 out of 150+ students in the B.Tech Civil Engg program.</li>
            <li>Secured a perfect 10/10 Semester GPA during 8th semester.</li>
            <li>99.17th percentile in JEE Main among 1.5M+ applicants.</li>
            <li>Top 2 percentile in JEE Advanced.</li>
          </ol>
        </div>
      </section>

      <!-- Publications -->
      <section id="publications">
        <div class="section-head" onclick="toggle('publications-body')">
          <div>
            <h3 class="section-title">Publications & Conferences</h3>
            <div class="section-meta">Journal papers, arXiv, posters</div>
          </div>
        </div>
        <div id="publications-body" class="content collapsed">
          <ol>
            <li>
              <strong>Journal Publication:</strong><br>
              Co-author. "Lunar Geochemistry from X-ray Line Flux Ratios Using CLASS on Chandrayaan-2." Under review at <em>The Planetary Science Journal</em>.
              <div class="links"><a href="https://arxiv.org/pdf/2508.15563" target="_blank" rel="noopener noreferrer">Paper (arXiv)</a> <a href="https://www.star-iitb.in/research/chandrayaan" target="_blank" rel="noopener noreferrer">News Coverage</a></div>
            </li>
            <li>
              <strong>Journal Publication:</strong><br>
              Mayurakshi Mukherji, Hrithik Mhatre et al. "Parkinson’s Disease Classification using Speech under Data-Constrained Regime." To be submitted to IEEE JBHI.
              <div class="links"><a href="https://drive.google.com/file/d/1vyE_GrdCpSitCYxlcEz2168DFiIP4HtI/view" target="_blank" rel="noopener noreferrer">Paper</a></div>
            </li>
            <li>
              <strong>Conference Poster:</strong><br>
              "Elemental Ratios from Chandrayaan-2: High-Resolution XRF Mapping of the Lunar Surface." Poster at LPSC, Houston, 2025.
              <div class="links"><a href="https://drive.google.com/file/d/1fK12Lo3S24XXCxZ_2zx-pmMl9QZu2jrh/view" target="_blank" rel="noopener noreferrer">Poster</a></div>
            </li>
            <li>
              <strong>Conference Poster:</strong><br>
              Kudupudi Puja Naga Prasanna, Hrithik Mhatre et al. "A Genetic Algorithm based Approach for Tuning Parameters of the Star Tracker Algorithms." Presented at 42nd Meeting of the Astronomical Society of India (ISRO & IISc), 2024.
              <div class="links"><a href="https://drive.google.com/file/d/13UmXFrOX49zODJPpjmVfJ5SC3AHlIE-f/view" target="_blank" rel="noopener noreferrer">Poster</a></div>
            </li>
            <li>
              <strong>arXiv:</strong><br>
              Hrithik Mhatre et al. "Pixels to Signals: A Real-Time Framework for Traffic Demand Estimation" (manuscript under development).
              <div class="links"><a href="https://drive.google.com/file/d/12JbkbaXc6_Ob8vs-hnuARdLMdhKwU72R/view" target="_blank" rel="noopener noreferrer">Draft</a></div>
            </li>
          </ol>
        </div>
      </section>

      <!-- Professional Experience -->
      <section id="professional-experience">
        <div class="section-head" onclick="toggle('prof-body')">
          <div>
            <h3 class="section-title">Professional Experience</h3>
            <div class="section-meta">Industry roles & internships</div>
          </div>
        </div>

        <div id="prof-body" class="content collapsed">
          <div class="item-grid">
            <div class="item">
              <h4>American Express — Full Time</h4>
              <p class="muted">Credit & Fraud Risk – Machine Learning Modeling Team</p>
              <ul>
                <li>Improved robustness and reliability of credit risk prediction models processing 125M+ monthly transactions by applying causal inference, targeted feature engineering, and interpretability techniques.</li>
                <li>Leveraged Big Data tools such as PySpark, Hive, and cloud services to build scalable data pipelines for high-volume analytics.</li>
                <li>Refined dependent-variable design and introduced market-aligned exclusion logic to reduce data noise, resulting in an 8.5% lift in defaulter sensitivity and a 0.3% gain in Gini and capture rate.</li>
                <li>Optimized credit line increase thresholds, improving the identification of high-risk customers by 2% and strengthening portfolio-level risk controls.</li>
              </ul>
            </div>

            <div class="item">
              <h4>American Express — Internship</h4>
              <p class="muted">Modeling & variable rationalization</p>
              <ul>
                <li>Designed a two-step variable rationalization framework using K-Means clustering for functional grouping and SHAP, PDP, ALE for importance scoring.</li>
                <li>Applied Bayesian optimization for hyperparameter tuning to address overfitting in prior models.</li>
                <li>Developed a metric using basis points drop per variable in Gini and capture rate to assess model stability.</li>
                <li>Achieved a 50% reduction in model variables and a 30% improvement in model stability for commercial risk models managing $100B exposures. Received a Pre-Placement Offer (PPO).</li>
                <div class="links"><a href="https://www.linkedin.com/in/archit-jain-4b027761/" target="_blank" rel="noopener noreferrer">Manager: Archit Jain</a></div>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- International Experience -->
      <section id="international-experience">
        <div class="section-head" onclick="toggle('int-body')">
          <div>
            <h3 class="section-title">International Experience</h3>
            <div class="section-meta">Competitions & conferences</div>
          </div>
        </div>
        <div id="int-body" class="content collapsed">
          <div class="item">
            <h4>Seismic Design Competition — San Francisco, USA</h4>
            <p class="muted">EERI IITB Student Chapter</p>
            <ul>
              <li>Core member; secured 8th place internationally as the sole Indian team (30+ universities across 10+ countries).</li>
              <li>Engineered a 19-storey skyscraper with 4 sky bridges; generated $0.38M+ simulated revenue while ensuring negligible rooftop acceleration under seismic loading.</li>
              <li>Developed 3D models and renderings using 3ds Max, Revit, V-Ray; integrated LEED-compliant sustainable features.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Research & Development Projects -->
      <section id="research">
        <div class="section-head" onclick="toggle('research-body')">
          <div>
            <h3 class="section-title">Research & Development Projects</h3>
            <div class="section-meta">BTPs, lab projects & guides</div>
          </div>
        </div>

        <div id="research-body" class="content collapsed">
          <div class="item-grid">
            <div class="item">
              <h4>A Vision-Driven MARL Framework for Real-Time Traffic Signal Optimization</h4>
              <p>Designed a real-time vehicle detection framework with adaptive background modeling and foreground isolation, integrated into a hierarchical MARL model for signal optimization.</p>
              <ul>
                <li>Adaptive background modeling & differencing pipeline (grayscale, binarization, morphological ops); 61.5× faster than K-means.</li>
                <li>DBSCAN used for vehicle detection on foreground; 2.3× faster than YOLO with comparable/better accuracy.</li>
                <li>Spatial-Temporal-Decoupled Masked Pre-training for forecasting traffic patterns.</li>
                <li>Integrated SUMO & LibSignal with MARL for proactive intersection control.</li>
                <div class="links">
                  <a href="https://drive.google.com/file/d/12JbkbaXc6_Ob8vs-hnuARdLMdhKwU72R/view" target="_blank" rel="noopener noreferrer">BTP Report</a>
                  <a href="https://scholar.google.com/citations?user=nM_oGqQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Guide</a>
                </div>
              </ul>
            </div>

            <div class="item">
              <h4>High-Resolution XRF Mapping of the Lunar Surface | Chandrayaan-2</h4>
              <p>High-res GeoTIFF mapping of XRF line ratios; awarded Gold at an ISRO challenge and selected for poster presentations.</p>
              <ul>
                <li>Generated XRF ratio maps at ~5.3 km/pixel resolution, processed spaceborne payload data and produced GeoTIFF outputs.</li>
                <li>Won Gold Medal in ISRO challenge; contributions covered in media and used by STAR Lab.</li>
                <li>InterIIT & ISRO collaborations with reproducible pipelines and GeoTIFF product delivery.</li>
                <div class="links">
                  <a href="https://github.com/hrithikM86/InterIIT" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://www.star-iitb.in/" target="_blank" rel="noopener noreferrer">STAR Lab</a>
                </div>
              </ul>
            </div>

            <div class="item">
              <h4>Enhanced Speech-Based Pipeline for Detecting Parkinson’s Disease</h4>
              <p>OpenSmile pipeline with mRMR features, SHAP validation, LSTM & decision tree models with strong ROC performance.</p>
              <ul>
                <li>Feature extraction using OpenSmile; mRMR for feature selection; model interpretability via SHAP.</li>
                <li>Built LSTM and tree-based classifiers and validated using ROC curves and cross-validation.</li>
                <div class="links"><a href="https://drive.google.com/file/d/11CBdK_CVs3tUaXSHTrg8H9I78apUTcpE/view" target="_blank" rel="noopener noreferrer">Report</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Classification, Segmentation, and GANs on Concrete Crack Surfaces</h4>
              <p>GAN-driven augmentation plus ResNet50 classifier and U-Net segmentation with high accuracy & Dice/IoU metrics.</p>
              <ul>
                <li>DCGAN for synthetic crack generation; ResNet50 fine-tuned for classification — 99.3% accuracy, F1 99%.</li>
                <li>U-Net segmentation in TensorFlow achieving Dice Coefficient 75.3% and Mean IoU 61.3%.</li>
                <div class="links"><a href="https://github.com/hrithikM86/CS490-RnD-Classification-Segmentation-and-GAN-implementation-on-Concrete-Crack-Images/tree/main" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Data-Driven Dashboard for Public Health Analytics | Maharashtra</h4>
              <p>Dashboard to analyze district-level mental health trends and construct a 'Health Index' to highlight service gaps post-COVID.</p>
              <ul>
                <li>Analyzed district-level trends; found a 6× rise in certain conditions post-COVID.</li>
                <li>Engineered a Health Index to identify 11/34 districts with suboptimal services.</li>
                <div class="links">
                  <a href="https://github.com/hrithikM86/DH307-Development-Of-An-Integrated-Dashboard-For-Public-Health-Systems" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://drive.google.com/file/d/1lcJPyNfwnnUf7R-Rm_Mb3eqABJe_uBY6/view" target="_blank" rel="noopener noreferrer">Report</a>
                </div>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <!-- Technical Projects (full list preserved) -->
      <section id="technical-projects">
        <div class="section-head" onclick="toggle('technical-body')">
          <div>
            <h3 class="section-title">Technical Projects</h3>
            <div class="section-meta">Course projects, club projects & competitions</div>
          </div>
        </div>

        <div id="technical-body" class="content collapsed">
          <!-- Full long list preserved from README (each project expanded) -->
          <div class="item-grid">

            <div class="item">
              <h4>Star-Tracker based Attitude Determination System (STADS)</h4>
              <p>Student Satellite Program (SatLab). Guide: Prof. Varun Bhalerao.</p>
              <ul>
                <li>Enhanced Lost-in-Space star-matching algorithm — reduced hardware runtime by 50%.</li>
                <li>Optimized matching & estimation using Genetic Algorithm, achieved benchmark accuracy: 87% across 4 constellations within 36 arc-seconds error.</li>
                <li>Integrated camera + Raspberry Pi for Hardware-in-the-Loop simulations; automated 3-stage pipeline for headless startup.</li>
                <div class="links"><a href="https://www.aero.iitb.ac.in/satlab/stads.php" target="_blank" rel="noopener noreferrer">SatLab STADS</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Multi-Objective Optimization & Uncertainty Analysis of the Lake Problem</h4>
              <p>Course project. Guide: Prof. Riddhi Singh.</p>
              <ul>
                <li>Stochastic optimization model balancing environmental and economic objectives for lake pollution control.</li>
                <li>Monte Carlo uncertainty analysis for robust decision-making.</li>
                <li>Applied NSGA-II and MOEA/D to generate Pareto fronts and identify trade-offs.</li>
                <div class="links"><a href="https://github.com/hrithikM86/Stochastic-Multi-Objective-Optimization-and-Uncertainty-Analysis-of-the-Lake-Problem" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Optimizing Stock Trading with Reinforcement Learning</h4>
              <p>Finance Club project — OpenAI Gym, Actor-Critic (DDPG).</p>
              <ul>
                <li>Explored DQN and DDPG. Built RL trading environment with Actor-Critic (DDPG).</li>
                <li>Designed action space & reward function for portfolio optimization on GSPC2018 data.</li>
                <li>Demonstrated profit: $140 from $5,000 seed investment.</li>
                <div class="links"><a href="https://github.com/hrithikM86/Optimizing-Stock-Trading-with-Reinforcement-Learning" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Attendance Mate — Face Recognition Attendance System</h4>
              <p>Selected & funded under The SANDBOX Program at IIT Bombay.</p>
              <ul>
                <li>Used MTCNN for face detection; Keras-VGGFace for embeddings.</li>
                <li>Designed a Siamese network with triplet loss — achieved 87.1% accuracy.</li>
                <li>Used students’ phones as capture devices; cost-effective deployment model.</li>
                <div class="links"><a href="https://github.com/hrithikM86/Attendance-Mate-Face-Recognition-Attendance-System/tree/main" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Sentiment Analysis of Customer Reviews for Singapore Airlines (NLP)</h4>
              <p>Course project. Guide: Prof. Abir De.</p>
              <ul>
                <li>Preprocessing with NLTK (tokenize, stopwords), trained CBOW & Skip-Gram from scratch.</li>
                <li>Compared pre-trained Word2Vec vs trained embeddings; models: SVM, XGBoost, Neural Nets.</li>
                <li>Achieved 91% accuracy for 5-class sentiment classification; used PCA for embedding visualization.</li>
                <div class="links"><a href="https://github.com/hrithikM86/CS419-Sentiment-Analysis-of-Customer-Reviews-for-Singapore-Airlines-using-NLP/tree/main" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Deepfakes: GAN-based Face-swapping</h4>
              <p>GAN experiments in TensorFlow & PyTorch.</p>
              <ul>
                <li>Implemented face-swapping and attribute editing using AttGAN and related GAN models.</li>
                <li>Improved practical understanding of GAN training stability and facial attribute manipulation.</li>
                <div class="links"><a href="https://github.com/hrithikM86/Deepfakes-GAN-based-Face-swapping" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>GCON-VEGATHON | IEEE-GCON 2023</h4>
              <ul>
                <li>Top-15 semi-finalist out of 50+ teams.</li>
                <li>Proposed bare-metal embedded design with OV2640 image sensor; feature extraction on VEGA processor.</li>
                <li>Designed PCB for camera+VEGA board integration.</li>
                <div class="links"><a href="https://event.iitg.ac.in/GCON2023/" target="_blank" rel="noopener noreferrer">Event</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>AI-Powered PDF Chatbot</h4>
              <ul>
                <li>NLP-based Q&A bot: embeddings + similarity search (FAISS) + LangChain + OpenAI API.</li>
                <li>Implemented document chunking and similarity search across 1000+ chunks for fast retrieval.</li>
                <div class="links"><a href="https://github.com/hrithikM86/AI-Powered-Chatbot" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Neural Networks & Large Language Models</h4>
              <ul>
                <li>Built Gradio QnA bot with FLAN-T5 (GPU accelerated).</li>
                <li>Custom binary neural network in PyTorch — 81% accuracy.</li>
                <li>BERT-based sentiment analysis with Gradio — 85% accuracy.</li>
                <div class="links"><a href="https://github.com/hrithikM86/Neural-Networks-and-Large-Language-Models/tree/main" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Understanding Credit Score Models</h4>
              <ul>
                <li>Preprocessing, oversampling, feature engineering.</li>
                <li>XGBoost classifier — 86% accuracy.</li>
                <div class="links"><a href="https://github.com/hrithikM86/Understanding-Credit-Score-Models/tree/main" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Great Lunar Expedition for Everyone (GLEE)</h4>
              <ul>
                <li>Global chipsat lunar science mission involvement.</li>
                <li>Processed seismic data with NumPy/Matplotlib/Pandas; implemented TDoA for source localization.</li>
                <div class="links"><a href="https://www.aero.iitb.ac.in/satlab/glee.php" target="_blank" rel="noopener noreferrer">GLEE</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Robotic Arm</h4>
              <ul>
                <li>Programmable robotic arm controlled via mobile app; MG996R & SG90 servos; Arduino UNO interface.</li>
                <li>Bluetooth to Arduino integration for mobile control.</li>
                <div class="links"><a href="https://github.com/hrithikM86/RoboCivs/tree/main" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Precipitation Prediction using ML</h4>
              <ul>
                <li>Random Forest & Logistic Regression; oversampling for class imbalance — 98.03% accuracy and 98.01% ROC-AUC.</li>
                <li>Feature selection via chi-squared test, EDA and preprocessing.</li>
                <div class="links"><a href="https://github.com/hrithikM86/Precipitation-Prediction-using-ML/tree/main" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Economic Evaluation of Jaipur Metro Phase-I</h4>
              <ul>
                <li>30-year cost-benefit analysis and forecasting; monetized travel time savings and VOC savings.</li>
                <li>Sensitivity analysis on demand, discount rate and cost overruns.</li>
                <li>Results: Economic IRR = <strong>18.6%</strong>; ENPV = <strong>Rs. 5,598 Cr</strong>; Financial IRR = <strong>8.24%</strong>.</li>
                <div class="links"><a href="https://drive.google.com/file/d/1U5En6AjQqfEWCMDEojTa4Ltz4vm29C1G/view" target="_blank" rel="noopener noreferrer">Report</a></div>
              </ul>
            </div>

            <div class="item">
              <h4>Urban Travel Demand Modeling & Traffic Assignment</h4>
              <ul>
                <li>Household trip production models (regression + dummy variables); matrix-based least squares estimation.</li>
                <li>Validated via R², t-tests, F-statistics; calibrated gravity models; implemented capacity restraint, MSA and Frank–Wolfe for traffic assignment.</li>
              </ul>
            </div>

            <div class="item">
              <h4>Traffic Signal Design & Analysis</h4>
              <ul>
                <li>Processed real-time traffic data; designed optimized signal timing plans and simulated alternatives in VISSIM.</li>
                <li>Formulated data-driven strategies to reduce congestion and conflicts.</li>
              </ul>
            </div>

            <div class="item">
              <h4>More Capstone & Course Projects</h4>
              <p class="muted small">Other projects (concrete crack detection, health dashboard, MARL traffic, star-tracker GA tuning, etc.) are preserved in full from the README. All links remain intact.</p>
            </div>

          </div>
        </div>
      </section>

      <!-- Positions of Responsibility -->
      <section id="positions-of-responsibility">
        <div class="section-head" onclick="toggle('pos-body')">
          <div>
            <h3 class="section-title">Positions of Responsibility</h3>
            <div class="section-meta">Leadership & mentoring</div>
          </div>
        </div>
        <div id="pos-body" class="content collapsed">
          <div class="item-grid">
            <div class="item">
              <h4>Electrical Subsystem Head | Student Satellite Program (SatLab)</h4>
              <ul>
                <li>Led a 9-member team for Hardware-in-the-Loop simulation of STADS.</li>
                <li>Conducted a 3-step recruitment selecting 6 of 50+ candidates.</li>
                <li>Designed and mentored two hardware projects for mini-project round.</li>
              </ul>
            </div>

            <div class="item">
              <h4>Senior Department Academic Mentor & Subgroup Head</h4>
              <ul>
                <li>Monitored academic performance of 6 sophomores; led a 6-member survey team; received DAMP Special Recognition.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills & Courses -->
      <section id="skills-and-courses">
        <div class="section-head" onclick="toggle('skills-body')">
          <div>
            <h3 class="section-title">Skills & Relevant Courses</h3>
            <div class="section-meta">Math, Programming & online specializations</div>
          </div>
        </div>
        <div id="skills-body" class="content collapsed">
          <table>
            <thead>
              <tr><th>Category</th><th>Details</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Mathematics</strong></td><td>Calculus, Differential Equations, Linear Algebra, Probabilistic & Statistical Methods in Civil Engineering</td></tr>
              <tr><td><strong>Programming</strong></td><td>Data Structures & Algorithms, DAA, Computer Networks, Intro to ML, Logic for CS, Programming & Utilization</td></tr>
              <tr><td><strong>Online Courses</strong></td><td>Deep Learning (Andrew Ng), Machine Learning, NLP Specialization, Data Science Bootcamp, MATLAB Onramp</td></tr>
              <tr><td><strong>Skills</strong></td><td>C/C++, Python, OpenCV, MATLAB, TensorFlow, PyTorch, Scikit-learn, PySpark, OpenAI Gym</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Extracurricular -->
      <section id="extracurricular-activities">
        <div class="section-head" onclick="toggle('extra-body')">
          <div>
            <h3 class="section-title">Extracurricular Activities</h3>
            <div class="section-meta">Teaching, volunteering & competitions</div>
          </div>
        </div>
        <div id="extra-body" class="content collapsed">
          <ol>
            <li><strong>2024:</strong> Guided 12+ students in developing a CNN-based ASL video-to-text model at SoC.</li>
            <li><strong>2024:</strong> Facilitated an NLP Shakespearean chatbot project at WIDS for 12+ students.</li>
            <li><strong>2022:</strong> Built WiFi-controlled racing bot (ESP32); Bluetooth robotic arm with Arduino UNO.</li>
            <li><strong>2022:</strong> Mentored 10+ students at WIDS; volunteered 80+ hours for UMMEED (NSS).</li>
            <li><strong>2022:</strong> Raised ₹1.5 Lakhs within a week for a hostel staff member’s medical treatment.</li>
          </ol>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact">
        <div class="section-head" onclick="toggle('contact-body')">
          <div>
            <h3 class="section-title">Contact</h3>
            <div class="section-meta">Email, resume & links</div>
          </div>
        </div>
        <div id="contact-body" class="content collapsed">
          <p class="muted">Replace the email and resume link below with your live ones before publishing.</p>
          <p><strong>Email:</strong> <a href="mailto:hrithik@example.com">hrithik@example.com</a></p>
          <div class="links">
            <a href="#" target="_blank" rel="noopener noreferrer">Resume (replace link)</a>
            <a href="https://github.com/hrithikM86" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

    </main>

    <footer>
      Content preserved from your README. Save this as <code>index.html</code> and replace the placeholder email/resume. :contentReference[oaicite:1]{index=1}
    </footer>
  </div>

  <!-- Vanilla JS: toggle sections, nav, smooth scroll -->
  <script>
    function toggle(id){
      const el = document.getElementById(id);
      if(!el) return;
      if(el.classList.contains('collapsed')) openSec(el);
      else closeSec(el);
    }
    function openSec(el){
      el.classList.remove('collapsed');
      el.style.maxHeight = el.scrollHeight + 40 + 'px';
      setTimeout(()=> el.style.maxHeight = 'none', 380);
    }
    function closeSec(el){
      // accept either element or id
      if(typeof el === 'string') el = document.getElementById(el);
      if(!el) return;
      el.style.maxHeight = el.scrollHeight + 'px';
      requestAnimationFrame(()=> { el.style.maxHeight = '0px'; setTimeout(()=> el.classList.add('collapsed'), 360); });
    }
    function navTo(e,id){
      if(e) e.preventDefault();
      const sec = document.getElementById(id);
      if(!sec) return;
      // expand if there is a body element with -body suffix
      const body = document.getElementById(id+'-body') || document.getElementById(id+'-content') || document.getElementById(id+'-section') || null;
      // our layout uses ids like 'research-body' etc; but fallback to open section content by query
      const contentCandidate = document.querySelector('#'+id+' .content') || document.getElementById(id+'-body') || document.getElementById(id+'-content');
      if(contentCandidate && contentCandidate.classList.contains('collapsed')) openSec(contentCandidate);
      sec.scrollIntoView({behavior:'smooth', block:'start'});
      sec.setAttribute('tabindex','-1');
      setTimeout(()=> { sec.focus({preventScroll:true}); sec.removeAttribute('tabindex'); },700);
    }

    // On load: nothing expanded; open key small sections on mobile for convenience
    document.addEventListener('DOMContentLoaded', ()=>{
      if(window.innerWidth < 600){
        const e = document.getElementById('education-body');
        const c = document.getElementById('contact-body');
        if(e) openSec(e);
        if(c) openSec(c);
      }
      // if location hash present, try to open the target section
      if(location.hash){
        const id = location.hash.replace('#','');
        const sec = document.getElementById(id);
        if(sec) navTo(null,id);
      }
    });

    // Collapse expanded sections when clicking outside (desktop convenience)
    document.addEventListener('click', (e)=>{
      if(e.target.closest('.content') || e.target.closest('.section-head') || e.target.closest('.card')) return;
      if(window.innerWidth > 900){
        document.querySelectorAll('.content').forEach(c => { if(!c.classList.contains('collapsed')) closeSec(c); });
      }
    });
  </script>
</body>
</html>
