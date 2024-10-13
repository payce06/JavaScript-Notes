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

// Write a function that takes an array of objects and returns the object with the lowest value for a specific property.
function takeLowestValue(arr){
    const firstObject = arr[0]
    let lowestScore = firstObject.score
    let lowestObject = firstObject
    
    for(let i = 1; i < arr.length; i++){
        let currObject = arr[i]
        if(currObject.score < lowestScore){
            lowestScore = currObject.score
            lowestObject = currObject
        }
    }
    return lowestObject
}

const score = [{name:"Payce", score: 100}, {name: "Ethan", score: 35}, {name: "London", score: 90}]
console.log(takeLowestValue(score))

console.log(`===========================================================================`)

// Write a function that takes an array of objects and returns the object with the longest string for a specific property.

function returnLongestName(arr){
    const firstObject = arr[0]
    let longestLength = firstObject.name.length
    let longestObject = firstObject
    
    for(let i = 1; i < arr.length; i++){
        const currObject = arr[i]
        if(currObject.name.length > longestLength){
            longestLength = currObject.name.length
            longestObject = currObject
        }
    }
    return longestObject
}

const nameScore = [{name:"Payce", score: 100}, {name: "Ethan", score: 35}, {name: "London", score: 90}]
console.log(returnLongestName(nameScore))

console.log(`===============================================================`)

// Write a function that takes an array of objects and returns an array of objects sorted by a specific property.
function customAscendingSort(a, b){
    if(a.score > b.score){
        return 1
    } else if(a.score < b.score){
        return -1
    } else {
        return 0
    }
}

function sortObjects(arr){
    arr.sort(customAscendingSort)
    return arr
}

const arr = [{name: "Payce", score: 100}, {name: "Newton", score: 21}, {name: "Gaby", score: 102}]
console.log(sortObjects(arr))

// Write a function that takes an array of objects and returns an array of the objects sorted by a specific property in descending order.

function customSortDescending(a, b){
    if(a.score > b.score){
        return -1
    } else if(a.score < b.score){
        return 1
    } else {
        return 0
    }
}

function sortDescending(arr){
    arr.sort(customSortDescending)
    return arr
}

const arr = [{name: "Payce", score: 100}, {name: "Newton", score: 50}, {name: "Einstein", score: 90}]

console.log(sortDescending(arr))

// Write a function that takes an array of objects and returns the first object that matches a specific property value.
function findFirstMatch(arr, name){
    for(let i = 0; i <= arr.length -1; i++){
        const currObject = arr[i]
        if(currObject.name === name){
            return currObject
        }
    }
    return "Not Found"
}

const arr = [{name: "Payce", score: 100}, {name: "Einstein", score: 70}, {name: "Enstien", score: 50}]

console.log(findFirstMatch(arr, "Payce"))
