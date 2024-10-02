<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hrithik Mhatre's Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        h1 {
            color: blue;
        }

        .section-title {
            cursor: pointer;
            color: blue; /* Set the heading color to blue */
            margin: 10px 0;
            font-weight: bold;
        }

        .section-content {
            display: none;
            margin-left: 20px;
        }

        .link-container {
            display: none;
            margin-left: 20px;
            color: green;
            font-weight: bold;
            font-size: 1.1em;
        }

        .link-container a {
            color: green;
            text-decoration: none;
            margin-right: 10px; /* Add spacing between links */
        }

        .link-container a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#education">Education</a></li>
    <li><a href="#scholastic-achievements">Scholastic Achievements</a></li>
    <li><a href="#professional-experience">Professional Experience</a></li>
    <li><a href="#research-projects">Research & Development Projects</a></li>
    <li><a href="#technical-projects">Technical Projects</a></li>
    <li><a href="#positions-of-responsibility">Positions of Responsibility</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#relevant-courses">Relevant Courses</a></li>
    <li><a href="#extracurricular-activities">Extracurricular Activities</a></li>
    <li><a href="#international-experience">International Experience</a></li>
</ul>

<h2 id="education">Education</h2>
<p><b>Indian Institute of Technology (IIT) Bombay</b><br>
Bachelor of Technology in Civil Engineering with a Minor in Computer Science and Engineering<br>
<b>GPA:</b> 8.83/10<br>
<b>Expected Graduation:</b> 2025</p>

<h2 id="scholastic-achievements">Scholastic Achievements</h2>
<ul>
    <li>Ranked 8 out of 150+ students in the B.Tech Civil Engineering program at IIT Bombay (2024)</li>
    <li>Secured an All India Rank of 3225 in JEE Advanced 2021</li>
    <li>Achieved a 99.17 percentile in JEE Main 2021</li>
</ul>

<h2 id="professional-experience">Professional Experience</h2>

<div class="section-title" onclick="toggleSection('amex-content', 'amex-links')">1. American Express &#9660;</div>

<div id="amex-content" class="section-content">
    <ul>
        <li>Developed a variable rationalization framework to enhance model stability with minimal performance impact, utilizing an in-house Vendor Evaluation Tool along with SHAP, mRMR, and ALE techniques.</li>
        <li>Proposed strategies to mitigate overfitting and performance decay in previous generation models.</li>
        <li>Utilized GBM algorithms for default prediction and Bayesian optimization for hyperparameter tuning.</li>
        <li>Achieved a 50%+ (179/345) reduction in model variables using the variable rationalization framework.</li>
        <li>Developed a novel metric using basis points (bps) drop per variable in Gini and capture rate to assess model stability.</li>
        <li>Utilized variables suggested by the rationalization tool to develop models, achieving a 30% improvement in monthly capture rate stability for commercial risk models managing over $100 billion in exposures.</li>
    </ul>
</div>

<div class="link-container" id="amex-links">
    <a href="https://www.linkedin.com/in/archit-jain-4b027761/" target="_blank">Manager : Archit Jain</a>
</div>

<h2 id="international-experience">International Experience</h2>
<div class="section-title" onclick="toggleSection('sdc-content', 'sdc-links')">1. Seismic Design Competition, San Francisco, USA &#9660;</div>

<div id="sdc-content" class="section-content">
    <ul>
        <li>Integral member of the Civil Engineering Tech Team at the Earthquake Engineering Research Institute (EERI), IITB Student Chapter, developing solutions for the Seismic Design Competition (SDC) by EERI in San Francisco.</li>
        <li>Achieved 8th position internationally as the sole Indian team, competing against participants from 10+ different countries and 30+ renowned universities.</li>
        <li>Generated building income of $0.38 million+ while ensuring the 19-storey skyscraper withstood all ground motions with negligible rooftop acceleration.</li>
        <li>Designed the exterior of a 19-storey skyscraper with 4 sky bridges, seamlessly integrating with San Francisco’s cityscape using 3ds Max, Revit, and V-Ray to create 3D renderings.</li>
        <li>Researched LEED certification and proposed sustainable elements such as Xeriscaping for enhanced carbon absorption and Double Sheet Eco-Sense Glass for a green building façade design.</li>
    </ul>
</div>


<h2 id="research-projects">Research & Development Projects</h2>

<!-- Concrete Crack Detection Section -->
<div class="section-title" onclick="toggleSection('crack-detection', 'crack-links')">1. Classification, Segmentation and GAN Implementation on Concrete Crack Surfaces &#9660;</div>

