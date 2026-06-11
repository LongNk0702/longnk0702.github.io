---
layout: page
title: news
permalink: /news/
description: Selected media articles and news features about my academic journey, research experience, scholarships, and international programs.
nav: true
nav_order: 5
---

<div class="post">
  <article>
    <p>
      This page collects selected media articles and news features about my academic journey, research experience, scholarships, international exchange programs, and community activities.
    </p>

    <style>
      .media-card {
        height: 100%;
      }

      .media-cover {
        width: 100%;
        height: 190px;
        object-fit: cover;
      }

      .media-source {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }

      .media-category {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .media-description {
        font-size: 0.95rem;
      }
    </style>

    {% assign media_items = site.data.media | sort: "date" | reverse %}

    <div class="row row-cols-1 row-cols-md-3">
      {% for item in media_items %}
        <div class="col mb-4">
          <div class="card media-card z-depth-1">
            {% if item.image %}
              <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">
                <img
                  src="{{ item.image | relative_url }}"
                  class="card-img-top media-cover"
                  alt="{{ item.title }}"
                  loading="lazy"
                >
              </a>
            {% endif %}

            <div class="card-body">
              {% if item.category %}
                <div class="media-category text-muted">
                  {{ item.category }}
                </div>
              {% endif %}

              <h5 class="card-title mt-2">
                <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">
                  {{ item.title }}
                </a>
              </h5>

              <p class="card-text media-source">
                <strong>{{ item.source }}</strong>
                {% if item.date_display %}
                  · {{ item.date_display }}
                {% elsif item.date %}
                  · {{ item.date | date: "%B %d, %Y" }}
                {% endif %}
              </p>

              {% if item.description %}
                <p class="card-text media-description">
                  {{ item.description }}
                </p>
              {% endif %}
            </div>

            <div class="card-footer">
              <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">
                Read article
              </a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </article>
</div>
