<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hrithik Mhatre's Portfolio</title>
     <style>
    /* --- Minimalistic Styling --- */
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #222;
        background-color: #fafafa;
        margin: 0;
        padding: 0 20px;
    }
    
    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #007acc;
    }
    
    .section-title {
        cursor: pointer;
        padding: 10px 15px;
        margin: 10px 0 5px 0;
        background-color: #f5f5f5;
        border-left: 4px solid #007acc;
        font-weight: 600;
        transition: all 0.2s ease;
        border-radius: 4px;
    }
    
    .section-title:hover {
        background-color: #e0f0ff;
    }
    
    .link-container {
        margin: 5px 0 10px 20px;
        font-size: 0.95rem;
    }
    
    .link-container a {
        display: inline-block;
        margin-right: 10px;
        text-decoration: none;
        color: #007acc;
        transition: color 0.2s;
    }
    
    .link-container a:hover {
        text-decoration: underline;
        color: #005a99;
    }
    
    .section-content {
        margin-left: 20px;
        margin-bottom: 15px;
        display: none; /* Collapsed by default */
    }
    
    .section-content ul {
        padding-left: 20px;
    }
    
    .section-content li {
        margin-bottom: 5px;
    }
    </style>
</head>
<body>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#education">Education</a></li>
    <li><a href="#scholastic-achievements">Scholastic Achievements</a></li>
    <li><a href="#publications">Publications and Conferences</a></li>
    <li><a href="#professional-experience">Professional Experience</a></li>
    <li><a href="#international-experience">International Experience</a></li>
    <li><a href="#research-projects">Research & Development Projects</a></li>
    <li><a href="#technical-projects">Technical Projects</a></li>
    <li><a href="#positions-of-responsibility">Positions of Responsibility</a></li>
    <li><a href="#skills-and-courses">Skills and Relevant Courses</a></li>
    <li><a href="#extracurricular-activities">Extracurricular Activities</a></li>
</ul>

<h2 id="education">Education</h2>
<p><b>Indian Institute of Technology (IIT) Bombay</b><br>
Bachelor of Technology in Civil Engineering with a Minor in Computer Science and Engineering<br>
<b>GPA:</b> 8.95/10<br>
<b>Graduated:</b> 2025</p>

<h2 id="scholastic-achievements">Scholastic Achievements</h2>
<ol>
    <li>Graduated with a rank of 7 out of 150+ students in the B.Tech Civil Engineering program at IIT Bombay</li>
    <li>Secured a perfect 10/10 Semester Grade Point Average (CGPA) during the 8th semester at IIT Bombay</li>
    <li>Achieved a 99.17th percentile in the Joint Entrance Examination Main among over 1.5 million applicants</li>
    <li>Secured a position in the top 2 percentile in JEE Advanced, competing among 0.15+ million candidates</li>
</ol>


<h2 id="publications">Publications and Conferences</h2>

<ol>
  <li>
    <b>Journal Publication:</b><br>
    Co-author. "Lunar Geochemistry from X-ray Line Flux Ratios Using CLASS on Chandrayaan-2." 
    Submitted to <i>The Planetary Science Journal</i>. Received coverage in major Indian newspapers and articles.  
    <a href="https://arxiv.org/abs/2508.15563" target="_blank" rel="noopener noreferrer">Paper</a> | 
    <a href="https://www.star-iitb.in/research/chandrayaan" target="_blank" rel="noopener noreferrer">News Coverage</a>
  </li>

  <li>
    <b>Conference Poster:</b><br>
    Co-author. "Elemental Ratios from Chandrayaan-2: High-Resolution XRF Mapping of the Lunar Surface." 
    Selected for poster presentation at the Lunar & Planetary Science Conference (LPSC), Houston, 2025.  
    <a href="https://drive.google.com/file/d/1fK12Lo3S24XXCxZ_2zx-pmMl9QZu2jrh/view" target="_blank" rel="noopener noreferrer">Poster</a>
  </li>

  <li>
    <b>Conference Poster:</b><br>
    Kudupudi Puja Naga Prasanna, Hrithik Mhatre et al. "A Genetic Algorithm based Approach for Tuning Parameters of the Star Tracker Algorithms." 
    Presented at the 42nd Meeting of the Astronomical Society of India, hosted by ISRO and IISc Bangalore, 2024.  
    <a href="https://drive.google.com/file/d/13UmXFrOX49zODJPpjmVfJ5SC3AHlIE-f/view" target="_blank" rel="noopener noreferrer">Poster</a>
  </li>

  <li>
    <b>Preprint:</b><br>
    Hrithik Mhatre et al. "Pixels to Signals: A Real-Time Framework for Traffic Demand Estimation."  
    <a href="https://drive.google.com/file/d/12JbkbaXc6_Ob8vs-hnuARdLMdhKwU72R/view" target="_blank" rel="noopener noreferrer">Paper</a>
  </li>

  <li>
    <b>Preprint:</b><br>
    Hrithik Mhatre et al. "Parkinson's Disease Detection Using ComParE Features with Machine Learning and Deep Learning Approaches."  
    <a href="https://drive.google.com/file/d/11CBdK_CVs3tUaXSHTrg8H9I78apUTcpE/view" target="_blank" rel="noopener noreferrer">Paper</a>
  </li>
