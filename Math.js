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

