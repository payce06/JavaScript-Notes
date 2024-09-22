// The formula for compound interest is:

// A = P(1 + r/n)n*t
// Write a function that takes in the principle P, the time t in years, the rate r and the number of compounding period n and returns the resulting amount.

function compoundInterest(p, r, n, t) {
	const interest = p * (1 + r/n)**(n*t)
	return interest
}

console.log(`============================================================================`)

// Write a function that takes in the name of a shape (circle, rectangle, triangle) as well as two dimensions that will be used to calculate the area. For a circle, you can use radius twice. The function should return the area of the shape.

function area(shape, num1, num2) {
    if(shape == "rectangle"){
        return num1 * num2
    } else if(shape == "triangle"){
        return (num1 * num2) / 2
    } else {
        return Math.PI * num1 * num2
    }
}

console.log(`=============================================================================`)

// Write a function that takes in two numbers and an operator (+, -, *, /) and returns the result of the calculation.

function calculator(num1, operator, num2) {
    if(operator == "+"){
        return num1 + num2
    } else if (operator == "-"){
        return num1 - num2
    } else if (operator == "*"){
        return num1 * num2
    } else {
        return num1 / num2
    }
}

console.log(`===============================================================================`)

// Write a function that takes in a number that represents the side of a square and the diameter of an inscribed circle. Return the area of the square that is outside of the circle.

function shadedArea(r) {
	return (r) * (r) - (Math.PI * r / 2 * r /2)
}

console.log(`================================================================================`)

// Write a function that takes in two numbers that represent the angles of a triangle and checks if the triangle is a right triangle. The function should return either true or false.

function isRightTriangle(angle1, angle2) {
    if(angle1 == 90){
        return true
    }
    if(angle2 == 90){
        return true
    }
	if(angle1 + angle2 == 90){
	    return true
	} else {
	    return false
	}
}

console.log(`===============================================================================`)

// Write a function that takes in two numbers that represent hours worked and hourly pay. Overtime pay is 1.5 times more than regular pay. The function should return the total amount paid for the hours entered.

function totalPay(hours, payPerHour) {
    let normalHours = hours
    let overtimeHours = 0
    if(hours > 40){
        normalHours = 40
        overtimeHours = hours - normalHours
    }
    let overtimePay = overtimeHours * payPerHour * 1.5
    let normalPay = normalHours * payPerHour
    return normalPay + overtimePay
}

console.log(`================================================================================`)

// Write a function that takes in an integer, n and returns the sum of all integers from 0 to n.

function addUpTo(n) {
    let sum = 0
    for(let i = 0; i <= n; i++){
        sum = sum + i
    }
    return sum
  }

  console.log(`============================================================================`)

//   Write a function that takes in two numbers, an operator (+, -, *, /) and the result of the calculation. The function should check if the calculation is correct and return either true or false.

function calculator(num1, operator, num2, sol) {
    let checkSol = 0
	if(operator == "+"){
	    checkSol = num1 + num2
	} else if(operator == "-"){
	    checkSol = num1 - num2
	} else if(operator == "*"){
	    checkSol = num1 * num2
	} else {
	    checkSol = num1 / num2
	}
	if(checkSol == sol){
	    return true
	} else {
	    return false
	}
}

console.log(`===============================================================================`)

// Write a function that takes in three numbers that represent he coefficients of the quadratic equation. Using the quadratic formula, return the solutions of the equation.

// Name your solutions sol1 and sol2 and use the return statement below.

// return "Solutions: " + sol1 + " and " + sol2;

function quadraticEquation(a, b, c) {
    let sol1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
    let sol2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)
    return "Solutions: " + sol1 + " and " + sol2
}

console.log(`========================================================================`)

// Write the function equal that compares the first element arrays, a and b, and returns true if they’re equal.

// You can assume each array has at least one element.

function compareFirst(a, b) {
    if(a[0] == b[0]){
        return true
    } else {
        return false
    }
}

console.log(`===========================================================================`)

// Write a function that returns true if the first and last element of a list are the same, and false otherwise.

// You can assume the list has at least one element.

function beginningAndEnd(array) {
    if(array[0] == array[array.length -1]){
        return true
    } else {
        return false
    }
}

console.log(`=======================================================================`)

// Write the doubleEverything function which takes an array of numbers and returns an array where all of those numbers are doubled.

// For example,

doubleEverything([1,2,3]) => [2, 4, 6]

function doubleEverything(array) {
    for(let i = 0; i <= array.length -1; i++){
        array[i] = array[i] * 2
    }
    return array
}

console.log(`==========================================================`)

// Write the function negative which takes an array of numbers and returns an array where all of those numbers are negative.

// For example,

negative([-10, 20, 30]) => [-10, -20, -3]

console.log(`========================================================`)

// Write the sum function which returns the sum of all numbers in an array.

// You can assume there are only numbers in the array, but not that the array isn’t empty! If the array is empty, you should return 0.

// For example:
// sum([1, 2, 3]) => 6
// sum([]) => 0


function sum(array) {
    let result = 0
    for(let i = 0; i <= array.length -1; i++){
        result = result + array[i]
    }
    return result
}

console.log(`=======================================================`)

// Write the repeats function which returns true if an element appears more than once in an array and false otherwise.

// For example:
// repeats([]) => false
// repeats([1,2,3]) => false
// repeats([1,2,1]) => true
// repeats(['a', 'b', 'c']) => true

function repeats(array) {
    let object= {}
    for(let i = 0; i <= array.length -1; i++){
        const current = array[i]
        if(!object[current]){
            object[current] = 1
        } else {
            return true
        }
    } 
    return false
}

console.log(`=======================================================================`)



