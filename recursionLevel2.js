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