</ol>



<h2 id="professional-experience">Professional Experience</h2>

<div class="section-title" onclick="toggleSection('amex-content')">1. American Express - Internship &#9660;</div>

<div id="amex-content" class="section-content">
    <div class="link-container">
        <a href="https://www.linkedin.com/in/archit-jain-4b027761/" target="_blank">Manager : Archit Jain</a>
    </div>
    <ul>
        <li>Designed a two-step variable rationalization framework by applying K-Means clustering to group variables by functional similarity and leveraging SHAP, PDP, and ALE to assign importance scores.</li>
        <li>Utilized Bayesian optimization for hyperparameter tuning to address overfitting observed in previous-generation models.</li>
        <li>Developed a novel metric using basis points (bps) drop per variable in Gini and capture rate to assess model stability.</li>
        <li>Achieved a 50% reduction in model variables, driving a 30% improvement in model stability for commercial risk models managing $100B in exposures, Received a Pre-Placement Offer (PPO) for this work.</li>
    </ul>
</div>

<!-- <h2 id="professional-experience">Professional Experience - Full Time</h2>

<div class="section-title" onclick="toggleSection('amex-content', 'amex-links')">1. American Express &#9660;</div>

<div id="amex-content" class="section-content">
    <ul>
        <li>Designed a two-step variable rationalization framework by applying K-Means clustering to group variables by functional similarity and leveraging SHAP, PDP, and ALE to assign importance scores.</li>
        <li>Utilized Bayesian optimization for hyperparameter tuning to address overfitting observed in previous-generation models.</li>
        <li>Developed a novel metric using basis points (bps) drop per variable in Gini and capture rate to assess model stability.</li>
        <li>Achieved a 50% reduction in model variables, driving a 30% improvement in model stability for commercial risk models managing $100B in exposures.</li>
        <li>Received a Pre-Placement Offer (PPO) for this work.</li>
    </ul>
</div>

<div class="link-container" id="amex-links">
    <a href="https://www.linkedin.com/in/archit-jain-4b027761/" target="_blank">Manager : Archit Jain</a>
</div> -->



<h2 id="international-experience">International Experience</h2>
<div class="section-title" onclick="toggleSection('sdc-content', 'sdc-links')">1. Seismic Design Competition, San Francisco, USA &#9660;</div>

<div id="sdc-content" class="section-content">
    <ul>
        <li>Core member of the Civil Engineering Tech Team, EERI IITB Student Chapter, contributing to Seismic Design Competition (SDC) solutions.</li>
        <li>Secured 8th place internationally as the sole Indian team, competing against 30+ universities across 10+ countries.</li>
        <li>Engineered a 19-storey skyscraper with 4 sky bridges, generating $0.38M+ revenue while ensuring negligible rooftop acceleration under seismic loading.</li>
        <li>Developed detailed 3D exterior models and renderings using 3ds Max, Revit, and V-Ray, integrating the design with San Francisco’s cityscape.</li>
        <li>Implemented sustainable features for LEED compliance, including Xeriscaping for enhanced carbon absorption and Double Sheet Eco-Sense Glass for energy-efficient façade design.</li>
    </ul>
</div>



<h2 id="research-projects">Research & Development Projects</h2>

