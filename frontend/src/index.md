---
title: Main Page
layout: default.njk
pagination:
  data: articles.data
  size: 100
  alias: articles
---

# Articles

<ul>
  {%- for article in articles -%}
    <li><a href="articles/{{ article.attributes.Slug }}">{{ article.attributes.Title }}</a></li>
  {%- endfor -%}
</ul>