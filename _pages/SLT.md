---
layout: page
permalink: /mathematics/SLT/
title: Singular Learning Theory (SLT)
nav: false
---

# Distilling SLT on LessWrong
## [Distilling Singular Learning Theory](https://www.lesswrong.com/s/czrXjvCLsqGepybHC)

Thanks to a grant from the [Long Term Future Fund](https://funds.effectivealtruism.org/funds/far-future), I have written a LessWrong sequence called Distilling SLT which translates the key lessons, claims and findings of my masters thesis into a more palatable format. The posts were published to coincide with the initial Workshop on [Singular Learning Theory and Alignment](https://singularlearningtheory.com/), and as such the final post of the sequence outlines a research agenda for applying SLT to AI Alignment via a spectroscopic probe detecting phase transitions in learning. 

<p align="center">
<img src="{{site.baseurl}}/DSLT_imgs/2_animate_K_non_true_param_C=0.1_v2_compress.gif" style="max-width:60%;">
</p>

# Talk at SLT Summit for Alignment June 2023

<iframe width="728" height="410" src="https://www.youtube.com/embed/yxv8aDPHI9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

In this talk I present the key ideas of the Singular Learning Theory perspective on phase transitions in statistical models. I show toy examples of simple loss landscapes that demonstrate why the RLCT is so important to phase transitions, and present the work from my masters thesis which demonstrates examples of first and second order phase transitions in two layer feedforward ReLU neural networks. 

# Master's Thesis 

## [Phase Transitions in Neural Networks](http://therisingsea.org/notes/MSc-Carroll.pdf) 
**Supervisor:** [Dr. Daniel Murfet](http://therisingsea.org). <br>
**Date:** October 2021 <br>
**Summary:** The thesis studies Sumio Watanabe's _Singular Learning Theory_ (SLT) and explores how it can be used to explain why neural networks generalise so well, and how to think about and analyse phase transitions in deep learning. We illustrate some important aspects of Watanabe’s theory for small neural networks by examining the relationship between singularities, phases and phase transitions. I demonstrate the existence of both first and second order phase transitions in the Bayesian posterior for simple ReLU neural networks by varying the true distribution.

You can find the code used to generate my Bayesian posterior experiments using HMC [here](https://github.com/lemmykc/phase-transitions-neural-networks).

<p align="center">
<img src="{{site.baseurl}}/DSLT_imgs/4_PT1_combined_animate.gif" style="max-width:60%;">
</p>


# Master's Completion Talk 
<iframe width="728" height="410" src="https://www.youtube.com/embed/S-SxM2-7tiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

In this talk I explain how to inerpret the phase transitions demonstrated in my thesis through the lens of Singular Learning Theory to an audience of fellow Master's students. 

