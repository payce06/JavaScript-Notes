const array1 = [1, 3, 4, 10, 3, 5, 7876, 4, 76]
let currMin = array1[0]
for(let i = 1; i > array1.length; i--){
    if(array1[i] < currMin){
        currMin = array1[i]
    }
}
console.log(`The current min is ${currMin}`)

console.log(`============================================================================`)

const array1 = [1, 3, 4, 10, 3, 5, 7876, 4, 76]
let currMax = array1[0]
for(let i = 1; i < array1.length; i--){
    if(array1[i] > currMax){
        currMax = array1[i]
    }
}
console.log(`The current max is ${currMax}`)

// Find longest string in an array

const colors = ["red", "blue", "green", "yellow"]
let maxLength = colors[0].length
for(let i = 1; i < colors.length; i++){
    const currentColor = colors[i]
    const currentLength = currentColor.length
    if(currentLength > maxLength){
        maxLength = currentLength
    }
}
  console.log(`The longest length is: ${maxLength}`)

console.log(`===================================================================================`)

// print longest string

const colors = ["red", "blue", "green", "yellow"]
let maxLength = colors[0].length
let maxColor = colors[0]
for(let i = 1; i < colors.length; i++){
    const currentColor = colors[i]
    const currentLength = currentColor.length
    if(currentLength > maxLength){
        maxLength = currentLength
        maxColor = currentColor
    }
}
  console.log(`The longest color is: ${maxLength} which is string name: ${maxColor}`)

console.log(`=================================================================================`)

// print shortest string and its length

const colors = ["red", "blue", "green", "yellow"]
let minLength = colors[0].length
let minColor = colors[0]
for(let i = 1; i < colors.length; i++){
    const currentColor = colors[i]
    const currentLength = currentColor.length
    if(currentLength < minLength){
        minLength = currentLength
        minColor = currentColor
    }
}
  console.log(`The longest color is: ${minLength} which is string name: ${minColor}`)

