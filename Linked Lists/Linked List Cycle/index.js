// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.. 



var detectCycle = function(head) {
    let current = head
    let seenNodes = []
    
    while(current) {
        seenNodes.push(current)
        
        if (seenNodes.includes(current.next)) {
            return current.next
        }
        
        current = current.next
    }
    
    return null
}; 


