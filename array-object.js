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

// Write a function that takes an array of objects and returns a new array with an additional property added to each object.
function addGradesToObjects(arr){
    for(let i = 0; i <= arr.length -1; i++){
        const currObject = arr[i]
        if(currObject.score > 70){
            currObject.grade = "Pass"
        } else {
            currObject.grade = "Fail"
        }
        arr[i] = currObject
    }
    return arr
}

const arr = [{name: "Payce", score: 100}, {name: "Einstein", score: 90}, {name: "Newton", score: 43}]

console.log(addGradesToObjects(arr))

// Write a function to count the number of unique values for a specific property in an array of objects.
function countNumUniqueScores(arr){
    const setA = new Set()
    for(let i = 0; i <= arr.length -1; i++){
        const currObject = arr[i]
        setA.add(currObject.score)
    }
    return setA.size
}

const arr = [{name: "Payce", score: 100}, {name: "Newton", score: 45}, {name: "Carl",score: 45}]

console.log(countNumUniqueScores(arr))

// Write a function that takes an array of objects and returns a new array with a specific property removed from each object.
function removePropertyObjects(arr){
    for(let i = 0; i <= arr.length -1; i++){
        const currObject = arr[i]
        delete currObject.score
        arr[i] = currObject
    }
    return arr
}

const nameScore = [{name:"Payce", score: 100}, {name: "Ethan", score: 35}, {name: "London", score: 90}]
console.log(removePropertyObjects(nameScore))
console.log(`===========================================================`)

// Write a function that takes an array of objects and returns a new array with only the objects that have a specific property.
function returnsSpecificKey(arr, key){
    let result = []
    for(let i = 0; i <= arr.length -1; i++){
        const currObject = arr[i]
        if(currObject.hasOwnProperty(key)){
            result.push(currObject)
        }
    }
    return result
}

const arr = [{name: "Payce", profession: "CS"}, {name: "MiltonHurricanes", profession: "Hockey"}, {name: "Abby"}]

console.log(returnsSpecificKey(arr, "profession"))

// Write a function that finds the sum of a specific property in an array of objects.
function findSumObjectScores(arr){
    let sumScores = 0
    for(let i = 0; i <= arr.length -1; i++){
        const currObject = arr[i]
        sumScores += currObject.score
    }
    return sumScores
}

const nameScore = [{name:"Payce", score: 100}, {name: "Ethan", score: 35}, {name: "London", score: 90}]
console.log(findSumObjectScores(nameScore))

// Write a function to find the average value of a specific property in an array of objects.

function findAverageOfObjectScores(arr){
    let sumScores = 0
    for(let i = 0; i <= arr.length -1; i++){
        const currObject = arr[i]
        sumScores += currObject.score
    }
    return sumScores / arr.length
}

const nameScore = [{name:"Payce", score: 100}, {name: "Ethan", score: 35}, {name: "London", score: 90}]
console.log(findAverageOfObjectScores(nameScore))

console.log(`========================================================`)

// Write a function that takes an array of objects and returns an array of the unique values for a specific property.
function returnArrayUniqueValues(arr){
    const scoresSet = new Set()
    for(let i = 0; i <= arr.length -1; i++){
        const currObject = arr[i]
        scoresSet.add(currObject.score)
    }
    const listScores = Array.from(scoresSet)
    return listScores
}

const array = [{name: "Payce", score: 100}, {name: "Newton", score: 99}, {name: "Gaby", score: 102}]
console.log(returnArrayUniqueValues(array))

// Write a function that takes an array of objects and returns the number of objects with a specific property value.--
function filterObjectsByValue(arr, value){
    let result = []
    for(let i = 0; i <= arr.length -1; i++){
        const currObject = arr[i]
        if(currObject.profession === value){
            result.push(currObject)
        }
    }
    return result
}

const array = [{name: "Payce", profession: "CS"}, {name: "Nikita", profession: "CS"}, {name: "OldPayce", profession: "Architect"}]
console.log(filterObjectsByValue(array, "Architect"))
console.log(`====================================================’)

// Difference between == and ===

// == (Loose equality)
console.log(5 == '5') // True
console.log(null == undefined) // True


// === (Strict equality)
console.log(5 === '5') // False
console.log(null === undefined)

console.log(`========================================`)

// Write a function that takes an array of objects and returns a new array with only the objects that have a specific property.--
function returnsSpecificKey(arr, key){
    let result = []
    for(let i = 0; i <= arr.length -1; i++){
        const currObject = arr[i]
        if(currObject.hasOwnProperty(key)){
            result.push(currObject)
        }
    }
    return result
}

const arr = [{name: "Payce", profession: "CS"}, {name: "MiltonHurricanes", profession: "Hockey"}, {name: "Abby"}]

console.log(returnsSpecificKey(arr, "profession"))
