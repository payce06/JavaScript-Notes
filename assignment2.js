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