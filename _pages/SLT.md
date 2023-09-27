---
layout: page
permalink: /mathematics/SLT/
title: Singular Learning Theory (SLT)
nav: false
---

At present my research is focused on the application of Singular Learning Theory to the understanding of deep learning (AI) models like neural networks and transformers. With a newfound interest in AI Safety and Alignment, I am currently working on the [Developmental Interpretability](https://www.lesswrong.com/s/SfFQE8DXbgkjk62JK/p/TjaeCWvLZtEDAS5Ex) agenda. 

# Writing 

## [Phase Transitions in Neural Networks](http://therisingsea.org/notes/MSc-Carroll.pdf) - Master's Thesis
**Supervisor:** [Dr. Daniel Murfet](http://therisingsea.org). <br>
**Date:** October 2021 <br>
**Summary:** The thesis studies Sumio Watanabe's _Singular Learning Theory_ (SLT) and explores how it can be used to explain why neural networks generalise so well, and how to think about and analyse phase transitions in deep learning. I illustrate some important aspects of Watanabe’s theory for small neural networks by examining the relationship between singularities, phases and phase transitions. I demonstrate the existence of both first and second order phase transitions in the Bayesian posterior for simple ReLU neural networks by varying the true distribution.

You can find the code used to generate my Bayesian posterior experiments using HMC [here](https://github.com/lemmykc/phase-transitions-neural-networks).
<!--
<p align="center">
<img src="{{site.baseurl}}/DSLT_imgs/4_PT1_combined_animate.gif" style="max-width:60%;">
</p>
-->
### Cite My Work
If you would like to cite this work please use the following BibTeX reference:
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

## [Distilling Singular Learning Theory](https://www.lesswrong.com/s/czrXjvCLsqGepybHC) on LessWrong

Thanks to a grant from the [Long Term Future Fund](https://funds.effectivealtruism.org/funds/far-future), I have written a LessWrong sequence called Distilling SLT which translates the key lessons, claims and findings of my masters thesis into a more palatable format. The posts were published to coincide with the initial Workshop on [Singular Learning Theory and Alignment](https://devinterp.com). 
<!--
<p align="center">
<img src="{{site.baseurl}}/DSLT_imgs/2_animate_K_non_true_param_C=0.1_v2_compress.gif" style="max-width:60%;">
</p>
-->
### Cite My Work
If you would like to cite this work please use the following BibTeX reference:
```bibtex
@misc{DSLT2023lesswrong,
  title={Distilling Singular Learning Theory},
  author={Liam Carroll},
  year={2023},
  howpublished={\url{https://www.lesswrong.com/s/czrXjvCLsqGepybHC}},
}
```

# Talks 

## Talk at SLT Summit for Alignment June 2023
In this talk I present the key ideas of the Singular Learning Theory perspective on phase transitions in statistical models. I show toy examples of simple loss landscapes that demonstrate why the RLCT is so important to phase transitions, and present the work from my masters thesis which demonstrates examples of first and second order phase transitions in two layer feedforward ReLU neural networks. 

<iframe width="364" height="205" src="https://www.youtube.com/embed/yxv8aDPHI9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Master's Completion Talk 
In this talk I explain how to inerpret the phase transitions demonstrated in my thesis through the lens of Singular Learning Theory to an audience of fellow Master's students. 

<iframe width="364" height="205" src="https://www.youtube.com/embed/S-SxM2-7tiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



