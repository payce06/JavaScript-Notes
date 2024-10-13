// Write a function that takes an array of objects and returns the object with the highest value for a specific property.

function findHighestObjectValue(arr){
    const firstObject = arr[0]
    let highestScore = firstObject.score
    let highestObject = firstObject
    
    for(let i = 1; i <= arr.length-1; i++){
        let currObject = arr[i]
        if(currObject.score > highestScore){
            highestScore = currObject.score
            highestObject = currObject
        }
    }
    return highestObject
}

const score = [{name:"Payce", score: 100}, {name: "Ethan", score: 35}, {name: "London", score: 90}]
console.log(findHighestObjectValue(score))

console.log(`=============================================================================`)

