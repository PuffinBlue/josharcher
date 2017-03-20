+++
title = "LPTHW - Exercise 20: Functions and Files"
description = "Complete finished example of the twentieth exercise from the Learn Python The Hard Way course. Exercise 20: Functions and Files."
date = "2017-01-30T14:07:01Z"
categories = [
  "LPTHW",
]
tags = [
"Learn Python The Hard Way Exercise 20","LPTHW Exercise 20","Learn Python Exercise 20","LPTHW Ex 20"
]
draft = "false"
url = "/code/lpthw-exercise-20-functions-files/"
slug = ""
pageimage = ""

+++
[LPTHW - Exercise 20](http://learnpythonthehardway.org/book/ex20.html)

More functions this time but here the focus seems to be on being able to follow the 'flow' of multiple functions, not ones that pass data from one to another but just being able to read and follow how a script with multiple functions works

Because the script undergoes extensive alterations through the lesson, I'm going to post it in parts with my additions in a separate section below. The source file will contain the whole thing and you can get that on GitHub.

```python
from sys import argv

script, input_file = argv

def print_all(f):
    print(f.read())

def rewind(f):
    f.seek(0)

def print_a_line(line_count, f):
    print(line_count, f.readline())

current_file = open(input_file)

print("First let's print the whole file:\n")

print_all(current_file)

print("Now let's rewind, kind of like a tape.")

rewind(current_file)

print("Let's print three lines:")

current_line = 1
print_a_line(current_line, current_file)

current_line = current_line + 1
print_a_line(current_line, current_file)

current_line = current_line + 1
print_a_line(current_line, current_file)
```

That's the initial run through of the script. I made a mistake writing out this script. On line 6 I accidentally wrote `print f.read(f)`. Clearly there should have been no second `f` in the brackets and it failed with the following warning:

```text
Traceback (most recent call last):
  File "ex20.py", line 18, in <module>
    print_all(current_file)
  File "ex20.py", line 6, in print_all
    print f.read(f)
TypeError: an integer is required
```

If we look at what `read()` does [in the docs](https://www.tutorialspoint.com/python/file_read.htm):

> The method `read( size )` reads at most _size_ bytes from the file. If the read hits EOF before obtaining size bytes, then it reads only available bytes.

So `read()` is expecting to receive an integer as a parameter so it knows how many bytes to read from the file, or to be left blank so it reads the whole lot. By setting `f` as a parameter I set that particular `f` to be equal to `current_file`, which is equal to `input_file`, which is equal to `test.txt` and definitely not a integer and hence the error. 

## Learn Python The Hard Way - Study Drills

### 1. Write English comments for each line to understand what that line does.

Here's the script again with the comment added in:

```python
# Imports the argv function (?) from the sys library 
from sys import argv

# sets up 'argv' to accept the script and 'test.txt' file as input
script, input_file = argv

# Creates a function 'print_all(f)' which reads and prints the input
def print_all(f):
    print(f.read())

# Creates a function 'rewind(f)' which sets the input files current position 
# to 0 via the 'seek()' function (this is in bytes i.e the start of the file)
def rewind(f):
    f.seek(0)

# Creates a function that accepts an integer (in this case from 'current_line') 
# denoting the line to read and then reads that line with the 'readline()' 
# function.
# NOTE - readline() reads a single line up to the \n character but leaves the
# \n character at the end of the line, so this automatically advances the file
# position by 1 line for every time the function is called and leaves a blank 
# newline in place. That why there's a line break in the output code.
# That's how this script is reading, printing and advancing each line in turn.
def print_a_line(line_count, f):
    print(line_count, f.readline())

# Sets 'current_file' to equal the file object 'input_file', which is defined
# in the arguments when running the script, in this case it's 'test.txt'
current_file = open(input_file)

# Prints the whole file on a newline under the print statement
print("First let's print the whole file:\n")

# Calls the function 'print_all' using 'current_line' as the parameter
print_all(current_file)

# Simple print statement
print("Now let's rewind, kind of like a tape.")

# Calls the function 'rewind()' with the parameter 'current_file' which should
# reset the files current position to 0, i.e. to the beginning.
# I'm guessing this is needed because we already read/printed the whole
# file so the current position is the end of the file. 
# UPDATE - commenting out the line below and running the script doesn't print
# the lines out, which would suggest the files current position  at this 
# point in the script is at the end of the file. 
rewind(current_file)

# Simple print statement
print("Let's print three lines:")

# Sets variable 'current_line' to 1
current_line = 1

# Calls function 'print_a_line()' with 'current_line' and 'current_file' as
# parameters.
print_a_line(current_line, current_file)

# Calls function 'print_a_line()' with 'current_line' and 'current_file' as
# parameters. 'current_line here being set to 'current_line + 1' which is 
# equivalent to '1 + 1'.
current_line = current_line + 1
print_a_line(current_line, current_file)

# Calls function 'print_a_line()' with 'current_line' and 'current_file' as
# parameters. Again 'current_line' is incremented by 1.
current_line = current_line + 1
print_a_line(current_line, current_file)
```

### 2. Each time print_a_line is run, you are passing in a variable current_line. Write out what current_line is equal to on each function call, and trace how it becomes line_count in print_a_line.

Well this is sort of explained in my comments before I realise this was a question.

1. The first time `print_a_line()` is called, `current_line` is equal to `1`.
2. The next time it's called, `current_line` is equal to `current_line + 1` which is the same as `1 + 1` which is equal to 2. 
3. The third time simply advances by 1 again to make `current_line` equal to 3 (i.e. equal to 2 + 1).

It becomes `line_count` because that's how the function is called. `current_line` is passed as the first argument to the function, which accepts that argument into the first parameter in the function which is was arbirtarily set to `line_count`. 

Bit of a tough question to answer with plain English. 

### 3. Find each place a function is used, and check its def to make sure that you are giving it the right arguments.

OK. This question isn't exactly clear. You choose arbitrary parameters and functions when writing the script so as long as the outcome is consistent and what you wanted, in some way that by definition means you gave the functions the right arguments.

Of course there could be errors and extraneous things in there but in this case it seems correct to me.

### 4. Research online what the seek function for file does. Try pydoc file and see if you can figure it out from there. Then try pydoc file.seek to see what seek does.

I mentioned this in the comment above. `seek()` sets the files current position, that's the long and short of it. There's a bit more to the options like you can specify the exact position in bytes or you can do so from a set offset. 

Here's some more info:

[https://www.tutorialspoint.com/python/file_seek.htm](https://www.tutorialspoint.com/python/file_seek.htm)

[https://docs.python.org/2.4/lib/bltin-file-objects.html](https://docs.python.org/2.4/lib/bltin-file-objects.html)

The output of `pydoc file.seek()` is:

```text
Help on method_descriptor in file:

file.seek = seek(...)
    seek(offset[, whence]) -> None.  Move to new file position.
    
    Argument offset is a byte count.  Optional argument whence defaults to
    0 (offset from start of file, offset should be >= 0); other values are 1
    (move relative to current position, positive or negative), and 2 (move
    relative to end of file, usually negative, although many platforms allow
    seeking beyond the end of a file).  If the file is opened in text mode,
    only offsets returned by tell() are legal.  Use of other offsets causes
    undefined behavior.
    Note that not all file objects are seekable.
(END)
```

### 5. Research the shorthand notation `+=` and rewrite the script to use `+=` instead.

You could rewrite the last part of the script to read:

```python
print "Let's print three lines:"

current_line = 1

print_a_line(current_line, current_file)

current_line += 1
print_a_line(current_line, current_file)

current_line += 1
print_a_line(current_line, current_file)
```

`+=` seems to mean '*equal to plus X*', where 'X' might be an integer like 1. It's equivalent to:

`a = a + b` is the same as `a += b`

There is some more nuance to it as ever as detailed in this stackoverflow post:

[http://stackoverflow.com/questions/823561/what-does-mean-in-python](http://stackoverflow.com/questions/823561/what-does-mean-in-python)

...and in the docs:

[https://docs.python.org/3/reference/simple_stmts.html#augmented-assignment-statements](https://docs.python.org/3/reference/simple_stmts.html#augmented-assignment-statements)

## Source files

As ever, [source files on GitHub](https://github.com/PuffinBlue/LPTHW).
