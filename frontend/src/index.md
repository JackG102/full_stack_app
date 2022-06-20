---
title: Blog
layout: default.njk
pagination:
  data: blog-posts.data
  size: 100
  alias: blog
---

# Restaurants

<ul>
{%- for blog-post in blog-posts -%}
  <li><a href="/blog/{{ restaurant.id }}/">{{ blog.attributes.title }}</a></li>
{%- endfor -%}
</ul>