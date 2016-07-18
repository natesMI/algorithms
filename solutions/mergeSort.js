function mergeSort(arr){

 	if(arr.length < 2){
      return arr;
   	}
  
    var middle = Math.floor(arr.length/2);
    var newArr1 = arr.slice(0, middle);
    var newArr2 = arr.slice(middle, arr.length);
     
   return merge(mergeSort(newArr1), mergeSort(newArr2));
}

function merge(left, right){
	var result = [];
	
	while(left.length && right.length){
		if(left[0] > right[0]){
			result.push(right.shift());
		} else {
			result.push(left.shift());
		}
	}
	
	while(left.length){
		result.push(left.shift());
	}
	while(right.length){
		result.push(right.shift());
	}
	
	return result;
}