<!-- Traffic Signal Optimization Section -->
<div class="section-title" onclick="toggleSection('traffic-signal')">1. A Vision-Driven MARL Framework for Real-Time Traffic Signal Optimization &#9660;</div>
<div id="traffic-signal" class="section-content">
    <div class="link-container">
        <a href="https://scholar.google.com/citations?user=nM_oGqQAAAAJ&hl=en" target="_blank">Guide: Prof. Archak Mittal, Transportation Systems Engineering, IIT Bombay |</a>
        <a href="https://drive.google.com/file/d/12JbkbaXc6_Ob8vs-hnuARdLMdhKwU72R/view" target="_blank">BTP 1 Report |</a>
        <a href="https://drive.google.com/file/d/1CWoLeOPZqNhGBXULxWbK-gzi0ut6awht/view" target="_blank">BTP 2 Report</a>
    </div>
    <ul>
        <li>Designed a real-time vehicle detection framework with adaptive background modeling (61.5× faster than K-means) & foreground isolation using differencing, grayscale, binarization & morphological operations.</li>
        <li>Applied DBSCAN for vehicle detection on foreground; 2.3× faster than YOLO with better accuracy.</li>
        <li>Implemented Spatial-Temporal-Decoupled Masked Pre-training for forecasting traffic patterns.</li>
        <li>Integrated real-time & forecasted traffic data using SUMO & LibSignal into a hierarchical Multi-Agent Reinforcement Learning (MARL) model for proactive traffic signal optimization at an intersection.</li>
    </ul>
</div>

<!-- Lunar XRF Mapping Section -->
<div class="section-title" onclick="toggleSection('lunar-xrf')">2. High-Resolution XRF Mapping of the Lunar Surface | Chandrayaan-2 &#9660;</div>
<div id="lunar-xrf" class="section-content">
    <div class="link-container">
        <a href="https://scholar.google.com/citations?user=DBpGmU4AAAAJ&hl=en" target="_blank">Guide: Prof. Varun Bhalerao |</a>
        <a href="https://www.star-iitb.in/">STAR Lab |</a>
        <a href="#" target="_blank">InterIIT Tech Meet 13.0 |</a>
        <a href="#" target="_blank">ISRO |</a>
        <a href="https://github.com/hrithikM86/InterIIT" target="_blank">GitHub |</a>
        <a href="https://drive.google.com/file/d/1an4j_8vN37vJ3eQEXD5U6o7toDzKZXHh/view" target="_blank">Report</a>
    </div>
    <ul>
        <li>Won Gold Medal for ISRO’s lunar mineral mapping challenge, competing against teams from 23 IITs.</li>
        <li>Studied X-Ray fluorescence physics & elemental detection methods for solar flare incidents on the Moon.</li>
        <li>Designed spectral data preprocessing techniques, including background modeling & Gaussian fitting.</li>
        <li>Developed a novel algorithm for solar flare detection using Chandrayaan-2’s Large Area Soft X-ray Spectrometer data by analyzing characteristic elemental XRF line strengths and temporal variations.</li>
        <li>Used Gaussian Mixture Models (GMMs) for unsupervised clustering of lunar geochemical data, revealing compositional patterns.</li>
        <li>Generated the first high-resolution spatial map of XRF line ratios as GeoTIFF files at 5.3 km/pixel resolution.</li>
    </ul>
</div>

<!-- Parkinson's Disease Speech Detection Section -->
<div class="section-title" onclick="toggleSection('parkinson-speech')">3. Enhanced Speech-Based Pipeline for Detecting Parkinson’s Disease &#9660;</div>
<div id="parkinson-speech" class="section-content">
    <div class="link-container">
        <a href="https://scholar.google.com.au/citations?user=86tKGf8AAAAJ&hl=en" target="_blank">Guide: Prof. Nirmal Punjabi, Koita Centre for Digital Health, IIT Bombay |</a>
        <a href="https://drive.google.com/file/d/11CBdK_CVs3tUaXSHTrg8H9I78apUTcpE/view" target="_blank">Report</a>
    </div>
    <ul>
        <li>Proposed OpenSmile-based pipeline with mRMR-selected features & grid-tuned ML and LSTM models.</li>
        <li>Used SHAP values to validate if top voice-related features align with established Parkinson’s literature.</li>
        <li>Applied decision trees on point features (ROC: 1) & fine-tuned LSTMs on time-series data (ROC: 0.98).</li>
        <li>Outperformed the standard 22-feature baseline with an average 2% ROC gain on Parkinson’s detection.</li>
        <li>Demonstrated richness of speech data over phonation, achieving an average 13.6% higher classification ROC.</li>
        <li>Showed that silence in PD data improves classification and highlights its diagnostic significance.</li>
    </ul>
</div>

