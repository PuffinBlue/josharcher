+++
description = "Complete finished example of the seventh exercise from the Learn Python The Hard Way course. Exercise 7: More Printing"
tags = [
  "",
]
slug = ""
categories = [
  "LPTHW",
]
date = "2016-01-21T22:24:05+01:00"
draft = "false"
title = "LPTHW - Exercise 7: More Printing"
url = "/code/lpthw-exercise-7-more-printing/"
pageimage = ""

+++
[LPTHW - Exercise 7](http://learnpythonthehardway.org/book/ex7.html)

This is the start of a rote copying stretch. That said, I did a few bits of my own towards the bottom of the script as you'll see below. 

Having a play around with the code helps me to get a feel for the different things it does. Just trying something to see what it does is a fun way to learn. 

I think as time goes by actually reading up on docs first will start to become the more efficient way to do things, but I don't think we're at that stage just yet.

Output is below as usual...

```python
print "Mary had a little lamb."
print "It's fleece was white as %s." % 'snow'
print "And everywhere that Mary went."
print "." * 10 # prints 10 fullstops

end1 = "C"
end2 = "h"
end3 = "e"
end4 = "e"
end5 = "s"
end6 = "e"
end7 = "B"
end8 = "u"
end9 = "r"
end10 = "g"
end11 = "e"
end12 = "r"

# A comma at the end of a line here will tell the print to output the next printout on the same line but with a space after the last variable. 
print end1 + end2 + end3 + end4 + end5 + end6,
print end7 + end8 + end9 + end10 + end11 + end12

# This can be done but code and comments aren't really supposed to go over 80 character width for styling reasons.
print end1 + end2 + end3 + end4 + end5 + end6, end7 + end8 + end9 + end10 + end11 + end12

# This is two separate lines
print end1 + end2 + end3 + end4 + end5 + end6
print end7 + end8 + end9 + end10 + end11 + end12

#This is the same line but using ''.join
print ''.join((end1,end2,end3,end4,end5,end6)),
print ''.join((end7,end8,end9,end10,end11,end12))</pre> 
```

## Learn Python The Hard Way Study Drills

#### 1. Go back through and write a comment on what each line does.

Done, except for the print lines, those are pretty much in plain English already. Well, one print line is commented because it adds `* 10` to the line, which causes the string in the print statement to be printed 10 times. 

#### 2. Read each one backward or out loud to find your errors.

Done.

#### 3. From now on, when you make mistakes, write down on a piece of paper what kind of mistake you made.

I made a mistake originally in that I didn't copy a comma in the poor formatting example (over 80 characters), but it printed on one line anyway. Reading backwards caught it.

#### 4. When you go to the next exercise, look at the mistakes you have made and try not to make them in this new one.

Wouldn't that be nice!

#### 5. Remember that everyone makes mistakes. Programmers are like magicians who fool everyone into thinking they are perfect and never wrong, but it's all an act. They make mistakes all the time.

I knew it!