<div id="crack-detection" class="section-content">
    <ul>
        <li>Implemented DenseNet121, ResNet50, and EfficientNet models for concrete crack detection.</li>
        <li>Conducted a literature survey on Generative Adversarial Networks (GANs) and engineered a Deep Convolutional GAN (DCGAN) to generate images of concrete cracks.</li>
        <li>Implemented a U-Net architecture in TensorFlow for crack surface segmentation, achieving a Dice Coefficient of 75.3% and a Mean Intersection over Union (IoU) of 61.3%.</li>
        <li>Future work: Configuring a Raspberry Pi with an integrated camera to implement a crack detection algorithm, enabling detection in rotary machines and predicting overall machine health.</li>
    </ul>
</div>

<div class="link-container" id="crack-links">
    <a href="https://iitb.irins.org/profile/155634" target="_blank">Guide: Prof. Alankar Alankar</a>
    <a href="https://github.com/hrithikM86/CS490-RnD-Classification-Segmentation-and-GAN-implementation-on-Concrete-Crack-Images/tree/main" target="_blank">Visit GitHub</a>
</div>

<!-- Public Health Dashboard Section -->
<div class="section-title" onclick="toggleSection('health-dashboard', 'health-links')">2. Dashboard For Public Health Systems &#9660;</div>

<div id="health-dashboard" class="section-content">
    <ul>
        <li>Developed a data-driven dashboard for analytics and actionable insights on regional healthcare services in Maharashtra.</li>
        <li>Extracted key insights, including a 6-fold increase in mental health cases due to COVID-19, and visualized mental health patient data on the Maharashtra map, culminating in a comprehensive report.</li>
        <li>Pioneered a comprehensive ‘Health Index’ to assess district health conditions, with a focus on mental health metrics.</li>
        <li>Accurately identified 11 out of 34 districts with suboptimal Health Index scores and recommended targeted strategies for urgent intervention and improved health management practices.</li>
    </ul>
</div>

<div class="link-container" id="health-links">
    <a href="https://iitb.irins.org/profile/52104" target="_blank">Guide: Prof. Ganesh Ramkrishnan</a>
    <a href="https://github.com/hrithikM86/DH307-Development-Of-An-Integrated-Dashboard-For-Public-Health-Systems" target="_blank">Visit GitHub</a>
</div>

<!-- Traffic Signal Optimization Section -->
<div class="section-title" onclick="toggleSection('traffic-signal', 'traffic-links')">3. Traffic Signal Optimization at Network Level using Machine Learning &#9660;</div>

<div id="traffic-signal" class="section-content">
    <ul>
        <li>Modeled traffic using SUMO and explored optimization techniques with Tracy for traffic flow analysis.</li>
        <li>Conducted a literature review on traffic signal optimization to understand state-of-the-art methods.</li>
        <li>Implemented YOLO for real-time car detection and applied optimization algorithms to multi-lane traffic.</li>
        <li>Future work includes utilizing evolutionary optimization algorithms to optimize traffic signals at the network level, aiming to reduce overall delays, model a mini-city, and test the algorithms within this environment.</li>
    </ul>
</div>

<div class="link-container" id="traffic-links">
    <a href="https://scholar.google.com/citations?user=nM_oGqQAAAAJ&hl=en" target="_blank">Guide: Prof. Archak Mittal</a>
</div>



<h2 id="technical-projects">Technical Projects</h2>
<!-- GCON-VEGATHON | IEEE-GCON 2023 | C-DAC & IIT Guwahati -->
<div class="section-title" onclick="toggleSection('gcon-vega', 'gcon-links')">1. GCON-VEGATHON | IEEE-GCON 2023 | C-DAC & IIT Guwahati &#9660;</div>
<div id="gcon-vega" class="section-content">
    <ul>
        <li>Selected as a top 15 semi-finalist out of 50+ competitors, showcasing exceptional skills & teamwork.</li>
        <li>Proposed a bare-metal embedded system with an OV2640 image sensor to capture low-resolution images and efficiently extract star centroids using a feature extraction algorithm on a VEGA processor.</li>
        <li>Designed a Printed Circuit Board (PCB) to seamlessly integrate the camera and VEGA board.</li>
    </ul>
</div>


<!-- Sentiment Analysis of Customer Reviews for Singapore Airlines -->
<div class="section-title" onclick="toggleSection('sentiment-analysis', 'sentiment-links')">2. Sentiment Analysis of Customer Reviews for Singapore Airlines using NLP &#9660;</div>
<div id="sentiment-analysis" class="section-content">
    <ul>
        <li>Developed a preprocessing pipeline, including tokenization and stopword removal using NLTK.</li>
        <li>Trained CBOW & Skip-Gram embeddings from scratch, used PCA for visualization & compared results with pretrained Word2Vec across ML frameworks, including SVM, XGBoost & Neural Networks.</li>
        <li>Selected the best techniques to achieve 71% accuracy in a 5-class sentiment classification of customer reviews, delivering valuable insights to enhance customer experience and inform decision-making.</li>
    </ul>
