+++
tags = [
  "",
]
pageimage = ""
draft = "false"
title = "LPTHW - Exercise 6: Strings Text"
description = "Complete finished example of the sixth exercise from the Learn Python The Hard Way course. Exercise 6: Strings and Text"
categories = [
  "LPTHW",
]
date = "2016-01-17T22:18:13+01:00"
url = "/code/lpthw-exercise-6-strings-and-text/"
slug = ""

+++
[LPTHW - Exercise 6](http://learnpythonthehardway.org/book/ex6.html)

More working with strings and text in this exercise.

Having looked into string formatting in the last exercise I realised that I was looking into something quite a bit further on in the course than I needed to right now. 

Exercise 37 picks up the topic again so for now I'll just be following along using the old style `%` indicators rather than the 'new' format.

```python
x = "There are %d types of people." % 10
binary = "binary"
do_not = "don't"
y = "Those who know %s and those who %s." % (binary, do_not)

print x
print y

print "I said: %r." % x
print "I also said:'%s'." % y

hilarious = False
joke_evaluation = "Isn't that joke so funny?! %r"

print joke_evaluation % hilarious

w = "This is the left side of..."
e = "a string with a right side."

print w + e

print ''.join((w,e))
```

## Learn Python The Hard Way Study Drills

#### 1. Go through this program and write a comment above each line explaining it.

```python
# Sets variable x to string with an embedded format string. Format strings 
# are way to insert (embed) a thing within a string such that the final 
# output will include the thing or whatever operation the thing is part of.
x = "There are %d types of people." % 10

# sets variable 'binary' to 'binary' = redundant slightly but needed
binary = "binary"

# sets variable 'do_not' to 'don't'
do_not = "don't"

# Sets variable y to string with two embedded format strings (binary and do_not)
y = "Those who know %s and those who %s." % (binary, do_not)

print x
print y

# Print the RAW output of the x variable inside the string (that's what %r is) 
# So x get's printed with quotes around it even though not specificed in this 
# string. Also, Notice how the format string from x also caries through to this 
# string. Format strings seem to cascade and output through levels of strings. 
print "I said: %r." % x

# Output string with called variable but not output RAW so needs quotes around 
# format string to display in output. 
print "I also said:'%s'." % y

hilarious = False
joke_evaluation = "Isn't that joke so funny?! %r"

# Here you learn that you can set the content of the format string 'later' by 
# creating the format string in one variable yet specifying it's 
# 'content/operator' at print time. Here the variable 'hilarious' is set as 
# the format string at print time, which will output False in the final print. 
# This seems powerful behaviour. 
print joke_evaluation % hilarious

# Shows that you can add variables together. This just literally seems to 
# concantenate the two together rather than any mathematical operation. 
# Yep, + concantenates strings. Don't use + to concantenate more than 2 
# strings though as this is highly inefficient. 
# Instead use ''.join e.g ''.join((w,e))
w = "This is the left side of..."
e = "a string with a right side."

print w + e
# Test of ''.join
print ''.join((w,e))
```

As you can see from the comments there, one of the subtle but important things in this lesson is getting an understanding of what `%d`, `%s` and `%r` do. 

This [StackOverflow question](http://stackoverflow.com/questions/6005159/when-to-use-r-instead-of-s-in-python) has some interesting and useful explanations concerning the difference between `%r` and `%s`.

Remember to [check the docs for more info](https://docs.python.org/2/library/string.html#format-specification-mini-language) on format strings.

#### 2. Find all the places where a string is put inside a string. There are four places.

<del>There are technically 3 `%s` included in the exact example, but also two `%r` that output strings to, so you could say there were either 3 or 5, but not 4.</del>

EDIT: I just took another look. You could say 4 but you could actually say 6.

Lets run through it:

1 and 2 occur when `print y` is called at line 11. Two variables, themselves strings, are called in a string.

3 occurs on line 14 where variable `x` (itself a string) is called within a string.

4 occurs on line 16 where variable `y` is called.

BUT

line 16 calls that variable `y`, which itself is a string within a string, so you get 2 strings called within a string within a string.

So you can say the technical answer to the question is indeed 4 or you could say that it's 6 thanks to the string within a string within a string.

Tricky. 

#### 3. Are you sure there are only four places? How do you know? Maybe I like lying.

Could be 6. See above.

#### 4. Explain why adding the two strings `w` and `e` with `+` makes a longer string.

Adding strings concatenates them, literally joining them together. This [isn't the most efficient](http://stackoverflow.com/questions/3055477/how-slow-is-pythons-string-concatenation-vs-str-join) way to 'join' strings and would slow you're programme down if used to join many strings. The proper method is to use `''.join()`.

[More info and examples on ''.join()](http://www.tutorialspoint.com/python/string_join.htm)
 
### Source files

As ever, [source files on GitLab](https://github.com/PuffinBlue/LPTHW)
