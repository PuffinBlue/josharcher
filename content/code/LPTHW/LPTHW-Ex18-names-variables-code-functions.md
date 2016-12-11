+++
title = "LPTHW - Exercise 18: Names, Variables, Code, Functions"
description = "Complete finished example of the eighteenth exercise from the Learn Python The Hard Way course. Exercise 18: Names, Variables, Code, Functions."
date = "2016-12-06T11:23:12Z"
categories = [
  "LPTHW",
]
tags = [
  "",
]
draft = "false"
url = "/code/lpthw-exercise-18-names-variables-code-functions"
slug = ""
pageimage = ""

+++
[LPTHW - Exercise 18](http://learnpythonthehardway.org/book/ex18.html)

Yey! Functions!

Turns out we've already been using them in previous exercises with things like `close()` and `open()` but here we get to write our own one properly.

## What is a function?

A function...

> ...lets you group a series of statements together to perform a specific task. If different parts of the script repeat the same task, you can reuse the function (rather than repeating the same set of statements).

Basically, it's like a script within a script, it's a reusable and contained bit of code that you can 'call' or 'run' however many times you want and you can pass whatever arguments to it of the type you've set it up to receive.

## Why are functions useful?

Aside from allowing you to use code again without repeating yourself, you can also set up functions to execute at specific times, not just when a script loads. So a function could run based on a specific input but not at other times which allows you to *store* the steps needed to complete a task without having to run them immediately/all the time.

## Anyway, to the script!

Alright then, here's the script...

```python
# This one is like your scripts with argv
def print_two(*args):
    arg1, arg2 = args
    print "arg1: %r, arg2: %r" % (arg1, arg2)

# OK, that *args is actually pretty pointless, we can just do this
def print_two_again(arg1, arg2):
        print "arg1: %r, arg2: %r" % (arg1, arg2)

# This just takes one argument
def print_one(arg1):
    print "arg1: %r" % (arg1)

# This takes no arguments
def print_none():
    print "I got nothin'."

print_two("Zed","Shaw")
print_two_again("Zed","Shaw")
print_one("First!")
print_none()
```

I think a litte note on the `*args` [parameter](http://stackoverflow.com/a/156787) in the `print_two` function definition is in order. 

Firstly `*args` isn't *really* the thing that's important, it's simply the asterisk bit. You could use `*var` instead if you wanted, but it's convention to use `*args`. 

Secondly, `*args` (or the asterisc at least) allows you to pass a **variable number of arguments to a function**. You might not know how many arguments you need to pass to a function, so this tool allows you to simply accepts whatever number or argumetns is given.

Thirdly, `*args` is for **non-keyworded variable length arguments**. If you want to use key-worded variable length of arguments, use `**kwargs` (again, just convention in the naming, this time the important bit is the double asterisk).

Read more about these things here:

[https://pythontips.com/2013/08/04/args-and-kwargs-in-python-explained/](https://pythontips.com/2013/08/04/args-and-kwargs-in-python-explained/)

## Learn Python The Hard Way - Study Drills

The study drills here are to create an index card reminding you of how to correctly set up the function. I don't particularly like keeping physical bits of paper around as to be lost so instead I've screen-shotted the checklist and copied it below...

![Learn Python The Hard Way exercise 18 study drills - function checklist](/static/img/2016/12/function-checklist.png)

### Source files

As ever, [source files on GitLab](https://gitlab.com/josharcher/LPTHW).