</div>
<div class="link-container" id="sentiment-links">
    <a href="https://iitb.irins.org/profile/155763" target="_blank">Guide: Dr. Abir De</a>
    <a href="https://github.com/hrithikM86/CS419-Sentiment-Analysis-of-Customer-Reviews-for-Singapore-Airlines-using-NLP/tree/main" target="_blank">Visit GitHub</a>
</div>

<!-- Attendance Mate | Face Recognition Attendance System -->
<div class="section-title" onclick="toggleSection('attendance-mate', 'attendance-links')">3. Attendance Mate | Face Recognition Attendance System &#9660;</div>
<div id="attendance-mate" class="section-content">
    <ul>
        <li>Developed a reliable & cost-effective attendance system utilizing students’ phones to mark attendance.</li>
        <li>Developed a robust pipeline utilizing MTCNN & YOLO algorithms for accurate student face extraction, complemented by Keras-VGGFace to generate face embedding vectors for enhanced facial recognition.</li>
        <li>Developed and successfully optimized a Siamese network using triplet loss, achieving 87.1% accuracy.</li>
    </ul>
</div>
<div class="link-container" id="attendance-links">
    <a href="https://github.com/hrithikM86/Attendance-Mate-Face-Recognition-Attendance-System/tree/main" target="_blank">Visit GitHub</a>
</div>

<!-- Optimizing Stock Trading with Reinforcement Learning -->
<div class="section-title" onclick="toggleSection('stock-trading', 'stock-links')">4. Optimizing Stock Trading with Reinforcement Learning &#9660;</div>
<div id="stock-trading" class="section-content">
    <ul>
        <li>Utilized OpenAI Gym to explore Reinforcement Learning algorithms, including DQN and DDPG.</li>
        <li>Developed a Reinforcement learning-based trading environment using the Actor-Critic Model (DDPG) with a robust action space and reward function to optimize trading strategies for G^SPC2018 stocks.</li>
        <li>Gained $140 profit from a $5,000 investment, demonstrating the effectiveness of the RL-based approach.</li>
    </ul>
</div>
<div class="link-container" id="stock-links">
    <a href="https://github.com/hrithikM86/Optimizing-Stock-Trading-with-Reinforcement-Learning" target="_blank">Visit GitHub</a>
</div>

<!-- Understanding Credit Score Models -->
<div class="section-title" onclick="toggleSection('credit-score', 'credit-links')">5. Understanding Credit Score Models &#9660;</div>
<div id="credit-score" class="section-content">
    <ul>
        <li>Performed data preprocessing, oversampling, feature engineering and EDA on the lending data.</li>
        <li>Employed the XGBoost algorithm to classify individuals’ credit scores, achieving an accuracy of 86%.</li>
        <li>Researched credit scores, scoring techniques, and AI/ML applications in credit score modeling.</li>
    </ul>
</div>
<div class="link-container" id="credit-links">
    <a href="https://github.com/hrithikM86/Understanding-Credit-Score-Models/tree/main" target="_blank">Visit GitHub</a>
</div>

<!-- Neural Networks and Large Language Models -->
<div class="section-title" onclick="toggleSection('neural-networks', 'neural-links')">6. Neural Networks and Large Language Models &#9660;</div>
<div id="neural-networks" class="section-content">
    <ul>
        <li>Developed a Gradio QnA bot with FLAN-T5 and GPU acceleration for real-time text generation.</li>
        <li>Built a custom binary neural network for image classification in PyTorch, achieving 81% accuracy.</li>
        <li>Developed a BERT-based sentiment analysis model with a Gradio interface, achieving 85% accuracy.</li>
    </ul>
</div>
<div class="link-container" id="neural-links">
    <a href="https://github.com/hrithikM86/Neural-Networks-and-Large-Language-Models/tree/main" target="_blank">Visit GitHub</a>
</div>

<!-- Great Lunar Expedition for Everyone (GLEE) -->
<div class="section-title" onclick="toggleSection('glee', 'glee-links')">7. Great Lunar Expedition for Everyone (GLEE) &#9660;</div>
<div id="glee" class="section-content">
    <ul>
        <li>The Great Lunar Expedition for Everyone is a global mission for lunar surface science using chipsats.</li>
        <li>Cleaned, processed & analyzed earthquake data using Python libraries Numpy, Matplotlib & Pandas.</li>
        <li>Implemented Time Difference of Arrival algorithm to accurately locate a single seismic wave source.</li>
    </ul>
