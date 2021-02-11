/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(!head){
      return null;
  }
  
  let previous = head;
  let curr = head.next;

  while(curr){
      if(previous.val === curr.val){
          previous.next = curr.next;
      } else {
          previous = previous.next;
      } 
      curr = curr.next;
  }
  return head;
};