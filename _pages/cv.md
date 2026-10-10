---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

PhD Candidate in Applied and Computational Mathematics at the University of Notre Dame, specializing in deep learning, numerical methods for differential equations, and efficient computational techniques for complex fluids. Enthusiastic about developing innovative mathematical and computational solutions to real-world problems.

Download the PDF versions of my [CV]({{ base_path }}/files/CV.pdf){:target="_blank" rel="noopener"} and [résumé]({{ base_path }}/files/Resume.pdf){:target="_blank" rel="noopener"}.

## Education

- <span class="cv-date">2024–present</span> **PhD in Applied and Computational Mathematics**
  - Department of Applied and Computational Mathematics and Statistics (ACMS), University of Notre Dame, Notre Dame, IN, USA
  - Advisor: Dr. Zhiliang Xu, Professor, ACMS Department
  - GPA: 4.0/4.0
- <span class="cv-date">2024–2026</span> **MSc in Applied and Computational Mathematics and Statistics**
  - University of Notre Dame, Notre Dame, IN, USA
  - GPA: 4.0/4.0
- <span class="cv-date">2022–2024</span> **MSc in Mathematics**
  - School of Mathematics, IISER Thiruvananthapuram, Kerala, India
  - CGPA: 8.45/10
- <span class="cv-date">2019–2022</span> **BSc in Mathematics**
  - Department of Mathematics, M. P. C. Autonomous College, Odisha, India (valedictorian)
  - CGPA: 9.09/10

## Skills

- **Computational and AI methods:** Deep Learning, Physics-Informed Neural Networks, Computational Fluid Dynamics, Numerical Analysis, Finite Element Methods, Finite Volume Methods.
- **Programming:** Python (PyTorch, SimVascular, NGSolve, SciPy, Pandas), MATLAB, R.
- **Tools and platforms:** GitHub, Linux, LaTeX, Jupyter Notebooks.
- **Languages:** English, Hindi, and Odia.

## Research Experience

- <span class="cv-date">Summer 2026</span> **Summer Research Intern**, IBM Research, Dublin, Ireland
  - Topic: Physics-informed training of TokaMind, a multi-modal transformer foundation model for tokamak plasma dynamics (Plasma Fusion team)
  - Derived and implemented a weak-form (Galerkin) Grad–Shafranov physics loss. The discretization reduces to a symmetric positive semidefinite edge-flux operator that uses only first differences of the magnetic flux, which avoids the second derivatives the strong form requires.
  - Designed physics-aware evaluation metrics (GS self-consistency error, operator-space flux error, and roughness deviation). These are computed with an independent finite-difference operator, so models trained with either the strong-form or weak-form loss are scored on a discretization neither loss optimizes.
  - Ran comparison experiments across six TokaMark reconstruction and forecasting tasks on FAIR-MAST fusion data using IBM's GPU cluster. Physics-informed training cut GS self-consistency and operator-space flux errors by about 50% compared with data-only training, at a modest cost in signal-space NRMSE.
- <span class="cv-date">June 2025–present</span> **Graduate Research Assistant**, University of Notre Dame, Notre Dame, IN
  - Topic: [Deep Learning for Complex Fluids]({{ base_path }}/project/project-3)
  - Advisor: Dr. Zhiliang Xu, Professor, ACMS Department
  - Architected and implemented an Energetic Variational Deep Neural Network (EVNN) solver with adaptive refinement in PyTorch for generalized diffusion problems.
  - Ensured model stability and physical consistency by enforcing energy conservation laws directly within the architecture, resulting in more robust and reliable simulations.
  - Scaling this EVNN framework to model complex, coupled Cahn–Hilliard–Navier–Stokes and high-dimensional fluid dynamic systems to improve training stability.
- <span class="cv-date">Spring 2025</span> **Class Project, Numerical Hemodynamics and Uncertainty Quantification**, University of Notre Dame
  - Project: [Impact of hemodynamic parameters on rupture risk in abdominal aortic aneurysm (AAA)]({{ base_path }}/project/class_project-1) ([report](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xUMkKU8AAAAJ&citation_for_view=xUMkKU8AAAAJ:u-x6o8ySG0sC))
  - Guide: Dr. Daniele E. Schiavazzi, Associate Professor, ACMS Department
  - Performed finite element analysis by solving the time-dependent Navier–Stokes equations in SimVascular to model blood flow as an incompressible Newtonian fluid.
  - Computed and analyzed hemodynamic metrics to assess the vascular flow characteristics and evaluated the rupture risk in AAA models, comparing representative and virtually repaired geometries.
