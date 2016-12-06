+++
title = "LPTHW - Exercise 17: More Files"
description = "Complete finished example of the seventeenth exercise from the Learn Python The Hard Way course. Exercise 17: More Files."
date = "2016-12-05T08:34:12Z"
categories = [
  "LPTHW",
]
tags = [
  "",
]
draft = "false"
url = "/code/lpthw-exercise-17-more-files"
slug = ""
pageimage = ""

+++
[LPTHW - Exercise 17](http://learnpythonthehardway.org/book/ex17.html)

I found this to be an awkward lesson to write out. It's not hard to do it but it's hard to write it out in a post like this because the script gets quite a lot of modification. 

Here's the first run through of the script:

```python
from sys import argv
from os.path import exists

script, from_file, to_file = argv

print "Copying from %s to %s" % (from_file, to_file)

# We could do the following on one line how?
 in_file = open(from_file)
 indata = in_file.read()

# Here's the above as a one liner
# indata = open(from_file).read()

print "The input file is %d bytes long" % len(indata)

print "Does the output file exist? %r" % exists(to_file)
print "Ready, hit RETURN to continue, CTRL+C to abort."
raw_input()

 out_file = open(to_file, 'w')
 out_file.write(indata)

 # Or as a one liner like before
 # open(to_file, 'w').write(indata)

print "Alright, all done."

out_file.close()
in_file.close()
```

So that's the first run through. I've entered the one liners as requested in the script but otherwise this is pretty much exactly how the lesson asks for it to be written out.

## Learn Python The Hard Way - Study Drills

### 1. This script is really annoying. There's no need to ask you before doing the copy, and it prints too much out to the screen. Try to make the script more friendly to use by removing features.

Here is the altered script to make it less annoying.

```python
from sys import argv
from os.path import exists

script, from_file, to_file = argv

# A note about this one liner. Apparently it's not the preferred way to do things.
# Apparently, you should use something called a 'Context Manager'. This is 
# what I used in the last lesson unknowingly when I used the 'with' statement.
# Here's what the line below 'should' look like with the preferred method:
# with open(from_file) as in_file:
#     indata = in_file.read()
indata = open(from_file).read()

print "Does the output file exist? %r" % exists(to_file)

open(to_file, 'w').write(indata)

print "Alright, all done."
```

Well that's a lot shorter. Notice how there is no `close()` in this shorter script? That's because when opening and immediately reading/writing to the File Object (without storing a reference to that open File Object (as a variable or something)) then with *some* interpreters the files are closed for you.

This happens to be the case with the one I'm using so I left it out or the script throws an error.

If you read the comment by "ShadowRanger" to [this SO answer](http://stackoverflow.com/questions/36046167/is-there-a-need-to-close-files-that-have-no-reference-to-them/36046243#36046243) you can see that this behaviour isn't always predicatble and stable which is probably why using the Context Manager example I mentioned is seen as the preferred method for handling this type of exercise.

### 2. See how short you can make the script. I could make this one line long.

My first attempt at this ended up with:

```python
from sys import argv
script, fr_file, to_file = argv
open(to_file, 'w').write(open(fr_file).read())
```

That was as short as I could work out how to do it. 

What this is doing is importing the necessary modules, adding a line for argv and then the magic happens:

We open `to_file` in write mode, then write to it the *result* of opening `fr_file` and reading it's contents. This sort of concept is like in normal language where a sentence might have subclauses or contexts and the initial opening statement is affected by resulting detail in the text.

Lots of legalese has this sort of thing so maybe lawyers would make good programmers!

#### Semi-colons to the rescue

Anyway, this isn't on one line like Zed said he could do and I took the excessive use of semi-colons in his answer to the Common Student Question to be a clue. So looking into the use of semi-colons in python...and that turned out to be a complete rabbit hole.

First off, the simplest answer is that a semi-colon is a 'separator' and not a 'terminator'. But that seems only partially true if you read the docs:

https://docs.python.org/3/reference/compound_stmts.html

So what a semi-colon is is a type of 'Compound Statement', specifically a 'suite' which is defined as:

> A suite is a group of statements controlled by a clause. A suite can be one or more semicolon-separated simple statements on the same line as the header, following the header’s colon, or it can be one or more indented statements on subsequent lines.

It's not exactly clear at this stage of my learning exactly what this means in practice but I can understand the concept. And there has been a lot written on this subject it seems:

http://stackoverflow.com/questions/8236380/why-is-semicolon-allowed-in-this-python-snippet

The upshot and important thing for us here in this lesson is that using a semi-colon allows us to write what would ordinarily need to be on multiple lines in just one long line like so:

```python
from sys import argv; spt, fr, to = argv; open(to, 'w').write(open(fr).read())
```

**NOTE** - I've changed the variable names to fit into 80 characters, which is something to aim for and recommended in the style guide.

### 3. Notice at the end of the What You Should See I used something called cat? It's an old command that "con*cat*enates" files together, but mostly it's just an easy way to print a file to the screen. Type `man cat` to read about it.

OK. 

### 4. Find out why you had to write out_file.close() in the code.

Let's start with the basics, because I needed to so so can you...

Read this:

http://stackoverflow.com/questions/36046167/is-there-a-need-to-close-files-that-have-no-reference-to-them/36063184#36063184

That's the answer.

To flesh that out a bit, essentially it's because when opening a file, that file won't simly be closed, it'll continue to take up a system resource until the script ends or some garbage collection happens at some future unknown time. 

So, closing files is highly recommended to retain manual control of your script/files behaviour, prevent unexpected behaviour caused by unpredictable output buffer flushing and not relying on the script ending (imagine if it doesn't actually end) to do your dirty work for you. 

I can't write out all the goodness in that linked answer so read it!

### 5. Go read up on Python's import statement, and start python to try it out. Try importing some things and see if you can get it right. It's alright if you do not.

[Here's what the docs say](https://docs.python.org/3/reference/simple_stmts.html#import). Yes, I know that's Python 3, but let's face it, at the end of this course that's what I'm going to switch to using. 

And into the rabbit hole we go with the [Import System](https://docs.python.org/3/reference/import.html#importsystem)...

### Source files

As ever, [source files on GitLab](https://gitlab.com/josharcher/LPTHW).

