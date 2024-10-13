const possibleDrinkers = [17, 18, 22, 19, 23, 16]
const ableToDrink = []
for (let i = 0; i < possibleDrinkers.length; i++){
    console.log(`checkingAge: ${possibleDrinkers[i]}`)
if (possibleDrinkers[i] > 21){
    console.log(`allowed`)
    ableToDrink.push(possibleDrinkers[i])
}
}

// ====================================================================================================

const possibleNumbers = [2, 5, 10, 13, 15, 6]
const evenNumbers = []
const oddNumbers = []
    for (i = 0; i < possibleNumbers.length; i++){
        if (possibleNumbers[i] % 2==0){
        evenNumbers.push(possibleNumbers[i])
      } else {
            oddNumbers.push(possibleNumbers[i])
        }
    }
    console.log ("The even numbers are", evenNumbers)
    console.log ("The odd numbers are", oddNumbers)
    
// ========================================================================================================

let numbers = [3, 4, 10, 7, 6]
let sumOfNumbers = 0

    for (i = 0; i < numbers.length; i++){
    console.log (`Adding ${numbers[i]}`)
    sumOfNumbers += numbers [i]
}
    console.log(`The sum of numbers is ${sumOfNumbers}`)

// =========================================================================================================

const array1 = [1, 3, 6, 7, 8, 9]

for(let i = 0; i < array1.length; i++){
    const currentElement = array1[i]
    console.log(`The current element in index ${i} is ${currentElement}`)
}
console.log(`==================================================`)
    array1.map((element, index) => {
        console.log(`The element in index ${index} is ${element}`)
    })

    // Write a function that returns the first element of an array.
function returnFirstElement(arr){
    const firstElement = arr[0]
    return firstElement
}

// Write a function that returns the last element of an array.
function returnLastElement(arr){
    const lastElement = arr[arr.length -1]
    return lastElement
}

// Write a function that adds a new element to the end of an array.
function addElement(arr, num){
    arr.push(num)
    return arr
}

// Write a function that removes the last element from an array.
function removeLastElement(arr){
    arr.pop()
    return arr
}

// Write a function that finds the index of a specific value in an array.
function findIndex(arr, num){
    const index = arr.indexOf(num)
    return index
}

// Write a function to find the maximum number in an array.

function findMaximum(arr){
    if(arr.length == 0){
        return undefined
    }
    let currentMaximum = arr[0]
    for(let i = 1; i <= arr.length -1; i++){
        if(arr[i] > currentMaximum){
            currentMaximum = arr[i]
        }
}
return currentMaximum
}

// Write a function to remove duplicates from an array.
function removeDuplicates(arr){
    let result = []
    for(let i = 0; i <= arr.length -1; i++){
        const currentElement = arr[i]
        if(!result.includes(arr[i])){
            result.push(currentElement)
        }
    }
    return result
}

// Write a function to remove duplicates from an object.
function removeObjectDuplicates(arr){
    const tempObj = {}
    let result = []
    for(let i = 0; i <= arr.length -1; i++){
        const currentElement = arr[i]
        if(!tempObj[currentElement]){
            tempObj[currentElement] = 100
            result.push(currentElement)
        }
    }
    return result
}

// Write a function that takes an array of numbers and returns a new array with each number squared.

function squareElementsInArray(arr){
    for(let i = 0; i <= arr.length -1; i++){
        arr[i] = arr[i]* arr[i]
    }
    return arr
}

// Write a function to sort an array of strings in alphabetical order.
function sortArray(arr){
    let sortedArray = arr.sort()
    return sortedArray
}

function sortArrayReversed(arr){
    let sortedReversedArray = arr.sort().reverse()
    return sortedReversedArray
}


// Write a function that returns the last element of an array.

function returnLastElement(arr){
    return arr.length -1
}

// Write a function to find the median of an array of numbers.

function findMedian(arr){
    const sortedArray = arr.sort()
    const midIndex = Math.floor(sortedArray.length / 2)
    if(arr.length % 2 != 0){
        return sortedArray[midIndex]
    } else{
        return (sortedArray[midIndex] + sortedArray[midIndex -1]) / 2
    }
}

// Write a function that checks if an array contains a specific value.
function checkArray(num, arr){
    for(let i = 0; i <= arr.length -1; i++){
        if(arr[i] == num){
            return true
            }
        }
    return false
}

function checkArray2(num, arr){
    return arr.includes(num)
}

function checkArray3(num, arr){
    const index = arr.findIndex(num)
    if(index != -1){
        return true
    } else {
        return false
    }
}

// Write a function to flatten a nested array (array of arrays).

// Concat function
let array1 = [1, 2, 3, 4]
let array2 = [5, 6, 7, 8]
array1 = array1.concat(array2)
console.log(array1)

// Array.isArray() function
const string1 = "Payce"
const array11 = [1, 2, 3, 4]
console.log(Array.isArray(string1))
console.log(Array.isArray(array11))


// What if?
// I am given an array as shown below
const array3 = [1, 2, [3, 4, [5, 6, [7]]]]
// The result should be something like this
// [1, 2, 3, 4, 5, 6, 7]

function flattenNestedArray(arr){
    let result = []
    
    if(arr.length === 0){
        return []
    }

    for(let i = 0; i <= arr.length -1; i++){
        const currElement = arr[i]
        if(Array.isArray(currElement)){
            result = result.concat(flattenNestedArray(currElement))
        } else {
            result.push(currElement)
        }
    }
    return result
}

