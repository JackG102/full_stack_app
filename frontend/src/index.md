---
title: Main Page
layout: default.njk
pagination:
  data: articles.data
  size: 100
  alias: articles
---

# Restaurant

<ul>
  {%- for article in articles -%}
    <li>{{ article.attributes.Title }}</li>
  {%- endfor -%}
</ul>