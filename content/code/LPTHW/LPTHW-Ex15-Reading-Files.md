+++
title = "LPTHW - Exercise 15: Reading Files"
description = "Complete finished example of the fifteenth exercise from the Learn Python The Hard Way course. Exercise 15: Reading Files."
date = "2016-09-23T18:34:12Z"
categories = [
  "LPTHW",
]
tags = [
  "","Learn Python The Hard Way Exercise 15","LPTHW Exercise 15","Learn Python Exercise 15","LPTHW Ex 15"
]
draft = "false"
url = "/code/lpthw-exercise-15-reading-files/"
slug = ""
pageimage = ""

+++
[LPTHW - Exercise 15](http://learnpythonthehardway.org/book/ex15.html)

This is an interesting lesson. It may take a few minutes to get the mental abstraction of what is going on with the `open()` and `read()` commands. 

### Open and read?

When we work with and open files ourselves in something like a text document, we associate 'open' with 'read' i.e. we as humans read the file immediately as it opens, so we can do stuff with it. 

It seems here that that's not how computers work. Remembering the old adage that you have to literally tell a computer everything it needs to do we shouldn't be surprised that we have to be extremely precise it our commands.

### What is that file thing?

So, in this exercise we tell the computer to *open* the file and we associate the 'thing' that is this open file with the variable `txt`.

The term given to this open file 'thing' is a **file object**. You kind of have to just imagine it as a thing floating there somewhere (in memoery presumably) and ready to be used or whatever. That's why you see later in the script that `read()` function being used on the variable that is assigned to the file object. 

### Whaaaaat?

Here's the lesson script with my comments. See if that helps.

```python
# Imports the argv (argument variable) module/library 
from sys import argv
# 'creates' two argument variables. It seems that if you use argv, you MUST use
# at least 1 argument variable for the name of you script in order for the 
# script to run properly, or more specifically you need to create two to allow
# the script to be the first arguement
script, filename = argv
# Sets variable 'txt' to function 'open()' which itself pulls in the filename
# arguement variable. This creates a 'file object' upon which further functions
# can be called. Basically 'txt' becomes a file object of the file provided
# in the argument variable. 
txt = open(filename)

print "Here's your file %r:" % filename
# NEW - .read() is a function/method applied to the variable 'txt'. From above 'txt'
# is the file object of the file provided in the argument variable. .read() is 
# simply an instruction to read the contents of the file. As this is used in 
# conjunction with 'print' function, the content are written to the screen. 
print txt.read()

# The below is the above repeated with alternative variable/file object names 
# instead of the file being provided via argument variable, it's provided 
# by the user via an input prompt after the script runs.
print "Type the filename again:"
file_again = raw_input(">>> ")

txt_again = open(file_again)

print txt_again.read()

txt.close()
txt_again.close()
```

## Learn Python The Hard Way - Study Drills

### Above each line, write out in English what that line does.

Done.

### If you are not sure ask someone for help or search online. Many times searching for "python THING" will find answers to what that THING does in Python. Try searching for "python open."

Tried it. At least on my system you get back a crappy one liner telling you to basically go and look at another command.

```text
open(...)
    open(name[, mode[, buffering]]) -> file object
    
    Open a file using the file() type, returns a file object.  This is the
    preferred way to open a file.  See file.__doc__ for further information.
```

Not overly helpful!

### I used the word "commands" here, but commands are also called "functions" and "methods." You will learn about functions and methods later in the book.

![](/static/img/2016/09/now-getting-somewhere.gif)

### Get rid of the lines 10-15 where you use `raw_input` and run the script again.

This would work better if you didn't tell us to write a comment above each line telling ourselves what it does. So now those line numbers are meaningless. 

### Use only `raw_input` and try the script that way. Why is one way of getting the filename better than another?

Definitely `argv` is better. You can use tab completion to speed up and increase the accuracy of writing the file name. When writing in the prompt you have to write the whole thing exactly, so you better remember the file path!

### Start `python` to start the python shell, and use `open` from the prompt just like in this program. Notice how you can open files and run `read` on them from within python?

Tried this, but I'm not sure how you are supposed to set the variable to be the ex15_sample.txt file I am using. 

If you run through this script line by line, as soon as you get to setting the `argv` variables it returns `ValueError: need more than 1 value to unpack`, which is obvious it would.

<hr>

Right, some playing around and the syntax you need for opening files is:

`txt = open('/full/path/to/file/ex15/ex15_sample.txt')`

Notice the quotes around the file path, you'll need those or you'll get an `invalid systax` warning. 

Once you've got that then you can do stuff like `txt.read()`.

### Have your script also call close() on the txt and txt_again variables. It's important to close files when you are done with them.

Added these to the end of the script. Good job I didn't get rid of those lines 10-15 or calling `close()` on `txt_again` would be pointless.

As ever, [source files on GitLab](https://gitlab.com/josharcher/LPTHW).
