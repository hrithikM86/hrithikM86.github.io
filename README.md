<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hrithik Mhatre | Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* --- CSS Variables --- */
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #64748b;
            --light: #f8fafc;
            --dark: #1e293b;
            --gray: #94a3b8;
            --border-radius: 8px;
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --transition: all 0.3s ease;
        }

        /* --- Base Styles --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--dark);
            background-color: var(--light);
            padding: 0;
            margin: 0;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* --- Typography --- */
        h1, h2, h3, h4 {
            color: var(--dark);
            font-weight: 600;
            line-height: 1.3;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 1.8rem;
            margin: 2.5rem 0 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--primary);
            display: inline-block;
        }

        p {
            margin-bottom: 1rem;
        }

        a {
            color: var(--primary);
            text-decoration: none;
            transition: var(--transition);
        }

        a:hover {
            color: var(--primary-dark);
        }

        /* --- Header --- */
        header {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
            padding: 3rem 0;
            text-align: center;
            margin-bottom: 2rem;
        }

        .header-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .tagline {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: rgba(255, 255, 255, 0.9);
        }

        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-top: 1.5rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        /* --- Table of Contents --- */
        .toc-container {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 2rem;
            box-shadow: var(--shadow);
        }

        .toc-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 0.5rem;
            list-style: none;
        }

        .toc-list li {
            margin-bottom: 0.5rem;
        }

        .toc-list a {
            display: flex;
            align-items: center;
            padding: 0.5rem;
            border-radius: var(--border-radius);
            transition: var(--transition);
        }

        .toc-list a:hover {
            background-color: rgba(37, 99, 235, 0.1);
        }

        .toc-list i {
            margin-right: 0.5rem;
            width: 20px;
            text-align: center;
        }

        /* --- Section Styles --- */
        .section {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 2rem;
            box-shadow: var(--shadow);
        }

        /* --- Expandable Sections --- */
        .expandable-section {
            margin-bottom: 1rem;
            border: 1px solid #e2e8f0;
            border-radius: var(--border-radius);
            overflow: hidden;
        }

        .section-header {
            background-color: #f8fafc;
            padding: 1rem 1.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: var(--transition);
        }

        .section-header:hover {
            background-color: #f1f5f9;
        }

        .section-header h3 {
            margin: 0;
            font-size: 1.2rem;
            color: var(--dark);
        }

        .section-icon {
            transition: var(--transition);
        }

        .section-content {
            padding: 0;
            max-height: 0;
            overflow: hidden;
            transition: var(--transition);
        }

        .section-content.active {
            padding: 1.5rem;
            max-height: 1000px;
        }

        .section-content ul {
            padding-left: 1.5rem;
            margin-bottom: 1rem;
        }

        .section-content li {
            margin-bottom: 0.5rem;
        }

        /* --- Links Container --- */
        .links-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1rem 0;
        }

        .link-item {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background-color: rgba(37, 99, 235, 0.1);
            border-radius: 50px;
            font-size: 0.9rem;
            transition: var(--transition);
        }

        .link-item:hover {
            background-color: rgba(37, 99, 235, 0.2);
        }

        /* --- Table Styles --- */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }

        th, td {
            padding: 0.75rem;
            text-align: left;
            border-bottom: 1px solid #e2e8f0;
        }

        th {
            background-color: #f8fafc;
            font-weight: 600;
        }

        tr:hover {
            background-color: #f8fafc;
        }

        /* --- Footer --- */
        footer {
            background-color: var(--dark);
            color: white;
            text-align: center;
            padding: 2rem 0;
            margin-top: 3rem;
        }

        /* --- Responsive Design --- */
        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }
            
            h2 {
                font-size: 1.5rem;
            }
            
            .toc-list {
                grid-template-columns: 1fr;
            }
            
            .contact-info {
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="container">
            <div class="header-content">
                <h1>Hrithik Mhatre</h1>
                <p class="tagline">B.Tech in Civil Engineering with Minor in Computer Science | IIT Bombay</p>
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>hrithik.mhatre@example.com</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>+91 98765 43210</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Mumbai, India</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="container">
        <!-- Table of Contents -->
        <div class="toc-container">
            <h2>Table of Contents</h2>
            <ul class="toc-list">
                <li><a href="#education"><i class="fas fa-graduation-cap"></i> Education</a></li>
                <li><a href="#scholastic-achievements"><i class="fas fa-trophy"></i> Scholastic Achievements</a></li>
                <li><a href="#publications"><i class="fas fa-file-alt"></i> Publications</a></li>
                <li><a href="#professional-experience"><i class="fas fa-briefcase"></i> Professional Experience</a></li>
                <li><a href="#international-experience"><i class="fas fa-globe"></i> International Experience</a></li>
                <li><a href="#research-projects"><i class="fas fa-flask"></i> Research Projects</a></li>
                <li><a href="#technical-projects"><i class="fas fa-code"></i> Technical Projects</a></li>
                <li><a href="#positions-of-responsibility"><i class="fas fa-users"></i> Positions of Responsibility</a></li>
                <li><a href="#skills-and-courses"><i class="fas fa-cogs"></i> Skills & Courses</a></li>
                <li><a href="#extracurricular-activities"><i class="fas fa-running"></i> Extracurricular Activities</a></li>
            </ul>
        </div>

        <!-- Education Section -->
        <section id="education" class="section">
            <h2>Education</h2>
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Indian Institute of Technology (IIT) Bombay</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <p><strong>Bachelor of Technology in Civil Engineering with a Minor in Computer Science and Engineering</strong></p>
                    <p><strong>GPA:</strong> 8.95/10</p>
                    <p><strong>Graduated:</strong> 2025</p>
                </div>
            </div>
        </section>

        <!-- Scholastic Achievements Section -->
        <section id="scholastic-achievements" class="section">
            <h2>Scholastic Achievements</h2>
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Academic Excellence</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <ol>
                        <li>Graduated with a rank of 7 out of 150+ students in the B.Tech Civil Engineering program at IIT Bombay</li>
                        <li>Secured a perfect 10/10 Semester Grade Point Average (CGPA) during the 8th semester at IIT Bombay</li>
                        <li>Achieved a 99.17th percentile in the Joint Entrance Examination Main among over 1.5 million applicants</li>
                        <li>Secured a position in the top 2 percentile in JEE Advanced, competing among 0.15+ million candidates</li>
                    </ol>
                </div>
            </div>
        </section>

        <!-- Publications Section -->
        <section id="publications" class="section">
            <h2>Publications and Conferences</h2>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Journal Publication</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <p>Co-author. "Lunar Geochemistry from X-ray Line Flux Ratios Using CLASS on Chandrayaan-2." Submitted to <i>The Planetary Science Journal</i>. Received coverage in major Indian newspapers and articles.</p>
                    <div class="links-container">
                        <a href="https://arxiv.org/abs/2508.15563" target="_blank" class="link-item">
                            <i class="fas fa-file-pdf"></i> Paper
                        </a>
                        <a href="https://www.star-iitb.in/research/chandrayaan" target="_blank" class="link-item">
                            <i class="fas fa-newspaper"></i> News Coverage
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Conference Poster</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <p>Co-author. "Elemental Ratios from Chandrayaan-2: High-Resolution XRF Mapping of the Lunar Surface." Selected for poster presentation at the Lunar & Planetary Science Conference (LPSC), Houston, 2025.</p>
                    <div class="links-container">
                        <a href="https://drive.google.com/file/d/1fK12Lo3S24XXCxZ_2zx-pmMl9QZu2jrh/view" target="_blank" class="link-item">
                            <i class="fas fa-image"></i> Poster
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Conference Poster</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <p>Kudupudi Puja Naga Prasanna, Hrithik Mhatre et al. "A Genetic Algorithm based Approach for Tuning Parameters of the Star Tracker Algorithms." Presented at the 42nd Meeting of the Astronomical Society of India, hosted by ISRO and IISc Bangalore, 2024.</p>
                    <div class="links-container">
                        <a href="https://drive.google.com/file/d/13UmXFrOX49zODJPpjmVfJ5SC3AHlIE-f/view" target="_blank" class="link-item">
                            <i class="fas fa-image"></i> Poster
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Preprint</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <p>Hrithik Mhatre et al. "Pixels to Signals: A Real-Time Framework for Traffic Demand Estimation."</p>
                    <div class="links-container">
                        <a href="https://drive.google.com/file/d/12JbkbaXc6_Ob8vs-hnuARdLMdhKwU72R/view" target="_blank" class="link-item">
                            <i class="fas fa-file-pdf"></i> Paper
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Preprint</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <p>Hrithik Mhatre et al. "Parkinson's Disease Detection Using ComParE Features with Machine Learning and Deep Learning Approaches."</p>
                    <div class="links-container">
                        <a href="https://drive.google.com/file/d/11CBdK_CVs3tUaXSHTrg8H9I78apUTcpE/view" target="_blank" class="link-item">
                            <i class="fas fa-file-pdf"></i> Paper
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Professional Experience Section -->
        <section id="professional-experience" class="section">
            <h2>Professional Experience</h2>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>American Express - Internship</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://www.linkedin.com/in/archit-jain-4b027761/" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Manager: Archit Jain
                        </a>
                    </div>
                    <ul>
                        <li>Designed a two-step variable rationalization framework by applying K-Means clustering to group variables by functional similarity and leveraging SHAP, PDP, and ALE to assign importance scores.</li>
                        <li>Utilized Bayesian optimization for hyperparameter tuning to address overfitting observed in previous-generation models.</li>
                        <li>Developed a novel metric using basis points (bps) drop per variable in Gini and capture rate to assess model stability.</li>
                        <li>Achieved a 50% reduction in model variables, driving a 30% improvement in model stability for commercial risk models managing $100B in exposures, Received a Pre-Placement Offer (PPO) for this work.</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- International Experience Section -->
        <section id="international-experience" class="section">
            <h2>International Experience</h2>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Seismic Design Competition, San Francisco, USA</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <ul>
                        <li>Core member of the Civil Engineering Tech Team, EERI IITB Student Chapter, contributing to Seismic Design Competition (SDC) solutions.</li>
                        <li>Secured 8th place internationally as the sole Indian team, competing against 30+ universities across 10+ countries.</li>
                        <li>Engineered a 19-storey skyscraper with 4 sky bridges, generating $0.38M+ revenue while ensuring negligible rooftop acceleration under seismic loading.</li>
                        <li>Developed detailed 3D exterior models and renderings using 3ds Max, Revit, and V-Ray, integrating the design with San Francisco's cityscape.</li>
                        <li>Implemented sustainable features for LEED compliance, including Xeriscaping for enhanced carbon absorption and Double Sheet Eco-Sense Glass for energy-efficient façade design.</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Research Projects Section -->
        <section id="research-projects" class="section">
            <h2>Research & Development Projects</h2>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>A Vision-Driven MARL Framework for Real-Time Traffic Signal Optimization</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://scholar.google.com/citations?user=nM_oGqQAAAAJ&hl=en" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Guide: Prof. Archak Mittal
                        </a>
                        <a href="https://drive.google.com/file/d/12JbkbaXc6_Ob8vs-hnuARdLMdhKwU72R/view" target="_blank" class="link-item">
                            <i class="fas fa-file-pdf"></i> BTP 1 Report
                        </a>
                        <a href="https://drive.google.com/file/d/1CWoLeOPZqNhGBXULxWbK-gzi0ut6awht/view" target="_blank" class="link-item">
                            <i class="fas fa-file-pdf"></i> BTP 2 Report
                        </a>
                    </div>
                    <ul>
                        <li>Designed a real-time vehicle detection framework with adaptive background modeling (61.5× faster than K-means) & foreground isolation using differencing, grayscale, binarization & morphological operations.</li>
                        <li>Applied DBSCAN for vehicle detection on foreground; 2.3× faster than YOLO with better accuracy.</li>
                        <li>Implemented Spatial-Temporal-Decoupled Masked Pre-training for forecasting traffic patterns.</li>
                        <li>Integrated real-time & forecasted traffic data using SUMO & LibSignal into a hierarchical Multi-Agent Reinforcement Learning (MARL) model for proactive traffic signal optimization at an intersection.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>High-Resolution XRF Mapping of the Lunar Surface | Chandrayaan-2</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://scholar.google.com/citations?user=DBpGmU4AAAAJ&hl=en" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Guide: Prof. Varun Bhalerao
                        </a>
                        <a href="https://www.star-iitb.in/" target="_blank" class="link-item">
                            <i class="fas fa-external-link-alt"></i> STAR Lab
                        </a>
                        <a href="#" target="_blank" class="link-item">
                            <i class="fas fa-trophy"></i> InterIIT Tech Meet 13.0
                        </a>
                        <a href="#" target="_blank" class="link-item">
                            <i class="fas fa-rocket"></i> ISRO
                        </a>
                        <a href="https://github.com/hrithikM86/InterIIT" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        <a href="https://drive.google.com/file/d/1an4j_8vN37vJ3eQEXD5U6o7toDzKZXHh/view" target="_blank" class="link-item">
                            <i class="fas fa-file-pdf"></i> Report
                        </a>
                    </div>
                    <ul>
                        <li>Won Gold Medal for ISRO's lunar mineral mapping challenge, competing against teams from 23 IITs.</li>
                        <li>Studied X-Ray fluorescence physics & elemental detection methods for solar flare incidents on the Moon.</li>
                        <li>Designed spectral data preprocessing techniques, including background modeling & Gaussian fitting.</li>
                        <li>Developed a novel algorithm for solar flare detection using Chandrayaan-2's Large Area Soft X-ray Spectrometer data by analyzing characteristic elemental XRF line strengths and temporal variations.</li>
                        <li>Used Gaussian Mixture Models (GMMs) for unsupervised clustering of lunar geochemical data, revealing compositional patterns.</li>
                        <li>Generated the first high-resolution spatial map of XRF line ratios as GeoTIFF files at 5.3 km/pixel resolution.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Enhanced Speech-Based Pipeline for Detecting Parkinson's Disease</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://scholar.google.com.au/citations?user=86tKGf8AAAAJ&hl=en" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Guide: Prof. Nirmal Punjabi
                        </a>
                        <a href="https://drive.google.com/file/d/11CBdK_CVs3tUaXSHTrg8H9I78apUTcpE/view" target="_blank" class="link-item">
                            <i class="fas fa-file-pdf"></i> Report
                        </a>
                    </div>
                    <ul>
                        <li>Proposed OpenSmile-based pipeline with mRMR-selected features & grid-tuned ML and LSTM models.</li>
                        <li>Used SHAP values to validate if top voice-related features align with established Parkinson's literature.</li>
                        <li>Applied decision trees on point features (ROC: 1) & fine-tuned LSTMs on time-series data (ROC: 0.98).</li>
                        <li>Outperformed the standard 22-feature baseline with an average 2% ROC gain on Parkinson's detection.</li>
                        <li>Demonstrated richness of speech data over phonation, achieving an average 13.6% higher classification ROC.</li>
                        <li>Showed that silence in PD data improves classification and highlights its diagnostic significance.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Classification, Segmentation, and GAN Implementation on Concrete Crack Surfaces</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://iitb.irins.org/profile/155634" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Guide: Prof. Alankar Alankar
                        </a>
                        <a href="https://www.me.iitb.ac.in/~alankar/" target="_blank" class="link-item">
                            <i class="fas fa-external-link-alt"></i> ICME and Materials Genome Lab
                        </a>
                        <a href="https://github.com/hrithikM86/CS490-RnD-Classification-Segmentation-and-GAN-implementation-on-Concrete-Crack-Images/tree/main" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        <a href="https://drive.google.com/file/d/1bP5sF61247_-N9RSpgAwL7Wza82byGiX/view" target="_blank" class="link-item">
                            <i class="fas fa-file-pdf"></i> Report
                        </a>
                    </div>
                    <ul>
                        <li>Engineered a Deep Convolutional GAN (DCGAN) to synthetically generate concrete crack images.</li>
                        <li>Fine-tuned a ResNet50 model to classify fine concrete cracks on lab-tested surfaces using both real and GAN-generated data, achieving 99.3% classification accuracy and an F1 score of 99%.</li>
                        <li>Implemented a U-Net architecture in TensorFlow for accurate crack surface segmentation, achieving a Dice Coefficient of 75.3% and a Mean Intersection over Union (IoU) of 61.3%.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Data-Driven Dashboard for Public Health Analytics | Public Health Dept. Maharashtra</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://iitb.irins.org/profile/52104" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Guide: Prof. Ganesh Ramkrishnan
                        </a>
                        <a href="https://github.com/hrithikM86/DH307-Development-Of-An-Integrated-Dashboard-For-Public-Health-Systems" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        <a href="https://drive.google.com/file/d/1lcJPyNfwnnUf7R-Rm_Mb3eqABJe_uBY6/view" target="_blank" class="link-item">
                            <i class="fas fa-file-pdf"></i> Report
                        </a>
                    </div>
                    <ul>
                        <li>Developed a data-driven dashboard for analytical insights on healthcare services in Maharashtra state.</li>
                        <li>Analyzed district-level trends in common, severe, and high-risk mental health conditions; assessed treatment accessibility and its influence on outcomes, uncovering a 6-fold rise in cases post-COVID.</li>
                        <li>Engineered a novel 'Health Index' variable using mental health metrics to quantify district-level healthcare conditions, whose scores identified 11 out of 34 districts with suboptimal services.</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Technical Projects Section -->
        <section id="technical-projects" class="section">
            <h2>Technical Projects</h2>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Star-Tracker based Attitude Determination System (STADS)</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://www.aero.iitb.ac.in/satlab/stads.php" target="_blank" class="link-item">
                            <i class="fas fa-external-link-alt"></i> Student Satellite Program
                        </a>
                        <a href="https://scholar.google.com/citations?user=DBpGmU4AAAAJ&hl=en" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Guide: Prof. Varun Bhalerao
                        </a>
                    </div>
                    <ul>
                        <li>Enhanced Lost-in-Space star-matching algorithm, reducing hardware run time by 50%.</li>
                        <li>Optimized star matching, verification, and estimation algorithms using Genetic Algorithm, achieving benchmark accuracy of 87% of images from 4 diverse constellations within 36 arc-seconds error.</li>
                        <li>Integrated a camera and Raspberry Pi for Hardware-in-the-Loop Simulations & developed a robust script to automate the 3-stage algorithmic pipeline during headless mode startup.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Multi-Objective Optimization and Uncertainty Analysis of the Lake Problem</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://scholar.google.com/citations?user=VpsQcKoAAAAJ&hl=en" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Guide: Prof. Riddhi Singh
                        </a>
                        <a href="#" target="_blank" class="link-item">
                            <i class="fas fa-book"></i> Course Project
                        </a>
                        <a href="https://github.com/hrithikM86/Stochastic-Multi-Objective-Optimization-and-Uncertainty-Analysis-of-the-Lake-Problem" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        <a href="https://drive.google.com/file/d/1PYypVYhoAfWQLZlBek_08MFmRB7cZZXu/view" target="_blank" class="link-item">
                            <i class="fas fa-file-pdf"></i> Report
                        </a>
                    </div>
                    <ul>
                        <li>Developed a stochastic optimization model to balance multiple environmental and economic goals in the lake pollution problem.</li>
                        <li>Incorporated uncertainty analysis using Monte Carlo simulations to improve robustness of decision-making.</li>
                        <li>Applied NSGA-II and MOEA/D to generate Pareto fronts, highlighting trade-offs and identifying optimal solutions.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Optimizing Stock Trading with Reinforcement Learning</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="#" target="_blank" class="link-item">
                            <i class="fas fa-university"></i> Finance Club, IIT Bombay
                        </a>
                        <a href="https://github.com/hrithikM86/Optimizing-Stock-Trading-with-Reinforcement-Learning" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <ul>
                        <li>Utilized OpenAI Gym to explore Reinforcement Learning algorithms, including DQN and DDPG.</li>
                        <li>Developed an RL-based trading environment using the Actor-Critic Model (DDPG) with a robust action space and reward function for portfolio optimization on G^SPC2018 stocks.</li>
                        <li>Achieved a profit of $140 from a $5,000 investment, demonstrating the effectiveness of the RL-based approach.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Attendance Mate - Face Recognition Attendance System</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://makerbhavanfoundation.org/programs/" target="_blank" class="link-item">
                            <i class="fas fa-external-link-alt"></i> The SANDBOX Program
                        </a>
                        <a href="https://github.com/hrithikM86/Attendance-Mate-Face-Recognition-Attendance-System/tree/main" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <ul>
                        <li>Developed a reliable and cost-effective attendance system utilizing students' phones to record attendance.</li>
                        <li>Engineered a robust pipeline using the MTCNN algorithm for accurate student face extraction, followed by Keras-VGGFace to generate face embedding vectors for enhanced recognition.</li>
                        <li>Designed and fine-tuned a Siamese neural network with triplet loss, achieving 87.1% accuracy.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Sentiment Analysis of Customer Reviews for Singapore Airlines using NLP</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://scholar.google.co.in/citations?user=_9ZKKbIAAAAJ&hl=en" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Guide: Prof. Abir De
                        </a>
                        <a href="https://github.com/hrithikM86/CS419-Sentiment-Analysis-of-Customer-Reviews-for-Singapore-Airlines-using-NLP/tree/main" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <ul>
                        <li>Developed a preprocessing pipeline, including tokenization and stopword removal using NLTK.</li>
                        <li>Trained CBOW & Skip-Gram embeddings from scratch, used PCA for visualization, and compared results with pre-trained Word2Vec across ML frameworks including SVM, XGBoost, and Neural Networks.</li>
                        <li>Selected the best techniques to achieve 71% accuracy in 5-class sentiment classification of reviews.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Deepfakes: GAN-based Face-swapping</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://github.com/hrithikM86/Deepfakes-GAN-based-Face-swapping" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <ul>
                        <li>Advanced skills in modern deep learning frameworks and OOP, specializing in neural networks.</li>
                        <li>Studied AttGAN & Deepfakes, implemented GAN-based face-swapping using TensorFlow & PyTorch.</li>
                        <li>Enhanced facial attribute editing skills & deepened understanding of GANs through project execution.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>GCON-VEGATHON | IEEE-GCON 2023 | C-DAC & IIT Guwahati</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://event.iitg.ac.in/GCON2023/" target="_blank" class="link-item">
                            <i class="fas fa-external-link-alt"></i> Website
                        </a>
                    </div>
                    <ul>
                        <li>Selected as a top 15 semi-finalist out of 50+ competitors, showcasing exceptional skills & teamwork.</li>
                        <li>Proposed a bare-metal embedded system with an OV2640 image sensor to capture low-resolution images and efficiently extract star centroids using a feature extraction algorithm on a VEGA processor.</li>
                        <li>Designed a Printed Circuit Board (PCB) to seamlessly integrate the camera and VEGA board.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>AI powered chatbot</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://github.com/hrithikM86/AI-Powered-Chatbot" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <ul>
                        <li>Developed an AI-powered PDF chatbot using NLP, word embeddings, and similarity search techniques.</li>
                        <li>Configured OpenAI's API key for language processing access & establishing a question-answering chain.</li>
                        <li>Implemented document similarity search with FAISS, comparing 1000+ text chunks using LangChain.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Neural Networks and Large Language Models</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://github.com/hrithikM86/Neural-Networks-and-Large-Language-Models/tree/main" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <ul>
                        <li>Developed a Gradio QnA bot with FLAN-T5 and GPU acceleration for real-time text generation.</li>
                        <li>Built a custom binary neural network for image classification in PyTorch, achieving 81% accuracy.</li>
                        <li>Developed a BERT-based sentiment analysis model with a Gradio interface, achieving 85% accuracy.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Understanding Credit Score Models</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://github.com/hrithikM86/Understanding-Credit-Score-Models/tree/main" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <ul>
                        <li>Performed data preprocessing, oversampling, feature engineering and EDA on the lending data.</li>
                        <li>Employed the XGBoost algorithm to classify individuals' credit scores, achieving an accuracy of 86%.</li>
                        <li>Researched credit scores, scoring techniques, and AI/ML applications in credit score modeling.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Great Lunar Expedition for Everyone (GLEE)</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://www.aero.iitb.ac.in/satlab/glee.php" target="_blank" class="link-item">
                            <i class="fas fa-external-link-alt"></i> Website
                        </a>
                    </div>
                    <ul>
                        <li>The Great Lunar Expedition for Everyone is a global mission for lunar surface science using chipsats.</li>
                        <li>Cleaned, processed & analyzed earthquake data using Python libraries Numpy, Matplotlib & Pandas.</li>
                        <li>Implemented Time Difference of Arrival algorithm to accurately locate a single seismic wave source.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Robotic Arm</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://github.com/hrithikM86/RoboCivs/tree/main" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <ul>
                        <li>Creating a programmable robotic arm to perform specific movements, controlled via mobile application.</li>
                        <li>Implemented MG996R and SG90 Micro Servo Motors to achieve desired rotations in the robotic arm.</li>
                        <li>Created a versatile system linking mobile devices to control the robotic arm's specific movements.</li>
                        <li>Utilized Arduino UNO as the microcontroller to interface between Bluetooth module & mobile network.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Precipitation Prediction using ML</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://github.com/hrithikM86/Precipitation-Prediction-using-ML/tree/main" target="_blank" class="link-item">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <ul>
                        <li>Created ML models using Random Forest & Logistic Regression to accurately predict precipitation.</li>
                        <li>Handled class imbalance with oversampling, achieving 98.03% accuracy and 98.01% ROC-AUC score.</li>
                        <li>Used chi-squared test to select the best features for the model, performed data preprocessing & EDA.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Economic Evaluation of Jaipur Metro Phase-I</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://www.civil.iitb.ac.in/~vedagiri/" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Guide: Prof. P. Vedagiri
                        </a>
                        <a href="https://drive.google.com/file/d/1U5En6AjQqfEWCMDEojTa4Ltz4vm29C1G/view" target="_blank" class="link-item">
                            <i class="fas fa-file-pdf"></i> Report
                        </a>
                    </div>
                    <ul>
                        <li>Performed a 30-year cost–benefit and financial analysis of Jaipur Metro (Phase-I), modelling capital & operating costs, maintenance, and salvage values.</li>
                        <li>Forecasted ridership growth and monetized user benefits (travel time savings, vehicle operating cost savings) to compute annual willingness-to-pay and total economic benefits.</li>
                        <li>Assessed externalities and environmental impacts (reduced emissions & congestion) and included them in the evaluation using standard shadow pricing adjustments.</li>
                        <li>Conducted sensitivity analysis on demand growth, discount rates, and cost overruns to test robustness of results and identify critical risk drivers.</li>
                        <li>Results: Economic IRR = <strong>18.6%</strong>, ENPV = <strong>Rs. 5,598 Cr</strong>, Financial IRR = <strong>8.24%</strong> — indicating strong economic justification, financial viability, and long-term sustainability.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Urban Travel Demand Modeling and Traffic Assignment</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://www.civil.iitb.ac.in/~kvkrao/" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Guide: Prof. K. V. Krishna Rao
                        </a>
                        <a href="#" target="_blank" class="link-item">
                            <i class="fas fa-book"></i> Course Project
                        </a>
                    </div>
                    <ul>
                        <li>Formulated household trip production models using regression techniques with socio-economic and land-use dummy variables, applying matrix-based least squares estimation.</li>
                        <li>Performed rigorous statistical validation using <em>R²</em>, <em>t-tests</em>, and <em>F-statistics</em> to ensure model robustness and reliability.</li>
                        <li>Calibrated gravity models for inter-zonal trip distribution, optimizing friction factors via the Bureau of Public Roads (BPR) procedure.</li>
                        <li>Implemented traffic assignment algorithms including capacity restraint, Method of Successive Averages (MSA), and Frank–Wolfe to achieve user-equilibrium traffic flows across the network.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Traffic Signal Design and Analysis</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://www.civil.iitb.ac.in/~velaga/" target="_blank" class="link-item">
                            <i class="fas fa-user"></i> Guide: Prof. Nagendra R. Velaga
                        </a>
                        <a href="#" target="_blank" class="link-item">
                            <i class="fas fa-book"></i> Course Project
                        </a>
                    </div>
                    <ul>
                        <li>Processed <em>real-time traffic data</em> to build a structured dataset and estimate intersection load patterns.</li>
                        <li>Designed an optimized <em>signal timing plan</em> to improve intersection efficiency and minimize conflicts.</li>
                        <li>Simulated and evaluated alternative signal groups in <em>VISSIM</em> to determine the most effective configuration.</li>
                        <li>Formulated <em>data-driven strategies</em> to reduce congestion and ensure smoother traffic movement.</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Positions of Responsibility Section -->
        <section id="positions-of-responsibility" class="section">
            <h2>Positions of Responsibility</h2>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Electrical Subsystem Head | Student Satellite Program, IIT Bombay</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://www.aero.iitb.ac.in/satlab/" target="_blank" class="link-item">
                            <i class="fas fa-external-link-alt"></i> Learn More
                        </a>
                    </div>
                    <ul>
                        <li>Led a 9-member interdisciplinary team on Hardware In-Loop Simulation of the STADS module.</li>
                        <li>Executed a 3-step recruitment process to select 6 of 50+ applicants, evaluating their technical skills.</li>
                        <li>Successfully designed, mentored, and evaluated two technical hardware projects for the mini-project round.</li>
                    </ul>
                </div>
            </div>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Senior Department Academic Mentor & Subgroup Head | Civil Engineering Department</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <div class="links-container">
                        <a href="https://civildampiitb.github.io/" target="_blank" class="link-item">
                            <i class="fas fa-external-link-alt"></i> Learn More
                        </a>
                    </div>
                    <ul>
                        <li>Monitored the academic performance of 6 sophomores to provide personalized guidance and counseling.</li>
                        <li>Led a 6-member team to survey departmental needs and facilitate effective mentorship delivery.</li>
                        <li>Received the DAMP Special Recognition Award, given to 17 out of 400 students for exceptional contributions.</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Skills & Courses Section -->
        <section id="skills-and-courses" class="section">
            <h2>Skills & Relevant Courses</h2>
            
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mathematics</strong></td>
                        <td>Calculus, Differential Equations, Linear Algebra, Probabilistic and Statistical Methods in Civil Engineering</td>
                    </tr>
                    <tr>
                        <td><strong>Programming</strong></td>
                        <td>Data Structures and Algorithms (DSA), Design and Analysis of Algorithms (DAA), Computer Networks, Introduction to Machine Learning, Logic for Computer Science, Computer Programming and Utilization</td>
                    </tr>
                    <tr>
                        <td><strong>Online Courses</strong></td>
                        <td>Deep Learning Specialization by Andrew Ng, Machine Learning Specialization by Andrew Ng, Natural Language Processing Specialization, Data Science Bootcamp by WIDS, MATLAB Onramp</td>
                    </tr>
                    <tr>
                        <td><strong>Skills</strong></td>
                        <td>C/C++, Python, OpenCV, MATLAB, TensorFlow, PyTorch, Scikit-learn, PySpark, OpenAI Gym</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- Extracurricular Activities Section -->
        <section id="extracurricular-activities" class="section">
            <h2>Extracurricular Activities</h2>
            
            <div class="expandable-section">
                <div class="section-header">
                    <h3>Activities & Volunteering</h3>
                    <i class="fas fa-chevron-down section-icon"></i>
                </div>
                <div class="section-content">
                    <ol>
                        <li><strong>2024:</strong> Guided 12+ students in developing a CNN-based model that translates ASL live video to text at SoC.</li>
                        <li><strong>2024:</strong> Facilitated an NLP-based project for 12+ students at WIDS to build a Shakespearean language chatbot.</li>
                        <li><strong>2022:</strong> Participated in XLR8 and built an advanced WiFi-controlled racing bot using the ESP32 micro-controller.</li>
                        <li><strong>2022:</strong> Developed a Bluetooth-controlled robotic arm with Arduino UNO, capable of precise movements.</li>
                        <li><strong>2022:</strong> Participated in RC plane competition and built a high-performance aircraft showcasing technical skills.</li>
                        <li><strong>2022:</strong> Mentored 10+ students at WIDS, from fundamentals to developing and testing Machine Learning models.</li>
                        <li><strong>2022:</strong> Dedicated 80+ hours to impactful community service as a volunteer for UMMEED, an initiative under NSS.</li>
                        <li><strong>2022:</strong> Participated in the Versova Beach Cleanup organized by Abhyuday, IIT Bombay's social impact initiative.</li>
                        <li><strong>2022:</strong> Raised ₹1.5 Lakhs within a week to fund initial checkup and cancer treatment for a hostel staff member.</li>
                    </ol>
                </div>
            </div>
        </section>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2023 Hrithik Mhatre. All rights reserved.</p>
            <p>Designed with <i class="fas fa-heart" style="color: #e74c3c;"></i> for a better web experience</p>
        </div>
    </footer>

    <script>
        // Toggle expandable sections
        document.querySelectorAll('.section-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const icon = header.querySelector('.section-icon');
                
                // Toggle active class
                content.classList.toggle('active');
                
                // Rotate icon
                if (content.classList.contains('active')) {
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        });

        // Smooth scrolling for table of contents links
        document.querySelectorAll('.toc-list a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            });
        });

        // Auto-expand section when navigating via TOC
        window.addEventListener('hashchange', function() {
            const targetId = window.location.hash;
            if (targetId) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const expandableSection = targetSection.querySelector('.expandable-section');
                    if (expandableSection) {
                        const header = expandableSection.querySelector('.section-header');
                        const content = expandableSection.querySelector('.section-content');
                        const icon = expandableSection.querySelector('.section-icon');
                        
                        content.classList.add('active');
                        icon.style.transform = 'rotate(180deg)';
                    }
                }
            }
        });
    </script>
</body>
</html>
