
var board =[];
//board[0]= clickId(L1),board[1]= clickId(M1),board[2]= clickId(R1)
//board[3]= clickId(L2),board[4]= clickId(M2),board[5]= clickId(R2)
//board[6]= clickId(L3),board[7]= clickId(M3),board[9]= clickId(R3)
var isDefault = true;
var xCount = 0;
var oCount = 0;

var addClick = function (clickId) {

  if(isDefault ){
    if (document.getElementById(clickId).innerHTML === 'X' ||
      document.getElementById(clickId).innerHTML === 'O') {
      document.getElementById('winner').innerHTML = 'Invalid space, Please choose another spot';
    } else {
      document.getElementById(clickId).innerHTML = 'X';
      document.getElementById('winner').innerHTML = "";
      board[clickId] = 'X';
      xCount += 1;
      isDefault = false;
      checkWinner(board);
      console.log('x: ',xCount)
      console.log('o: ',oCount)
    }

  } else {
    if (document.getElementById(clickId).innerHTML === 'X' ||
      document.getElementById(clickId).innerHTML === 'O') {
      document.getElementById('winner').innerHTML = 'Invalid space, Please choose another spot';
    } else {
      document.getElementById(clickId).innerHTML = 'O';
      document.getElementById('winner').innerHTML = "";
      board[clickId] = 'O';
      oCount += 1;
      isDefault = true;
      checkWinner(board);
      console.log('x: ',xCount)
      console.log('o: ',oCount)
      }
  }
}

var checkWinner = function (board) {

  var winner = document.getElementById("winner");

  if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
    winner.innerHTML = "X is the winner!!";
  } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
    winner.innerHTML = "O is the winner!!";
  } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
    winner.innerHTML = "O is the winner!!";
  }else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
    winner.innerHTML = "X is the winner!!";
  }else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
    winner.innerHTML = "O is the winner!!";
  }else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
    winner.innerHTML = "X is the winner!!";
  }else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
    winner.innerHTML = "O is the winner!!";
  }else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
    winner.innerHTML = "X is the winner!!";
  }else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
    winner.innerHTML = "O is the winner!!";
  }else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
    winner.innerHTML = "X is the winner!!";
  }else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
    winner.innerHTML = "O is the winner!!";
  }else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
    winner.innerHTML = "X is the winner!!";
  }else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
    winner.innerHTML = "O is the winner!!";
  }else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
    winner.innerHTML = "X is the winner!!";
  }else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
    winner.innerHTML = "O is the winner!!";
  }else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
    winner.innerHTML = "X is the winner!!";
  }else if ((xCount + oCount) === 9){
    winner.innerHTML = "its a tie"
  }
}
var resetBoard = function () {
  board=[];
   xCount = 0;
   oCount = 0;
  for ( var i = 0; i < 9; i ++) {
    document.getElementById(i).innerHTML = '';
  }
  document.getElementById("winner").innerHTML = '';

  console.log(board)
  console.log(xCount)
  console.log(xCount)
}
