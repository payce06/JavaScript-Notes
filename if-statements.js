const score = 85
    if (score >= 90) {
        console.log(`Grade: A`)
    } else if (score >= 80){
        console.log(`Grade: B`)
    } else if (score >= 70){
        console.log(`Grade: C`)
    } else if (score >= 60){
        console.log(`Grade: D`)
    } else {
        console.log(`Grade: F`)
    }

console.log(`============================================================================================`)

// Write a program that checks a person's age and logs a different message for 
// different age groups: child (0-12), teenager (13-19), adult (20-59), senior (60+)

const age = 30

if(age >= 0 && age <= 12){
    console.log(`This is a child.`)
} else if (age >= 13 && age <= 19){
    console.log(`You are a teenager.`)
} else if (age >= 20 && age <= 59){
    console.log(`You are an adult.`)
} else if (age >= 60){
    console.log(`You are a senior, you eat free.`)
} else {
    console.log(`You are a liar!`)
}

console.log(`=============================================================================================`)

const a = 1
const b = 10
const c = 3

if(a < b && c < b){
    console.log(`b is the greatest.`)
} else if (b < a && a > c) {
    console.log(`a is the greatest`)
} else if (a < c && c > b){
    console.log(`c is the greatest`)
} else {
    console.log(`There is not one greatest number.`)
}