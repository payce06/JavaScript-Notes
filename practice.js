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

// Functions

// Write a function named sayHello that does not take in any parameters and returns the string, “Hello, world!”
function sayHello(){
    return "Hello, world!"
}

// Write the function identity which takes an input x and returns that input.

function identity(x){
    return x
}

// Write a function that receives two arguments, a and b. Return the second argument.

function twoArgs(a, b) {
    return b
}

// Strings

// Write a function that takes a string as a parameter and returns that string in all capital letters.

function yelling(phrase){
    const phraseToUpperCase = phrase.toUpperCase()
    return phraseToUpperCase
}

// Write a function that takes in a string and returns that same string with an “echo”. The returned string should include the contents of the original string twice, with a space in between.

function echo(phrase){
    return phrase + " " + phrase
}

// Write a function that takes in a string and returns a string that triples the original. The returned string should include the contents of the original string three times, with a space in between.

function repeatThree(phrase){
    let result = ""
    for(let i = 1; i <= 3; i++){
        if(i == 3){
            result = result + phrase
        } else {
            result = result + phrase + " "
        }
    }
    return result
}

// Write a function that takes in a word or phrase. Return true if that word or phrase is all uppercase, otherwise return false.


function isUppercase(phrase){
    if(phrase == phrase.toUpperCase()){
        return true
    } else {
        return false
    }
}

// Write a function that takes in a word or phrase. Return true if that word or phrase is all lowercase, otherwise return false.

function isLowercase(phrase){
    if(phrase == phrase.toLowerCase()){
        return true
    } else {
        return false
    }
}
const phrase1 = "hello"
isLowercase(phrase1)

// Write a function that takes a string and a key as input. You should return true if the key exists in the index, false otherwise. Assume both the string and key have a length > 0

function findKey(phrase, key){
    if(phrase.includes(key)){
        return true
    } else {
        return false
    }
}

// In this exercise, you are given an input string and a key. The key will be lowercase, but you need to return the index value where that key is found as an uppercase value. If it is not found, return -1.

function findUpperKey(phrase, key){
    const newKey = key.toUpperCase()
    return phrase.indexOf(newKey)
}

// In this exercise, you are given a word or phrase. If the length of that word or phrase is odd, add a space to the end and return it. If it is even, just return it as is.


function makeEven(phrase){
    if(phrase.length % 2 == 0){
        return phrase
    } else {
        return phrase + " "
    }
}

// In this exercise, you are given a word or phrase. If the length of that word or phrase is even, add a space to the end and return it. If it is odd, just return it as is.

function makeOdd(phrase){
    if(phrase.length % 2 == 1){
        return phrase
    } else {
        return phrase + " "
    }
}