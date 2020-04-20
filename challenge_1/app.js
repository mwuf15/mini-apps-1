
var board =[];
//board[0]= clickId(L1),board[1]= clickId(M1),board[2]= clickId(R1)
//board[3]= clickId(L2),board[4]= clickId(M2),board[5]= clickId(R2)
//board[6]= clickId(L3),board[7]= clickId(M3),board[9]= clickId(R3)
var isDefault = true;
var xCount = 0;
var oCount = 0;

var addClick = function (clickId) {

  if(isDefault ){
    document.getElementById(clickId).innerHTML = 'X';
    board[clickId] = 'X';
    xCount += 1;
    isDefault = false;
    checkWinner(board);

  } else {
    document.getElementById(clickId).innerHTML = 'O';
    board[clickId] = 'O';
    oCount += 1;
    isDefault = true;
    checkWinner(board);

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
  var xCount = 0;
  var oCount = 0;
  document.getElementById('0').innerHTML = '';
  document.getElementById('1').innerHTML = '';
  document.getElementById('2').innerHTML = '';
  document.getElementById('3').innerHTML = '';
  document.getElementById('4').innerHTML = '';
  document.getElementById('5').innerHTML = '';
  document.getElementById('6').innerHTML = '';
  document.getElementById('7').innerHTML = '';
  document.getElementById('8').innerHTML = '';
  document.getElementById("winner").innerHTML = '';

  console.log(board)
  console.log(xCount)
  console.log(xCount)
}
