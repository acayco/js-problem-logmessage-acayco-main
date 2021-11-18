# JS Problem 1: logMessage

Write a function named `logMessage` that accepts two arguments: `name` and `msg`. The function body should log output to the console using the `console.log` function. In order for _your_ function to work properly, both arguments must be of the type string. You can check for this using conditional branching (`if/else`) and the `typeof` operator. There is no HTML or CSS for this assignment (I provided an HTML dummy that links to the script so you can clone the repo and use VS code to write your JS and push your changes. It's good practice for you.) All output is called from your JS file and logged to the browser console. **_NB:_** You *do not* need to declare any variables for this exercise. 

## Tests
Call the following in your JS file to test your progress.
1. `logMessage("Amanda", "Good-bye")` output --> "Amanda: Good-bye"
2. `logMessage(4, "Good-bye")` output --> "name is not a string." 
3. `logMessage("Amanda", 4)` output --> "msg is not a string."
4. `logMessage(4, 4)` output --> "Neither name nor msg is a string."

## Resources
- [javascript.info conditional branching](https://javascript.info/ifelse)
- [javascript.info function basics](https://javascript.info/function-basics)
- [MDN typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
