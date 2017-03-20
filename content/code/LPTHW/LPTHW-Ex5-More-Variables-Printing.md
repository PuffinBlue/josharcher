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
  "Learn Python The Hard Way Exercise 5","LPTHW Exercise 5","Learn Python Exercise 5","LPTHW Ex 5","",
]
slug = ""

+++
[LPTHW - Exercise 5](http://learnpythonthehardway.org/book/ex5.html)

Exercise 5 takes us back over variables and printing. It also introduces us to 'format strings'.

One key thing to understand about Python is that there seems to have been a bit of a 'mess' around handling strings. This course exploits the behaviour available in Python 3.6 and above. And I can see why - it's the closest to the way Python 2 handled strings. 

Here's a great blog post detailing the changes in the new Python 3.6 version:

https://cito.github.io/blog/f-strings/

I also found [this post on format strings](https://pyformat.info/) from [PyFormat](https://github.com/ulope/pyformat.info) incredibly useful in understanding how Python has changed it's handling of strings between version 2 and version 3. 

The PyFormat guide extracts much of the salient information from the docs and presents it in a clear and understandable way with example from each version, allowing you to see exactly how things have changed. 

However, it doesn't seems to have the Python 3.6 behaviour in there yet, so extract that from the topmost link.

I know, confusing, but that seems to have been a bit of a thing in Python over the last few years and I guess played a part in the big rift from Python 2 to Python 3.  

Anyway, heres the script...

```python
my_name = 'Josh Archer'
my_age = 30
my_height = 178 # centimetres 
my_weight = 92 # kilograms
my_eyes = 'hazel'
my_teeth = 'white'
my_hair = 'Black'

print(f"Let's talk about {my_name}")
print(f"He's {my_height} centimetres tall.")
print(f"He weights {my_weight}kg.")
print("Actually that's not that heavy")
print(f"He's got {my_eyes} eyes and {my_hair} hair.")
print(f"His teeth are always {my_teeth} as he doesn't drink coffee!")

# This line is tricky, try to get it exactly right.
total = my_age + my_height + my_weight
print(f"If I add {my_age}, {my_height}, and {my_weight} I get {total}.")
```

## Learn Python The Hard Way Study drills

### 1. Change all the variables so there is no my\_ in front of each one. Make sure you change the name everywhere, not just where you used = to set them.

```python
name = 'Josh Archer'
age = 30
height = 178 # centimetres 
weight = 92 # kilograms
eyes = 'hazel'
teeth = 'white'
hair = 'Black'

print(f"Let's talk about {name}")
print(f"He's {height} centimetres tall.")
print(f"He weights {weight}kg.")
print("Actually that's not that heavy")
print(f"He's got {eyes} eyes and {hair} hair.")
print(f"His teeth are always {teeth} as he doesn't drink coffee!")

# This line is tricky, try to get it exactly right.
total = age + height + weight
print(f"If I add {age}, {height}, and {weight} I get {total}.")
```

### 2. Try to write some variables that convert the inches and pounds to centimeters and kilograms. Do not just type in the measurements. Work out the math in Python.

I initially wrote this answer for version 3 of the LPTHW book which taught Python 2. However, I noticed back then that the format strings were different for Python 3, so I wrote the answer with both.

I'll leave the part of the original answer relevant to Python 3 below.

```python
print("If you'd like the numbers in imperial, then lets see...")

print('''{!s} weighs {!r} pounds, he's {!r} inches tall and (unfortunately for him) is still {!r} years old.'''.format(name, weight * 2.2, height * 0.39370, age))
``` 

The above doesn't exploit the new Python 3.6 string handling though, so here's an example of what you can do:

```python
print(f'''{name} weighs {weight * 2.2} pounds, he's {height * 0.39370} inches tall and (unfortunately for him) is still {age} years old. ''')
```

See how you Python 3.6 supports expressions within the curly braces? You can see in the example above for instance that I was able to perform multiplication right there in the curly braces in the f-string. 

Pretty cool. 

### 3. Search online for all of the Python format characters.

This question is no longer in version 4 of the book that teaches Python 3 but I'm leaving it in. 
In addition to the excellent [PyFormat](https://pyformat.info/) [The docs have the best reference on Python format strings](https://docs.python.org/3/library/string.html#format-string-syntax) that I could find. 

This bit is useful:

```python
"Harold's a clever {0!s}"        # Calls str() on the argument first
"Bring out the holy {name!r}"    # Calls repr() on the argument first
"More {!a}"                      # Calls ascii() on the argument first
```

### 4. Try more format characters. {!r} is a very useful one. It's like saying "print this no matter what."

Done, and tried the new syntax too in answer to question 2 above. 

## Source files

As ever, [source files on GitHub](https://github.com/PuffinBlue/LPTHW).
