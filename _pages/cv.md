---
layout: page
title: CV
permalink: /cv/
description: Employment, funding, education, and service.
background_image: /assets/img/overland/IMG_1616.jpeg
---

{% for section in site.data.cv %}
<section class="cv-section">
<h2>{{ section.title }}</h2>

{% for entry in section.contents %}
<div class="cv-entry">
  <div class="cv-year">{{ entry.year }}</div>
  <div class="cv-details">
    <h3>{{ entry.title }}</h3>
    {% if entry.institution %}
    <p class="cv-institution">{{ entry.institution }}</p>
    {% endif %}
    {% if entry.description %}
    <div class="cv-description">
      {% if entry.description.first %}
        <ul>
        {% for item in entry.description %}
          {% if item.title %}
            <li><strong>{{ item.title }}:</strong>
              {% if item.contents %}
              {{ item.contents | join: ', ' }}
              {% endif %}
            </li>
          {% else %}
            <li>{{ item }}</li>
          {% endif %}
        {% endfor %}
        </ul>
      {% else %}
        <p>{{ entry.description }}</p>
      {% endif %}
    </div>
    {% endif %}
  </div>
</div>
{% endfor %}

</section>
{% endfor %}
