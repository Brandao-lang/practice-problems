// Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0)
    let head = List
    
    let sum = 0
    let carry = 0

    while (l1 || l2 || sum > 0) {
        // while there is a digit to be added in both lists (l1 and l2), continue the loop.

        if (l1) {
            // if the l1 node exists add it to the sum and move on to the next digit in the l1 linked list
            sum += l1.val
            l1 = l1.next
        }

        if (l2) {
            // if the l2 node exists add it to the sum (which is the corresponding l1 digit) and move on to the next digit in the l2 linked list
            sum += l2.val
            l2 = l2.next
        }

        if (sum >= 10) {
            // if the ending sum of this iteration is greater than 10, we have to carry the number in the ones place to the next addition sequence. Assign carry to 1 and subtract the sum by 10 to remove the 1 from the sum (e.g if sum = 18, then carry = 1, and sum = sum - 10 to get 8 with a 1 carried over)
            carry = 1
            sum -= 10
        }

        head.next = new ListNode(sum)
        head = head.next

        // Assign the sum to carry as it needs to be a part of the next addition sequence
        sum = carry

        // Reset the carry to 0
        carry = 0
    }

    return List.next
};







