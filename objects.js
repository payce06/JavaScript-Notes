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

// Create an object with properties for color, make, and model of a car. Write a function that returns the value of the make property.

function objectCar(){
    const car = {
        color: 'Blue',
        make: '2019',
        model: 'CyberTruck',
    }
    return car.make
}

// Write a function that takes an object and a property name and returns the value of that property.

function returnObjectValue(obj, key){
    return obj[key]
}

// Write a function that adds a new property to an object. The function should take the object, the property name, and the value as arguments.

function addProperty(obj, key, val){
    obj[key] = val
    return obj
}

// Write a function that removes a property from an object. The function should take the object and the property name as arguments.
function removeProperty(obj, key){
    delete obj[key]
    return obj
}

// Create an object with properties for name, age, and email. Write a function that returns a string describing the person in the format: "Name: [name], Age: [age], Email: [email]".

function formatObject(obj){
    return `Name: ${obj.name}, Age: ${obj.age}, Email: ${obj.email}`
}

const sampObject = {
    name: 'Sam',
    age: 34,
    email: 'sample@gmail.com',
}
console.log(formatObject(sampObject))

// Write a function that checks if a given object has a specific property.
function checkSpecificProperty(obj, property){
    return obj.hasOwnProperty(property)
}

// Write a function that merges two objects into one.
function mergeObjects(obj1, obj2){
    const merged = {}
    for(let key in obj1){
        merged[key] = obj1[key]
    }
    for(let key in obj2){
        merged[key] = obj2[key]
    }
    return merged
}

// Write a function that copies all properties from one object to another.
function copyProperties(obj1, obj2){
    // we will loop through obj1 and copy everything from obj1 to obj2
    for(let key in obj1){
        obj2[key] = obj1[key]
    }
    return obj2
}

// Write a function that counts the number of properties in an object.(Long and simple way)

function countNumberProperties(obj){
    let counter = 0
    for(let key in obj){
        counter += 1
    }
    return counter
}

// Write a function that counts the number of properties in an object.(short and smart way)

function countProperties(obj){
    return Object.keys(obj).length
}

// Create an object representing a person with properties for name, age, and occupation.
function objectOccipation(obj){
    const occupation = {
        name: 'Patrice'
        age: 30
        occupation: 'NewsReporter'
    }
    return occupation
}

// Write a function that returns the value of the name property of an object.
function returnName(obj){
    return obj.name
}

// Write a function that updates the age property of an object.

function updatesAgeProperty(obj, newAge){
    obj.age = newAge
    return obj
}