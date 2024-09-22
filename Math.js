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

