+++
url = "/code/lpthw-exercise-4-variables-and-names/"
categories = [
  "LPTHW",
]
slug = ""
title = "LPTHW - Exercise 4: Variables Names"
description = "Complete finished example of the fourth exercise from the Learn Python The Hard Way course. Exercise 4: Variables And Names"
tags = [
  "Learn Python The Hard Way Exercise 4","LPTHW Exercise 4","Learn Python Exercise 4","LPTHW Ex 4","",
]
pageimage = ""
date = "2015-12-15T21:56:26+01:00"
draft = "false"

+++
[LPTHW - Exercise 4](http://learnpythonthehardway.org/book/ex4.html)

First introduction to [variables](https://en.wikipedia.org/wiki/Variable_(computer_science)) here. Variable has a very dry and precise definition in Computer Science:

> In computer programming, a **variable** or **scalar** is a storage location paired with an associated symbolic name (an identifier), which contains some known or unknown quantity of information referred to as a value.

Don't let that put you off though. A variable can be thought of simply as a thing with a name that stores some information. That's really all there is to it. 

### What we learnt

In this lesson we see how to assign values to variables and that you can perform mathematical operations on variables like you would integers. 
 
```python
# Sets variable 'car's to '100'
cars = 100
# Sets variable 'space_in_a_car' to '4.0' (this being a floating point number)
space_in_a_car = 4.0
# Sets variable 'drivers' to '30'
drivers = 30
# Sets variable 'passengers' to '90'
passengers = 90
# Sets variable 'cars_not_driven' to the variable 'cars' minus the variable
# 'drivers' = 100 - 30
cars_not_driven = cars - drivers
# Sets variable 'cars_driven' to variable 'drivers' = 30
cars_driven = drivers
# Sets variable 'carpool_capacity' to variable 'drivers' multiplied by 
# variable 'space_in_a_car' = 30 * 4.0
carpool_capacity = drivers * space_in_a_car
# Sets variable average_passengers_per_car' to variable 'passengers' divided
# by the variable 'cars_driven' = 90 / 30
average_passengers_per_car = passengers / cars_driven


print("There are", cars, "cars available.")
print("There are only", drivers, "drivers available.")
print("There will be", cars_not_driven, "empty cars today.")
print("We can transport", carpool_capacity, "people today.")
print("We have", passengers, "to carpool today.")
print("We need to put about", average_passengers_per_car, "in each car.")
```

## Learn Python The Hard Way Study Drills

#### 1. I used 4.0 for space_in_a_car, but is that necessary? What happens if it's just 4? 

If you didn't use floating point numbers I believe Python would round down to the nearest whole number. In this case that would not really matter as the product (?) is a whole number anyway. 

#### 2. Remember that 4.0 is a floating point number. It's just a number with a decimal point, and you need 4.0 instead of just 4 so that it is floating point.

Floating points were [covered in exercise 3](/code/lpthw-exercise-3-numbers-and-math/#floating).

#### 3. Write comments above each of the variable assignments.

OK.

#### 4. Make sure you know what = is called (equals) and that it's making names for things.

OK.

#### 5. Remember that _ is an underscore character.

OK.

#### 6. Try running python from the Terminal as a calculator like you did before and use variable names to do your calculations. Popular variable names are also i, x, and j.

It's trickier first time you do this, setting the variable in this fashion feels a bit weird as we've been writing them in a script. This [Let's Learn Python](https://www.youtube.com/watch?v=D48iCw3WWpI&list=PL82YdDfxhWsDJTq5f0Ae7M7yGcA26wevJ) video by [Trevor Payne](https://www.youtube.com/channel/UCPme28sMOcWS50CgtTWUZIw) has a great overview of doing this if you get stuck or need to see exactly what doing this looks like. 

### Source files

As ever, [source files on GitLab](https://gitlab.com/josharcher/LPTHW).

