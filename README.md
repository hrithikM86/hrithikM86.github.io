<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio with Dropdowns</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        h1 {
            color: blue;
        }

        .section-title {
            cursor: pointer;
            color: darkblue;
            margin: 10px 0;
            font-weight: bold;
        }

        .section-content {
            display: none;
            margin-left: 20px;
        }
    </style>
</head>
<body>

<h1>Table of Contents</h1>
<ul>
    <li><a href="#education">Education</a></li>
    <li><a href="#scholastic-achievements">Scholastic Achievements</a></li>
    <li><a href="#professional-experience">Professional Experience</a></li>
    <li><a href="#research-projects">Research & Development Projects</a></li>
    <li><a href="#technical-projects">Technical Projects</a></li>
    <li><a href="#positions-of-responsibility">Positions of Responsibility</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#relevant-courses">Relevant Courses</a></li>
    <li><a href="#online-courses">Online Courses</a></li>
    <li><a href="#extracurricular-activities">Extracurricular Activities</a></li>
</ul>

<h1 id="education">Education</h1>
<p><b>Indian Institute of Technology (IIT) Bombay</b><br>
Bachelor of Technology in Civil Engineering with a Minor in Computer Science and Engineering<br>
<b>GPA:</b> 8.83/10<br>
<b>Expected Graduation:</b> 2025</p>

<h1 id="scholastic-achievements">Scholastic Achievements</h1>
<ul>
    <li>Ranked 8 out of 150+ students in the B.Tech Civil Engineering program at IIT Bombay (2024)</li>
    <li>Secured an All India Rank of 3225 in JEE Advanced 2021</li>
    <li>Achieved a 99.17 percentile in JEE Main 2021</li>
</ul>

<h1 id="professional-experience">Professional Experience</h1>

<div class="section-title" onclick="toggleSection('amex-content')">American Express</div>
<div id="amex-content" class="section-content">
    <ul>
        <li>Developed a variable rationalization framework to enhance model stability using SHAP, mRMR, and ALE techniques.</li>
        <li>Utilized GBM algorithms for default prediction and Bayesian optimization for hyperparameter tuning.</li>
        <li>Achieved a 50% reduction in model variables, leading to a 30% improvement in monthly capture rate stability.</li>
    </ul>
</div>

<div class="section-title" onclick="toggleSection('sdc-content')">Seismic Design Competition, San Francisco, USA</div>
<div id="sdc-content" class="section-content">
    <ul>
        <li>Developed solutions for the Earthquake Engineering Research Institute's Seismic Design Competition.</li>
        <li>Achieved 8th position internationally as the sole Indian team.</li>
        <li>Designed a 19-storey skyscraper with sustainable design elements.</li>
    </ul>
</div>

<h1 id="research-projects">Research & Development Projects</h1>

<div class="section-title" onclick="toggleSection('crack-detection')">Classification, Segmentation and GAN Implementation on Concrete Crack Surfaces</div>
<div id="crack-detection" class="section-content">
    <ul>
        <li>Implemented DenseNet121, ResNet50, and EfficientNet models for concrete crack detection.</li>
        <li>Engineered a Deep Convolutional Generative Adversarial Network (DCGAN) to generate images of concrete cracks.</li>
    </ul>
</div>

<div class="section-title" onclick="toggleSection('health-dashboard')">Dashboard For Public Health Systems</div>
<div id="health-dashboard" class="section-content">
    <ul>
        <li>Developed a dashboard for analytics on regional healthcare services in Maharashtra.</li>
        <li>Pioneered a comprehensive ‘Health Index’ for assessing district health conditions.</li>
    </ul>
</div>

<!-- You can replicate similar sections for other parts -->

<script>
    function toggleSection(id) {
        var section = document.getElementById(id);
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
</script>

</body>
</html>