<!-- Concrete Crack Detection Section -->
<div class="section-title" onclick="toggleSection('crack-detection')">4. Classification, Segmentation, and GAN Implementation on Concrete Crack Surfaces &#9660;</div>
<div id="crack-detection" class="section-content">
    <div class="link-container">
        <a href="https://iitb.irins.org/profile/155634" target="_blank">Guide: Prof. Alankar Alankar |</a>
        <a href="https://www.me.iitb.ac.in/~alankar/" target="_blank">ICME and Materials Genome Lab |</a>
        <a href="https://github.com/hrithikM86/CS490-RnD-Classification-Segmentation-and-GAN-implementation-on-Concrete-Crack-Images/tree/main" target="_blank">GitHub |</a>
        <a href="https://drive.google.com/file/d/1bP5sF61247_-N9RSpgAwL7Wza82byGiX/view" target="_blank">Report</a>
    </div>
    <ul>
        <li>Engineered a Deep Convolutional GAN (DCGAN) to synthetically generate concrete crack images.</li>
        <li>Fine-tuned a ResNet50 model to classify fine concrete cracks on lab-tested surfaces using both real and GAN-generated data, achieving 99.3% classification accuracy and an F1 score of 99%.</li>
        <li>Implemented a U-Net architecture in TensorFlow for accurate crack surface segmentation, achieving a Dice Coefficient of 75.3% and a Mean Intersection over Union (IoU) of 61.3%.</li>
    </ul>
</div>

<!-- Public Health Dashboard Section -->
<div class="section-title" onclick="toggleSection('health-dashboard')">5. Data-Driven Dashboard for Public Health Analytics | Public Health Dept. Maharashtra &#9660;</div>
<div id="health-dashboard" class="section-content">
    <div class="link-container">
        <a href="https://iitb.irins.org/profile/52104" target="_blank">Guide: Prof. Ganesh Ramkrishnan, Department of Computer Science, IIT Bombay |</a>
        <a href="https://github.com/hrithikM86/DH307-Development-Of-An-Integrated-Dashboard-For-Public-Health-Systems" target="_blank">GitHub |</a>
        <a href="https://drive.google.com/file/d/1lcJPyNfwnnUf7R-Rm_Mb3eqABJe_uBY6/view" target="_blank">Report</a>
    </div>
    <ul>
        <li>Developed a data-driven dashboard for analytical insights on healthcare services in Maharashtra state.</li>
        <li>Analyzed district-level trends in common, severe, and high-risk mental health conditions; assessed treatment accessibility and its influence on outcomes, uncovering a 6-fold rise in cases post-COVID.</li>
        <li>Engineered a novel ‘Health Index’ variable using mental health metrics to quantify district-level healthcare conditions, whose scores identified 11 out of 34 districts with suboptimal services.</li>
    </ul>
</div>



<h2 id="technical-projects">Technical Projects</h2>

<!-- Star Tracker based Attitude Determination System (STADS) -->
<div class="section-title" onclick="toggleSection('stads')">1. Star-Tracker based Attitude Determination System (STADS) &#9660;</div>
<div id="stads" class="section-content">
    <div class="link-container">
        <a href="https://www.aero.iitb.ac.in/satlab/stads.php" target="_blank">Student Satellite Program (SatLab), IIT Bombay |</a>
        <a href="https://scholar.google.com/citations?user=DBpGmU4AAAAJ&hl=en" target="_blank">Guide: Prof. Varun Bhalerao</a>
    </div>
    <ul>
        <li>Enhanced Lost-in-Space star-matching algorithm, reducing hardware run time by 50%.</li>
        <li>Optimized star matching, verification, and estimation algorithms using Genetic Algorithm, achieving benchmark accuracy of 87% of images from 4 diverse constellations within 36 arc-seconds error.</li>
        <li>Integrated a camera and Raspberry Pi for Hardware-in-the-Loop Simulations & developed a robust script to automate the 3-stage algorithmic pipeline during headless mode startup.</li>
    </ul>
</div>


<!-- Multi-Objective Optimization and Uncertainty Analysis of the Lake Problem -->
<div class="section-title" onclick="toggleSection('lake-problem')">2. Multi-Objective Optimization and Uncertainty Analysis of the Lake Problem &#9660;</div>
<div id="lake-problem" class="section-content">
    <div class="link-container">
        <a href="https://scholar.google.com/citations?user=VpsQcKoAAAAJ&hl=en" target="_blank">Guide: Prof. Riddhi Singh, Civil Engineering Department, IIT Bombay |</a>
        <a href="#" target="_blank">Course Project |</a>
        <a href="https://github.com/hrithikM86/Stochastic-Multi-Objective-Optimization-and-Uncertainty-Analysis-of-the-Lake-Problem" target="_blank">GitHub |</a>
        <a href="https://drive.google.com/file/d/1PYypVYhoAfWQLZlBek_08MFmRB7cZZXu/view" target="_blank">Report</a>
    </div>
    <ul>
        <li>Developed a stochastic optimization model to balance multiple environmental and economic goals in the lake pollution problem.</li>
        <li>Incorporated uncertainty analysis using Monte Carlo simulations to improve robustness of decision-making.</li>
        <li>Applied NSGA-II and MOEA/D to generate Pareto fronts, highlighting trade-offs and identifying optimal solutions.</li>
    </ul>
