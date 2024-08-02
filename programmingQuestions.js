const array1 = [1, 3, 4, 10, 3, 5, 7876, 4, 76]
let currMin = array1[0]
for(let i = 1; i > array1.length; i--){
    if(array1[i] < currMin){
        currMin = array1[i]
    }
}
console.log(`The current min is ${currMin}`)

console.log(`============================================================================`)

const array1 = [1, 3, 4, 10, 3, 5, 7876, 4, 76]
let currMax = array1[0]
for(let i = 1; i < array1.length; i--){
    if(array1[i] > currMax){
        currMax = array1[i]
    }
}
console.log(`The current max is ${currMax}`)

// Find longest string in an array

const colors = ["red", "blue", "green", "yellow"]
let maxLength = colors[0].length
for(let i = 1; i < colors.length; i++){
    const currentColor = colors[i]
    const currentLength = currentColor.length
    if(currentLength > maxLength){
        maxLength = currentLength
    }
}
  console.log(`The longest length is: ${maxLength}`)

console.log(`===================================================================================`)

// print longest string

const colors = ["red", "blue", "green", "yellow"]
let maxLength = colors[0].length
let maxColor = colors[0]
for(let i = 1; i < colors.length; i++){
    const currentColor = colors[i]
    const currentLength = currentColor.length
    if(currentLength > maxLength){
        maxLength = currentLength
        maxColor = currentColor
    }
}
  console.log(`The longest color is: ${maxLength} which is string name: ${maxColor}`)

console.log(`=================================================================================`)

// print shortest string and its length

const colors = ["red", "blue", "green", "yellow"]
let minLength = colors[0].length
let minColor = colors[0]
for(let i = 1; i < colors.length; i++){
    const currentColor = colors[i]
    const currentLength = currentColor.length
    if(currentLength < minLength){
        minLength = currentLength
        minColor = currentColor
    }
}
  console.log(`The longest color is: ${minLength} which is string name: ${minColor}`)

console.log(`===========================================================================`)

// const stringA = "Payce Grossman"
// You will need to create a function called countVowels
// This function is going to take one argument (that is the string to be checked)
// It counts the occurence of the vowels ("a", "e", "i", "o", "u")
// It returns the number of vowels in a string


// Hint: first of all create another string by converting the given string toLowercase
// Then create a variable called counter. initialize it to 0.
// Hint2: then loop through the string (that means one chara
// Hint3: As you loop, see if the current character is a vowel or not
// if yes, then increase the counter += 1
// finally after the loop is complete, return the counter



function countVowels(checkString){
    let str1 = checkString.toLowerCase()
    let counter = 0
    for(let i = 0; i < str1.length; i++){
        const ch = str1[i]
        if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u"){
            counter = counter + 1
        }
    }
    return counter
}

const strA = "Payce Grossman"

const result = countVowels(strA)
console.log(`The number of vowels in strA are ${result}`)

console.log(`=========================================================================`)

// Task: You will create a function that will take on argument.
// That arugment is an array of numbers
// You will double the numbers present in the array one at a time.
// And then you will return the sum of the doubled array

// For instance:
// If your function is passed an array: [5, 6, 9]
// It is going to double all the numbers = [10, 12, 18] and find its sum,
// which is 10+12+18=40 and return 40 as the value

// Name the function as sumDouble
// Hint: one arguement that is an array to be passed in the function
// Create a sum variable that starts at 0
// Then loop through the elements in the array
// Then inside the loop extract the currentElement
// Then sum = sum + (currentElement * 2)



function sumDouble(arrayPassed){
    let sumVariable = 0
    
    for(let i = 0; i < arrayPassed.length; i++){
        const currElement = arrayPassed[i]
        sumVariable = sumVariable + (currElement * 2)
    }
    return sumVariable
}
const array1 = [1, 5, 7, 2, 6]
const result = sumDouble(array1)

console.log(`The variable sum doubled is: ${result}`)
console.log(`=================================================================================`)

// You will have to write a function that taken an array as an input
// And return another array as an output

// For instance:
// If it gets: ["Payce", "Grossman", "is", "a", "great", "learner"]
// It should return [5, 8, 2, 1, 5, 7]
// Hint:
// Inside the function
// Create another empty array. This is where you will push the length of each elements one at a time.
// Now loop through the array that was passed.
// Store the currentElement in a variable
// Create another variable called currLength that will store the length of the current element
// Then push the currLength into your empty array that you created before the for loop. 
// Once the for loop is done, return the array

