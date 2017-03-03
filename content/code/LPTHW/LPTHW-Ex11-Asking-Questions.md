+++
date = "2016-07-14T23:38:34+01:00"
title = "LPTHW - Exercise 11: Asking Questions?"
categories = [
  "LPTHW",
]
tags = [
  "",
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
print "How old are you?"
age = raw_input()
print "How tall are you?"
height = raw_input()
print "How much do you weigh?"
weight = raw_input()

print "So you are %r years old, %r tall and weigh %r." % (
    age,height,weight)

# A new form for the study drill

name = raw_input("What is your name? >>> ")
print 'Hey %s, let\'s be friends!' % name
```

Kind of surprised we that we used %r, but I suppose that way it wouldn't matter what people input, it would just be shown. I suspect in the future that we'll get to sanitising user input or turning it into different data types or even validating it before accepting. 

## Learn Python The Hard Way - Study Drills

#### 1. Go online and find out what Python's raw_input does.

Taken from [here](https://docs.python.org/2/library/functions.html#raw_input), raw_input() is described as:

> `raw_input([prompt])`

> If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, `EOFError` is raised. Example:
 
```python
>>> s = raw_input('--> ')
--> Monty Python's Flying Circus
>>> s
"Monty Python's Flying Circus"
``` 

#### 2. Can you find other ways to use it? Try some of the samples you find.

I found a slightly different way to use it and that's in the answer to the question below. I also saw it used like so:

`raw_input("Press <enter> to continue")`

That's a useful way to indicate to a user something has completed and makes them feel like then are authorising continuation. 

Another useful thing I saw was [an example](https://mail.python.org/pipermail/tutor/2011-October/086079.html) of how to convert the output, which is a string, to something else like an integer:

`quantity = int( raw_input("How many? ") )`

This is called 'type conversion' and looks like it would be pretty useful to turn the users input into the exact type of data you would need in your programme. 

#### 3. Write another "form" like this to ask some other questions.
 
```python
# A new form for the study drill

name = raw_input("What is your name? >>> ")
print 'Hey %s, let\'s be friends!' % name
``` 

#### 4. Related to escape sequences, try to find out why the last line has '6\'2"' with that \' sequence. See how the single-quote needs to be escaped because otherwise it would end the string?

In one of the links above in the answer to Study Question 2, it mentioned that `raw_input()` doesn't convert to a string. Perhaps it doesn't, perhaps it simply records what the user says which is already a string, but the docs clearly say:

> "The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that."

So, I'm going with that when I say because the output is a string, when you print any output using those strings, you're encapsulating a 'string within a string', so any quotes that come with those strings are going to need to be escaped so thay don't interfere with the quotes encapsulating the print statement. 

That's why you need to escape those quote marks, to stop them from interfering with the operation of the printing of the string in the print statement. 

As ever, [source files on GitLab](https://github.com/PuffinBlue/LPTHW).
