const strA = "Payce Grossman"
const strB = 'Payce Grossman'
const strC = `Payce Grossman`

const lengthA = strA.length
console.log(`The length is ${strA.length}`)

console.log(strA[0])
console.log(strA[1])
    

for (let i = 0; i < lengthA; i++){
    console.log(`The character in index ${i} is ${strA[i]}`)
}

for (let i = 0; i < 2; i++){
    console.log(`The character in index ${i} is ${strA[i]}`)
}

// ================================================================================================

const strA = "Payce Grossman"

const lengthA = strA.length
for (let i = strA.length-1; i >= 0; i--){
    console.log(`The character index ${i} ${strA[i]}`)
}

const strA = "Payce Grossman"

const slicedA = strA.slice(2, 7)
    console.log(`SlicedA: ${slicedA}`)

const slicedA2 = strA.slice(5, 14)
    console.log(`SlicedA2: ${slicedA2}`)

const slicedA3 = strA.slice(5, strA.length)
    console.log(`SlicedA3: ${slicedA3}`)

// ======================================================================================================

const strA = `Payce Grossman`

const strAUpper = strA.toUpperCase()
    console.log(`The string in uppercase is ${strAUpper}`)
    

const strALower = strA.toLowerCase()
    console.log(`The string in uppercase is ${strALower}`)
    
const thirdIndextoLowerCase = strA[3].toUpperCase()
const thirdIndextoUpperCase = strA[3].toLowerCase()

for(let i = 0; i < strA.length; i++){
    console.log(`The character in index ${i} in uppercase is ${strA[i].toUpperCase()}`)
}
console.log(`========================================`)

for(let i = 0; i < strA.length; i++){
    console.log(`The character in index ${i} in lowercase is ${strA[i].toLowerCase()}`)
}


// Write a function that converts a string to uppercase.

function convertUpperCase(str){
    const strConvertedUpper = str.toUpperCase()
    return strConverted
}


// Write a function that converts a string to lowercase.

function convertLowerCase(str){
    const strConvertedLower = str.toLowerCase()
    return strConvertedLower
}

// Write a function that returns the first character of a string.

function takeFirstCharacter(str){
    const firstCharacter = str[0]
    return firstCharacter
}

// Write a function that returns the last character of a string.
function returnLastCharacter(str){
    const lastCharacter = str[str.length -1]
    return lastCharacter
    
}

// Write a function that replaces all occurrences of "a" with "e" in a string.

function replaceAWithE(inputString) {
    let result = ''
    for(let i = 0; i <= inputString.length -1; i++){
        if(inputString[i] == 'a'){
            result += 'e'
        } else {
            result += inputString[i]
        }
    }
    return result
}

// Write a function to check if a given string is a palindrome.

function isPalindromeWhile(str){
    let i = 0
    let j = str.length -1
    
    while(i<j){
        const leftChar = str[i]
        const rightChar = str[j]
        if(leftChar != rightChar){
            return false
        }
        i++;
        j--;
    }
    return true
}

console.log(isPalindromeWhile("payyap"))

function isPalendromeForLoop(str){
    for(let i = 0, j = str.length -1; i < j; i++, j--){
        const leftChar = str[i]
        const rightChar = str[j]
        if(leftChar != rightChar){
            return false
        }
    }
    return true
}

console.log(isPalindromeWhile("payyap"))

function isPalendromeForRecursion(str, i , j){
    if(i >= j){
        return true
    }
    const leftChar = str[i]
    const rightChar = str[j]
    return leftChar == rightChar && isPalendromeForRecursion(str, ++i, --J)
    
}

console.log(isPalindromeWhile("payce"))

// Write a function to count the number of vowels in a string.

function countNumberOfVowels(str){
    let result = 0
    for(let i = 0; i <= str.length -1; i++){
        if(str[i] == "a" || str[i] == "A" || str[i] == "e" || str[i] == "E" || str[i] == "I" || str[i] == "i" || str[i] == "o" || str[i] == "O" || str[i] == "u" ||str[i] == "U"){
            result = result += 1
        }
    }
    return result
}

console.log(countNumberOfVowels("aeiouaeiouaeiouaeiouaeiouaeiou"))

// Write a function to capitalize the first letter of each word in a string.

function capitalizeFirstLetterOfEachWord(str){
    let splitVals = str.split(" ")
    let result = ""
    for(let i = 0; i <= splitVals.length -1; i++){
        const current = splitVals[i]
        const firstLetter = current[0].toUpperCase()
        const remainingLetters = current.slice(1, current.length)
        const finalWord = firstLetter + remainingLetters
        result += finalWord
        if(i != splitVals.length -1){
            result += " "
        }
    }
    return result
}

console.log(capitalizeFirstLetterOfEachWord("payce likes programming"))

// Write a function to reverse the words in a string.
function reverseString(str){
    let reversedStr = ""
    for(let i = str.length -1; i >= 0; i--){
        const currChar = str[i]
        reversedStr += currChar
    }
    return reversedStr
}

console.log(reverseString("Hello"))

// Write a function to find the longest word in a string.
function findLongestWord(str){
    const words = str.split(" ")
    console.log(words)
    const firstWord = words[0]
    let currMaxWord = firstWord
    for(let i = 1; i <= words.length -1; i++){
        const currWord = words[i]
        if(currWord.length > currMaxWord.length){
            currMaxWord = currWord
            console.log(`Curr Max Word has been changed to ${currMaxWord}`)
        }
    }
    return currMaxWord
}

// Write a function to repeat a string n times.
function repeatStringNTimes(str, n){
    let resultStr = ""
    for(let i = 0; i < n; i++){
        resultStr += str
    }
    return resultStr
}

console.log(repeatStringNTimes("dog", 3))

// Write a function to check if a string contains another string.
function checkIfStringContainsAnotherString(str1, str2){
    return str1.includes(str2)
}
console.log(checkIfStringContainsAnotherString("Payce", "yce"))

function countNumberWordsString(str){
    let result = 0
    const wordsSplit = str.split(" ")
    return wordsSplit.length
}

console.log(countNumberWordsString("Hello, How Are You"))