- <span class="cv-date">Spring 2024</span> **Master's Research Project**, IISER Thiruvananthapuram, Kerala, India
  - Project: [An Asymptotic-Preserving and Energy-Stable Scheme for the Euler System]({{ base_path }}/project/project-2) ([publication](https://doi.org/10.1016/j.amc.2025.129306))
  - Guide: Dr. K. R. Arun, School of Mathematics
  - Developed a semi-implicit finite-volume scheme for the barotropic Euler equations with a congestion pressure law, ensuring positivity of density and energy stability at the discrete level.
  - Proved entropy stability and asymptotic-preserving properties, ensuring reliability in stiff regimes.
- <span class="cv-date">Summer 2023</span> **Summer Project**, NISER Bhubaneswar, India
  - Topic: [Differential Equations]({{ base_path }}/project/project-1)
  - Guide: Dr. Anupam Pal Choudhury, School of Mathematics, NISER Bhubaneswar
  - Investigated scalar conservation laws with applications to traffic flow modeling and shockwave dynamics.
  - Analyzed weak solutions, Rankine–Hugoniot conditions, and entropy criteria to understand discontinuities in flow behavior.

## Fellowships and Awards

- <span class="cv-date">2026</span> Best Figure Award, *Journal of Data and Societal Endeavors*, USD 250
- <span class="cv-date">Summer 2026</span> IBM Ireland Graduate Fellowship, University of Notre Dame Dublin, USD 4,500
- <span class="cv-date">2026</span> Honorable Mention, Best Use of Data and/or Math Modeling Award, University of Notre Dame
- <span class="cv-date">2026</span> People's Choice Talk Award, Interdisciplinary Graduate Research Symposium, University of Notre Dame, USD 250
- <span class="cv-date">2025</span> Departmental Award for the highest score in the Applied Mathematics qualifying examination, ACMS Department, University of Notre Dame, USD 500
- <span class="cv-date">2023–2024</span> NBHM Master's Fellowship, National Board for Higher Mathematics ([NBHM](https://www.imsc.res.in/~nbhm/)), INR 168,000 over two years
- <span class="cv-date">2022</span> Valedictorian, BSc Mathematics (2019–2022 batch), Maharaja Purna Chandra (MPC) Autonomous College, Odisha, India

## Work Experience

- <span class="cv-date">Aug 2024–present</span> **Teaching Assistant**, University of Notre Dame
  - Provided instructional support for advanced courses in Applied Mathematics, Statistics, and Data Science; managed grading, held office hours, and delivered lectures when needed. More on the [Teaching]({{ base_path }}/teaching/) page.
  - **Fall 2026:** Introduction to Applied Mathematics Methods I (ACMS 22550-2, tutorial); Algorithms and Data Structures for Scientific Computing (ACMS 40220)
  - **Spring 2026:** Scientific Programming (ACMS 40210, ACMS 60210); Introduction to Probability (ACMS 30530)
  - **Fall 2025:** Nonlinear Dynamical Systems (ACMS 60630, ACMS 40630); Numerical Analysis I (ACMS 60690); Probability and Statistics for Data Science (DS 60505)
  - **Spring 2025:** Scientific Programming (ACMS 40210, ACMS 60210); Numerical Analysis (ACMS 40390)
  - **Fall 2024:** Probability and Statistics for Data Science (DS 60505); Introduction to Numerical Analysis (ACMS 20350)
- <span class="cv-date">Feb 2022–July 2023</span> **Subject Matter Expert in Calculus**, Chegg (online education support)

## Talks and Posters

<ul>
{%- for talk in site.talks reversed %}
  <li>
    <span class="cv-date">{% if talk.event_dates %}{{ talk.event_dates }}{% else %}{{ talk.date | date: '%B %-d, %Y' }}{% endif %}</span>
    <strong>{{ talk.type }}:</strong> <a href="{{ base_path }}{{ talk.url }}">{{ talk.title }}</a>
    <br>{{ talk.venue }}, {{ talk.location }}{% if talk.award %} &middot; <em>{{ talk.award }}</em>{% endif %}
  </li>
{%- endfor %}
</ul>

## Workshops and Schools

- <span class="cv-date">Summer 2022</span> **Mathematics Training and Talent Search Programme (MTTS), Level 1**, IISER Thiruvananthapuram, India
  - Four-week summer school with lectures in analysis and algebra.

## Professional and Social Activities

- <span class="cv-date">2026–2027</span> **Social Co-Chair, Graduate Student Government**, University of Notre Dame
  - Organize social and cultural events for the graduate student community. Secure event funding through partnerships with campus offices (Graduate School, Grad Life, Student Activities) and student groups, and lead a volunteer committee to plan inclusive, accessible events across departments.
- <span class="cv-date">Fall 2025</span> **Graduate Orientation Member**, University of Notre Dame
  - Served on the Graduate Orientation Team, mentoring incoming graduate students during their transition to Notre Dame by leading campus tours, facilitating small-group discussions, and connecting new students with departmental and university resources.
- <span class="cv-date">2022–2024</span> **Math Club Outreach Member**, IISER Thiruvananthapuram, India
  - Organized and led mathematical outreach sessions for local school students as part of the IISER Thiruvananthapuram Math Club, designing interactive activities and problem-solving workshops to foster curiosity and engagement with mathematics among young learners.

## Publications

1. K. Arun, A. Krishnamurthy, and [H. Maharna](https://scholar.google.com/citations?user=xUMkKU8AAAAJ&hl=en). An asymptotic preserving and energy stable scheme for the Euler system with congestion constraint. *Applied Mathematics and Computation*, 495:129306, 2025. [doi:10.1016/j.amc.2025.129306](https://doi.org/10.1016/j.amc.2025.129306)
