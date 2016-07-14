var reverseList = function(head) {
    var current = head;
    var previous = null;
    var next = null;
    
    while(current){
        next = current.next;
        current.next = previous
        
        previous = current;
        current = next;
    }
    return previous;
};