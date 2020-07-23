/* Task:*/
// -----------------------------------
/* Simple Calculation :
    - Sum
    - Multiplication
    - Devision
    - Subtraction
- You will define your operants as a different file and export them to main file!
- Output will be like screnshot!
var firstOperand = +process.argv[2]
var secondOperand = +process.argv[3]  */

// process.argv[0] = node JS itselves
// process.argv[1] = 1 is always your script name
// process.argv[2] = everything afterwards are arguments supplied on command line!
// -----------------------------------
// moment Package from NPM:

// npm install moment => download to your node_modules folder!

// To define easy time and date
/* moment().format("dddd, MMMM Do YY, h:mm:ss a") */

//---------------------------------------


var myAdd = require('./operations/sum')

const operants = require('./operations/operants')

const multiply = require('./operations/multiplication')

const moment = require('moment')

/* 
const first = +process.argv[2]
const second = +process.argv[3]
 */

console.log("Today is :"+ moment().format("dd, MMMM Do YYYY, h:mm:ss a"));

console.log(operants)

console.log(myAdd(operants.first, operants.second))

console.log(multiply(operants.first, operants.second))


//console.log(myAdd(4,5));