</div>


<!-- Optimizing Stock Trading with Reinforcement Learning -->
<div class="section-title" onclick="toggleSection('stock-trading')">3. Optimizing Stock Trading with Reinforcement Learning &#9660;</div>
<div id="stock-trading" class="section-content">
    <div class="link-container">
        <a href="#" target="_blank">Finance Club, IIT Bombay |</a>
        <a href="https://github.com/hrithikM86/Optimizing-Stock-Trading-with-Reinforcement-Learning" target="_blank">GitHub</a>
    </div>
    <ul>
        <li>Utilized OpenAI Gym to explore Reinforcement Learning algorithms, including DQN and DDPG.</li>
        <li>Developed an RL-based trading environment using the Actor-Critic Model (DDPG) with a robust action space and reward function for portfolio optimization on G^SPC2018 stocks.</li>
        <li>Achieved a profit of $140 from a $5,000 investment, demonstrating the effectiveness of the RL-based approach.</li>
    </ul>
</div>

<!-- Attendance Mate - Face Recognition Attendance System -->
<div class="section-title" onclick="toggleSection('attendance-mate')">4. Attendance Mate - Face Recognition Attendance System &#9660;</div>
<div id="attendance-mate" class="section-content">
    <div class="link-container">
        <a href="https://makerbhavanfoundation.org/programs/" target="_blank">The SANDBOX Program, IIT Bombay | Selected and Fully Funded |</a>
        <a href="https://github.com/hrithikM86/Attendance-Mate-Face-Recognition-Attendance-System/tree/main" target="_blank">GitHub</a>
    </div>
    <ul>
        <li>Developed a reliable and cost-effective attendance system utilizing students’ phones to record attendance.</li>
        <li>Engineered a robust pipeline using the MTCNN algorithm for accurate student face extraction, followed by Keras-VGGFace to generate face embedding vectors for enhanced recognition.</li>
        <li>Designed and fine-tuned a Siamese neural network with triplet loss, achieving 87.1% accuracy.</li>
    </ul>
</div>

<!-- Sentiment Analysis of Customer Reviews for Singapore Airlines -->
<div class="section-title" onclick="toggleSection('sentiment-nlp')">5. Sentiment Analysis of Customer Reviews for Singapore Airlines using NLP &#9660;</div>
<div id="sentiment-nlp" class="section-content">
    <div class="link-container">
        <a href="https://scholar.google.co.in/citations?user=_9ZKKbIAAAAJ&hl=en" target="_blank">Guide: Prof. Abir De, Department of Computer Science, IIT Bombay |</a>
        <a href="https://github.com/hrithikM86/CS419-Sentiment-Analysis-of-Customer-Reviews-for-Singapore-Airlines-using-NLP/tree/main" target="_blank">GitHub</a>
    </div>
    <ul>
        <li>Developed a preprocessing pipeline, including tokenization and stopword removal using NLTK.</li>
        <li>Trained CBOW & Skip-Gram embeddings from scratch, used PCA for visualization, and compared results with pre-trained Word2Vec across ML frameworks including SVM, XGBoost, and Neural Networks.</li>
        <li>Selected the best techniques to achieve 91% accuracy in 5-class sentiment classification of reviews.</li>
    </ul>
</div>

<!-- Deepfakes: GAN-based Face-swapping -->
<div class="section-title" onclick="toggleSection('deepfakes')">6. Deepfakes: GAN-based Face-swapping &#9660;</div>
<div id="deepfakes" class="section-content">
    <div class="link-container">
        <a href="https://github.com/hrithikM86/Deepfakes-GAN-based-Face-swapping" target="_blank">GitHub</a>
    </div>
    <ul>
        <li>Advanced skills in modern deep learning frameworks and OOP, specializing in neural networks.</li>
        <li>Studied AttGAN & Deepfakes, implemented GAN-based face-swapping using TensorFlow & PyTorch.</li>
        <li>Enhanced facial attribute editing skills & deepened understanding of GANs through project execution.</li>
    </ul>
