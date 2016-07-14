function sudokuCheck (boardStr) {
 var board = boardStr.split('\n');
 var boards = [];
 board.forEach(function(row){
   boards.push(row.split(''));
 });
  return rowChecker(boards) && columnChecker(boards) 
  && gridChecker(boards) ? 'solved' : 'invalid'
}

function rowChecker(brd) {
  var row;
  for(var i=0; i<brd.length; i++){
  	row = [];
  	for(var j=0; j<brd[i].length; j++){
  		row.push(brd[i][j]);
  	}
    if(row.sort().join(',') !== '1,2,3,4,5,6,7,8,9'){
      return false;
    }
  }
  return true;
}

function columnChecker(brd) {
  var col;
  for(var i=0; i<brd.length; i++){
    col = [];
    for(var j=0; j<brd[i].length; j++){
      col.push(brd[i][j]);
    }
    if(col.sort().join(',') !== '1,2,3,4,5,6,7,8,9'){
      return false;
    }
  }
  return true;
}


function gridChecker(brd) {
  return gridMaker(brd, 0, 0) &&
        gridMaker(brd, 0, 3) &&
        gridMaker(brd, 0, 6) &&
        gridMaker(brd, 3, 0) && 
        gridMaker(brd, 3, 3) && 
        gridMaker(brd, 3, 6) &&
        gridMaker(brd, 6, 0) && 
        gridMaker(brd, 6, 3) &&
        gridMaker(brd, 6, 6);
}

function gridMaker(brd, startingX, startingY){
  var grid = [];
  for(var i=startingX; i<startingX + 3; i++){
    for(var j=startingY; j<startingY + 3; j++){
        grid.push(brd[i][j]);
    }
  }
  if(grid.sort().join(',') !== '1,2,3,4,5,6,7,8,9'){
    return false;
  }
  return true;
}