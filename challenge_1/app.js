
var currPlayer = 'X';
var board = { a1: '', a2: '', a3: '', b1: '', b2: '', b3: '', c1: '', c2: '', c3: '' };
var plays = 0;
// console.log(board);
var game = function () {
  clickHandler()
}

var clickHandler = function () {
  const ele = document.getElementById("board")
  ele.addEventListener("click", (event) => {

    var playerPosId = event.target.id;

    if (board[playerPosId] !== '') {
      occupiedText();
    } else if (currPlayer === 'O' && board[playerPosId] === '') {
      document.getElementById(event.target.id).innerHTML = 'O';
      board[event.target.id] = document.getElementById(event.target.id).innerHTML;
      unOccupiedText();
      console.log(board);
      currPlayer = 'X'
      currPlayerFunc();
      plays++;
       isWinner();
    } else if (currPlayer === 'X' && board[playerPosId] === '') {
      document.getElementById(event.target.id).innerHTML = 'X';
      board[event.target.id] = document.getElementById(event.target.id).innerHTML;
      unOccupiedText();
      console.log(board);
      currPlayer = 'O';
      currPlayerFunc();
      plays++;
      isWinner();
    }
  });
}

var newGame = function() {
  currPlayer = 'X';
  board = { a1: '', a2: '', a3: '', b1: '', b2: '', b3: '', c1: '', c2: '', c3: '' };
  plays = 0;
  document.getElementById('a1').innerHTML = '';
  document.getElementById('a2').innerHTML = '';
  document.getElementById('a3').innerHTML = '';
  document.getElementById('b1').innerHTML = '';
  document.getElementById('b2').innerHTML = '';
  document.getElementById('b3').innerHTML = '';
  document.getElementById('c1').innerHTML = '';
  document.getElementById('c2').innerHTML = '';
  document.getElementById('c3').innerHTML = '';
  document.getElementById('occupied').innerHTML = '';
  document.getElementById('currentPlayer').innerHTML = 'Current Player: X';
  document.getElementById('winner').innerHTML = '';
};

var currPlayerFunc = function() {
  document.getElementById('currentPlayer').innerHTML = `Current Player: ${currPlayer}`;
};

var occupiedText = function() {
  document.getElementById('occupied').innerHTML = 'SPACE IS OCCUPIED, USE NEXT AVAILABLE SPACE';
};

var unOccupiedText = function() {
  document.getElementById('occupied').innerHTML = '';
};

var winnerText = function(player) {
  if (player === 'tie') {
    document.getElementById('winner').innerHTML = `IT'S A TIE. PLAY AGAIN?`;
  } else {
    document.getElementById('winner').innerHTML = `PLAYER ${player} WINS THE GAME. PLAY AGAIN?`;
  }
};

var isWinner = function () {
  if (board['a1'] === 'X' && board['a2'] === 'X' && board['a3'] === 'X' && plays <= 9) {
    winnerText('X');
    return;
  } else if (board['a1'] === 'O' && board['a2'] === 'O' && board['a3'] === 'O' && plays <= 9) {
    winnerText('O');
  } else if (board['b1'] === 'X' && board['b2'] === 'X' && board['b3'] === 'X' && plays <= 9) {
    winnerText('X');
  } else if (board['b1'] === 'O' && board['b2'] === 'O' && board['b3'] === 'O' && plays <= 9) {
    winnerText('O');
  } else if (board['c1'] === 'X' && board['c2'] === 'X' && board['c3'] === 'X' && plays <= 9) {
    winnerText('X');
  } else if (board['c1'] === 'O' && board['c2'] === 'O' && board['c3'] === 'O' && plays <= 9) {
    winnerText('0');
  } else if (board['a1'] === 'X' && board['b1'] === 'X' && board['c1'] === 'X' && plays <= 9) {
    winnerText('X');
  } else if (board['a1'] === 'O' && board['b1'] === 'O' && board['c1'] === 'O' && plays <= 9) {
    winnerText('0');
  } else if (board['a2'] === 'X' && board['b2'] === 'X' && board['c2'] === 'X' && plays <= 9) {
    winnerText('X');
  } else if (board['a2'] === 'O' && board['b2'] === 'O' && board['c2'] === 'O' && plays <= 9) {
    winnerText('O');
  } else if (board['a3'] === 'X' && board['b3'] === 'X' && board['c3'] === 'X' && plays <= 9) {
    winnerText('X');
  } else if (board['a3'] === 'O' && board['b3'] === 'O' && board['c3'] === 'O' && plays <= 9) {
    winnerText('O');
  } else if (board['a1'] === 'X' && board['b2'] === 'X' && board['c3'] === 'X' && plays <= 9) {
    winnerText('X');
  } else if (board['a1'] === 'O' && board['b2'] === 'O' && board['c3'] === 'O' && plays <= 9) {
    winnerText('O');
  } else if (board['a3'] === 'X' && board['b2'] === 'X' && board['c1'] === 'X' && plays <= 9) {
    winnerText('X');
  } else if (board['a3'] === 'O' && board['b2'] === 'O' && board['c1'] === 'O' && plays <= 9) {
    winnerText('O');
  } else if (plays >= 9) {
    winnerText('tie');
  }

}
game();