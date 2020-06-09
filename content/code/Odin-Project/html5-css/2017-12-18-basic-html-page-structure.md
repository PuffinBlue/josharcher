+++
date = "2017-12-18T17:58:54Z" 
draft = "false"
title = "The Odin Project - HTML5 basics "
description = "" 
categories = ["Odin Project"]
tags = ["Odin Project - Basic HTML page structure", "HTML5 basics", "Odin Project HTML5 basics questions"]
url = "/code/odin-project-html5-basics/"
slug = ""
pageimage = ""
+++
Here are a collection of questions from the Basic HTML Page Structure section of the HTML5 and CSS3 course on from The Odin Project.

Each section will have a different page, but all lessons within a section will be grouped together.

## HTML5 Basics

You can find the HTML5 Basics lesson [here](https://www.theodinproject.com/courses/html5-and-css3/lessons/html5-basics). The lesson questions are answered below:

### How is an HTML5 document structured?

Here's an example. A full list of elements can be found [here](https://www.w3schools.com/tags/).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <nav></nav>
    <main>
        <section>
            <article>
                <header>
                    <h1></h1>
                </header>
                <p></p>
                <p></p>
                <p></p>
            </article>
        </section>
        <section>
            <article>
                <header>
                    <h1></h1>
                </header>
                <p></p>
                <p></p>
                <p></p>
            </article>
        </section>
        <section>
            <article>
                <header>
                    <h1></h1>
                </header>
                <p></p>
                <p></p>
                <p></p>
            </article>
        </section>
    </main>
    <aside></aside>
    <footer></footer>
</body>
</html>
```

### What are elements/tags?

#### Elements

Elements are designators that define the structure and content of objects within a page. 

Elements are identified by the use of less-than and greater-than angle brackets, < >, surrounding the element name. Thus, an element will look like the example in the code block above.

#### Tags

The use of less-than and greater-than angle brackets surrounding an element creates what is known as a tag. Tags most commonly occur in pairs of opening and closing tags.

An opening tag marks the beginning of an element. It consists of a less-than sign followed by an element’s name, and then ends with a greater-than sign; for example, `<div>`.

A closing tag marks the end of an element. It consists of a less-than sign followed by a forward slash and the element’s name, and then ends with a greater-than sign; for example, `</div>`.

The content that falls between the opening and closing tags is the content of that element.

### What are element attributes?

Attributes are properties used to provide additional information about an element.

Common attributes include `id`, `class` and `src`. 

Attributes are defined within the opening tag, after an element’s name. The format is as follows:

```html
<a href="https://www.josharcher.uk">Josh Archer</a>
```

In the above example `href` and the following URI is the attribute and corresponding value. 

### How do you link to external files?

Via the `link` element:

```html
<link rel="alternate" type="application/rss+xml" title="Full site feed" href="https://www.josharcher.uk/index.xml">
```

### When should you use IDs vs Classes?

I've [covered this before](https://www.josharcher.uk/code/the-odin-project-html-css-101/#what-are-classes-and-ids-and-how-are-they-different):

> Classes can be applied to multiple elements whereas IDs should only be applied to one specific element (not a type of element, just one single element)

> Technically, you can actually apply multiple versions of the same ID attribute, there's nothing physically stopping you - it's just a near certainty that something will break on all but the most simple site and you'll be sad in the knowledge that you're creating invalid HTML.

### What attributes are required by image and links for them to be effective and accessible?

`img` elements require `src` attributes and anchor links require the `href` attribute. 

### Where should your CSS live?

Up to you. Don't listen to the 'it always has to go in an external file' mantra. That *can* be the best way to do it, but on extremely simple sites it is often better to just include it in the `<head>` section. 

People who frown upon this haven't actually tested the performance hit. Looking up an external file (which means a DNS query and potentially a round trip for TLS) can often add a significant amount of time onto a page load for a text only HTML page. 

As long as you keep you CSS in a place where you can make a change globally, that updates the CSS on all pages, then you should be fine to embed it within `<style>` tags. 

On this site, my personal website, I keep it within the Header partial of my static site generators layout files. Check the page source, you'll see it there. Every time the site is rebuilt, every single page get an updated copy if changes have been made. 

> Oh no, what about caching! You should put it in an external file to let the browser cache it!

That's great if you don't have a bounce rate in the 90%+ region like I do. In my case, worldwide first time visits are the order of the day with almost no onward pages being visited and simply pulling down the CSS along with the HTML in one request works out faster in almost as scenarios. 

The key point is - do what's best for you and your visitors, even if that's not the exact perfect reference implementation.
