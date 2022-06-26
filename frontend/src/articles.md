---
title: Blog - Garratt's Place
layout: article.njk
pagination:
  data: articles.data
  size: 1
  alias: article
permalink: "article/{{ article.attributes.Slug }}/"
---
<div class="border-l-4 border-indigo-500 pl-3 mb-4">
  <h1 class="mt-8 mb-4 text-5xl">{{ article.attributes.Title }}</h1>
  <span>Published: <span class="underline underline-offset-4">{{ article.attributes.Published}}</span></span>
</div>

{{ article.attributes.Body }}