</div>

<!-- GCON-VEGATHON | IEEE-GCON 2023 | C-DAC & IIT Guwahati -->
<div class="section-title" onclick="toggleSection('gcon-vega')">7. GCON-VEGATHON | IEEE-GCON 2023 | C-DAC & IIT Guwahati &#9660;</div>
<div id="gcon-vega" class="section-content">
    <div class="link-container">
        <a href="https://event.iitg.ac.in/GCON2023/" target="_blank">Website</a>
    </div>
    <ul>
        <li>Selected as a top 15 semi-finalist out of 50+ competitors, showcasing exceptional skills & teamwork.</li>
        <li>Proposed a bare-metal embedded system with an OV2640 image sensor to capture low-resolution images and efficiently extract star centroids using a feature extraction algorithm on a VEGA processor.</li>
        <li>Designed a Printed Circuit Board (PCB) to seamlessly integrate the camera and VEGA board.</li>
    </ul>
</div>

<!-- AI powered chatbot -->
<div class="section-title" onclick="toggleSection('ai-chatbot')">8. AI powered chatbot &#9660;</div>
<div id="ai-chatbot" class="section-content">
    <div class="link-container">
        <a href="https://github.com/hrithikM86/AI-Powered-Chatbot" target="_blank">GitHub</a>
    </div>
    <ul>
        <li>Developed an AI-powered PDF chatbot using NLP, word embeddings, and similarity search techniques.</li>
        <li>Configured OpenAI’s API key for language processing access & establishing a question-answering chain.</li>
        <li>Implemented document similarity search with FAISS, comparing 1000+ text chunks using LangChain.</li>
    </ul>
</div>


<!-- Neural Networks and Large Language Models -->
<div class="section-title" onclick="toggleSection('neural-networks')">9. Neural Networks and Large Language Models &#9660;</div>
<div id="neural-networks" class="section-content">
    <div class="link-container">
        <a href="https://github.com/hrithikM86/Neural-Networks-and-Large-Language-Models/tree/main" target="_blank">GitHub</a>
    </div>
    <ul>
        <li>Developed a Gradio QnA bot with FLAN-T5 and GPU acceleration for real-time text generation.</li>
        <li>Built a custom binary neural network for image classification in PyTorch, achieving 81% accuracy.</li>
        <li>Developed a BERT-based sentiment analysis model with a Gradio interface, achieving 85% accuracy.</li>
    </ul>
</div>



<!-- Understanding Credit Score Models -->
<div class="section-title" onclick="toggleSection('credit-score')">10. Understanding Credit Score Models &#9660;</div>
<div id="credit-score" class="section-content">
    <div class="link-container">
        <a href="https://github.com/hrithikM86/Understanding-Credit-Score-Models/tree/main" target="_blank">GitHub</a>
    </div>
    <ul>
        <li>Performed data preprocessing, oversampling, feature engineering and EDA on the lending data.</li>
        <li>Employed the XGBoost algorithm to classify individuals’ credit scores, achieving an accuracy of 86%.</li>
        <li>Researched credit scores, scoring techniques, and AI/ML applications in credit score modeling.</li>
    </ul>
</div>


<!-- Great Lunar Expedition for Everyone (GLEE) -->
<div class="section-title" onclick="toggleSection('glee')">11. Great Lunar Expedition for Everyone (GLEE) &#9660;</div>
<div id="glee" class="section-content">
    <div class="link-container">
        <a href="https://www.aero.iitb.ac.in/satlab/glee.php" target="_blank">Website</a>
    </div>
    <ul>
        <li>The Great Lunar Expedition for Everyone is a global mission for lunar surface science using chipsats.</li>
        <li>Cleaned, processed & analyzed earthquake data using Python libraries Numpy, Matplotlib & Pandas.</li>
        <li>Implemented Time Difference of Arrival algorithm to accurately locate a single seismic wave source.</li>
    </ul>
</div>

<!-- Robotic Arm -->
<div class="section-title" onclick="toggleSection('robotic-arm')">12. Robotic Arm &#9660;</div>
<div id="robotic-arm" class="section-content">
    <div class="link-container">
        <a href="https://github.com/hrithikM86/RoboCivs/tree/main" target="_blank">GitHub</a>
    </div>
    <ul>
        <li>Creating a programmable robotic arm to perform specific movements, controlled via mobile application.</li>
        <li>Implemented MG996R and SG90 Micro Servo Motors to achieve desired rotations in the robotic arm.</li>
        <li>Created a versatile system linking mobile devices to control the robotic arm’s specific movements.</li>
        <li>Utilized Arduino UNO as the microcontroller to interface between Bluetooth module & mobile network.</li>
    </ul>
