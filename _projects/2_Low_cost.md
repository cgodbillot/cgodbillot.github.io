---
layout: page
title: Ready-to-use image classification workflows
description:  
img: assets/img/Detection_result.png
importance: 2
category: Method development
related_publications: true
---

[Significant gaps in climate research in the Global South](https://news.trust.org/item/20210820055944-ojbj9/) can lead to blind spots about the consequences of ongoing climate changes in these countries. New technologies, in particular the growing access to AI-based solutions able to run on personal computers, have the potential to improve the global monitoring of plankton communities. Part of my work is dedicated to developing simple solutions for plankton studies. I started out working on deep-learning based algorithms for plankton identification, and am growing increasingly interested in low-cost imaging devices which could easily be implemented in labs worldwide.

__A. Deep-learning solutions for automatic planktonic identification__

Convolutional neural networks are growing increasingly used in geosciences. Their use provides a means of generating standardised, reproducible datasets for plankton assemblages and size structure, and of increasing the spatial and temporal resolution of plankton studies. 

Within [the MANTA team at CEREGE](https://github.com/microfossil), I am developing high throughput workflows for plankton detection and classifications, to be used for coastal biomonitoring and paleoceanographic studies. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Fig2_exampleOutputs_Lionceau03Threshold.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    In cases where classic thresholding techniques are ineffective, object detection workflows make it possible to extract and analyse individual plankton occurrences in microscope images. Figure from Godbillot et al., 2024.
</div>

__B. Low-cost imaging techniques for coastal biomontoring__


<div class="row">
    <div class="col-md-4">
        {% include figure.liquid loading="eager" path="assets/img/SASHIMIv1.jpg" title="sashimi" class="img-fluid rounded z-depth-1" %}
        <p class="caption">A 3D printer is used as a low-cost scanning device for the automatic acquisition of high resolution microfossil images.</p>
    </div>
    <div class="col-md-8">
        <p>
            Automated image acquisition systems for plankton studies remain sparse, in particular because they are prohibitively expensive and require taxonomic expertise for data analysis. New developments in robotics are now making it possible to develop affordable solutions for image acquisition, to be used on the field, or to be installed worldwide. Together with the growing number of community-annotated plankton image datasets, these new technologies have the potential to be installed globally for continuous monitoring.

The simple solution for image acquisition presented here is being tested for its potential use in coastal monitoring of benthic foraminifera at the LPG in Angers.   
        </p>
    </div>
</div>



{% nocite godbillot_new_2024 %}