</div>
<div class="link-container" id="glee-links">
    <a href="https://www.aero.iitb.ac.in/satlab/glee.php" target="_blank">Visit Website</a>
</div>


<!-- Star Tracker based Attitude Determination System (STADS) -->
<div class="section-title" onclick="toggleSection('stads', 'stads-links')">8. Star Tracker based Attitude Determination System (STADS) &#9660;</div>
<div id="stads" class="section-content">
    <ul>
        <li>STADS is a CubeSat-compatible star tracker system for attitude determination, to be tested on POEM.</li>
        <li>Integrated a camera with Raspberry Pi for Hardware-in-the-Loop Simulations & developed a robust script to automate the 3-stage algorithmic pipeline during the headless mode startup of Raspberry Pi.</li>
        <li>Collaborated on power budget development and modified code to enhance system power efficiency.</li>
        <li>Developed a code to optimise 5 hyperparameters of the Star Tracker algorithm using Genetic Algorithm.</li>
    </ul>
</div>
<div class="link-container" id="stads-links">
    <a href="https://www.aero.iitb.ac.in/satlab/glee.php" target="_blank">Visit Website</a>
</div>

<!-- AI powered chatbot -->
<div class="section-title" onclick="toggleSection('ai-chatbot', 'ai-links')">9. AI powered chatbot &#9660;</div>
<div id="ai-chatbot" class="section-content">
    <ul>
        <li>Developed an AI-powered PDF chatbot using NLP, word embeddings, and similarity search techniques.</li>
        <li>Configured OpenAI’s API key for language processing access & establishing a question-answering chain.</li>
        <li>Implemented document similarity search with FAISS, comparing 1000+ text chunks using LangChain.</li>
    </ul>
</div>
<div class="link-container" id="ai-links">
    <a href="https://github.com/hrithikM86/AI-Powered-Chatbot" target="_blank">Visit GitHub</a>
</div>

<!-- Robotic Arm -->
<div class="section-title" onclick="toggleSection('robotic-arm', 'robotic-links')">10. Robotic Arm &#9660;</div>
<div id="robotic-arm" class="section-content">
    <ul>
        <li>Creating a programmable robotic arm to perform specific movements, controlled via mobile application.</li>
        <li>Implemented MG996R and SG90 Micro Servo Motors to achieve desired rotations in the robotic arm.</li>
        <li>Created a versatile system linking mobile devices to control the robotic arm’s specific movements.</li>
        <li>Utilized Arduino UNO as the microcontroller to interface between Bluetooth module & mobile network.</li>
    </ul>
</div>
<div class="link-container" id="robotic-links">
    <a href="https://github.com/hrithikM86/RoboCivs/tree/main" target="_blank">Visit GitHub</a>
</div>

<!-- Precipitation Prediction using ML -->
<div class="section-title" onclick="toggleSection('precipitation-prediction', 'precipitation-links')">11. Precipitation Prediction using ML &#9660;</div>
<div id="precipitation-prediction" class="section-content">
    <ul>
        <li>Created ML models using Random Forest & Logistic Regression to accurately predict precipitation.</li>
        <li>Handled class imbalance with oversampling, achieving 98.03% accuracy and 98.01% ROC-AUC score.</li>
        <li>Used chi-squared test to select the best features for the model, performed data preprocessing & EDA.</li>
    </ul>
</div>
<div class="link-container" id="precipitation-links">
    <a href="https://github.com/hrithikM86/Precipitation-Prediction-using-ML/tree/main" target="_blank">Visit GitHub</a>
</div>

<!-- Deepfakes: GAN-based Face-swapping -->
<div class="section-title" onclick="toggleSection('deepfakes', 'deepfakes-links')">12. Deepfakes: GAN-based Face-swapping &#9660;</div>
<div id="deepfakes" class="section-content">
    <ul>
        <li>Advanced skills in modern deep learning frameworks and OOP, specializing in neural networks.</li>
        <li>Studied AttGAN & Deepfakes, implemented GAN-based face-swapping using TensorFlow & PyTorch.</li>
        <li>Enhanced facial attribute editing skills & deepened understanding of GANs through project execution.</li>
    </ul>
</div>
<div class="link-container" id="deepfakes-links">
    <a href="https://github.com/hrithikM86/Deepfakes-GAN-based-Face-swapping" target="_blank">Visit GitHub</a>
</div>


<h2 id="positions-of-responsibility">Positions of Responsibility</h2>

