+++
title = "LPTHW - Exercise 14: Prompting and Passing"
description = "Complete finished example of the fourteenth exercise from the Learn Python The Hard Way course. Exercise 14: Prompting and Passing."
date = "2016-09-08T18:34:12Z"
categories = [
  "LPTHW",
]
tags = [
  "",
]
draft = "false"
url = "/code/lpthw-exercise-14-prompting-and-passing/"
slug = ""
pageimage = ""

+++
[LPTHW - Exercise 14](http://learnpythonthehardway.org/book/ex14.html)

Not much to say about this one. We've done this stuff lots of times. I guess the only slightly different thing is creating a variable for what we're going to put insite the `raw_input()` function.

There are a couple things required to do in the study drills that change the initial script, so you'll see mine below doesn't specifically match the one on the lesson plan. 

I suspect that's going to happen a lot from now on so I'll be publishing my completed work with comments to show what I added.

```python
from sys import argv
# Add the 'title' argument to argv
script, user_name, title = argv
# This make a variable called 'prompt' which we set to what we want. Then, when
# inside the raw_input() function, we insert the variable to output whatever 
# prompt is set to. So the prompt will be >  with a space. You can shange all 
# prompts in one place using this method. 

# Add couple extra right angle brackets to prompt

prompt = '>>> '

# Add extra agrv variable to various areas (for study drills)

print "Hi %s (%s), I'm the %s script." % (user_name, title, script)
print "I'd like to ask you a few questions."
print "Do you like me %s (%s)?" % (user_name, title)
likes = raw_input(prompt)

print "Where do you live %s (%s)?" % (user_name, title)
lives = raw_input(prompt)

print "What kind of computer do you have %s (%s)?" % (user_name, title)
computer = raw_input(prompt)

print """
Alright, so you have said %r about liking me.
You live in %r (not sure where that is).
And you have a %r computer. Nice.
""" % (likes, lives, computer)
```

## Learn Python The Hard Way - Study Drills

### Find out what Zork and Adventure were. Try to find a copy and play it.

Yeah, found it and honestly I don't really like these games. I know it's probably cool to say they're great and all but I'm just not a gamer and faffing around in a text game just isn't fun for me.

I'd rather face a lesson like this one than play a game to try and learn things. I know, I'm not normal! :-)

### Change the prompt variable to something else entirely.

I went wild and added a couple extra right angle brackets. What a MadLad!

### Add another argument and use it in your script, the same way you did in the previous exercise with first, second = ARGV

Done. I used `title`.

### Make sure you understand how I combined a """ style multiline string with the % format activator as the last print.

I'm honestly not sure what there is to understand? Is Zed expecting us to be thrown off because there are line breaks in the string? 

For the sake of verbosity, the triple quoted string is exactly the same as a single or double quoted for the purpose of using the formatters. The first formatter in the string corresponds to the first variable in the array (? or whatever it's called) after the format activator (the %).

As ever, [source files on GitHub](https://github.com/PuffinBlue/LPTHW).
