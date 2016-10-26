+++
draft = "false"
tags = [
  "",
]
date = "2016-02-20T22:29:06+01:00"
categories = [
  "LPTHW",
]
url = "/code/lpthw-exercise-8-printing-printing"
description = "Complete finished example of the eighth exercise from the Learn Python The Hard Way course. Exercise 8: Printing, Printing."
title = "LPTHW - Exercise 8: Printing Printing"
slug = ""
pageimage = ""

+++
[LPTHW - Exercise 8](http://learnpythonthehardway.org/book/ex8.html)

Another copy one here but there were things to learn conceptually that haven't been brought up before. 

Look at how `formatter` is declared right at the beginning. Throughout the rest of the exercise we just add the relevant data and it'll print in the way set in the `formatter` variable. 

I think this is a subtly important concept to begin to learn, that you can setup the structure of how to do something and allow the data to come later, knowing it'll be output how you intended. 

I also thought it was interesting to see the `print formatter % (formatter, formatter, formatter, formatter)` line too, reminding you that you can add your own variable 'into' itself, so it itself will be output in the way it itself stipulates. 

It gives you a little insight that no part of your code is particularly 'special', just because you 'created' a variable for one thing doesn't mean it can't be used to do another. 

An interesting abstraction to learn, I thought. 
 
```python
formatter = "%r %r %r %r"

# No quotes for integers
print formatter % (1, 2, 3, 4)
print formatter % ("one", "two", "three", "four")
# No quotes for boolean operators
print formatter % (True, False, False, True)
# No quotes when calling variables
print formatter % (formatter, formatter, formatter, formatter)
# Alternative clearer formatting for the array
print formatter % (
    "I had this thing.",
    "That you could type up right.",
    "But it didn't sing",
    "So I said goodnight."
    )
```

## Learn Python The Hard Way Study Drills

#### 1. Do your checks, write down your mistakes, and try not to make the same mistakes on the next exercise.

OK.

#### 2. Notice that the last line of output uses both single-quotes and double-quotes for individual pieces. Why do you think that is?

Firstly, even though the `%r` format string has been used (which means print exactly as shown), Python tries to be efficient and output the 'smallest' possible data, so it uses the single `'` character where possible, even though the string uses the `"` character. Knowing that...

When defining a string, you can use either the `'` or `"` characters. But, you can't use again in the middle of the string the same character you used to define the string at the beginning, otherwise Python will think you've ended the string early. 

This is clearer in an example. `string = 'Time doesn't stand still'` would fail, for example, because the `'` character in the word 'doesn't' ends the string, when really you wanted the one after the last word to do so.

To solve this you can use double quotes `"` to wrap the string and the single quote `'` to in the middle. Python sees the two double quotes and uses that to define the string. To be even more clear, Python will match the quote type used at the start of the string to 'end' the string. 

So, because in this particular example there is a `'` character in the middle of that particular string, Python chooses to display the characters that wrap the string as the originally used `"` character.

### Triple quotes to the rescue

I looked it up and there *is* a way to use both single and double quotes in a single string, and that's by using three quotes to define the string. You can use either single or double quotes to define the string, just as long as you use three of them to start and three to end like so:

`print '''Here's a couple of things to tell you: "You're great"!'''`

Normally, this is used for multiple line print statements, apparently, like so:
 
```
print """
Here's a couple of things to tell you: 
"You're great"!
"""
``` 

As ever, [source files on GitHub](https://github.com/PuffinBlue/LPTHW).
