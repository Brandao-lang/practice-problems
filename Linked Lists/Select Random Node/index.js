/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */

 let nums = []

 var Solution = function(head) {
     while(head) {
         nums.push(head.val)
         head = head.next
     }
     
 };
 
 /**
  * @return {number}
  */
 Solution.prototype.getRandom = function() {
     let randomnum = nums[Math.floor(Math.random() * nums.length)]
     return randomnum
 };
 
 /** 
  * Your Solution object will be instantiated and called as such:
  * var obj = new Solution(head)
  * var param_1 = obj.getRandom()
  */