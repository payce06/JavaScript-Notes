// Basics:

// Write a function that takes in two numbers and returns the sum of those two numbers.

function sum(x, y) {
    const sumOfNumbers = x + y
    return sumOfNumbers
}

const num1 = 1
const num2 = 10
const result1 = sum(num1, num2)
console.log(`The sum of the numbers: ${result1}`)

// Write a function that takes in a number of people and a number of groups. The people will be split up into the groups evenly (there might be left over people). Return the number of people in each group.
// Hint: Use Math.floor() to make sure the result is an integer.

function splitGroups(people, groups) {
    return Math.floor(people / groups)
}

console.log(splitGroups(10, 3))

// Write a function that takes in a number of people and a number of groups. The people will be split up into the groups evenly (there might be left over people). Return the number of people that are left over after creating the even groups.

function leftOver(people, groups) {
    return people % groups
}

// Write a function that takes in a number and a percentage and returns the percentage of that number.

function percentageOfNumber(number, percentage){
    return (percentage / 100) * number
  }

//   Write a function that takes in a number and checks if the number is divisible by 10. The function should return either true or false.

  function divisibleByTen(num) {
    if(num % 10 == 0){
        return true
    } else {
        return false
    }
}

// Write a function that takes in a number that represents hours and converts it to seconds. The function should return the number of seconds.

function hoursToSeconds(hours) {
    return hours * 60 * 60
}

// Write a function that takes two numbers that represent the base and the height of a triangle and returns the area of the triangle.

function triangleArea(base, height) {
	return (base * height) / 2
}

// A pitcher’s ERA (earned runs average) is calculated by multiplying the earned runs times total innings in the game (usually 9) and then dividing by the total innings that the pitcher pitched.

// Write a function that assumes that there were 9 innings in the game and takes in two numbers that represent the earned runs and the innings pitched. The function should return the ERA.

function era(er, ip) {
	return (er * 9) / ip
}

