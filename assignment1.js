const array1 = [1, 2, 3, 4, 5]


for(let i = 0; i < array1.length; i++){
const currentElement = array1[i]
    console.log(`The element ${i} is ${currentElement}`)
}

const array2 = [3, 5, 7, 9, 11]
array2.map((element, index) => {
    console.log(`The element in index ${index} is ${element}`)
})
console.log(`============================================`)

const array3 = [1, 8, 9, 10]

for(let i = array3.length -1; i >= 0; i--){
    const currentNumber = array3[i]
    console.log(`The element in index ${i} is ${currentNumber}`)
}    
console.log(`================================================`)

stringA = "Pabby Don"
for(let i = 0; i < stringA.length; i++){
    console.log(`The character in index ${i} is ${stringA[i]}`)
}
console.log(`==================================================`)

stringb = "Pabby Don"
for(let i = stringb.length-1; i >= 0; i--)
console.log(`The character in index ${i} is ${stringb[i]}`)

console.log(`=================================================`)

stringC = "Pabby Don"
const stringCtoUpper = stringA.toUpperCase()
    console.log(`StringA into uppercase: ${stringCtoUpper}`)
console.log(`===========================================`)

stringD = "Pabby Don"
const stringDtoLower = stringD.toLowerCase()
    console.log(`StringB into lowercase: ${stringDtoLower}`)
console.log(`===============================================`)
    
stringE = "Miami"
for(let i = 0; i < stringE.length; i++){
    console.log(`The character in index ${i} is ${stringE[i].toUpperCase()}`)
}
console.log(`==========================================`)

stringF = "Miami"
for(let i = 0; i < stringF.length; i++){
    console.log(`The character in index ${i} is ${stringF[i].toLowerCase()}`)
}

console.log(`==============================================`)