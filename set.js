// Set is like an array but one that can never contain duplicates
// Even when we try to add an element that already exists in the set, it will reject it.
const setA = new Set()
console.log(setA)


// Adding elements in set
setA.add(5)
setA.add(6)
setA.add(7)
console.log(setA)


// Add an element that already exist
setA.add(5)
console.log(setA)


// How to check if an element is in set or not?
console.log(setA.has(5)) // true
console.log(setA.has(6)) // true
console.log(setA.has(9)) // false



// How to convert an array to a set?
const arrayA = Array.from(setA)
console.log(arrayA)


// How to convert a set into an array
const array2 = [1, 2, 3, 4, 5, 5, 5, 5]
const set2 = new Set(array2)
console.log(set2) // Notice how this set has 1, 2, 3, 4, 5 and 5 is not repeated

// How to remove an element from a set?
setA.delete(5)

// Create a set directly from the initialization
const setList = new Set([1, 2, 3, 4, 5, 6, 7])

// Length or size of a set
const setA = new Set([1, 2, 3])
console.log(setA.size)


