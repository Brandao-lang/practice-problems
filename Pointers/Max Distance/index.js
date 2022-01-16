// You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).
// There is at least one empty seat, and at least one person sitting.
// Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 
// Return that maximum distance to the closest person.

var maxDistToClosest = function(seats) {
    let bestSeats = []
    
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            continue
        }
        
        let isEmpty = true
        let totalDistance = 1
        let left = i-1
        let right = i+1
        
        while(isEmpty) {
            if (seats[left] != 1 && seats[right] != 1) {
                left--
                right++
                totalDistance++
            }
            
            if (seats[left] === 1 || seats[right] === 1) {
                bestSeats.push(totalDistance)
                break
            }
        }
    }
    
    return Math.max(...bestSeats)
};