</div>

<!-- Precipitation Prediction using ML -->
<div class="section-title" onclick="toggleSection('precipitation-prediction')">13. Precipitation Prediction using ML &#9660;</div>
<div id="precipitation-prediction" class="section-content">
    <div class="link-container">
        <a href="https://github.com/hrithikM86/Precipitation-Prediction-using-ML/tree/main" target="_blank">GitHub</a>
    </div>
    <ul>
        <li>Created ML models using Random Forest & Logistic Regression to accurately predict precipitation.</li>
        <li>Handled class imbalance with oversampling, achieving 98.03% accuracy and 98.01% ROC-AUC score.</li>
        <li>Used chi-squared test to select the best features for the model, performed data preprocessing & EDA.</li>
    </ul>
</div>

<!-- Economic Evaluation of Jaipur Metro Phase-I -->
<div class="section-title" onclick="toggleSection('economic-eval')">14. Economic Evaluation of Jaipur Metro Phase-I &#9660;</div>
<div id="economic-eval" class="section-content">
    <div class="link-container">
        <a href="https://www.civil.iitb.ac.in/~vedagiri/" target="_blank">Guide: Prof. P. Vedagiri, Department of Civil Engineering, IIT Bombay |</a>
        <a href="https://drive.google.com/file/d/1U5En6AjQqfEWCMDEojTa4Ltz4vm29C1G/view" target="_blank">Course Project | Report</a>
    </div>
    <ul>
        <li>Performed a 30-year cost–benefit and financial analysis of Jaipur Metro (Phase-I), modelling capital & operating costs, maintenance, and salvage values.</li>
        <li>Forecasted ridership growth and monetized user benefits (travel time savings, vehicle operating cost savings) to compute annual willingness-to-pay and total economic benefits.</li>
        <li>Assessed externalities and environmental impacts (reduced emissions & congestion) and included them in the evaluation using standard shadow pricing adjustments.</li>
        <li>Conducted sensitivity analysis on demand growth, discount rates, and cost overruns to test robustness of results and identify critical risk drivers.</li>
        <li>Results: Economic IRR = <strong>18.6%</strong>, ENPV = <strong>Rs. 5,598 Cr</strong>, Financial IRR = <strong>8.24%</strong> — indicating strong economic justification, financial viability, and long-term sustainability.</li>
    </ul>
</div>

<!-- Urban Travel Demand Modeling and Traffic Assignment -->
<div class="section-title" onclick="toggleSection('urban-travel')">15. Urban Travel Demand Modeling and Traffic Assignment &#9660;</div>
<div id="urban-travel" class="section-content">
    <div class="link-container">
        <a href="https://www.civil.iitb.ac.in/~kvkrao/" target="_blank">Guide: Prof. K. V. Krishna Rao, Department of Civil Engineering, IIT Bombay |</a>
        <a href="#" target="_blank">Course Project</a>
    </div>
    <ul>
        <li>Formulated household trip production models using regression techniques with socio-economic and land-use dummy variables, applying matrix-based least squares estimation.</li>
        <li>Performed rigorous statistical validation using <em>R²</em>, <em>t-tests</em>, and <em>F-statistics</em> to ensure model robustness and reliability.</li>
        <li>Calibrated gravity models for inter-zonal trip distribution, optimizing friction factors via the Bureau of Public Roads (BPR) procedure.</li>
        <li>Implemented traffic assignment algorithms including capacity restraint, Method of Successive Averages (MSA), and Frank–Wolfe to achieve user-equilibrium traffic flows across the network.</li>
    </ul>
</div>

<!-- Traffic Signal Design and Analysis -->
<div class="section-title" onclick="toggleSection('signal-design')">16. Traffic Signal Design and Analysis &#9660;</div>
<div id="signal-design" class="section-content">
    <div class="link-container">
        <a href="https://www.civil.iitb.ac.in/~velaga/" target="_blank">Guide: Prof. Nagendra R. Velaga, Department of Civil Engineering, IIT Bombay |</a>
        <a href="#" target="_blank">Course Project</a>
    </div>
    <ul>
        <li>Processed <em>real-time traffic data</em> to build a structured dataset and estimate intersection load patterns.</li>
        <li>Designed an optimized <em>signal timing plan</em> to improve intersection efficiency and minimize conflicts.</li>
        <li>Simulated and evaluated alternative signal groups in <em>VISSIM</em> to determine the most effective configuration.</li>
        <li>Formulated <em>data-driven strategies</em> to reduce congestion and ensure smoother traffic movement.</li>
    </ul>
