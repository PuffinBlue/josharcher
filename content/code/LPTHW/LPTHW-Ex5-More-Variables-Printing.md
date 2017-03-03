+++
pageimage = ""
date = "2016-01-08T22:13:05+01:00"
draft = "false"
categories = [
  "LPTHW",
]
title = "LPTHW - Exercise 5: More Variables Printing"
description = "Complete finished example of the fifth exercise from the Learn Python The Hard Way course. Exercise 5: More Variables and Printing"
url = "/code/lpthw-exercise-5-variables-printing/"
tags = [
  "",
]
slug = ""

+++
[LPTHW - Exercise 5](http://learnpythonthehardway.org/book/ex5.html)

Exercise 5 takes us back over variables and printing. It also introduces us to 'format strings'. I found [this post on format strings](http://www.learnpython.org/en/String_Formatting) from [Learn Python](http://learnpython.org) useful in getting a bit of a better understanding about this new topic.

## LPTHW format strings use old syntax?

In searching around for these format strings and a list of the others, I didn't turn up that much of help. Then I stumbled on some info in [the docs](https://docs.python.org/2/library/string.html#format-examples) suggesting that Python 2 now uses a different syntax for format strings. Instead of `%s`, you'd use `{!s}`, and likewise `{!r}` instead of `%r`.

I see evidence of this in the [Python 3 docs](https://docs.python.org/3.1/whatsnew/2.6.html#pep-3101) too, which indicates the change was back-ported to Python 2 (the version being used in this course). 

You can see an example of this new syntax at the bottom of my completed example below. It's output is the exact same code as before. 

```python
name = 'Josh Archer'
age = 30
height = 178 # centimetres 
weight = 92 # kilograms
eyes = 'hazel'
teeth = 'white'
hair = 'Black'

print "Let's talk about %s." % name
print "He's %d centimetres tall." % height
print "He weights %d kg." % weight
print "Actually that's not that heavy"
print "He's got %s eyes and %s hair." % (eyes, hair)
print "His teeth are always %s as he doesn't drink coffee!" % teeth

# This line is tricky, try to get it exactly right.
print "If I add %d, %d and %d I get %d." % (age, height, weight, age + height + weight)

print "If you'd like the numbers in imperial, then lets see..."
# This uses one of the different format characters '%r', which prints exactly
# what you input.
print '''%r weights %r pounds, he's %r inches tall (and unfortunately for him) 
is still %r years old.''' % (name, weight * 2.2, height * 0.39370, age)
# Trying this with the new format() syntax
print '''{!r} weights {!r} pounds, he's {!r} inches tall (and unfortunately for him) 
is still {!r} years old.''' .format(name, weight * 2.2, height * 0.39370, age)
``` 

## Learn Python The Hard Way Study drills

#### 1. Change all the variables so there is no my_ in front of each one. Make sure you change the name everywhere, not just where you used = to set them.

Done.

#### 2. Try to write some variables that convert the inches and pounds to centimeters and kilograms. Do not just type in the measurements. Work out the math in Python.

Done - see last two examples above.

#### 3. Search online for all of the Python format characters.

As mentioned above, this is a bit of a tricky one. It seems that the available format characters might have stayed the same, as far as I can tell, but [the docs have the best reference on Python format strings](https://docs.python.org/2/library/string.html#format-specification-mini-language) that I could find. 

Interestingly, they don't seem to include the `r` character in the list, but it does work and there is an example of how to change from it to the new syntax. Definitely a bit of a tricky one to work out on your fifth lesson!

#### 4. Try more format characters. %r is a very useful one. It's like saying "print this no matter what."

Done, and tried the new syntax too. 

As ever, [source files on GitLab](https://github.com/PuffinBlue/LPTHW).
