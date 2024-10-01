const lifespans = {
    "Elephant": 20,
    "Crocodile": 500,
    "Dog": 16,
}
console.log(`================================================`)
console.log(`The lifespan of the elepthant is ${lifespans["Elephant"]}`)

// =========================================================================================================

const keys = Object.keys(lifespans)
for(let i = 0; i < keys.length; i++){
const currentKey = keys[i]
console.log(`The current animal is ${currentKey} and they life span is ${lifespans[currentKey]}`)
}

// =========================================================================================================

const values = Object.values(lifespans)
for(let i = 0; i < values.length; i++){
    console.log(`The value is ${values[i]}`)
}

// Object
// It has key and value
// The best part about using objects (also called hash map) is faster lookup.
// What does faster lookup mean?
// It mean to find if a key extists or not in an array is much faster than if we were to look for the same in array or string.

let string = "shreehar"
let object = {}
// This object will store each letter as the key and value will represent the number of times that letter appears in the string


for (let i = 0; i < string.length; i++) {
    const char = string[i]
    // Before you update the value of any key in an object
    // you need to make sure that the key already exists or not.
    // if not, you have to check it and create it
   
    if (!object[char]) {
        object[char] = 0
    }
   
    object[char] += 1
}


// Finally print the object with its key and value
console.log(object)

console.log(`==================================================================================`)

// Create an object representing a person with properties for name and age. Write a function that returns the person's name.
function objectPerson(){
    const person = {
        name: "John",
        age: 40,
    }
    return person.name
}
