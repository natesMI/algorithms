var hasCycle = function(linkedList){
  var fast = linkedList;
  var slow = linkedList;
  
  while(slow.next && fast.next && fast.next.next){
    fast = fast.next.next;
    slow = slow.next;
    if(slow === fast){
      return true;
    }
  }
  return false;
};