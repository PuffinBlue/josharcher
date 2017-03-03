+++
title = "LPTHW - Exercise 19: Functions and Variables"
description = "Complete finished example of the nineteenth exercise from the Learn Python The Hard Way course. Exercise 19: Functions and Variables."
date = "2016-12-07T15:03:12Z"
categories = [
  "LPTHW",
]
tags = [
  "",
]
draft = "false"
url = "/code/lpthw-exercise-19-functions-variables/"
slug = ""
pageimage = ""

+++
[LPTHW - Exercise 19](http://learnpythonthehardway.org/book/ex19.html)

When I first read through this lesson it seemed like a breeze, and it was, until I got to the study drills.

There's nothing in the script itself that's tricky, it's mostly just a refresh of the last lesson and confirms you can write out the functions correctly. 

But the study drills take it to a new level with the requirement to write your own function and call it 10 different ways.

Because the script undergoes extensive alterations through the lesson, I'm going to post it in two parts with my additions in a separate section below. The source file will contain the whole thing and you can get that on GitHub.

```python
def cheese_and_crackers(cheese_count, boxes_of_crackers):
    print "You have %d cheeses!" % cheese_count
    print "You have %d boxes of crackers!" % boxes_of_crackers
    print "Man that's enough for a party!"
    print "Get a blanket.\n"

print "We can just give the function numbers directly:"
cheese_and_crackers(20,30)

print "OR, we can use variables from our script:"
amount_of_cheese = 10
amount_of_crackers = 50
cheese_and_crackers(amount_of_cheese, amount_of_crackers)

print "We can even do math inside too:"
cheese_and_crackers(10+20, 5+6)

print "And we can combine the two, variables and math:"
cheese_and_crackers(amount_of_cheese + 100, amount_of_crackers + 1000)
```

That's the initial run through of the script. I didn't make any mistakes.

## Learn Python The Hard Way - Study Drills

### 1. Go back through the script and type a comment above each line explaining in English what it does.

That's a lot to write out, so I have recreated the whole script below with my comments. 

```python
# Creates a function called "cheese_and_crackers" with to arguements,
# "cheese_count" and "boxes_of_crackers"
def cheese_and_crackers(cheese_count, boxes_of_crackers):
# prints the value of "cheese_count" in a string using digit formatter
    print "You have %d cheeses!" % cheese_count
# prints the value of "boxes_of_crackers" in a string using digit formatter
    print "You have %d boxes of crackers!" % boxes_of_crackers
# prints a string
    print "Man that's enough for a party!"
# prints a string
    print "Get a blanket.\n"

# prints a string
print "We can just give the function numbers directly:"
# calls the function "cheese_and_crackers" with argument value of 20 and 30
cheese_and_crackers(20,30)

# prints a string
print "OR, we can use variables from our script:"
# creates variable "amount_of_cheese" with value "10"
amount_of_cheese = 10
# creates variable "amount_of_crackers" with value "50"
amount_of_crackers = 50
# call the function "cheese_and_crackers" with arguments set to the variables
# "amount_of_cheese" and "amount_of_crackers", whose values respectively are 
# set to "10" and "50".
cheese_and_crackers(amount_of_cheese, amount_of_crackers)

# prints a string
print "We can even do math inside too:"
# calls the function "cheese_and_crackers" with the arguments "10+20" and "5+6"
# which proves it's possible to do math on the arguments/values passed to the 
# function
cheese_and_crackers(10+20, 5+6)

# prints a string
print "And we can combine the two, variables and math:"
# calls the function "cheese_and_crackers" with the arguments 
# "amount_of_cheeses+100" and "amount_of_crackers +1000" which proves it's 
# possible to do math on the variables passed to the function
cheese_and_crackers(amount_of_cheese + 100, amount_of_crackers + 1000)
```

### 2. Start at the bottom and read each line backward, saying all the important characters.

I am not 100% sure what is meant by 'characters' here. I'm guessing it's the things like the `=` sign and mathematical operators. Perhaps it included the parenthesis on the functions too? I don't know.

Anyway, I've read through the script from end to beginning and made sure I know what each character means. I get the sense that at some point this is going to be tested...

### 3. Write at least one more function of your own design, and run it 10 different ways.

It's possible I misinterpreted this study drill. I took it to be try and find 10 **unique** ways to call the new function, not just 10 variations on adding up numbers and passing them into it.

I only found 8 unique ways to call the function and they're listed below:

1. Simple arguments passed directly
2. Math(s)
3. Variables
4. Variables and math(s) (maybe this counts as a variation? I'll allow it)
5. Assign the function to a variable and call the variable with arguments
6. Variable number of arguments (using the asterisk method)
7. Writing another function, then pass values to the original one within in it
8. User input

I know there must be one more too - getting a value back out of a function directly and passing that to the original one, not manually like I did but automated some how. I'm not sure how to get a value back out of a function though. 

```python
def order_stats(total_orders, total_returns):
    print "You have %d orders" % total_orders
    print "You have %d returns" % total_returns
    print "Your net sales are %d" % (total_orders - total_returns)
    print "Hopefully you had a good month!\n"

# Simple arguments
order_stats(4321, 1234)

# Math
order_stats(102+321, 456*4) # ouch, bad month

# Variables
jims_sales = 395
sally_sales = 72
joan_sales = 5481 # way to go Joan!
returns = 32
order_stats(jims_sales+sally_sales+joan_sales, returns)

# Variables and math
order_stats((jims_sales*4)+(sally_sales%4)+(joan_sales%4), returns)

# Assign the function to a variable? (it works!)
order_totals = order_stats
order_totals(30,1)

# With a variable number of arguments - a la *args? (it works!)
var_stats = (560, 42)
order_stats(*var_stats)

# function to function? (it works!)
def func_to_func():
    value1 = 20
    value2 = 30
    order_stats(value1, value2)
func_to_func()

# user input - Don't forget to specify a type of input! In this case an integer
print "how much did you sell this month?"
user_sales = int(raw_input('>>>'))
order_stats(user_sales, returns)
```

There we have it then. 8 ways. If you have more unique ways I missed, give me a shout on [twitter](https://twitter.com/josharcher).

### Source files

As ever, [source files on GitHub](https://github.com/PuffinBlue/LPTHW).

