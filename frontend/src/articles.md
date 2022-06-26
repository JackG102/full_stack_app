---
title: Blog - Garratt's Place
layout: article.njk
pagination:
  data: articles.data
  size: 1
  alias: article
permalink: "articles/{{ article.attributes.Slug }}/"
---
<div class="border-l-4 border-orange-500 pl-3 mb-4">
  <h1 class="mt-8 mb-4 text-5xl">{{ article.attributes.Title }}</h1>
  <span>Published: <span class="underline underline-offset-4">{{ article.attributes.Published}}</span></span>
</div>

{{ article.attributes.Body }}

