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

// Write a function to create a new array that contains every second element of an existing array using a for loop.
function containEverySecondElement(arr){
    let result = []
    for(let i = 0; i <= arr.length -1; i++){
        if(i % 2 == 1){
            result.push(arr[i])
        }
    }
    return result
}
const arr1 = [7, 8, 3, 6, 2]
const result10 = containEverySecondElement(arr1)
console.log(`The array printed with every second element: ${result10}`)
console.log(`==========================================`)

// Write a function to calculate the power of a number using a for loop.
function calculatePower(number, pow){
    let result = 1
    for(let i = 1; i <= pow; i++){
        result = result * number
    }
    return result
}
const num = 5
const power = 6
const result = calculatePower(num, power)
console.log(`${num} to the power of ${power}: ${result}`)
console.log(`=============================================`)

// Write a function that prints all prime numbers up to n using a for loop.
function isPrimeNum(num){
    let isPrime = true;
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            isPrime = false;
        }
    }
    return isPrime
}

function findPrimesUpUntilN(N){
    for(let i = 2; i <= N; i++){
        const numberToBeChecked = i
        const isPrime = isPrimeNum(numberToBeChecked)
        if(isPrime) {
            console.log(`${numberToBeChecked} is prime`)
        }
    }
}
const num = 229
findPrimesUpUntilN(num)
console.log(`==================================================`)

// Write a function that finds the common elements between two arrays using a for loop.
function findCommonElements(arr1, arr2){
    let result = []
    for(let i = 0; i <= arr1.length -1; i++){
        let num = arr1[i]
        if(arr2.includes(num)){
            result.push(num)
        }
    }
    return result
}
const arr1 = [7, 5, 8, 3, 7, 2]
const arr2 = [5, 7, 2, 6, 4, 0]
const result12 = findCommonElements(arr1, arr2)
console.log(`The elemenets that are included in both arrays: ${result12}`)
console.log(`=============================================`)

// Write a function to find the maximum number in an array.
function findMaximum(arr){
    let currMaximum = arr[0]
    for(let i = 1; i <= arr.length -1; i++){
        if(arr[i] > currMaximum){
            currMaximum = arr[i]
        }
    }
    return currMaximum
}

const arr1 = [-1, 6, -3, -10, 11, 40]
const result1 = findMaximum(arr1)
console.log(`The maximum number in the array: ${result1}`)
console.log(`==============================================================`)

// Write a function to remove duplicates from an array.
function removeDuplicates(arr){
    let result = []
    for(let i = 0; i <= arr.length -1; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}

const arr2 = [3, 11, 10, 18, 2, 2,]
const result2 = removeDuplicates(arr2)
console.log(`The duplicates in the array: ${result2}`)
console.log(`==========================================`)

// Write a function that checks if an array contains a specific value.
function arrContains(arr, num){
    for(let i = 0; i <= arr.length -1; i++){
        if(arr[i] == num){
            return true
        }
    }
    return false
}

const arr2 = [4, 7, 6, 8, 1, 6]
const num1 = 6
const result = arrContains(arr2, num1)
console.log(`In the array, ${arr2}, the number: ${num1}, is included: ${result}`)
console.log(`=========================================================================`)

// Write a function that finds the intersection of two arrays.
function findsTheIntersection(arr1, arr2){
    let result = []
    for(let i = 0; i <= arr1.length -1; i++){
        if(arr2.includes(arr1[i])){
            result.push(arr1[i])
        }
    }
    return result
}
const arr1 = [8, 7, 0, 1, 4]
const arr2 = [0, 2, 5, 3, 7]
const result1 = findsTheIntersection(arr1, arr2)
console.log(`The intersection between both arr1: ${arr1} and arry2: ${arr2} is ${result1}`)
console.log(`==========================================`)

// Write a function to find the difference between two arrays.
function findsDifferenceBetweenTwoArrays(arr1, arr2){
    let result = []
    for(let i = 0; i <= arr1.length -1; i++){
        if(!arr2.includes(arr1[i])){
            result.push(arr2[i])
        }
    }
    return result
}
const arr1 = [8, 4, 7, 5, 7, 2]
const arr2 = [6, 7, 2, 6, 2, 6]
const result1 = findsDifferenceBetweenTwoArrays(arr1, arr2)
console.log(`The differences between both array1: ${arr1} and array2:${arr2} is ${result1}`)
console.log(`=========================================`)

// Write a function that returns the unique elements in an array.
function returnUniqueElements(arr){
    let result = []
    for(let i = 0; i <= arr.length-1; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
const arr1 = [8, 8, 8, 8, 9, 9, 9, 2, 5,]
const result1 = returnUniqueElements(arr1)
console.log(`The arr that returns all the unique elements: ${result1}`)
console.log(`=============================================`)

// Write a function that returns the last element of an array.
function returnLastElementOfAnArray(arr){
    const lastIndex = arr.length -1
    return arr[lastIndex]
}

const arr1 = [8, 4, 2, 7]
const result1 = returnLastElementOfAnArray(arr1)
console.log(`The last element of the array printed: ${result1}`)
console.log(`===============================================`)

function countVowels(string){
    let counter = 0
    for(let i = 0; i <= string.length -1; i++){
    if(string[i] == `a` || string[i] == `e` || string[i] == `i` || string[i] == `o` || string[i] == `u`){
        counter++
    }
    }
    return counter
    }

const string1 = "Hello, how are you"
const result1 = countVowels(string1)
console.log(`The number of vowels in the string: ${result1}`)
console.log(`================================================`)
