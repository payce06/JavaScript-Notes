function printNumbers(arr, i){
    if(i >= arr.length){
        return
    }
    console.log(arr[i])
    printNumbers(arr, i + 1)
}
    printNumbers([2, 6, 3, 6, 2], 0)

    console.log(`=======================================================================`)

    function PrintNumbers(num) {
        console.log(`Calling the function with ${num}`)
       
        // Base Case
        if (num < 0) {
            console.log(`Exiting through the base case function with ${num}`)
            return;
        }
       
        // Action
        console.log(`Printing from the function with ${num}. Value: ${num}`)
       
        // Recursion Call
        PrintNumbers(num - 1)
        console.log(`Exiting the function with ${num}`)
    }
    
    
    PrintNumbers(5)
    
console.log(`=================================================================`)

function PrintNumbers(num) {
    // Base Case
    if (num < 0) {
        return;
    }
   
    // Action
    console.log(num)
    PrintNumbers(num - 1)
}


PrintNumbers(5)

console.log(`========================================================`)

function printNumbers(arr, i){
    if(i < 0){
        return
    }
    console.log(arr[i])
    printNumbers(arr, i -1)
}
const array1 = [1, 7, 2, 6, 2, 6]
printNumbers(array1, array1.length -1)

console.log(`========================================================`)

function printLetters(string, i){
    if(i > string.length -1){
        return
    }
    console.log(string[i])
    printLetters(string, i + 1)
}
const string1 = "Payce"
printLetters(string1, 0)

console.log(`===========================================================`)

function printLetters(string, i){
    if(i < 0){
        return
    }
    console.log(string[i])
    printLetters(string, i - 1)
}
const string1 = "Payce"
printLetters(string1, string1.length -1)

console.log(`============================================================`)

function calculateSum(num) {
    console.log(`Called function with ${num}`)
    if (num < 1) {
        console.log("Based Case Entered. Sum = 0")
        return 0
    }
   
   
    // For this function to do its part.
    // For total sum: I am adding the current number and the sum of
    // numbers returned by its children
    let totalSum = num + calculateSum(num - 1)
   
   
    console.log(`Returning for function with ${num}. Sum = ${totalSum}`)
    return totalSum
}


// Calculates sum of the numbers from 1 to num
calculateSum(5)



// calculateSum(5)
// 5 + calculateSum(4)
// 5 + (4 + calculateSum(3))
// 5 + (4 + (3 + calculateSum(2)))
// 5 + (4 + (3 + (2 + calculateSum(1))))
// 5 + (4 + (3 + (2 + (1 + calculateSum(0))))
// 5 + (4 + (3 + (2 + (1 + 0)))
// 5 + (4 + (3 + (2 + 1))
// 5 + (4 + (3 + 3))
// 5 + (4 + 6)
// 5 + 10
// 15

console.log(`===================================================================`)