+++
title = "LPTHW - Exercise 21: Functions Can Return Something"
description = "Complete finished example of the twenty first exercise from the Learn Python The Hard Way course. Exercise 21: Functions Can Return Something."
date = "2017-02-09T12:13:39Z"
categories = [
  "LPTHW",
]
tags = [
  "",
]
draft = "false"
url = "/code/lpthw-exercise-21-functions-can-return-something/"
slug = ""
pageimage = ""

+++
[LPTHW - Exercise 21](http://learnpythonthehardway.org/book/ex21.html)

Well it feels like I'm finally getting somewhere. Learning the basics over and over again as I am (I'm also doing the [Odin Project](/categories/odin-project/)) gets a bit demoralising. Finally getting to this stage here (and prety much the same stage in the Odin Project) feels like a bit of a breakthrough.

That's not to say there isn't a long way to go! It is nice though to feel a little bit like I'm emerging from the dense forrest and starting to be able to glimpse the land beyond.

Anyway, here's the script...

```python
def add(a, b):
    print "ADDING %d + %d" % (a, b)
    return a + b

def subtract(a, b):
    print "SUBTRACTING %d - %d" % (a, b)
    return a - b

def multiply(a, b):
    print "MULTIPLYING %d * %d" % (a, b)
    return a * b

def divide(a, b):
    print "DIVIDING %d / %d" % (a, b)
    return a / b

print "Let's do some maths with just functions!"

age = add(30, 5)
height = subtract(78, 4)
weight = multiply(90, 2)
iq = divide(100, 2)

print "Age: %d, Height: %d, Weight: %d, IQ: %d" % (age, height, weight, iq)

# A puzzle for the extra credit, type it in anyway.
print "Here is a puzzle."

what = add(age, subtract(height, multiply(weight, divide(iq, 2))))

print "That becomes: ", what, "Can you do it by hand?"
```

## Learn Python The Hard Way - Study Drills

### 1. If you aren't really sure what return does, try writing a few of your own functions and have them return some values. You can return anything that you can put to the right of an `=`. 

I actually understand what `return` does just fine. It doesn't seem to be that hard to grok, unless I am missing something!

### 2. At the end of the script is a puzzle. I'm taking the return value of one function and using it as the argument of another function. I'm doing this in a chain so that I'm kind of creating a formula using the functions. It looks really weird, but if you run the script you can see the results. What you should do is try to figure out the normal formula that would recreate this same set of operations.

Cracked out the notebook and pen for this one...

[![LPTHW exercise 21 - Study Drill 2 - forumla working out](/static/img/2017/02/python-notebook.jpg)](/static/img/2017/02/python-notebook.jpg)

I wasn't sure what the thing was I'd used to work out the forumla. I thought it was a Tree Diagram but those tend to be horizontal and to do with probability. 

