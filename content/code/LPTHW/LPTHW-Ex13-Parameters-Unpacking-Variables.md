+++
url = "/code/lpthw-exercise-13-parameters-unpacking-variables/"
title = "LPTHW - Exercise 13: Parameters, Unpacking, Variables"
description = "Complete finished example of the thirteenth exercise from the Learn Python The Hard Way course. Exercise 13: Parameters, Unpacking, Variables"
date = "2016-08-29T00:12:44+01:00"
tags = [
  "",
]
categories = [
  "LPTHW",
]
slug = ""
draft = "false"
pageimage = ""

+++
[LPTHW - Exercise 13](http://learnpythonthehardway.org/book/ex13.html)

OK then, new stuff here. Turns out I'd heard of this before but they were called libraries. Consequently it took a few minutes to complete the mental abstraction as to what these features/modules as Zed calls then actually are. 

This is the first bit I've come to and thought "Oh, this is the interesting stuff". I really hope to get through these lessons to the first test and move on to the stuff I've never heard of/encountered. 

Somewhere in the future I see clarity but just can't reach there yet!

### Unpacking `argv`

Took a minute of two to abstract this too. I've settled on a kind of 'reverse' variable, so `argv` does a thing and we can make variables part of doing that thing, variable that represent data we'll provide. So there variables 'are', but sit within, `argv`. But also exist on their own as data we'll provide. 

It's hard to write down how I understand them but I do understand what they're doing. I understand that `argv` lets us add arguments to our initial command and by assigning variable to `argv` we can make those variables hold those provided arguments. 

EDIT: It's clearer to say that you set up the variables you will accept as arguments to the command that executes the script. `Argv` kind of 'reaches out' from within the program to require those variables to be set. 

Maybe that's clearer, I do get it!
 
```python
from sys import argv

eat, food, echo, tree = argv

print "The script is called:", eat
print "Your first variable is called:", food
print "Your second variable is called:", echo
print "Your third variable is called:", tree
``` 

I changed the variable names, sue me!

## Learn Python The Hard Way - Study Drills

#### 1. Try giving fewer than three arguments to your script. See that error you get? See if you can explain it.

This is the error I get when providing no arguments at all:
 
```text
puffinblue:~/workspace (master) $ python ex13/ex13.py 
Traceback (most recent call last):
  File "ex13/ex13.py", line 3, in <module>;
    eat, food, echo, tree = argv
ValueError: need more than 1 value to unpack 
``` 

It tells you quite clearly what's wrong: `ValueError: need more than 1 value to unpack`. It's telling you that you it needs more than X variables to unpack, X being the number you provided and X being too low. 

#### 2. Write a script that has fewer arguments and one that has more. Make sure you give the unpacked variables good names.

I did this in one go, wrote a script with two arguments, then added more to answer the second part of the question. 

```python
from sys import argv

eat, food, echo, tree, time = argv

print "The script is called:", eat
print "Your first variable is called:", food
print "Your second variable is called:", echo
print "Your third variable is called:", tree
print "Your third variable is called:", time
``` 

#### 3. Combine `raw_input` with `argv` to make a script that gets more input from a user.

I simply added this to the end of the script above. It doesn't truly feel like you're getting input from the user as you aren't prompting them for it, but it does work. 

```python
from sys import argv

eat, food, echo, tree, time = argv

print "The script is called:", eat
print "Your first variable is called:", food
print "Your second variable is called:", echo
print "Your third variable is called:", tree
print "Your third variable is called:", time

raw_input(food)
print "You like to eat: %s" % food
``` 

In fact, I'm not sure that you could reasonably combine `argv` and `raw_input()` another way. If you write something like this then you still have to provide the initial `argv` arguments anyway, only to then override them.

Maybe I'll learn the right way to do it later.
 
```python
from sys import argv

script, car, food, country = argv

car = raw_input("What is your favorite color? ")
food = raw_input("What is your favorite number? ")
country = raw_input("What is your favorite shape? ")

print """
This program is called %s and it's going to ask you some
questions about your favourite things.
""" % script

print "Your favorite car is a:", car
print "Your favorite food is:", food
print "Your favorite country is:", country
``` 

It's like you're doing the same thing twice, so the first method is more efficient but the user needs to know to provide the right data in the first place. 

#### 4. Remember that modules give you features. Modules. Modules. Remember this because we'll need it later.

Sure thing!

As ever, [source files on GitHub](https://github.com/PuffinBlue/LPTHW).
