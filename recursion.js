// Write a function to calculate the factorial of a number!

// Example: 5! = 5 * 4 * 3 * 2 * 1 = 120

// Input: 5
// Expected Output: 120

function factorial(n) {
    if(n < 1){
        return 1
    }
    return n * factorial(n -1)
}

console.log(`=====================================================================`)

// Write a recursive function to calculate the sum of an array of integers!

// Example: [1, 2, 3, 4, 5] = 1 + 2 + 3 + 4 + 5 = 15

// Input: [1, 2, 3, 4, 5]
// Expected Output: 15

// Hint: Use .slice()!

function sum(arr) {
    if(arr.length == 0){
        return 0
    }
    return arr[0] + sum(arr.slice(1, arr.length))
}

console.log(`==========================================================================`)

// Write a recursive function to calculate the positive exponent of a number!



// Example: 52 = 25

// Inputs: 5, 2

// Expected Output: 25

function exponent(num, exp) {
    if(exp == 0){
        return 1
    }
    return num * exponent(num, exp -1)
}

console.log(`============================================================`)

