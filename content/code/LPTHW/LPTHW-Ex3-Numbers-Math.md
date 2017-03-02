+++
pageimage = ""
title = "LPTHW - Exercise 3: Numbers and Math"
url = "/code/lpthw-exercise-3-numbers-and-math/"
date = "2015-11-30T21:47:04+01:00"
draft = "false"
categories = [
  "LPTHW",
]
slug = ""
description = "Complete finished example of the third exercise from the Learn Python The Hard Way course. Exercise 3: Numbers and Math."
tags = [
  "LPTHW rooster question","Why rooster question 97","Learn Python The Hard Way Exercise 3","LPTHW Exercise 3","Learn Python Exercise 3","LPTHW Ex 3"
]

+++
[LPTHW - Exercise 3](http://learnpythonthehardway.org/book/ex3.html)

This was the first tricky one, and probably deliberately so. 

If you've come here from Google, it might be because you didn't find this [StackOverflow post](http://stackoverflow.com/questions/4729025/modulo-and-order-of-operation-in-python-zed-shaw-examples) yet, or maybe this post popped out on top for you particular search term. 

Either, way...

### ...you want to know why the answer to the Rooster question is 97, right?

Well, the simple answer is there's an order to the operations you must perform and you can see this in the completed example below. Here it is again:

`%` and `*` have identical 'priority', but 'outrank' `-` so they must be carried out before the `-` operation. This is simple BODMAS stuff, with modulo added in. This means we need to do the following first: `25 * 3 % 4`. You do these in left to right order as they have left to right [associativity](https://en.wikipedia.org/wiki/Operator_associativity), which is a bit of a rabbit hole in itself (if you set something like this up, be kind and use parenthesis!)

So now we have say `3 * 25 = 75`

Now we'd do `75 % 4 = 3`

We've still got that `100 -` hanging around so now we just add in the 3 to get:

`100 - 3 = 97`

### Great, what about the `3 + 2 + 1 - 5 + 4 % 2 - 1 / 4 + 6` one?

Well, this one breaks down to:

`(3 + 2 + 1) - 5 + (4 % 2) - (1/4) + 6`

then

`6 - 5 + 0 - 0 + 6`

So...

`1 + 6 = 7`

### <a id="floating"/></a> But why does `1/4 = 0`?

Simple answer, floating point numbers. Here's a great [video on floating point numbers](https://youtu.be/PZRI1IfStY0), but the basic answer is if you try again using `1.0` and `4.0`, you'll get the answer `0.25`, which would lead to:

`1 - 0.25 + 6 = 6.75`

Ta da! Here's the rest of my completed answer, you might see some differences as this is the final saved version after I played around with it.

```python
print("I will now count my chickens:")

print("Hens", 25 + 30 / 6)

# % and * have identical priority so do from left to right. - is lower priority so...
# 3 * 25 = 75 >>> 75 % 4 = 3 >>> 100 - 3 = 97
print("Roosters", 100 - 25 * 3 % 4)

print("I will now count the eggs:")

# 4 % 2 = 0 and 1 / 4 = 0 too because without a decimal place it's a non-floating point
# number so it only deals in whole numbers...
# 6 - 5 + 0 - 0 + 6 = 7
print(3 + 2 + 1 - 5 + 4 % 2 - 1.0 / 4.0 + 6)
print("Is it true that 3 + 2 < 5 - 7?")

print(3 + 2 < 5 - 7)

print("What is 3 + 2?", 3 + 2)
print("What is 5 - 7?", 5 - 7)

print("Oh, that's why it's False.")
print("How about some more.")
print("Is it greater?", 5 > -2)
print("Is it greater than or equal?", 5 >= -2)
print("Is it less or equal?", 5 <= -2)
```

## Learn Python The Hard Way Study drills

#### 1. Above each line, use the # to write a comment to yourself explaining what the line does.

Done for the difficult maths entries. The print statements otherwise are very obvious. 

#### 2. Remember in Exercise 0 when you started python? Start python this way again and using the math operators, use Python as a calculator.

Gave it a go, it works.

#### 3. Find something you need to calculate and write a new .py file that does it.

This was too redundant. You can add calculations to this file or do study drill 2. There's a limit to useful repetition.

#### 4. Rewrite ex3.py to use floating point numbers so it's more accurate. 20.0 is floating point.

Done in the explanation and completed example above.

### Source files

As ever, [source files on GitLab](https://gitlab.com/josharcher/LPTHW).