<!-- Electrical Subsystem Head Section -->
<div class="section-title" onclick="toggleSection('electrical-head', 'electrical-links')">1. Electrical Subsystem Head | Student Satellite Program, IIT Bombay &#9660;</div>

<div id="electrical-head" class="section-content">
    <ul>
        <li>Led a 9-member interdisciplinary team on Hardware In-Loop Simulation of the STADS module.</li>
        <li>Executed a 3-step recruitment process to select 6 of 50+ applicants, evaluating their technical skills.</li>
        <li>Successfully designed, mentored, and evaluated two technical hardware projects for the mini-project round.</li>
    </ul>
    <div class="link-container" id="electrical-links">
        <a href="https://www.aero.iitb.ac.in/satlab/" target="_blank">Learn More</a>
    </div>
</div>

<!-- Senior Department Academic Mentor Section -->
<div class="section-title" onclick="toggleSection('academic-mentor', 'academic-links')">2. Senior Department Academic Mentor & Subgroup Head | Civil Engineering Department &#9660;</div>

<div id="academic-mentor" class="section-content">
    <ul>
        <li>Monitoring the academic performance of 6 sophomores to provide personalized guidance and counseling.</li>
        <li>Leading a 6-member team to survey departmental needs and facilitate effective mentorship delivery.</li>
        <li>Received the DAMP Special Recognition Award, given to 17 out of 400 students for exceptional contributions.</li>
    </ul>
    <div class="link-container" id="academic-links">
        <a href="https://civildampiitb.github.io/" target="_blank">Learn More</a>
    </div>
</div>






<h2 id="skills">Skills</h2>
<ul>
    <li><strong>Programming Languages:</strong> C, C++, Python, MATLAB, SQL, HTML, CSS, R</li>
    <li><strong>Deep Learning Frameworks:</strong> TensorFlow, Keras, PyTorch</li>
    <li><strong>Tools:</strong> SUMO, YOLO, OpenAI Gym, Raspberry Pi, Git, GitHub, EAGLE, Microchip Studio, QGIS, ETABS, Eclipse, MapWindow GIS</li>
    <li><strong>Libraries:</strong> Scikit-learn, NumPy, SciPy, Matplotlib, Pandas, PySpark, PiCamera, VRay</li>
</ul>

<h2 id="relevant-courses">Relevant Courses</h2>
<ul>
    <li><strong>Academic Courses:</strong>
        <ul>
            <li>Mathematics: Calculus, Differential Equations, Linear Algebra, Probabilistic and Statistical Methods in Civil Engineering</li>
            <li>Programming: Data Structures and Algorithms (DSA), Design and Analysis of Algorithms (DAA), Introduction to Machine Learning, Logic for Computer Science</li>
        </ul>
    </li>
    <li><strong>Online Courses:</strong>
        <ul>
            <li>Deep Learning Specialization by Andrew Ng</li>
            <li>Machine Learning Specialization by Andrew Ng</li>
            <li>Natural Language Processing Specialization</li>
            <li>Data Science Bootcamp by WIDS</li>
            <li>MATLAB Onramp</li>
        </ul>
    </li>
</ul>

<h2 id="extracurricular-activities">Extracurricular Activities</h2>
<ul>
    <li>Participated in hackathons and workshops related to data science and machine learning.</li>
    <li>Active member of the Civil Engineering Tech Team at EERI, IITB Student Chapter.</li>
    <li>Participated in XLR8 and built an advanced WiFi-controlled racing bot using the ESP32 micro-controller.</li>
    <li>Participated in an RC plane competition and built a high-performance aircraft showcasing technical skills.</li>
    <li>Developed a Bluetooth-controlled robotic arm with Arduino UNO, capable of precise movements.</li>
    <li>Guided 12+ students in developing a CNN-based model that translates ASL live video to text at SoC.</li>
    <li>Mentored over 25+ students in machine learning and data science for two impactful projects at WIDS.</li>
    <li>Presented Pratham and STADS modules at the Tech & RnD Expo as part of the Student Satellite team.</li>
    <li>Participated in a Satellite Tracking Session, gaining hands-on experience in tracking satellites.</li>
    <li>Dedicated 80+ hours to impactful community service as a volunteer for UMMEED, an initiative under NSS.</li>
</ul>



<script>
    function toggleSection(contentId, linksId) {
        const content = document.getElementById(contentId);
        const links = document.getElementById(linksId);

        // Toggle the display of the content
        if (content.style.display === "block") {
            content.style.display = "none";
            links.style.display = "none"; // Hide links when content is hidden
        } else {
            content.style.display = "block";
            links.style.display = "block"; // Show links when content is shown
        }
    }
</script>

</body>
</html>
