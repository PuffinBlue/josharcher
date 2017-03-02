+++
date = "2016-07-14T23:38:34+01:00"
title = "LPTHW - Exercise 11: Asking Questions?"
categories = [
  "LPTHW",
]
tags = [
  "Learn Python The Hard Way Exercise 11","LPTHW Exercise 11","Learn Python Exercise 11","LPTHW Ex 11",""
]
url = "/code/lpthw-exercise-11-asking-questions/"
slug = ""
pageimage = ""
draft = "false"
description = "Complete finished example of the eleventh exercise from the Learn Python The Hard Way course. Exercise 11: Asking Questions?"

+++
[LPTHW - Exercise 11](http://learnpythonthehardway.org/book/ex11.html)

Yay! Some new stuff! I must admit, this first section is getting a little tedious so it's nice to have something new now. 

It's a common thing with programming tutorials, they all start of with such simple things and take ages to get past them. I think it's been a factor in why it's taken me a while to really want to learn to code. 

Thankfully, with this LPTHW format you can at least just copy down the boring lessons and get through it to the interesting concepts. Anywho, here we go then...

```python 
print("How old are you?", end=' ')
age = input()
print("How tall are you?", end=' ')
height = input()
print("How much do you weigh?", end=' ')
weight = input()

print(f"So, you are {age} years old, {height} tall and weigh {weight}.")
```

## Learn Python The Hard Way - Study Drills

### 1. Go online and find out what Python's input does.

Taken from [here](https://docs.python.org/2/library/functions.html#raw_input), input() is described as:

> `input([prompt])`

> If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, `EOFError` is raised. Example:
 
```python
>>> s = input('--> ')
--> Monty Python's Flying Circus
>>> s
"Monty Python's Flying Circus"
``` 

### 2. Can you find other ways to use it? Try some of the samples you find.

I found a slightly different way to use it and that's in the answer to the question below. I also saw it used like so:

`input("Press <enter> to continue")`

That's a useful way to indicate to a user something has completed and makes them feel like then are authorising continuation. 

Another useful thing I saw was [an example](https://mail.python.org/pipermail/tutor/2011-October/086079.html) of how to convert the output, which is a string, to something else like an integer:

`quantity = int(input("How many? "))`

This is called 'type conversion' and looks like it would be pretty useful to turn the users input into the exact type of data you would need in your programme. 

### 3. Write another "form" like this to ask some other questions.
 
```python
# A new form for the study drill

name = input("What is your name? >>> ")
print(f'Hey {name}, let\'s be friends!')
``` 

## Source files

As ever, [source files on GitLab](https://gitlab.com/josharcher/LPTHW).
