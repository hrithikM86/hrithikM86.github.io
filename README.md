<!DOCTYPE html>
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

        .github-link, .professor-website {
            display: none;
            margin-left: 20px;
            color: green;
        }

        .github-link a, .professor-website a {
            color: green;
            text-decoration: none;
        }

        .github-link a:hover, .professor-website a:hover {
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

<div class="section-title" onclick="toggleSection('amex-content', 'amex-github', 'amex-professor-website')">1. American Express &#9660;</div>

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

<div class="github-link" id="amex-github" style="margin: 10px 0; font-weight: bold; font-size: 1.1em;">
    <a href="https://www.linkedin.com/in/archit-jain-4b027761/" target="_blank">Manager</a>
</div>

<div class="professor-website" id="amex-professor-website">
    <a href="https://iitb.irins.org/profile/155634" target="_blank">Prof. Alankar Alankar</a>
</div>

<h2 id="international-experience">International Experience</h2>
<div class="section-title" onclick="toggleSection('sdc-content', 'sdc-github', 'sdc-professor-website')">1. Seismic Design Competition, San Francisco, USA &#9660;</div>

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
<div class="section-title" onclick="toggleSection('crack-detection', 'crack-github', 'crack-professor-website')">1. Classification, Segmentation and GAN Implementation on Concrete Crack Surfaces &#9660;</div>

<div id="crack-detection" class="section-content">
    <ul>
        <li>Implemented DenseNet121, ResNet50, and EfficientNet models for concrete crack detection.</li>
        <li>Conducted a literature survey on Generative Adversarial Networks (GANs) and engineered a Deep Convolutional GAN (DCGAN) to generate images of concrete cracks.</li>
        <li>Implemented a U-Net architecture in TensorFlow for crack surface segmentation, achieving a Dice Coefficient of 75.3% and a Mean Intersection over Union (IoU) of 61.3%.</li>
        <li>Future work: Configuring a Raspberry Pi with an integrated camera to implement a crack detection algorithm, enabling detection in rotary machines and predicting overall machine health.</li>
    </ul>
</div>

<!-- Professor Website Link -->
<div class="professor-website" id="crack-professor-website">
    <a href="https://iitb.irins.org/profile/155634" target="_blank">Guide : Prof. Alankar Alankar</a>
</div>

<!-- GitHub Link -->
<div class="github-link" id="crack-github" style="margin: 10px 0; font-weight: bold; font-size: 1.1em;">
    <a href="https://github.com/hrithikM86/CS490-RnD-Classification-Segmentation-and-GAN-implementation-on-Concrete-Crack-Images/tree/main" target="_blank">Visit GitHub</a>
</div>


<!-- Public Health Dashboard Section -->
<div class="section-title" onclick="toggleSection('health-dashboard', 'health-github', 'health-professor-website')">2. Dashboard For Public Health Systems &#9660;</div>

<div id="health-dashboard" class="section-content">
    <ul>
        <li>Developed a data-driven dashboard for analytics and actionable insights on regional healthcare services in Maharashtra.</li>
        <li>Extracted key insights, including a 6-fold increase in mental health cases due to COVID-19, and visualized mental health patient data on the Maharashtra map, culminating in a comprehensive report.</li>
        <li>Pioneered a comprehensive ‘Health Index’ to assess district health conditions, with a focus on mental health metrics.</li>
        <li>Accurately identified 11 out of 34 districts with suboptimal Health Index scores and recommended targeted strategies for urgent intervention and improved health management practices.</li>
    </ul>
</div>

<!-- Professor Website Link -->
<div class="professor-website" id="health-professor-website">
    <a href="https://iitb.irins.org/profile/52104" target="_blank">Guide : Prof. Ganesh Ramkrishnan</a>
</div>

<!-- GitHub Link -->
<div class="github-link" id="health-github" style="margin: 10px 0; font-weight: bold; font-size: 1.1em;">
    <a href="https://github.com/hrithikM86/DH307-Development-Of-An-Integrated-Dashboard-For-Public-Health-Systems" target="_blank">Visit GitHub</a>
</div>


<!-- Traffic Signal Optimization Section -->
<div class="section-title" onclick="toggleSection('traffic-signal', 'traffic-github', 'traffic-professor-website')">3. Traffic Signal Optimization at Network Level using Machine Learning &#9660;</div>

<div id="traffic-signal" class="section-content">
    <ul>
        <li>Modeled traffic using SUMO and explored optimization techniques with Tracy for traffic flow analysis.</li>
        <li>Conducted a literature review on traffic signal optimization to understand state-of-the-art methods.</li>
        <li>Implemented YOLO for real-time car detection and applied optimization algorithms to multi-lane traffic.</li>
        <li>Future work includes utilizing evolutionary optimization algorithms to optimize traffic signals at the network level, aiming to reduce overall delays, model a mini-city, and test the algorithms within this environment.</li>
    </ul>
</div>

<!-- Professor Website Link -->
<div class="professor-website" id="traffic-professor-website">
    <a href="https://scholar.google.com/citations?user=nM_oGqQAAAAJ&hl=en" target="_blank">Guide: Prof. Archak Mittal</a>
</div>




<h2 id="technical-projects">Technical Projects</h2>

<!-- Stock Trading Strategies Section -->
<div class="section-title" onclick="toggleSection('stock-trading', 'stock-github', 'stock-professor-website')">1. Optimizing Stock Trading Strategies through Deep Reinforcement Learning &#9660;</div>

<div id="stock-trading" class="section-content">
    <ul>
        <li>Developed and researched Deep Reinforcement Learning (RL) algorithms for stock trading, including DQN, DDPG, and PPO, creating a RL-based trading environment using Actor-Critic Model.</li>
        <li>Designed a comprehensive action space and reward function for effective portfolio optimization.</li>
        <li>Achieved a 12% profit using an initial investment amount of ₹1,00,000 over a period of 6 months by testing and optimizing trading strategies.</li>
        <li>Utilized OpenAI Gym testbed to explore RL algorithms' intricacies, gaining valuable insights into algorithmic trading.</li>
    </ul>
</div>

<!-- GitHub Link -->
<div class="github-link" id="stock-github" style="margin: 10px 0; font-weight: bold; font-size: 1.1em;">
    <a href="https://github.com/hrithikM86/Stock-Trade-Optimization" target="_blank">Visit GitHub</a>
</div>

<!-- Professor Website Link -->
<div class="professor-website" id="stock-professor-website">
    <a href="https://iitb.irins.org/profile/155634" target="_blank">Prof. Alankar Alankar</a>
</div>

<!-- Traffic Signal Optimization Section -->
<div class="section-title" onclick="toggleSection('traffic-signal', 'traffic-github', 'traffic-professor-website')">2. Traffic Signal Optimization using Machine Learning &#9660;</div>

<div id="traffic-signal" class="section-content">
    <ul>
        <li>Implemented automated traffic signal optimization solutions at a network level to enhance traffic flow and reduce delays.</li>
        <li>Utilized SUMO for traffic modeling and YOLO for vehicle detection to analyze and optimize signal timings based on real-time data.</li>
        <li>Achieved a 15% reduction in average wait times across intersections through effective machine learning techniques.</li>
    </ul>
</div>

<!-- GitHub Link -->
<div class="github-link" id="traffic-github" style="margin: 10px 0; font-weight: bold; font-size: 1.1em;">
    <a href="https://github.com/hrithikM86/Traffic-Signal-Optimization" target="_blank">Visit GitHub</a>
</div>

<!-- Professor Website Link -->
<div class="professor-website" id="traffic-professor-website">
    <a href="https://iitb.irins.org/profile/155634" target="_blank">Prof. Alankar Alankar</a>
</div>

<h2 id="positions-of-responsibility">Positions of Responsibility</h2>
<ul>
    <li>Co-founder of “Machine Learning for Health”: a collaborative research group focusing on applications of machine learning in healthcare.</li>
    <li>Mentor for 25+ students in Machine Learning and Data Science at Women in Data Science (WIDS) and contributed to 2 impactful projects.</li>
</ul>

<h2 id="skills">Skills</h2>
<ul>
    <li>Machine Learning & Data Science</li>
    <li>Python Programming</li>
    <li>Deep Learning Frameworks (Keras, TensorFlow, PyTorch)</li>
    <li>Data Visualization (Matplotlib, Seaborn)</li>
    <li>Web Development (HTML, CSS, JavaScript)</li>
    <li>Database Management (SQL)</li>
</ul>

<h2 id="relevant-courses">Relevant Courses</h2>
<ul>
    <li>Machine Learning</li>
    <li>Artificial Intelligence</li>
    <li>Data Structures and Algorithms</li>
    <li>Database Management Systems</li>
    <li>Web Development</li>
</ul>

<h2 id="extracurricular-activities">Extracurricular Activities</h2>
<ul>
    <li>Member of IIT Bombay’s cultural club, participating in organizing events.</li>
    <li>Volunteered for the IIT Bombay Student Chapter of the Earthquake Engineering Research Institute (EERI).</li>
</ul>


<script>
    function toggleSection(contentId, githubId, professorId) {
        const content = document.getElementById(contentId);
        const githubLink = document.getElementById(githubId);
        const professorLink = document.getElementById(professorId);
        
        // Toggle the display of the content
        if (content.style.display === "block") {
            content.style.display = "none";
            githubLink.style.display = "none";
            professorLink.style.display = "none";
        } else {
            content.style.display = "block";
            githubLink.style.display = "block";
            professorLink.style.display = "block";
        }
    }
</script>

</body>
</html>