After some more googling I think what I used is a [Parse Tree](https://en.wikipedia.org/wiki/Parse_tree). I'm not sure which exact type I used but anyway, that's the route to go.

### How does the Parse Tree work?

To be brutally honest, I'm not sure. I'm absolutely sure I have encountered these tree diagrams before but I cannot for the life of me remember exactly what they were called or how they work. 

Because of that, I have worked out the below on my own and it gave the right answer. 

From that we can be sure enough that in this case the following works, but might not hold in all instances.

Here's what I did...

What I did was took the first sum `50 / 2` which comes from `divide(iq, 2)` and placed that on the page. 

Then I drew a dotted line up and to the left to the operation that was going to be performed on the result of this sum - in this case it's a multiplication because:

`multiply(weight, divide(iq, 2))`

...so we're going to *multiply* the result of `divide(iq, 2)` with `weight` in the next function 'down' or 'out' if we're thinking the whole function here is 'inside out'.

**NOTE** - I started at the bottom and moved up because the functions seemed to be 'inside out', so to get the formula you have to unpack them from the inside to the outside (or the bottom to the top in the case of the Parse Tree), or even more confusingly the top to the bottom in the way I 'unpacked' the function on the right side of my notebook. Sorry! 

Then, I worked out what you would multiply `50 / 2` by. Looking at the right hand side of the photo above you can see that the sum of `50 / 2` is multiplied by `180` (this is shown in the second line down on the right hand side) because `weight` is equal to `180`.

So the `180` went on the same line as the `50 / 2` and a dotted line was drawn down to meet it which leaves us with this:

```text
        *
       / \
      /   \
     /     \
    180   50 / 2   
```

Then, the next step is to continue the dotted line up and to the left from the multiplication sign and work out what operation is to be done.

**NOTE** - We're going up and **left** because the function is 'inside out' or backward or however you want to think about it, so the way we're unpacking it means were unpacking the last operations first. By going left were placing the sums/operations in reverse order to match the way the functions are being unpacked. 

Looking at the right side of the photo we see the result of the bottom line is to be taken away from `74` i.e. the sum should be:

`74 - (180 * (50/2)`

That's because the next function 'out' is `subtract(height...`, and remember `height` is equal to `74.

So, we add a minus sign and then just add 74 on the same line as the multiplication sign, indicating that we should minus, from 74, the result of the bottom line. 

That would make the tree look like:

```text
    -
   / \
  /   \
 /     \
74      *
       / \
      /   \
     /     \
    180   50 / 2   
```

The way I think of it is that the signs in the tree indicate two things:

1. It indicates the operation to perform to the numbers on the line below
2. It represents the result of the operation performed on the numbers on the line below.

The second point is important, it represents a 'result' - in this case a number, which is then used in the line the sign is on. In this case the `*` on the line second from the bottom represents the result of `180 * (50/2)` which is `4500`. That why on the second line up `74 - *` actually means `74 - 4500`.

Hopefully that makes sense!

### Moving on...

Repeat these steps again to see the final operation must be to add -4426 to 35. 

### LPTHW Exercise 21 - The formula for the functions

The forumla I worked out is, following the steps above:

`35 + (74 - (180 * (50 / 2))) = -4391`

You could also write this as: 

`35 + 74 - 180 * 50 / 2 = -4391`

Using the second method without parenthesis relies on the Order of Operations but we should be familiar with that from [Exercise 3](/code/lpthw-exercise-3-numbers-and-math/).

### 3. Once you have the formula worked out for the puzzle, get in there and see what happens when you modify the parts of the functions. Try to change it on purpose to make another value.

Now we know the formula is the equivalent of `35 + (74 - (180 * (50 / 2))) = -4391` we should be able to change it fairly easily.

Lets swap around the subtract and multiply functions to give:

`35 + (180 * (74 - (50 / 2)))`

That should equal `8855`.

Here's my script additions...

```python
# Study drill 3 alteration

study = add(age, multiply(weight, subtract(height, divide(iq, 2)))) 

print "Here's what we get when we switch the multiple and divide functions:", study
```

And if we run that script the output is:

```text
Here's study drill 3 for you:
DIVIDING 50 / 2
SUBTRACTING 74 - 25
MULTIPLYING 180 * 49
ADDING 35 + 8820
Here's what we get when we switch the multiple and divide functions: 8855
```

Success!

### 4. Do the inverse. Write a simple formula and use the functions in the same way to calculate it.

Completely making up a formula here...

`222 - (60 + (20 * (10 / 2)))`

That should equal `62`, so lets see

```python
# Study drill 4 alteration

print "Here's study drill 4 for you:"
print "First the new variables..."

knife = divide(20, 2)
fork = multiply(5, 4)
spoon = add(40, 20)
spork = subtract(230, 8)

print " And now lets do through the new puzzle..."

cutlery = subtract(spork, add(spoon, multiply(fork, divide(knife, 2))))

print "Here's the answer to study drill 4:", cutlery
```

And here's the output:

```text
Here's study drill 4 for you:
First the new variables...
DIVIDING 20 / 2
MULTIPLYING 5 * 4
ADDING 40 + 20
SUBTRACTING 230 - 8
 And now lets do through the new puzzle...
DIVIDING 10 / 2
MULTIPLYING 20 * 5
ADDING 60 + 100
SUBTRACTING 222 - 160
Here's the answer to study drill 4: 62
```

Great success!

### Wrapping up

Bit of a long one today, hopefully I've explained it well enough that it all makes sense to you. Don't forget, I'm learning this as we go along, so there's no quarantee I've got everything right or that there isn't a better way to do something.

If you have a better way to do something or there's something that needs correcting here, get in touch through the details in the footer.

### Source files

As ever, [source files on GitHub](https://github.com/PuffinBlue/LPTHW).
