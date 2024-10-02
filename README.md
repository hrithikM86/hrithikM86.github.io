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

        .github-link {
            display: none;
            margin-left: 20px;
            color: green;
        }

        .github-link a {
            color: green;
            text-decoration: none;
        }

        .github-link a:hover {
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

<!-- GitHub Link -->
<div id="amex-github" class="github-link">
    <a href="https://www.linkedin.com/in/archit-jain-4b027761/" target="_blank">Manager</a>
</div>

<h2 id="international-experience">International Experience</h2>
<div class="section-title" onclick="toggleSection('sdc-content', 'sdc-github')">2. Seismic Design Competition, San Francisco, USA &#9660;</div>
<div id="sdc-content" class="section-content">
    <ul>
        <li>Developed solutions for the Earthquake Engineering Research Institute's Seismic Design Competition.</li>
        <li>Achieved 8th position internationally as the sole Indian team.</li>
        <li>Designed a 19-storey skyscraper with sustainable design elements.</li>
    </ul>
</div>
<div id="sdc-github" class="github-link">
    <a href="https://www.example.com" target="_blank">Visit GitHub</a>
</div>

<h2 id="research-projects">Research & Development Projects</h2>

<div class="section-title" onclick="toggleSection('crack-detection', 'crack-github')">3. Classification, Segmentation and GAN Implementation on Concrete Crack Surfaces &#9660;</div>
<div id="crack-detection" class="section-content">
    <ul>
        <li>Implemented DenseNet121, ResNet50, and EfficientNet models for concrete crack detection.</li>
        <li>Engineered a Deep Convolutional Generative Adversarial Network (DCGAN) to generate images of concrete cracks.</li>
    </ul>
</div>
<div id="crack-github" class="github-link">
    <a href="https://github.com/hrithikM86/CS490-RnD-Classification-Segmentation-and-GAN-implementation-on-Concrete-Crack-Images/tree/main" target="_blank">Visit GitHub</a>
</div>

<div class="section-title" onclick="toggleSection('health-dashboard', 'health-github')">4. Dashboard For Public Health Systems &#9660;</div>
<div id="health-dashboard" class="section-content">
    <ul>
        <li>Developed a dashboard for analytics on regional healthcare services in Maharashtra.</li>
        <li>Pioneered a comprehensive ‘Health Index’ for assessing district health conditions.</li>
    </ul>
</div>
<div id="health-github" class="github-link">
    <a href="https://github.com/hrithikM86/DH307-Development-Of-An-Integrated-Dashboard-For-Public-Health-Systems" target="_blank">Visit GitHub</a>
</div>

<h2 id="technical-projects">Technical Projects</h2>

<div class="section-title" onclick="toggleSection('attendance-mate', 'attendance-github')">5. Attendance Mate | Face Recognition Attendance System &#9660;</div>
<div id="attendance-mate" class="section-content">
    <ul>
        <li>Developed a reliable attendance system utilizing students’ phones for marking attendance.</li>
        <li>Implemented MTCNN & YOLO algorithms for accurate student face extraction.</li>
    </ul>
</div>
<div id="attendance-github" class="github-link">
    <a href="https://github.com/hrithikM86/Attendance-Mate-Face-Recognition-Attendance-System/tree/main" target="_blank">Visit GitHub</a>
</div>

<div class="section-title" onclick="toggleSection('stock-trading', 'stock-github')">6. Optimizing Stock Trading with Reinforcement Learning &#9660;</div>
<div id="stock-trading" class="section-content">
    <ul>
        <li>Explored RL algorithms, including DQN and DDPG, using OpenAI Gym for stock trading strategies.</li>
        <li>Demonstrated the effectiveness of the RL-based approach with a $14 profit from a $5,000 investment.</li>
    </ul>
</div>
<div id="stock-github" class="github-link">
    <a href="https://github.com/hrithikM86/Optimizing-Stock-Trading-with-Reinforcement-Learning" target="_blank">Visit GitHub</a>
</div>

<h2 id="positions-of-responsibility">Positions of Responsibility</h2>
<p>Senior Department Academic Mentor & Subgroup Head | Civil Engineering Department</p>

<h2 id="skills">Skills</h2>
<p>Languages: C, C++, Python, MATLAB, SQL, HTML, CSS, R</p>

<h2 id="relevant-courses">Relevant Courses</h2>
<p>Mathematics: Calculus, Differential Equations, Linear Algebra, Probabilistic and Statistical Methods</p>

<h2 id="extracurricular-activities">Extracurricular Activities</h2>
<p>Participated in XLR8 and built an advanced WiFi-controlled racing bot using ESP32.</p>

<script>
    function toggleSection(contentId, githubId) {
        var content = document.getElementById(contentId);
        var github = document.getElementById(githubId);
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            github.style.display = "block";
        } else {
            content.style.display = "none";
            github.style.display = "none";
        }
    }
</script>

</body>
</html>
