// Write a function that takes two numbers and returns their sum.
function addNumbers(a, b){
    const add =  a + b
    return add
    }

const num1 = 5
const num2 = 10
const result1 = addNumbers(num1, num2)
console.log(`The numbers added: ${result1}`)
console.log(`=========================================`)

// Write a function that takes two numbers and returns their difference.
function subNumbers(a, b){
    const sub = a - b
    return sub
}

const num3 = 30
const num4 = 10
const result2 = subNumbers(num3, num4)
console.log(`The numbers subtracter: ${result2}`)
console.log(`=============================================`)

// Write a function that takes two numbers and returns their product.
function multiplyNumbers(a, b){
    const multiply = a * b
    return multiply
}

const num5 = 6
const num6 = 10
const result3 = multiplyNumbers(num5, num6)
console.log(`The numbers multiplied: ${result3}`)
console.log(`======================================`)

// Write a function that takes two numbers and returns their quotient.
function divideNumbers(a, b){
    const divide = a / b
    return divide
}

const num7 = 10
const num8 = 10
const result4 = divideNumbers(num7, num8)
console.log(`The numbers divided: ${result4}`)
console.log(`===========================================`)

// Write a function that takes two numbers and returns the remainder when the first is divided by the second.
function takeRemainder(a, b){
    const remainder = a % b
    return remainder
}

const num9 = 10
const num10 = 3
const result5 = takeRemainder(num9, num10)
console.log(`The remainder of the numbers: ${result5}`)
console.log(`============================================`)

// Control Structures
// Write a function that checks if a number is even or odd.
function evenOrOdd(numberCheck){
    if(numberCheck % 2 == 0){
        return "even"
    } else {
        return "odd"
    }
}

const number = 10
const result1 = evenOrOdd(number)
console.log(`The number is: ${result1}`)
console.log(`=======================================`)

// Write a function that checks if a number is positive, negative, or zero.
function checkNumber(numberBeingChecked){
    if(numberBeingChecked > 0){
        return "positive"
    } else if (numberBeingChecked < 0){
        return "negative"
    } else {
        return 0
    }
}
const number1 = 123
const result2 = checkNumber(number1)
console.log(`The number is: ${result2}`)
console.log(`=======================================`)

// Write a function that returns the maximum of three numbers.
function returnMaximumValue(a, b, c){
    if(a > b && a > c){
        return a
    } else if(b > a && b > c){
        return b
    } else if(c > a && c > b){
        return c
    } else {
        return "There is no greatest number"
    }
}
const number2 = 3
const number3 = 5
const number4 = 2
const result3 = returnMaximumValue(number2, number3, number4)
console.log(`The maximum value of the numbers: ${result3}`)
console.log(`=======================================`)

// Write a function that returns the minimum of three numbers.
function returnMinimumOfNumbers(a, b, c){
    if(a < b && a < c){
        return a
    } else if(b < a && b < c){
        return b
    } else if(c < a && c < b){
        return c
    } else {
        return "There is no greater number"
    }
}
const number5 = 20
const number6 = 12
const number7 = 2
const result4= returnMinimumOfNumbers(number5, number6, number7)
console.log(`The minimum of the numbers ${result4}`)
console.log('=======================================')

// Write a function that returns the grade of a student based on their score (A, B, C, D, F).
function returnGrade(scoreReturned){
    if(scoreReturned >= 90){
        return "A"
    } else if(scoreReturned >= 80){
        return "B"
    } else if(scoreReturned >= 70){
        return "C"
    } else if(scoreReturned >= 60){
        return "D"
    } else if(scoreReturned <= 50){
        return "F"
    }
}
const grade = 80
const result5 = returnGrade(grade)
console.log(`The grade based on the score: ${result5}`)
console.log(`=======================================`)

// Loops
// Write a function that prints the even numbers from 1 to 10.
function evenNumbers(){
    for(let i = 1; i <= 10; i++){
        if(i % 2 == 0){
            console.log(`${i}`)
        }
    }
}
evenNumbers()
console.log(`====================================`)

// Write a function that prints the odd numbers from 1 to 10.
function oddNumbers(){
    for(let i = 0; i <= 10; i++){
        if(i % 2 == 1){
            console.log(`${i}`)
        }
    }
}
oddNumbers()
console.log(`====================================`)

// Write a function that prints the numbers from 10 to 1.
function printNumbersRevers(){
    for(let i = 10; i > 0; i--){
        console.log(`The numbers 1-10 printed in reverse: ${i}`)
    }
}
printNumbersRevers()
console.log(`=====================================`)

// Write a function that prints the multiplication table of a given number.
function printMultiplicationTable(Table){
    for(let i = 0; i <= 10; i++){
        const result = Table * i
        console.log(`${Table} * ${i} = ${result}`)
    }
}
const inputNumber = 5
printMultiplicationTable(inputNumber)
console.log(`============================================`)

function patternPrinting(pattern){
    for(let i = 1; i <= 4; i++){
        let stars = ""
        for(let j = 1; j <= i; j++){
        stars += "*"
        }
        console.log(`${stars}`)
    }
}
patternPrinting()
console.log(`================================================`)

function patternPrinted(starPattern){
    for(let i = 4; i >= 1; i--){
        let starShapes = ""
        for(let j = 1; j <= i; j++){
            starShapes += "*"
        }
        console.log(`${starShapes}`)
    }
}
patternPrinted()
console.log(`================================================`)

// String Methods
// Write a function that capitalizes the first letter of each word in a string.

function capitalizeFirstLetters(str){
    let splitVals = str.split(" ")
    let resultStr = ""
    for(let i = 0; i < splitVals.length; i++){
        const current = splitVals[i]
        const firstLetter = current[0].toUpperCase()
        const remainingLetters = current.slice(1, current.length)
        const currentCap = firstLetter + remainingLetters
        resultStr += currentCap
        resultStr += " "
    
    }
    return resultStr
}
const str1 = "this is a sentence."
const result1 = capitalizeFirstLetters(str1)
console.log(`The final result: ${result1}`)
console.log(`=========================================`)



// Write a function that reverses a string.
function reverString(str){
    let revStr = ""
    for(let i = str.length -1; i >= 0; i--){
    const currentChar = str[i]
    revStr += currentChar
    }
    return revStr
}

const str2 = "payce"
const result2 = reverString(str2)
console.log(`The string reversed: ${result2}`)
console.log(`=========================================`)