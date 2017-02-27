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
my_name = 'Josh Archer'
my_age = 30
my_height = 178 # centimetres 
my_weight = 92 # kilograms
my_eyes = 'hazel'
my_teeth = 'white'
my_hair = 'Black'

print(f"Let's talk about {my_name}" % name
print(f"He's {my_height} centimetres tall."
print(f"He weights {my_weight}kg."
print("Actually that's not that heavy")
print("He's got {my_eyes} eyes and {my_hair} hair."
print("His teeth are always {my_teeth} as he doesn't drink coffee!"

# This line is tricky, try to get it exactly right.
total = my_age + my_height + my_weight
print(f"If I add {my_age}, {my_height}, and {my_weight} I get {total}.")
```

## Learn Python The Hard Way Study drills

#### 1. Change all the variables so there is no my\_ in front of each one. Make sure you change the name everywhere, not just where you used = to set them.

```python
name = 'Josh Archer'
age = 30
height = 178 # centimetres 
weight = 92 # kilograms
eyes = 'hazel'
teeth = 'white'
hair = 'Black'

print(f"Let's talk about {name}" % name
print(f"He's {height} centimetres tall."
print(f"He weights {weight}kg."
print("Actually that's not that heavy")
print("He's got {eyes} eyes and {hair} hair."
print("His teeth are always {teeth} as he doesn't drink coffee!"

# This line is tricky, try to get it exactly right.
total = my_age + my_height + my_weight
print(f"If I add {age}, {height}, and {weight} I get {total}.")
```

#### 2. Try to write some variables that convert the inches and pounds to centimeters and kilograms. Do not just type in the measurements. Work out the math in Python.

I initially wrote this answer for version 3 of the LPTHW book which taught Python 2. However, I noticed then that the format strings were different for Python 3, so I wrote the answer with both.

I'll leave the original answer here.

```python
print "If you'd like the numbers in imperial, then lets see..."

print '''{!r} weights {!r} pounds, he's {!r} inches tall (and unfortunately for him) 
is still {!r} years old.''' .format(name, weight * 2.2, height * 0.39370, age)
``` 

#### 3. Search online for all of the Python format characters.

This question is no longer in version 4 of the book that teaches Python 3 but I'm leaving it in. 
[The docs have the best reference on Python format strings](https://docs.python.org/2/library/string.html#format-specification-mini-language) that I could find. 

This bit is useful:

```python
"Harold's a clever {0!s}"        # Calls str() on the argument first
"Bring out the holy {name!r}"    # Calls repr() on the argument first
"More {!a}"                      # Calls ascii() on the argument first
```

#### 4. Try more format characters. {!r} is a very useful one. It's like saying "print this no matter what."

Done, and tried the new syntax too in answer to question 2 above. 

### Source files

As ever, [source files on GitLab](https://gitlab.com/josharcher/LPTHW).
