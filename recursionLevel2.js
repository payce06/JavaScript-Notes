function mergeArrays(arr1, arr2) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
   
    // Do the while loop until both of the indices are less than their respective arrays length
    while (leftIndex < arr1.length && rightIndex < arr2.length) {
       
        // If the element in first array is smaller than
        // the element in second array, then push the element in first array in the result.
        if (arr1[leftIndex] < arr2[rightIndex]) {
            result.push(arr1[leftIndex])
            leftIndex += 1
        } else {
            result.push(arr2[rightIndex])
            rightIndex += 1
        }
    }
   
    // To handle the case when there are remaining elements in the first array. Just push the elements into result because there is nothing to compare against.
    while (leftIndex < arr1.length) {
        result.push(arr1[leftIndex])
        leftIndex += 1
    }
   
   
    // To handle the case when there are remaining elements in the second array. Just push the elements into result because there is nothing to compare against.
    while (rightIndex < arr2.length) {
        result.push(arr2[rightIndex])
        rightIndex += 1
    }
   
   
    return result
}



// For merging arrays, both the arrays must be already sorted
const arr1 = [2, 5, 6, 9]
const arr2 = [1, 4, 6, 8, 10, 12, 16, 18, 20]
const result = mergeArrays(arr1, arr2)
console.log(`Result: ${result}`)

console.log(`========================================================================`)

function mergeArrays(arr1, arr2) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
   
   
    while (leftIndex < arr1.length && rightIndex < arr2.length) {
       
       
        if (arr1[leftIndex] < arr2[rightIndex]) {
            result.push(arr1[leftIndex])
            leftIndex += 1
        } else {
            result.push(arr2[rightIndex])
            rightIndex += 1
        }
    }
   
    while (leftIndex < arr1.length) {
        result.push(arr1[leftIndex])
        leftIndex += 1
    }
   
  
    while (rightIndex < arr2.length) {
        result.push(arr2[rightIndex])
        rightIndex += 1
    }
   
    return result
}



function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid, arr.length)
    
    const leftSortedArr = mergeSort(leftArr)
    const rightSortedArr = mergeSort(rightArr)
    
    const result = mergeArrays(leftSortedArr, rightSortedArr)
    
    return result
    
}

console.log(mergeSort([1, 5, 2, 7, 4]))

function binarySearcher(arr, num){
    let left = 0
    let right = arr.length -1
    
    while(num <= right){
        const mid = Math.floor((left + right) / 2)
        const middle = arr[mid]
        if(num == middle){
            return "Found!"
        } else if(num < middle){
            right = mid -1
        } else if(num > middle){
            left = mid +1
        }
    }
    return 1
}

const arr1 = [2, 5, 7, 9, 29, 50, 56]
const num1 = 5
console.log(binarySearcher(arr1, num1))

console.log(`==============================================================================`)

// Binary Searcher Attempt 3 Incorrect

function binarySearcher(arr, num){
    let left = 0
    let right = arr.length -1
    
    while(num < right){
        const midIndex = Math.floor((left + right) / 2)
        const middleElement = arr[midIndex]
        if(num == middleElement){
            return "Found!"
        } else if(num < middleElement){
            midIndex = right -1
        } else if(num > middleElement){
            midIndex = left +1
        }
    }
    return 1
}

const arr1 = [1, 2, 3, 45, 56, 67, 78, 109, 324]
const num1 = 45

console.log(binarySearcher(arr1, num1))

console.log(`===================================================================================`)



function linearSearch(arr, num){
    for(let i = 0; i <= arr.length -1; i++){
        const currentElement = arr[i]
        if(currentElement == num){
            return "Found!"
        }
    }
    return 1
}
const num1 = 6
const arr1 = [4, 2, 6, 2, 8, 7, 10]

console.log(linearSearch(arr1, num1))

console.log(`=======================================================================================`)

function binarySearchHelper(arr, num, left, right){
    if(left > right){
        return -1
}
        
        const middleIndex = Math.floor((left + right) / 2)
        const middleElement = arr[middleIndex]
        if(num == middleElement){
            return "Found!"
        } else if(num < middleElement){
            return binarySearchHelper(arr, num, left, middleIndex -1)
        } else if(num > middleElement){
            return binarySearchHelper(arr, num, middleIndex +1, right)
        }
}

function binarySearch(arr, num){
    return binarySearchHelper(arr, num, 0, arr.length -1)
}