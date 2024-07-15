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