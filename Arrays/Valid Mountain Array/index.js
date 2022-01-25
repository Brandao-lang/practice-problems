// Given an array of integers arr, return true if and only if it is a valid mountain array.

var validMountainArray = function(arr) {
    if (arr[0] > arr[1]) {
        return false
    }
    
    let descending = []
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            return false
        }
        
        if (arr[i] > arr[i+1]) {
            descending = arr.slice(i+1)
            break
        }
    }
    
    if (descending.length === 0) {
        return false
    }
    
    for (let i = 0; i < descending.length; i++) {
         if (arr[i] === arr[i+1]) {
            return false
        }
        
        if (descending[i] < descending[i+1]) {
            return false
        }
    }
    
    return true
};