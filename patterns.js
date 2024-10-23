// 1. Function that takes n and prints the following pattern
// Example: n = 4

// ****
// ****
// ****
// ****

function pattern1(n){
    for(let i = 0; i < n; i++){
        let stars = ""
        for(let j = 0; j < n; j++){
            stars += "*"
        }
        console.log(stars)
    }
}

pattern1(5)

console.log(`=============================================================`)

// 2.Function that takes n and prints the following pattern
// Example: n = 4

// *
// **
// ***
// ****

function printFollowingPattern(n){
    for(let i = 0; i < n; i++){
        let stars = ""
        for(let j = 0; j < i + 1; j++){
            stars += "*"
        }
        console.log(stars)
    }
}

printFollowingPattern(4)

console.log(`=============================================================`)

// 3. Function that takes n and prints the following pattern
// Example: n = 4

// ****
// ***
// **
// *

function reversePattern(n){
    for(let i = 0; i < n; i++){
        let stars = ""
        for(let j = 0; j < n - i; j++){
            stars += "*"
        }
        console.log(stars)
    }
}

reversePattern(4)

