---
title: Category
layout: default.njk
pagination:
  data: categories.data
  size: 1
  alias: category
permalink: 'categories/{{ category.id }}/'
---

# {{ category.name }}

## Blog Posts

{% for blog-posts in category.attributes.blog-post.data %}

<li><a href="/restaurants/{{ restaurant.id }}/">{{ blog-post.attributes.name }}</a></li>
{% endfor %}
