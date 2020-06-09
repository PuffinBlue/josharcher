+++
date = "2017-12-19T15:51:22Z" 
draft = "false"
title = "The Odin Project - Working with Images, Video and other Media"
description = "A post answering questions from the Working with Images, Video and Other Media lesson from The Odin Project's HTML5 and CSS course." 
categories = ["Odin Project"]
tags = ["Odin Project - Images Video Media", "HTML5 basics", "HTML5 and CSS3 basics","Odin Project Images, video, other media"]
url = "/code/odin-project-working-with-images-video-other-media/"
slug = ""
pageimage = ""
+++
Here are a collection of questions from the Working with Images, Video and other Media lesson of the HTML5 and CSS3 course from The Odin Project.

## Working with Images, Video and other Media

You can find the Working with Images, Video and other Media lesson [here](https://www.theodinproject.com/courses/html5-and-css3/lessons/working-with-images-video-and-other-media). 

The lesson questions are answered below, but some of these questions are quite poor or are ambiguous.

### What are common attributes of image tags?

`img` elements always include a `src` attribute. The can also contain:

* `alt`: alternative text title for the image
* `srcset`: specifies the URL on an image to use in different situations
* `height`: used to specify the height to prevent reflows of content during page loads
* `width`: used to specify the width to prevent reflows of content during page loads

A note on the last two - reserving the size of an image before it's downloaded stops the browser having to reflow all content around the image as it loads. We've all experienced content jumping around the screen as it loads and setting these pre-defined sizes can help prevent some of that. 

You would normally set one of the attributes and the other would automatically be applied based on the aspect ratio of the image. 

Managing large numbers of images manually this way can be impossible so getting your CMS to do the work for you or using CSS to set image height/width is a common practice. 

[A full list of available attributes for the `img` element](https://www.w3schools.com/tags/tag_img.asp).

### How do you load a smaller version of an image?

Smaller in what way? 

Smaller in file size? Link to a smaller image than your original (you'll have to make it first!). 

Smaller in terms of size on a page? Set the width and height of the image in HTML or in CSS, whichever is more appropriate.

### How do you get an image to fill up an element?

Fill up an element? Fill up as in display across the width of the block containing the `img` element? In that case you can set the `img` element to display as a block. 

### How do you save load times by using appropriately sized images?

Again, another poorly worded question that answers itself. You reduce load times by reducing the size of the resources that are transferred to the visitors computer, so by reducing the size of images you reduce the time taken to load them. 

### When should you store images externally vs on your server?

There is no one single correct answer to this. The most accurate answer would be 'whenever you need to'. 

A better question might be - when might you store media files on another server?

Some answers to that question might be:

* When you have bandwidth constraints on your main server
* You don't have enough storage
* When you're using a Content Delivery Network to deliver files
* When you don't have a server and would like to embed images

You might store images on your own server for the following reasons:

* To perform image manipulation before delivery
* To maintain control over your content
* You have sufficient bandwidth
* You have sufficient storage
* You wish to track image access

### What are the main types of image files and how are they different?

The StackOverflow post linked below covers the most popular. They are:

* jpeg
* png-8
* png-24
* gif
* svg
* tiff
* BMP

[PNG vs. GIF vs. JPEG vs. SVG - When best to use?](https://stackoverflow.com/questions/2336522/png-vs-gif-vs-jpeg-vs-svg-when-best-to-use)


### Which file types let you use animation?

GIF supports animation but its file size is HUGE. Modern approaches use video files like MP4 which might be found in [GIFV](https://help.imgur.com/hc/en-us/articles/208606616-What-is-GIFV-) or [webm](https://www.webmproject.org/), both of which deliver much higher quality are vastly reduced file sizes.

### Which file types let you use transparent colours?

Sounds like a trick question. Are we talking about 'alpha' transparency? If yes then only PNG can handle this. If we're talking straight up 100% transparency then GIF can handle this too. 

### Which file types are best for photos? Graphics?

For photos - JPEG

For graphics - what is meant by graphics? There are trade-offs for each like size vs quality vs transparency support vs computational overhead. There is no one single answer to this particular question. 

### Which file type lets you scale an image as big as you want without affecting file size (and why)?

SVG because it's 'computed' from a set of vectors (lines and curves) and not a map of pixels (raster image). Changing the size simply results in recalculating the data to display output at the new size, effectively rebuilding the image for the desired size. 

### What’s the difference between raster and vector images?

See above answer for a very hand-wavy overview and this [raster vs vector images](https://vector-conversions.com/vectorizing/raster_vs_vector.html) post for further in depth explanation.

Here's a second [guide to raster vs vector images](http://www.ucreative.com/articles/how-to-explain-raster-vs-vector-to-your-clients/) in case of link rot. 

If you prefer video explanations, [Teckquickie](https://www.youtube.com/channel/UC0vBXGSyV14uvJ4hECDOl0Q) did an overview of [how vector graphics work](https://www.youtube.com/watch?v=W2xknX3k6FY).

### How do you add video to your page? (please don’t autoplay…)

[How to add video to a web page](https://learn.shayhowe.com/html-css/adding-media/#adding-video).

Another [how to add video to a web page guide](https://www.w3schools.com/html/html5_video.asp).

An example from the above linked guide:

```html
<audio controls>
  <source src="jazz.ogg" type="audio/ogg">
  <source src="jazz.mp3" type="audio/mpeg">
  <source src="jazz.wav" type="audio/wav">
  Please <a href="jazz.mp3" download>download</a> the audio file.
</audio>
```

### How do you add audio to your page? (please don’t autoplay…)

[How to add audio to a web page](https://learn.shayhowe.com/html-css/adding-media/#adding-audio).

Another [how to add audio to a web page guide](https://www.w3schools.com/html/html5_audio.asp).

An example from the above linked guide:

```html
<video controls>
  <source src="http://learn.shayhowe.com/assets/misc/courses/html-css/adding-media/earth.ogv" type="video/ogg">
  <source src="http://learn.shayhowe.com/assets/misc/courses/html-css/adding-media/earth.mp4" type="video/mp4">
  Please <a href="http://learn.shayhowe.com/assets/misc/courses/html-css/adding-media/earth.mp4" download>download</a> the video.
</video>
```
