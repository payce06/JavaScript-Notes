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