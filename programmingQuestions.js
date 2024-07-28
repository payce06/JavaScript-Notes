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