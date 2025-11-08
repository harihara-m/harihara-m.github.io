---
title: "Energetic Variational Neural Network Discretization of the Cahn-Hilliard Equation"
collection: talks
type: "Talk"
permalink: /talks/talk-1
venue: "Scientific Machine Learning: Theory, Algorithm, and Applications Workshop"
date: 2025-09-27
location: "Purdue University, West Lafayette, IN"
---

In this talk, I presented a structure-preserving Lagrangian algorithm for solving the Cahn-Hilliard equation. The algorithm employs neural networks as tools for spatial discretization. The proposed scheme is constructed based on the energy-dissipation law directly. This guarantees the monotonic decay of the system's free energy, which avoids unphysical states of solutions and is crucial for the long-term stability of numerical computations. To address challenges arising from interface problems, we introduce an adaptive sampling method for better capturing the diffuse-interface. Moreover, we solve for the incremental of the flow map. This approach is computationally memory-efficient. The proposed neural network-based scheme is mesh-free, allowing us to solve gradient flows in high dimensions. Numerical experiments are presented to demonstrate the accuracy and energy stability of the proposed numerical schemes.
