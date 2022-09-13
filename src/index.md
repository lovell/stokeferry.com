---
title: Welcome to Stoke Ferry
description: Includes the Wissey Valley villages of Boughton, Stoke Ferry, Wereham, West Dereham, Whittington and Wretton
layout: category.njk
pagination:
  data: collections.all-reverse
  size: 20
permalink: "/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber | plus: 1 }}/{% endif %}"
eleventyExcludeFromCollections: true
---
