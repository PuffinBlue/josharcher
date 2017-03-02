+++
url = "/code/lpthw-exercise-12-prompting-people/"
categories = [
  "LPTHW",
]
pageimage = ""
date = "2016-08-11T00:06:11+01:00"
draft = "false"
title = "LPTHW - Exercise 12: Prompting People"
description = "Complete finished example of the twelth exercise from the Learn Python The Hard Way course. Exercise 12: Prompting People"
tags = [
  "","Learn Python The Hard Way Exercise 12","LPTHW Exercise 12","Learn Python Exercise 12","LPTHW Ex 12"
]
slug = ""

+++
[LPTHW - Exercise 12](http://learnpythonthehardway.org/book/ex12.html)

Turns out I jumped the gun a little with that extra form I made last time for the Study Questions. This lesson covers the way I made that form...

```python
age = raw_input("How old are you? ")
height = raw_input("How tall are you? ")
weight = raw_input("How much do you weigh? ")

print "So, you're %r old, %r tall and %r heavy." % (
    age, height, weight)
```

## Learn Python the Hard Way - Study Drills

#### 1. In Terminal where you normally run python to run your scripts, type pydoc raw_input. Read what it says. If you're on Windows try python -m pydoc raw_input instead.

No as helpful as I thought it'd be, it seems to just parrot the info that's in the online docs, and without the example too!

#### 2. Get out of pydoc by typing q to quit.

OK!

#### 3. Look online for what the pydoc command does.

From the wikipedia page:

> "Pydoc is a documentation module for the programming language Python. Similar to the functionality of Perldoc within Perl, Pydoc allows Python programmers to access Python's documentation help files, generate HTML pages with documentation specifics, and find the appropriate module for a particular job.

#### 4. Use pydoc to also read about open, file, os, and sys. It's alright if you do not understand those; just read through and take notes about interesting things.

Why do I get the feeling we're about to learn these things in the next few lessons...

As ever, [source files on GitLab](https://gitlab.com/josharcher/LPTHW).
