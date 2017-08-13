// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var out1=hb(l1,l2);
    return out1?out1:newListNode(0);
};

function hb(l1,l2,v=0){
    if(!(l1 || l2 || v))
        return null;
    let l1val=l1? l1.val:0;
    let l2val=l2? l2.val:0;
    let l1next=l1? l1.next:null;
    let l2next=l2? l2.next:null;
    let outval=l1val+l2val+v;
    var out1=new ListNode(outval%10);
    out1.next=hb(l1next,l2next,Math.floor(outval/10));
    return out1;
}