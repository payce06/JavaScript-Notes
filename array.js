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