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