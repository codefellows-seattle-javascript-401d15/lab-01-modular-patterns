![CF](assets/shield-32x32.png) Lab 01: Modular Patterns and Testing
===

## To Submit this Assignment
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Resources
* [Node assert docs](https://nodejs.org/dist/latest-v4.x/docs/api/assert.html)
* [Mocha docs](http://mochajs.org/#getting-started)

## Description:
This assignment will have you create a simple Javascript object that will be exported using the Node modular pattern we went over in class.  

Your object should have a function named 'greet' that takes a name as a parameter and returns the string `'hello' + name`  

You should have at least one test that verifies the output of the function.
  - Challenge yourself to consider what other cases you could potentially test for?

Your code should pass the **.eslintrc** included in this repository.  

Your submission in Canvas should be a link to your pull request.  

## Bonus:
For an extra point, create a command line utility that will be run using `node greet.js <some name>` and will pass the input contained in that argument to the greet function and output the result to the screen.

For a second bonus point, write a test that makes sure that the arguments are being processed.

## Rubric:
  * Proper Styling: 2pts
  * Proper Submission: 2pts
  * mocha/assert Test: 3pts
  * Use of Modular Pattern/design of greet object/function: 3pts