function arrayToNumbers(calculate){
    const array1 = []
    for(let i = 0; i < calculate.length; i++){
    const currElement = calculate[i]
    const currLength = currElement.length
    array1.push(currLength)
    }
    return array1
}
const stringArrays = ["Payce", "Grossman", "is", "a", "great", "learner"]
const arrayNumbers = arrayToNumbers(stringArrays)
const result = arrayNumbers

console.log(`The result: ${result}`)
console.log(`========================================================================`)

// I will give you an array. Each of the element of that array is a number
// You dont need to return anything from that array.
// All you need to do is find the number of even and odd numbers and 
// print the counts

function countEvenOdd(array1){
    let countEven = 0
    let countOdd = 0
    for(let i = 0; i < array1.length; i++){
        currElement = array1[i]
        if(currElement % 2 == 0){
        countEven = countEven + 1
        } else {
            countOdd = countOdd + 1
        }
    }
     console.log(`Count Even: ${countEven}`)
     console.log(`Count Odd: ${countOdd}`)
     return
}
const array = [1, 3, 5, 7, 2, 4, 6, 8, 10, 12, 14]
countEvenOdd(array)
console.log(`========================================================================`)

function isAPalendrome(checkStr){
    let revStr = ""
    for(let i = checkStr.length - 1; i >= 0; i--){
        revStr += checkStr[i]
    }
    if(revStr == checkStr){
        return true 
        } else {
        return false
        }
    
}

const strA = "pole"
const strB = "pop"

console.log(isAPalendrome(strA))
console.log(isAPalendrome(strB))
console.log(`=======================================================================`)

// You are given a sting in a function
// You need to count the occurence of each character in that string
// and print them
// Eg: paaycee
// p: 1
// a: 2
// y: 1
// c: 1
// e: 2

function countChars(checkStr) {
    const counter = {}

    // paayce
    for (let i = 0; i < checkStr.length; i++) {
        const currentChar = checkStr[i]
        if (!counter[currentChar]) {
            counter[currentChar] = 0
            console.log(`Adding a key: ${currentChar}. The value set for it is 0.`)
            console.log(`[Y] Current state of the counter: ${JSON.stringify(counter)}`)
        }
       
        counter[currentChar] += 1
        console.log(`[Z] Current state of the counter: ${JSON.stringify(counter)}`)
    }
}





const strA = "paaycee"
countChars(strA)
console.log(`=============================================================================`)

// Write a function that takes a string and returns its length.
function returnLength(measureString){
    return measureString
}

const strA = "Payce"
const result = returnLength(strA.length)
console.log(`The length of strA: ${result}`)
console.log(`==========================================`)

// Write a function to convert a string to uppercase.
function strToUppercase(toUppercase){
    return toUppercase
}
const strB = "payce"
const result2 = strToUppercase(strB.toUpperCase())
console.log(`The string to uppercase: ${result2}`)
console.log(`==========================================`)

// Write a function to convert a string to lowercase.
function strToLowercase(toLowercase){
    return toLowercase
}
const strC = "payce"
const result3 = strToLowercase(strC.toLowerCase())
console.log(`The string to lowercase: ${result3}`)
console.log(`======================================`)

// Write a function that takes an array and returns the first element.
function takeElement(takenFirstElement){
    return takenFirstElement
}
const array1 = [1, 2, 4, 6, 8, 0]
const result4 = takeElement(array1[0])
console.log(`The first element in array1: ${result4}`)
console.log(`=============================================`)

// Write a function that takes an array and returns the last element.
function takeLastElement(lastElementTaken){
    return lastElementTaken
}
const array2 = [3, 38, 8, 5, 42, 7, 20]
const result5 = takeLastElement(array2[6])
console.log(`The last element in array2: ${result5}`)
console.log(`============================================`)

// Write a function that adds an element to the end of an array.
function addElement(elementAdd){
    return elementAdd
}

const array3 = [3, 6, 8, 3, 7, 3]
const result6 = addElement(array3.push(5))
console.log(`The added element in array3 shown: ${array3}`)
console.log(`=========================================`)

