---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}
You can find the PDF version of my CV [here](http://harihara-m.github.io/files/CV.pdf) and my resume [here](http://harihara-m.github.io/files/Resume.pdf).

<!-- # Summary -->
<!---->
<!-- I am a first-year PhD student in Applied and Computational Mathematics in the Applied Computational Mathematics and Statistics (ACMS) Department of the University of Notre Dame, IN, US. I am enthusiastic about learning numerical methods for solving differential equations. -->

# Education

- PhD Applied Mathematics (<span style="color:cyan">2024-current</span>)
  - Department of Applied and Computational Mathematics and Statistics (ACMS), University of Notre Dame, South Bend, IN, US.
- MSc. Mathematics (<span style="color:cyan">2022-2024</span>)
  - School of Mathematics, IISER Thiruvananthapuram, India
- BSc. Mathematics (<span style="color:cyan">2019-2022</span>)
  - Department of Mathematics, M. P. C. Autonomous College, Odisha, India
- Higher Secondary (10+2) (<span style="color:cyan">2017-2019</span>)
  - Vijayanjai HS Res. School, Odisha, India
- Secondary Examination (10th boards) (<span style="color:cyan">2016-2017</span>)
  - Budhabalanga High School, Odisha, India

# Publications

- K. Arun, A. Krishnamurthy, and [H. Maharna](https://scholar.google.com/citations?user=xUMkKU8AAAAJ&hl=en). An asymptotic preserving and energy stable scheme for the euler system with congestion constraint. Applied Mathematics and Computation, 495:129306, 2025.

# Research and Internship Projects

<ul>{% assign main_projects = site.project | where: "type", "Project" | sort: 'date' | reverse %}
{% for post in main_projects %}
{% include archive-single-cv.html %}
{% endfor %}</ul>

# Selected Class Projects

<ul>{% assign class_projects = site.project | where: "type", "Class Project" | sort: 'date' | reverse %}
{% for post in class_projects %}
{% include archive-single-cv.html %}
{% endfor %}</ul>

<!--Master’s Project (<span style="color:cyan">Jan-May 2024</span>)-->
<!---->
<!--- Guide: Dr. K. R. Arun, School of Mathematics, IISER Thiruvananthapuram, India-->
<!--- Topic: An asymptotic preserving and energy stable finite volume scheme for the compressible Euler equations with congestion constraint.-->
<!--  - In this project, we designed and analyzed a finite volume scheme for the barotropic Euler equations with the congestion pressure law and performed the singular limit termed as the hard congestion limit at the discrete level.-->
<!--  - The developed scheme was an entropy stable and asymptotic preserving. We also obtained a-priori estimates on the relevant unknowns. We lastly, proved the efficiency of the numerical scheme by testing various numerical examples.-->
<!---->
<!--Summer Project (<span style="color:cyan">Summer 2023</span>)-->
<!---->
<!--- Guide: Dr. Anupam Pal Choudhury, School of Mathematics, NISER Bhubaneswar, India-->
<!--- Topic: Differential Equations-->

# Teaching

<ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
    {% endfor %}</ul>

# Work Experience

- Spring 2025: Teaching Assistant

  - University of Notre Dame
  - Duties includes: Holding office hours and grading

- Fall 2024: Teaching Assistant

  - University of Notre Dame
  - Duties includes: Holding office hours and grading

- Feb 2022- July 2023

  - Chegg subject matter expert in Calculus

# Scholastic Achievements and Fellowships
- Departmental Award, ACMS Department, University of Notre Dame, 2025
    - Awarded for the highest score in the Applied Mathematics qualifying exam; USD 500.
- NBHM Master’s Fellowship, National Board for Higher Mathematics [(NBHM)](https://www.imsc.res.in/~nbhm/), 2022-24
    - Awarded through a national-level examination conducted by the Government of India to support master’s studies; INR 168,000
<!-- - Graduate Aptitude Test in Engineering [(GATE)](https://gate.iitkgp.ac.in/)-2022 qualified. -->
<!-- - Joint Admission test for Masters [(JAM)](https://jam.iitr.ac.in/)-2022 qualified. -->
- Valedictorian in BSc Mathematics, M. P. C. Autonomous College, 2002​
    - Graduated top of class in the 2019–2022 cohort.

# Skills
- Computational Methods
  - Deep Neural Networks, Physics-Informed Neural Networks, Computational Fluid Dynamics, Numerical Analysis, Finite Element Methods, Finite Volume Methods, Finite Difference Methods.
- Programming
  - Python (PyTorch, SimVascular, NGSolve, SciPy, Pandas), MATLAB, R.
- Tools & Platforms
  - Github, Linux, LATEX, Jupyter Notebooks.
- Languages: English, Hindi, and Odia
