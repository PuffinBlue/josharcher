+++
tags = [
  "",
]
pageimage = ""
draft = "false"
title = "LPTHW - Ex 0: The Setup"
slug = ""
description = "Some thoughts and tips regarding the zeroth exercise from the Learn Python The Hard Way course. Exercise 0: The Setup."
categories = [
  "LPTHW",
]
date = "2015-10-13T20:48:07+01:00"
url = "/code/lpthw-ex-0-setup/"

+++
This is all about setting up your development environment. I wasn't going to bother writing this up as it seemed like a fairly basic thing but that's just not the case.

There are so many considerations when it comes to how you want to set things up and as a newbie you can get yourself off down a rabbit hole and find you need to redo a bunch of things later on down the road when your skill improves or you need to change systems.

## Recommended tools/setup

Zed recommends a couple of different tools for getting started based on the proviso that you'll be running your development locally. That's all well and good but with the [recent addition](https://c9.io/blog/increased-limits-for-free-users-enough-is-almost-never-enough/) of unlimited free workspaces with [Cloud9](https://c9.io), now is the time to take your learning to the cloud!

If you really do want to develop locally, then by all means do so, it's always a good thing to get some experience with such things, but for a platform independent, off-site, secure, backed up, free workspace with full root access, a terminal, full virtual machine, GitHub (or any git hosting) integration **and** SSH to your own server, *as well as* a great online editor - Cloud9 really is the way to go.

## But I want to edit text locally

No problem, save yourself some testing time and just jump in with [Atom](https://atom.io). I know that Zed recommends Notepad++, Text Wrangler and Gedit, but this course was around when Atom was a glint in the developers eyes so it just wasn't an option back then.

[<img src="/static/img/2015/10/Atom_editor_logo.svg.png" width=300 >](https://atom.io)

Atom has also come a long way from the slow and buggy days of old. It's a cross platform editor available on Windows, OS X and on many variants of Linux. Sure it's not as fast as Sublime Text or Notepad++ when handling massive files, but it's fast enough for 98% of things you'll need to be doing in the first 6 months of learning, and it's totally FREE and OPEN SOURCE!

To add to that, Atom is one of the most easily extensible and well supported text editors around. 

Microsoft and Adobe each have launched Visual Code Studio and Brackets respectively, showing that an Electron based editor doesn't have to be slow, but you won't find the same number of community packages or the same ease of customisation you will with Atom.

So, save yourself a bit of time and go for it.

### Atom fonts and themes

There are hundreds, if not thousands of [themes for Atom](https://atom.io/themes/). Getting the right look and feel for an editor is a big part of enjoying sitting and looking at your code on a screen all day, so don't pay this part lip service.

Staring at a glaring white high contrast monitor for hours at a time is a fast way to lose interest and gain discomfort, so take the time to find a theme that works for you. 

Personally, I use the inbuilt '[Tomorrow Dark](https://atom.io/themes/base16-tomorrow-dark-theme)' theme with Atom and use '[Inconsolata](http://www.levien.com/type/myfonts/inconsolata.html)' as my font, size 17. 

You can install Inconsolata on Windows just by downloading the [.otf file from here](http://www.levien.com/type/myfonts/Inconsolata.otf) and double clicking to open it, then hit 'install' from the top bar. You'll have to restart Atom to see the new font. 

You can also set Inconsolata as your font of choice in Cloud9, just click the little gear icon in your workspace (top right) to open preferences, go to the 'User Settings > Editors' sections and change the fonts there. You just write them in. You'll need to make sure you restart your browser to see the new font, if you had it open when you installed it that is. 

To me Inconsolata and Tomorrow Dark look great together. The slightly lower contrast also helps if you've got an astigmatism as it reduces glare and ghosting.

## What the heck is the command line?

So you're ready to go, you've got Cloud9 or Atom up and running, you've installed Python or it's already there (lucky Unix users!) and you're off. But wait, what the heck is the command line, AKA the terminal or shell?

You probably already know what it is, you just haven't wanted to use it as it doesn't make any sense right? How the heck are you supposed to know what to do?

Well, the terminal needs to be learnt. You will need to learn the basic navigation commands, but don't be under the illusion it's difficult. If you can type your name, you can use the terminal, seriously. 

For an excellent primer on the 'shell', Zed has a short [Command Line Interface course](http://cli.learncodethehardway.org/book/) available. It's works for users of Windows, OS X and Linux, so go there and do the exercise first if you're unsure how to get around on the command line. 

And yes, you'll see those words used interchangeably as I have done above, just get used to it, they all really mean the same thing!

As ever, [source files on GitLab](https://gitlab.com/josharcher/LPTHW).
