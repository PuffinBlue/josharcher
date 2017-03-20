+++
title = "LPTHW - Exercise 16: Reading and Writing Files"
description = "Complete finished example of the sixteenth exercise from the Learn Python The Hard Way course. Exercise 16: Reading and Writing Files."
date = "2016-11-05T08:34:12Z"
categories = [
  "LPTHW",
]
tags = [
  "","Learn Python The Hard Way Exercise 16","LPTHW Exercise 16","Learn Python Exercise 16","LPTHW Ex 16"
]
draft = "false"
url = "/code/lpthw-exercise-16-reading-writing-files/"
slug = ""
pageimage = ""

+++
[LPTHW - Exercise 16](http://learnpythonthehardway.org/book/ex16.html)

Here we have a lot of 'doing'. A lot of writing anyway. 

Following this methodically should make it very easy to follow. Just take it one step at a time and see that what at first might appear difficult is merely 'complex' and not actually hard at all. 

Let's start with the lesson script and go from there...

```python
from sys import argv

script, filename = argv

print(f"We're going to erase {filename}.")
print("If you don't want to do that, hit CTRL+c (^c.)")
print("If you do want to do that, hit RETURN.")

input("Hit 'RETURN' to continue, ctrl+c to cancel...")

print("Opening the file...")
target = open(filename, 'w')

print("Truncating the file. Goodbye!")
target.truncate()

print("Now I'm going to ask you for three lines.")
line1 = input("Line 1: ")
line2 = input("Line 2: ")
line3 = input("Line 3: ")

print("I'm going to write these lines to the file.")
target.write(line1)
target.write("\n")
target.write(line2)
target.write("\n")
target.write(line3)
target.write("\n")

print("And finally, we'll close it.")
target.close()
```

## Learn Python The Hard Way - Study Drills

### 1. If you do not understand this, go back through and use the comment trick to get it squared away in your mind. One simple English comment above each line will help you understand or at least let you know what you need to research more..

Some parts of this are tricky, mostly the ones added through the study drills, so I've commented on those parts.

```python
from sys import argv

script, filename = argv

print(f"We're going to erase {filename}.")
print("If you don't want to do that, hit CTRL+c (^c.)")
print("If you do want to do that, hit RETURN.")

input("Hit 'RETURN' to continue, ctrl+c to cancel...")

print("Opening the file...")
# 'w' is an arguement that puts open() into write mode. It opens by default to 
# read mode so to allow write later, you need to set the write flag when you 
# actually open the file object. A file object without 'w' can't be written to.
# CAUTION - using 'w' will truncate the file if it already exists!!
target = open(filename, 'w')
# Truncate basically deletes the contents of the file, be careful!

print("Truncating the file. Goodbye!")
# The following line is not necessary, opening the file with the 'w' argument
# will truncate the file anyway if the file exists, and if it doesn't then it
# would be blank anyway.
target.truncate()

print("Now I'm going to ask you for three lines.")

line1 = input("Line 1: ")
line2 = input("Line 2: ")
line3 = input("Line 3: ")

print("I'm going to write these lines to the file.")

# This writes the content of a variable and then a new line over and over
# again in order to format the text in the new file. 
target.write(line1)
target.write("\n")
target.write(line2)
target.write("\n")
target.write(line3)
target.write("\n")

print("And finally, we'll close it.")
target.close()
```

### 2. Write a script similar to the last exercise that uses `read` and `argv` to read the file you just created.

I thought I'd try and find the simplest/shortest way of writing this. Not that I fully understand exactly what is happening yet because I don't know exactly what `with` and `as` mean, but through trawling StackOverflow I believe that best way of doing this (including closing the file immediately) is the following:

```python
from sys import argv
script, filename = argv
with open(filename) as f:
    output = f.read()
```

Reading it in English is seems reasonably obvious what it's doing but it would be good to find out the exact meaning of those new keywords at some point. 

NOTE - This study question doesn't say to print the output, just to read it, and this script does that. I believe `with` statement will properly close the file once it's been read too. 

Hopefully, the exact nuances behind this script will become crystal clear as this course progresses. 

### 3. There's too much repetition in this file. Use strings, formats, and escapes to print out `line1`, `line2`, and `line3` with just one `target.write()` command instead of six.

See the following StackOverflow for more info on why the method below is the correct one to take to solve this problem:

[http://stackoverflow.com/questions/8691311/python-how-to-write-multiple-strings-in-one-line](http://stackoverflow.com/questions/8691311/python-how-to-write-multiple-strings-in-one-line)

The quick answer is use `{}` (don't forget we're using python3.6 so we use the new format string syntax) as it is functioanlly the equivalent of {!s} which doesn't add quotes. You need '' around the first bit as `\n` has no meaning outside a string and you wrap the whole thing inside the `target.write()` brackets or you'll try and execute it outside of the write method - so it will do nothing as write has 'finished'. 

```python
target.write('{}\n{}\n{}\n'.format(line1, line2, line3))
```

### 4. Find out why we had to pass a `'w'` as an extra parameter to `open`. Hint: `open` tries to be safe by making you explicitly say you want to write a file.

It's best when answering questions like this to understand more than just the specific answer you write down. To that end, go and read the info on `open()` at the following link:

[https://docs.python.org/2/library/functions.html#open](https://docs.python.org/2/library/functions.html#open)

If you read that you'll see that `open()` will 'open' and file by actually creating a [File Object](https://docs.python.org/2/library/stdtypes.html#bltin-file-objects). At this stage in my learning I am thinking about File Objects as similar to variables in that they have a key and a value and you are able to perform operations on them to manipulate the values they contain. This may not be the correct way and maybe I'll find out later that this is an unhelpful mental abstraction but for now it is working.

So, we have this File Object and you can 'do' things to it. As ever with computers, there is a default way of executing the use of a function like `open()` and in this case the docs say the default 'state' of the File Object created using `open()` is the 'read' state. To put this in plainer terms, the `open()` function would by default create a File Object that is in a state that can be read from using a subsequent function like `read()`. 

There are (of course) a number of other modes that can be passed to `open()` along with `r` (which is the default or can be explicitly stated), such as `w` and `a`. 

`w` 'opens' (creates the File Object of the file) the file in a state to be written to and truncates any existing data in the file, whilst `a` opens the file in a state to be appended to, preserving the existing data but allowing you to write data after the current. 

To come back around to answering the question, because we want to write data to the File Object `open()` creates, we specifically have to select that mode when creating the File Object. We can't just use the default `r` (read) mode because then we couldn't write to the File Object. 

Presumably, Python does this to try and ensure that no files are overwritten/altered by accident. 

### If you open the file with 'w' mode, then do you really need the target.truncate()? Read the documentation for Python's open function and see if that's true.

No, you don't need it. 

As mentioned in my answer to the last study question opening a file and passing the `w` mode to the `open()` function will truncate the file anyway. 

And if the file didn't previously exist it'd be blank upon creation anyway so it's totally redundant to then truncate the file separately. 

### Source files

As ever, [source files on GitHub](https://github.com/PuffinBlue/LPTHW).
