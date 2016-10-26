+++
Description = "Need to know the path to a folder for use in Mac OS X Terminal? This quick guide will show you how to find the Absolute Path to any directory on Mac OS X."
categories = ["Tips & Tricks"]
date = "2015-05-10T19:50:23+01:00"
draft = false
slug = "find-path-to-folder-on-mac"
title = "Find the Absolute Path to a folder or directory in Mac OS X"
pageimage = "/img/2015/5/Locate-folder-you-need-location-for.png"
+++
Mac OS X doesn’t have an obvious way to view the exact text based path to a folder (otherwise known as a directory) in the finder window. You can have it show a graphical path, but getting just the text based path to a directory (for use in the Terminal for example) requires a couple of extra steps.

## Yosemite users special note

Apple removed the ability to easily copy the file path in OS X Yosemite. Yosemite users must now follow a complicated procedure of [creating a Service](http://superuser.com/questions/829295/how-to-copy-unix-file-path-in-os-x-yosemite) to do this simple task or take the path directly from the command line.

## El Capitan - Built in file path copy function

If you are a El Capitan user you are in luck, Apple has now created a specific command to capture the file path. Instructions on how to use this can be found [here](http://www.amsys.co.uk/2015/10/copy-as-pathname-finder-feature-in-os-x-el-capitan-os-x-10-11/).

## Mavericks and below - How to find the Absolute Path to a folder on Mac OS X

Here are the instructions for finding the file path on Mavericks and below...

<!--more-->

The first thing to do is identify the folder you need to know the full path for. In this example it’s the “month 1″ folder of my Insanity Workout folder (and yes, I did buy Insanity, directly from Amazon actually and these are my back-ups. It’s not pirated like so much Beachbody stuff unfortunately is!):

![Locate folder you need location for](/img/2015/05/Locate-folder-you-need-location-for.png)

Now we can simply press the “cmd+i” keys together to open up the “Get Info” window. This displays various bits of info about the folder as you can see below:

![The "Get Info" display window](/img/2015/05/The-Get-Info-display-window.png")

You can see that the Get Info window contains the line “Where:” followed by the text folder path. This is the path to the folder we have been looking for. The path to the folder is highlighted and made clearer in the screenshot below:

![Copy the folder path](/img/2015/05/Copy-the-folder-path.png")

You can now copy this text based absolute folder path and paste it into your Terminal window. **NOTE** – If the directory path contains spaces, as the example i have used in this post does, you **MUST** use ” quotation ” marks around the path when typing it into the Terminal. The screenshot below demonstrates this:

![Terminal-window-showing-use-of-quote-marks](/img/2015/05/Terminal-window-showing-use-of-quote-marks.png)

### Why might I need to know how to find the path to a folder on Mac?

Knowing the text based absolute path to a folder can be useful for a number of reasons. Being able to locate the precise path allows you to unlock the full power of the Terminal, which can often be faster and more efficient that using the Graphical User Interface.

Mac OS X doesn’t have an obvious way to view the exact text based path to a folder (otherwise known as a directory) in the finder window. You can have it show a graphical path, but getting just the text based path to a directory (for use in the Terminal for example) requires a couple of extra steps.

## Yosemite users - special note

Apple removed the ability to easily copy the file path in OS X Yosemite. Yosemite users must now follow a complicated procedure of [creating a Service](http://superuser.com/questions/829295/how-to-copy-unix-file-path-in-os-x-yosemite) to do this simple task or take the path directly from the command line.

## El Capitan - Built in file path copy function

If you are a El Capitan user you are in luck, Apple has now created a specific command to capture the file path. Instructions on how to use this can be found at teh link below:

http://www.amsys.co.uk/2015/10/copy-as-pathname-finder-feature-in-os-x-el-capitan-os-x-10-11/

## Mavericks and below - How to find the Absolute Path to a folder on Mac OS X

Here are the instructions for finding the file path on Mavericks and below...

The first thing to do is identify the folder you need to know the full path for. In this example it’s the “month 1″ folder of my Insanity Workout folder (and yes, I did buy Insanity, directly from Amazon actually and these are my back-ups. It’s not pirated like so much Beachbody stuff unfortunately is!):

<img src="/img/2015/05/Locate-folder-you-need-location-for.png" alt="Locate folder you need location for" width="884" height="552" >

<!--more-->

Now we can simply press the “cmd+i” keys together to open up the “Get Info” window. This displays various bits of info about the folder as you can see below:

<img src="/img/2015/05/The-Get-Info-display-window.png" alt="The Get Info display window">

You can see that the Get Info window contains the line “Where:” followed by the text folder path. This is the path to the folder we have been looking for. The path to the folder is highlighted and made clearer in the screenshot below:

<img src="/img/2015/05/Copy-the-folder-path.png" alt="Copy the folder path">

You can now copy this text based absolute folder path and paste it into your Terminal window. **NOTE** – If the directory path contains spaces, as the example i have used in this post does, you **MUST** use ” quotation ” marks around the path when typing it into the Terminal. The screenshot below demonstrates this:

<img src="/img/2015/05/Terminal-window-showing-use-of-quote-marks.png" alt="Terminal window showing use of quote marks">

### Why might I need to know how to find the path to a folder on Mac?

Knowing the text based absolute path to a folder can be useful for a number of reasons. Being able to locate the precise path allows you to unlock the full power of the Terminal, which can often be faster and more efficient that using the Graphical User Interface.
