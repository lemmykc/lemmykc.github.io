---
layout: page
title: AI Safety & Mathematics
permalink: /ai-safety/
description: Research in Singular Learning Theory, Developmental Interpretability, and AI safety assurance.
background_image: /assets/img/overland/IMG_2268.jpeg
math: true
---

I am currently a Researcher in AI Safety at the [Gradient Institute](https://www.gradientinstitute.org), and previously at [Timaeus](https://timaeus.co). My work combines technical research in interpretability and evaluation methodology with communication of AI safety issues for policy audiences.

At Gradient, I co-led a research report on measuring AI capabilities for the [UK AI Safety Institute](https://www.aisi.gov.uk/), connecting Singular Learning Theory with psychometric analysis. I also co-authored a report on risks from governed multi-agent AI systems, commissioned by the [Australian Department of Industry, Science and Resources](https://www.industry.gov.au/). I have designed and presented technical AI education for government agencies and industry, and was the lead organiser of the [Australian AI Safety Forum 2024](https://aisafetyforum.au/).

Prior to that, I was an independent researcher and a key contributor to the [Developmental Interpretability](https://devinterp.com) research agenda in collaboration with Timaeus, combining theory from [Singular Learning Theory](https://www.lesswrong.com/s/czrXjvCLsqGepybHC) with empirical methods to study structure formation in trained neural networks. I was supported by a [Lightspeed Grant](https://lightspeedgrants.org) ($48k USD) and a [Long Term Future Fund](https://funds.effectivealtruism.org/funds/far-future) grant ($8k USD).

---

## Papers & Reports

### [Risk Analysis Techniques for Governed LLM-based Multi-Agent Systems](https://arxiv.org/abs/2508.05687) — Report for Australian DISR, 2025

A. Reid, S. O'Callaghan, **L. Carroll**, T. Caetano

Identifies six failure modes specific to governed multi-agent LLM systems — including cascading reliability failures, monoculture collapse, and mixed motive dynamics — and provides practical assessment tools for each.

<details>
<summary>BibTeX</summary>

```bibtex
@article{reid2025risk,
  title={Risk Analysis Techniques for Governed LLM-based Multi-Agent Systems},
  author={A. Reid and S. O'Callaghan and L. Carroll and T. Caetano},
  year={2025},
  eprint={2508.05687},
  archivePrefix={arXiv},
}
```
</details>

### [Loss Landscape Degeneracy and Stagewise Development in Transformers](https://arxiv.org/abs/2402.02364) — TMLR, 2025

J. Hoogland, G. Wang, M. Farrugia-Roberts, **L. Carroll**, S. Wei, D. Murfet

Transformers exhibit distinct developmental stages during training; this paper connects changes in loss landscape degeneracy (measured via Singular Learning Theory) with observable shifts in internal structure and behaviour.

<details>
<summary>BibTeX</summary>

```bibtex
@article{hoogland2025loss,
  title={Loss Landscape Degeneracy and Stagewise Development in Transformers},
  author={J. Hoogland and G. Wang and M. Farrugia-Roberts and L. Carroll and S. Wei and D. Murfet},
  journal={Transactions on Machine Learning Research},
  year={2025},
}
```
</details>

### Psychometrics for Pythia: Connecting Evaluations to Interpretability using Singular Learning Theory — Research report for UK AISI, 2025

**L. Carroll**, A. Reid, J. Hoogland, G. Wang, S. van Wingerden, S. O'Callaghan, D. Murfet

Connects AI evaluation methodology with interpretability via Singular Learning Theory and psychometric analysis. Completed for the UK AI Safety Institute (not public).

<details>
<summary>BibTeX</summary>

```bibtex
@techreport{carroll2025psychometrics,
  title={Psychometrics for Pythia: Connecting Evaluations to Interpretability using Singular Learning Theory},
  author={L. Carroll and A. Reid and J. Hoogland and G. Wang and S. van Wingerden and S. O'Callaghan and D. Murfet},
  year={2025},
  note={Research report for UK AI Safety Institute (not public)},
}
```
</details>

### [You Are What You Eat — AI Alignment Requires Understanding How Data Shapes Structure and Generalisation](https://arxiv.org/abs/2502.05475) — arXiv, 2025

S. Pepin Lehalleur, J. Hoogland, M. Farrugia-Roberts, S. Wei, A. Gietelink Oldenziel, G. Wang, S. van Wingerden, Z. Furman, **L. Carroll**, D. Murfet

Two networks can have equivalent training performance but compute outputs in essentially different ways; understanding how data structure shapes model structure is necessary to move beyond testing toward robust AI alignment.

<details>
<summary>BibTeX</summary>

```bibtex
@article{pepin2025you,
  title={You Are What You Eat -- AI Alignment Requires Understanding How Data Shapes Structure and Generalisation},
  author={S. Pepin Lehalleur and J. Hoogland and M. Farrugia-Roberts and S. Wei and A. Gietelink Oldenziel and G. Wang and S. van Wingerden and Z. Furman and L. Carroll and D. Murfet},
  year={2025},
  eprint={2502.05475},
  archivePrefix={arXiv},
}
```
</details>

### [Dynamics of Transient Structure in In-Context Linear Regression Transformers](https://arxiv.org/abs/2501.17745) — arXiv, 2025

**L. Carroll**, J. Hoogland, M. Farrugia-Roberts, D. Murfet

Studies the "transient ridge" phenomenon, where transformers initially behave like ridge regression before specialising to their training distribution, and explains this transition via Bayesian internal model selection as an evolving tradeoff between loss and complexity.

<details>
<summary>BibTeX</summary>

```bibtex
@article{carroll2025dynamics,
  title={Dynamics of Transient Structure in In-Context Linear Regression Transformers},
  author={L. Carroll and J. Hoogland and M. Farrugia-Roberts and D. Murfet},
  year={2025},
  eprint={2501.17745},
  archivePrefix={arXiv},
}
```
</details>

### [Phase Transitions in Neural Networks](/assets/pdf/PhaseTransitions_NeuralNetworks_LiamCarroll.pdf) — Master's Thesis, 2021

**L. Carroll**. Supervisor: [Dr. Daniel Murfet](http://therisingsea.org).

The thesis studies Sumio Watanabe's *Singular Learning Theory* and explores how it can be used to explain why neural networks generalise so well, and how to think about and analyse phase transitions in deep learning. I illustrate some important aspects of Watanabe's theory for small neural networks by examining the relationship between singularities, phases and phase transitions. I demonstrate the existence of both first and second order phase transitions in the Bayesian posterior for simple ReLU neural networks by varying the true distribution.

Code: [phase-transitions-neural-networks](https://github.com/lemmykc/phase-transitions-neural-networks)

<details>
<summary>BibTeX</summary>

```bibtex
@mastersthesis{carroll2021phase,
  title={Phase Transitions in Neural Networks},
  author={Liam Carroll},
  month={October},
  year={2021},
  school={The University of Melbourne},
  url={http://therisingsea.org/notes/MSc-Carroll.pdf},
  type={Master's Thesis},
}
```
</details>

---

## Blogposts & Distillations

### [Distilling Singular Learning Theory](https://www.lesswrong.com/s/czrXjvCLsqGepybHC) — LessWrong sequence, 2023

Thanks to a grant from the [Long Term Future Fund](https://funds.effectivealtruism.org/funds/far-future), I have written a LessWrong sequence called *Distilling SLT* which translates the key lessons, claims and findings of my master's thesis into a more palatable format. The posts were published to coincide with the initial Workshop on [Singular Learning Theory and Alignment](https://devinterp.com).

### [Stagewise Development in Neural Networks](https://www.lesswrong.com/posts/Zza9MNA7YtHkzAtit/stagewise-development-in-neural-networks) — LessWrong, 2024

Distillation accompanying the TMLR paper on stagewise development in transformers.

### [Growth and Form in a Toy Model of Superposition](https://www.lesswrong.com/posts/jvGqQGDrYzZM4MyaN) — LessWrong, 2023

This post distills [Dynamical and Bayesian Phase Transitions in a Toy Model of Superposition](https://arxiv.org/abs/2310.06301) by Chen et al. (2023), where they study developmental stages of the Toy Model of Superposition, understanding growth and form from the perspective of SLT. This work was supported by Lightspeed Grants.

---

## Talks

### SMRI Focus Period on Mathematical Science of AI Safety — December 2025

Talk on *Psychometrics of AI* at the Sydney Mathematical Research Institute. [Event link](https://mathematical-research-institute.sydney.edu.au/focus-period-mathematical-science-of-ai-safety/).

### Tech Policy Design Institute — AI, Emerging Tech & Policy Bootcamps — May & November 2025

*AI Decoded — From Models to Agents* (with B. Simpson-Young). Presented for the Gradient Institute at policy bootcamps in Canberra. [Event link](https://techpolicy.au/education).

### MATRIX-MFO Tandem Workshop — September 2025

Invited talk on *Singular Learning Theory and the Phases of Learning* at the Machine Learning and AI for Mathematics workshop in Creswick. [Event link](https://www.matrix-inst.org.au/events/matrix-mfo-tandem-workshop-machine-learning-and-ai-for-mathematics/).

### Australian AI Safety Forum 2024 — November 2024

Lead organiser and opening speaker for the two-day forum in Sydney connecting researchers, policymakers, and practitioners working on AI safety. [Event link](https://aisafetyforum.au/).

{% include youtube.html id="NAPsi-ascbk" %}

### ILIAD Conference — August 2024

Talk on *Retreat from Ridge: Algorithm Choice in Transformers* at the ILIAD Conference in Berkeley. [Event link](https://www.iliadconference.com/).

{% include youtube.html id="BL-qLdUn68E" %}

### SLT Summit for Alignment — June 2023

In this talk I present the key ideas of the Singular Learning Theory perspective on phase transitions in statistical models. I show toy examples of simple loss landscapes that demonstrate why the RLCT is so important to phase transitions, and present the work from my master's thesis which demonstrates examples of first and second order phase transitions in two layer feedforward ReLU neural networks.

{% include youtube.html id="yxv8aDPHI9A" %}

### Master's Completion Talk — 2021

In this talk I explain how to interpret the phase transitions demonstrated in my thesis through the lens of Singular Learning Theory to an audience of fellow Master's students.

{% include youtube.html id="S-SxM2-7tiY" %}

---

## Mathematics Notes

I also maintain an archive of [assignment solutions](/mathematics/notes/) from my Master's degree — Lie Algebras, Functional Analysis, PDEs, Algebraic Geometry, Random Matrix Theory, and more.
