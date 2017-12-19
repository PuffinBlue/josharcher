+++
date = "2017-12-19T00:44:57Z" 
draft = "false"
title = "The Odin Project - Linking Internal & External Pages" 
description = "A post answering questions from the Linking Internal and External Pages lesson from The Odin Project HTML5 and CSS course" 
categories = ["Odin Project"]
tags = ["Odin Project HTML5 CSS","HTML5 basics","Odin Project Linking Pages"]
url = "/code/linking-internal-external-pages/"
slug = ""
pageimage = ""
+++

Here are a collection of questions from the Linking Internal and External Pages lesson from the Basic HTML Page Structure section of the HTML5 and CSS3 course on from The Odin Project.

## Linking Internal and External Pages

You can find the Linking Internal and External Pages lesson [here](https://www.theodinproject.com/courses/html5-and-css3/lessons/linking-internal-and-external-pages). The lesson questions are answered below:

### What’s the difference between internal links (/somepage) and external links (http://www.somesite.com/somepage)?

`/somepage` links to a page relative to the site on which the link is placed, the resource it is meant to point to will only be 'findable' in the context of the original site it was intended to work on. 

For example, linking to `/somepage` on site A will find the 'correct' page relative to Site A that the original creator intended. This would 'create' the full link `https://siteA.com/somepage`. 

If `/somepage` is executed in the context of another site, Site B, it would return the resource found at `https://siteB.com/somepage`. That page may not exist on Site B and if by coincidence it does, it won't have the came content as the one found on Site A as the author of Site A wouldn't have created it. 

`https://www.somesite.com/somepage` on the other hand is an exact specific location a file can be found on a specific website. So this type of link will always link back to the original resource as created and intended by the original author. 

### When on a webpage should you use the full URI (with the http://yoursite.com/somepath) and when should you use the relative path (/somepath)?

You should use relative links to link to pages within you own site, i.e. the site you control and creates the original intended content to be found at the relative link. 

It has been claimed that there is performance difference between the two types of links, but [this is unlikely](https://webmasters.stackexchange.com/questions/96955/speed-comparison-absolute-vs-relative-path-links).

If you need to link to a resource on another site, you should use the absolute path/full URI. 

### How do you navigate the document tree with links (../../someotherpage)?

The clue is in the question. You set the relative path relative to the root of the website. If a file is in `/images/2017/05/` then you would include this 'full' relative path to the resource. 

To answer the specific question of using [dot segments](https://stackoverflow.com/a/6009045) within the relative path is more confusing and I don't fully understand the RFC and how it works. I suspect that you can link to `./../` in a similar way you can in some file systems but I'm unsure how different browsers would handle this or the webserver would traverse the file structure to find the correct named resource. 

A quick test with the inbuilt Hugo webserver simple removed the dot-segments. 

### How do you open links in external windows?

You set a value of `blank` on the `target` attribute of an `a` element. 

### What are all the possible pseudo-states (e.g. :hover) of a link and when are they actually activated? How do you change styles based on them?

From [here](https://www.webpagefx.com/blog/web-design/link-pseudo-classes/) the following examples show what pseudo elements are available and how to target them:

```css
/* Default */
a {
  color: blue;
}
/* Unvisited links */
a:link {
  color: blue;
}
/* Visited links */
a:visited {
  color: purple;
}
/* Hover state */
a:hover {
  color: red; 
}
/* Focused state */
a:focus {
  color: orange;
}
/* Activated state */
a:active {
  color: green;
}
```

### Here’s a description of each pseudo-class:

* `:link` – selects unvisited links.
* `:visited` – selects visited links.
* `:hover` – the state that happens when the user places their mouse pointer on top of a link.
* `:active` – the state that happens when the user clicks on a link. This is the very brief moment between clicking on the link and becoming focused, or the moment between clicking and then going to another web page. Because this state normally lasts for a short duration, you can see this state easier when you click-and-mouse-down on a link without releasing the mouse button.
* `:focus` – the state that occurs when the user focuses on the link. This state can be seen when you tab to a link, or after you click on a link.
