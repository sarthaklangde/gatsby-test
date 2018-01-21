---
path: "/react-starter-kit"
date: "2018-01-20T02:55:30.466Z"
title: "New Project: React Starter Kit"
---

Initing the blog.

```javascript
import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'
funston.overrideThemeStyles = ({ rhythm }, options) => ({
  'h2,h3': {
    marginBottom: rhythm(1/2),
    marginTop: rhythm(2),
  }
})

const typography = new Typography(funstonTheme)

```
