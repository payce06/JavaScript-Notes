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