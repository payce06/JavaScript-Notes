// Write a function that prints numbers from 1 to 10 using a for loop.
function printNumbers(numberToTen){
    numbersToTen = 10
    for(let i = 0; i < numbersToTen; i++){
    console.log(`${i+1}`)
    }
}
printNumbers()
console.log(`==================================`)

// Write a function that calculates the sum of numbers from 1 to 10 using a for loop.
function calculatesSum(sumOfNumbers){
    let sum = 0
    for(let i = 0; i < 10; i++){
        sum += i+1
        console.log(`${sum}`)
    }
}
calculatesSum()
console.log(`=========================================`)


// Write a function that prints each character of a string on a new line using a for loop.
function printsCharacterNewLine(str){
    for(let i = 0; i < str.length; i++){
        console.log(`The string printed with each character on a new line: ${str[i]}`)
    }
}
const str2 = "helloWorld"
printsCharacterNewLine(str2)
console.log(`=========================================`)

// Write a function that prints the even numbers from 1 to 20 using a for loop.
function evenNumber(){
    for(let i = 1; i <= 20; i++){
        if(i % 2 == 0){
            console.log(`${i}`)
        }
    }
}

evenNumber()
console.log(`======================================`)

// Write a function that counts from 10 to 1 in reverse using a for loop.
function countNumberTenToOne(){
    for(let i = 10; i > 0; i--){
        console.log(`The numbers 1 - 10 printed in reverse: ${i}`)
    }
}

countNumberTenToOne()
console.log(`================================`)