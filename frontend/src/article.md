---
layout: default.njk
pagination:
    data: articles.data
    size: 1
    alias: article
permalink: "article/{{ article.id }}/"
---

{{ article.attributes.Title }}