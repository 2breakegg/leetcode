/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode } head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arr=[];
    let node=head;
    while(node!=null){
        arr.push(node);
        node=node.next;
    }
    if(arr.length-n>0){
        arr[arr.length-n-1].next=arr[arr.length-n].next;
        return head;
    }else if(arr.length>=2){
        return arr[1];
    }else{
        return [];
    }
};