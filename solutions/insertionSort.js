function insertionSort (array) {
if(typeof array[0] === 'object'){
  	for(var k=0; k<array.length; k++){
        var temp2 = array[k];
        for(var l=k-1; l>=0 && array[l].value > temp2.value; l--){
          array[l+1] = array[l];
        }
        array[l+1] = temp2;
      }
  } else {
  	  for(var i=0; i<array.length; i++){
        var temp = array[i];
        for(var j=i-1; j>=0 && array[j] > temp; j--){
          array[j+1] = array[j];
        }
        array[j+1] = temp;
      }
  }	
  return array;
}