</div>





<h2 id="positions-of-responsibility">Positions of Responsibility</h2>

<!-- Electrical Subsystem Head Section -->
<div class="section-title" onclick="toggleSection('electrical-head')">1. Electrical Subsystem Head | Student Satellite Program, IIT Bombay &#9660;</div>
<div id="electrical-head" class="section-content">
    <div class="link-container">
        <a href="https://www.aero.iitb.ac.in/satlab/" target="_blank">Learn More</a>
    </div>
    <ul>
        <li>Led a 9-member interdisciplinary team on Hardware In-Loop Simulation of the STADS module.</li>
        <li>Executed a 3-step recruitment process to select 6 of 50+ applicants, evaluating their technical skills.</li>
        <li>Successfully designed, mentored, and evaluated two technical hardware projects for the mini-project round.</li>
    </ul>
</div>

<!-- Senior Department Academic Mentor Section -->
<div class="section-title" onclick="toggleSection('academic-mentor')">2. Senior Department Academic Mentor & Subgroup Head | Civil Engineering Department &#9660;</div>
<div id="academic-mentor" class="section-content">
    <div class="link-container">
        <a href="https://civildampiitb.github.io/" target="_blank">Learn More</a>
    </div>
    <ul>
        <li>Monitored the academic performance of 6 sophomores to provide personalized guidance and counseling.</li>
        <li>Led a 6-member team to survey departmental needs and facilitate effective mentorship delivery.</li>
        <li>Received the DAMP Special Recognition Award, given to 17 out of 400 students for exceptional contributions.</li>
    </ul>
</div>



<h2 id="skills-and-courses">Skills & Relevant Courses</h2>

<table style="border-collapse: collapse; width: 100%;">
    <thead>
        <tr style="border-bottom: 1px solid #ccc; background-color: #f9f9f9;">
            <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Category</th>
            <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Mathematics</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Calculus, Differential Equations, Linear Algebra, Probabilistic and Statistical Methods in Civil Engineering</td>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Programming</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Data Structures and Algorithms (DSA), Design and Analysis of Algorithms (DAA), Computer Networks, Introduction to Machine Learning, Logic for Computer Science, Computer Programming and Utilization</td>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Online Courses</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Deep Learning Specialization by Andrew Ng, Machine Learning Specialization by Andrew Ng, Natural Language Processing Specialization, Data Science Bootcamp by WIDS, MATLAB Onramp</td>
        </tr>
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Skills</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">C/C++, Python, OpenCV, MATLAB, TensorFlow, PyTorch, Scikit-learn, PySpark, OpenAI Gym</td>
        </tr>
    </tbody>
</table>



<h2 id="extracurricular-activities">Extracurricular Activities</h2>
<ol>
    <li><strong>2024:</strong> Guided 12+ students in developing a CNN-based model that translates ASL live video to text at SoC.</li>
    <li><strong>2024:</strong> Facilitated an NLP-based project for 12+ students at WIDS to build a Shakespearean language chatbot.</li>
    <li><strong>2022:</strong> Participated in XLR8 and built an advanced WiFi-controlled racing bot using the ESP32 micro-controller.</li>
    <li><strong>2022:</strong> Developed a Bluetooth-controlled robotic arm with Arduino UNO, capable of precise movements.</li>
    <li><strong>2022:</strong> Participated in RC plane competition and built a high-performance aircraft showcasing technical skills.</li>
    <li><strong>2022:</strong> Mentored 10+ students at WIDS, from fundamentals to developing and testing Machine Learning models.</li>
    <li><strong>2022:</strong> Dedicated 80+ hours to impactful community service as a volunteer for UMMEED, an initiative under NSS.</li>
    <li><strong>2022:</strong> Participated in the Versova Beach Cleanup organized by Abhyuday, IIT Bombay’s social impact initiative.</li>
    <li><strong>2022:</strong> Raised ₹1.5 Lakhs within a week to fund initial checkup and cancer treatment for a hostel staff member.</li>
</ol>




<script>
/* --- Toggle Section --- */
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
</script>


</body>
</html>
