// Write a function to reverse a string using a for loop.
function revString(str){
    let result = ""
    for(let i = str.length -1; i >= 0; i--){
        result = result +str[i]
    }
    
    return result
}

const strA = "Payce"
const result1 = revString(strA)
console.log(`The string in reverse: ${result1}`)
console.log(`===========================================`)


// Write a function that iterates through numbers from 1 to 100 and prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.
function goingThroughMultiples(){
    for(let i = 1; i <= 100; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log(`FizzBuzz${i}`)
        }
        else if (i % 3 == 0){
            console.log(`Fizz${i}`)
        } else if (i % 5 == 0){
            console.log(`Buzz${i}`)
        } 
        
    }
}
goingThroughMultiples()
console.log(`========================================================`)

// Write a function to find the sum of all numbers in an array using a for loop.
function findSumOfNumbers(array){
    let result = 0
    for(let i = 0; i < array.length; i++){
        result = result+array[i]
    }
    return result
}
const array1 = [1, 6, 3, 6, 2, 3, 7]
const result2 = findSumOfNumbers(array1)
console.log(`The numbers in array added: ${result2}`)
console.log(`================================================`)

function multFactorial(num){
    let result = 1
    for(let i = 1; i <= num; i++){
        result = result * i
    }
    return result
}
const num1 = 4
const result3 = multFactorial(num1)
console.log(`The number's factorial: ${result3}`)
console.log(`===================================================`)

// Write a function to reverse the elements of an array using a for loop.
function revArray(arr){
    let result = []
    for(let i = arr.length -1; i >= 0; i--){
        result.push(arr[i])
    }
    return result
}
const arr1 = [7, 5, 3, 6, 9]
const result4 = revArray(arr1)
console.log(`The array reversed: ${result4}`)
console.log(`=======================================================`)

// Write a function to check if an array is sorted in ascending order using a for loop.
function sortedArray(arr){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] < arr[i -1]){
            return false
        }
    }
    return true
}
const arr1 = [3, 6, 7, 10, 9]
const result5 = sortedArray(arr1)
console.log(`Array sorted ${result5}`)
console.log(`==================================================`)

// 3, 5, 10, 2, 6, 8

// Whats the length of this array?
// 6

// Index
// arr[0] = 3
// arr[1] = 5
// arr[2] = 10
// arr[3] = 2
// arr[4] = 6
// arr[5] = 8 and 5 is length - 1. This is where you should stop.
// arr[6] = NaN


// Two ways to deal with this

// Either you
// for(let i = 0; i < arr.length; i++)

// Or you
// for(let i = 0; i <= arr.length - 1; i++)

// Write a function that finds the average of an array of numbers using a for loop.
function averageOfArray(arr){
    let result = 0
    for(let i = 0; i <= arr.length -1; i++){
        result = result + arr[i]
    }
    const average = result / arr.length
    return average
}
const arr1 = [8, 5, 3, 7, 3, 7]
const result6 = averageOfArray(arr1)
console.log(`The average of the array: ${result6}`)
console.log(`===========================================================`)


function mergeTwoArrays(arr1, arr2){
    let result = []
    for(let i = 0; i <= arr1.length -1; i++){
        result.push(arr1[i])
    }
    for(let i = 0; i <= arr2.length -1; i++){
        result.push(arr2[i])
    }
    return result
}
const arr1 = [5, 7, 2, 6]
const arr2 = [7, 3, 7, 6, 3]
const result7 = mergeTwoArrays(arr1, arr2)
console.log(`The arrays merged: ${result7}`)
console.log(`============================================================`)

// Write a function that multiplies all the numbers in an array using a for loop.
function multiplyNumbersInArray(arr){
    let result = 1
    for(let i = 0; i <= arr.length-1; i++){
        result = result *= arr[i]
    }
    return result
}
const arr1 = [7, 7, 3, 8]
const result8 = multiplyNumbersInArray(arr1)
console.log(`The numbers in the array multiplied: ${result8}`)
console.log(`============================================================`)

function countEvenNumbers(arr){
    let count = 0
    for(let i = 0; i <= arr.length -1; i++){
        if(arr[i] % 2 == 0){
            count = count + 1
        }
    }
    return count
}
const arr2 = [4, 5, 6, 3]
const result9 = countEvenNumbers(arr2)
console.log(`The amount of even numbers: ${result9}`)
console.log(`============================================================`)

// Write a function to find the smallest number in an array using a for loop.
function findLowestNumberInArray(arr){
    let smallestNumber = arr[0]
    for(let i = 1; i <= arr.length -1; i++){
        if(arr[i] < smallestNumber){
            smallestNumber = arr[i]
        }
    }
    return smallestNumber
}
const arr1 = [3, 0, 6, 10]
const result1 = findLowestNumberInArray(arr1)
console.log(`The smallest number in the array:${result1}`)
console.log(`==============================================================`)

// Write a function that concatenates all strings in an array using a for loop.
function linkString(arr){
    let currElement = ""
    for(let i = 0; i <= arr.length -1; i++){
        currElement = currElement  + arr[i] + ` `
    }
    return currElement
}

const arr1 = ["Hello,", "How", "Are", "You"]
const result9 = linkString(arr1)
console.log(`The array linked: ${result9}`)
console.log(`================================================`)

// Write a function to find the length of the longest word in a string using a for loop.
function findLongestWord(str){
    const arr = str.split(" ")
    let longestWordLength = 0
    for(let i = 0; i <= arr.length -1; i++){
        if(arr[i].length > longestWordLength){
            longestWordLength = arr[i].length
        }
    }
    return longestWordLength
}
const str1 = "Hello How Are Youuuuuuuu Doing"
const result10 = findLongestWord(str1)
console.log(`The length of the longest string: ${result10}`)
console.log(`====================================================================`)