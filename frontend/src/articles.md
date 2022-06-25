---
layout: default.njk
pagination:
  data: articles.data
  size: 1
  alias: article
permalink: "article/{{ article.attributes.Slug }}/"
---

# {{ article.attributes.Title }}

Published: {{ article.attributes.Published}}

{{ article.attributes.Body }}

