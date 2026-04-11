---
title: "Deep Learning for Complex Fluids"
collection: project
type: "Project"
permalink: /project/project-3
venue: "University of Notre Dame"
date: 01-06-2025
location: "Notre Dame, IN"
---

**Advisor:** [Dr. Zhiliang Xu](https://acms.nd.edu/people/zhiliang-xu/), Professor, ACMS Department, University of Notre Dame

This is my primary doctoral research, conducted as part of my Graduate Research Assistantship.

I am developing the displacement-based JKO scheme — a structure-preserving deep learning approach for solving complex fluids. The method is grounded in the **Energetic Variational Approach (EnVarA)**, which derives dynamics from the interplay between energy and dissipation. By constructing the numerical scheme directly from the energy-dissipation law, the scheme guarantees monotonic decay of the system's free energy, preventing unphysical states and ensuring long-term stability.

The current focus is the **Cahn-Hilliard equation** for phase-separation dynamics. Key contributions include:

- A **displacement-based neural network discretization** that uses neural networks as mesh-free spatial discretizers, enabling scalability to high dimensions.
- A **gradient-based adaptive refinement** strategy for better capturing diffuse interfaces.
- An **implicit midpoint symplectic time-stepping scheme** with provable energy stability.

The framework is implemented in **PyTorch** and is being extended to coupled **Cahn-Hilliard–Navier-Stokes** systems for modeling complex fluid dynamics.
<!--Heading 1-->
<!--======-->
<!---->
<!--Heading 2-->
<!--======-->
<!---->
<!--Heading 3-->
<!--======-->

<!------->
<!--title: "Master's Project"-->
<!--excerpt: "Short description of portfolio item number 1<br/><img src='/images/500x300.png'>"-->
<!--collection: portfolio-->
<!------->
