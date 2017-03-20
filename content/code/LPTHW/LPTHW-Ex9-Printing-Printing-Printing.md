+++
slug = ""
draft = "false"
title = "LPTHW - Exercise 9: Printing, Printing, Printing"
categories = [
  "LPTHW",
]
pageimage = ""
date = "2016-03-20T22:38:36+01:00"
tags = [
  "Learn Python The Hard Way Exercise 9","LPTHW Exercise 9","Learn Python Exercise 9","LPTHW Ex 9","",
]
url = "/code/lpthw-exercise-9-printing-printing-printing/"
description = "Complete finished example of the ninthexercise from the Learn Python The Hard Way course. Exercise 9: Printing, Printing, Printing"

+++
[LPTHW - Exercise 9](http://learnpythonthehardway.org/book/ex9.html)

Simple copy and print here but a few things we haven't seen before - namely those `\n` things in the months variable string. 

When running the script the output on the months variable are displayed on separate lines, so those `\n` things obviously indicate a newline/carriage return be inserted. 

I guess this is a way to get new lines on a string enclosed by single or double quotes, i.e. a way of doing it without using triple quotes and manually setting up the format youself. 
 
```python
days = "Mon Tue Wed Thu Fri Sat Sun"
months = "\nJan\nFeb\nMar\nApr\nMay\nHun\nJul\nAug"

print("Here are the days: ", days)
print("Here are the months: ", months)

print("""
There's something going on here.
With the three double-quotes.
We'll be able to type as much as we like.
Even 4 lines if we want, or 5, or 6.
""")
```

## Learn Python the Hard Way Study Drills

### 1. Check your work, write down your mistakes, try not to make them on the next exercise.

OK!

## Source files

As ever, [source files on GitLab](https://gitlab.com/josharcher/LPTHW).
