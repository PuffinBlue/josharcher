+++
Description = "Thoughts on the Odin Project's HTML and CSS 101 course. "
categories = ["Odin Project"]
date = "2015-05-20T09:32:55+01:00"
draft = false
url = "/code/the-odin-project-html-css-101"
title = "The Odin Project - HTML and CSS 101"

+++
{{< figure class="img-right-float" src="/static/img/2015/05/html5.png" >}}

Having completed the HTML and CSS 101 course (and starting as I mean to go on) here are some thoughts on the lesson.

Firstly, this is a basic course. It's not meant to be that in depth and it's not supposed to overwhelm with info. And it doesn't!

I enjoyed it to be honest. It wasn't world changing or anything, primarily because I'd done a lot of this before but it still filled in a few gaps.

> There's a difference between learning and doing, and the 'doing' part of this course is the key to it's success.

The main thing I noticed throughout (but mostly during the [CodeCademy section](http://www.codecademy.com/courses/web-beginner-en-HZA3b/0/1)) was the emphasis on doing things. There's a difference between learning and doing and the 'doing' part of this course is the key to it's success.

Physically typing out the HTML and CSS over and over again really started to make it second nature and somehow cements it in your mind a simply another language that can be read and written like any other.
<!--more-->
Despite hacking away and building sites for years I feel my knowledge is much more structured and 'second nature' than before I started. I'm really surprised by this actually, and it's given me motivation to continue.

## Points to ponder - some answers

I don't know if I'll do this for every single 'Points to Ponder' but this stuff is pretty low level and crucial to get right, so here's a few answers to see if I find it useful.

### Why do we separate HTML and CSS?

Efficiency and maintenance 'cost'. By keeping a separate CSS file it's possible to apply a single property/value to millions of classes/ID's/elements across thousands of separate HTML pages.

If individual styling had to be entered on every `<p>` tag on the BBC News website for instance, thousands of man hours would be wasted every month on the tedious task, let alone when any styling changes need to be made.

### What are classes and IDs (and how are they different)?

Classes and ID's are both types of attribute that can be applied to HTML elements and can then be used to apply CSS to those elements.

Classes can be applied to multiple elements whereas IDs should only be applied to one specific element (not a type of element, just one single element)

Technically, you *can* actually apply multiple versions of the same ID attribute, there's nothing physically stopping you - it's just a near certainty that something will break on all but the most simple site and you'll be sad in the knowledge that you're creating invalid HTML.

So the rule is 'don't do it because it's wrong and you'll face problems' rather than 'you can physically put it on more than one'.

### What are elements?

HTML elements are the basic building blocks of the HTML Document and consist of a start tag, content and an end tag.

Example elements: div, p, nav, section, a, img and footer.

### What are tags?

Tags are the 'words' of the HTML 'language'. Tags consist of an opening angle bracket `<` the element name and a closing `>`. Example `<p>`.

### What are attributes?

Attributes provide extra information about an HTML element. Attributes are always placed inside the `<>` of the start tag and have the form `name="value"`.

### What are forms?

A form is something that collects user input. Forms contain form elements like input boxes and radio buttons which allow different ways to collect user input.

### What is a div?

A div is simply a type of HTML Element that acts like a container to hold the content within. It is used to divide the HTML document into sections and can be used to apply CSS to very large or very specific sections of the HTML document.

### What are selectors?

Selectors are found in CSS. They are used to 'select' an HTML element/ID/class.

In the purest sense, they *are* elements/IDs/classes. For instance, the element/tag `<p>` can be 'selected' in CSS simply as `p`.

An ID would be prefixed by a `#` and a class would be prefixed with a `.`. These examples might make things clearer: ID `#someID` Class `.someClass`

### What are properties?

Properties are found in CSS. They form part of the 'declaration block' along with 'values' and they come after the selector.

I find them hard to define without an example as a property is simply a 'thing' that can be applied to the selector (and by extension the element/ID/class) which when paired to a value will cause the element/ID/class to be altered in some way.

Here is an example:

`selector {property:value;}`

`p {font-size:12px}`

### What are values?

With the last answer in mind, the value is the amount of the property to apply.

### What is the "query string" in a URL and what does it do?

The standard definition is:

> a query string is the part of a uniform resource locator (URL) containing data that does not fit conveniently into a hierarchical path structure. The query string commonly includes fields added to a base URI by a Web browser or other client application.

In the most specific sense it is a method of passing data to the 'appication' powering a website/webapp.

It can do a myrid of things from tracking URL clicks to passing form input to the 'backend'.

### What is the difference between "pixels" and "ems"?

Pixels are an absolute measure and ems are a relative measure.

Ems are measured relative to the parent div, or to the HTML element, or to the browser defaults of the properties aren't included in the HTML document/CSS.

Pixels are exactly what they sound like, a font size of 16px will display 16px high on all screens. The problem comes when different screens have different sizes and pixel densities.

### How do CSS styles for a particular element get inherited? ie. how does an element get its "default" styles?

The browser will have a default stylesheet which applies various declarations to the elements.

If this question is about how CSS inheritance is applied, the answer is too long for here and you can instead look [here](http://dorward.me.uk/www/css/inheritance/) for more info.

### What are two CSS attributes you can change to push an element around on the page?

Margin and padding are the basic ones. But you could also use position (and additional properties) or even translate to name two others.

### What are the three different ways to include CSS in your project or use CSS to style a particular element?

Inline: Placed directly within the start tag of an HTML element as an 'attribute' and will be automatically applied.

Internal: Placed within `<style>` tags within the same HTML document as the elements (usually in the `<head>` section) and will be automatically applied.

External: Placed in a seperate text files save as .css and included/applied via a specifically formatted link in the `<head>` section.

### What is the "default stylesheet" or "user agent stylesheet"?

It's simply a set of CSS rules that are inbuilt into the browser and which give HTML elements some default styling.

### Why use a CSS reset file?

To neutralise the default stylesheet and allow you to start completely from a blank page. This can be useful in avoiding different browsers causing your markup to display differently.
