console.log('success')

var currPlayer = 'X';
var board = { a1: '', a2: '', a3: '', b1: '', b2: '', b3: '', c1: '', c2: '', c3: '' };
var plays = 0;
console.log(board);
var game = function () {
  clickHandler()

}

var clickHandler = function () {

  const ele = document.getElementById("board")

  ele.addEventListener("click", (event) => {
    var playerPos = event.target.innerText;

    if (playerPos !== '') {
      console.log('space is occupied')

    } else if (currPlayer === 'O' && playerPos !== 'X') {
      document.getElementById(event.target.id).innerHTML = 'O';
      board[event.target.id] = document.getElementById(event.target.id).innerHTML;
      console.log(board);
      currPlayer = 'X'
      plays++;
      isWinner();
    } else if (currPlayer === 'X' && playerPos !== 'O') {
      document.getElementById(event.target.id).innerHTML = 'X';
      board[event.target.id] = document.getElementById(event.target.id).innerHTML;
      console.log(board);
      currPlayer = 'O';
      plays++;
      isWinner();
    }
  });
}

var isWinner = function () {
  if (board['a1'] === 'X' && board['a2'] === 'X' && board['a3'] === 'X' && plays <= 9) {
    console.log('winner')
  } else if (board['a1'] === 'O' && board['a2'] === 'O' && board['a3'] === 'O' && plays <= 9) {
    console.log('winner')
  } else if (board['b1'] === 'X' && board['b2'] === 'X' && board['b3'] === 'X' && plays <= 9) {
    console.log('winner')
  } else if (board['b1'] === 'O' && board['b2'] === 'O' && board['b3'] === 'O' && plays <= 9) {
    console.log('winner')
  } else if (board['c1'] === 'X' && board['c2'] === 'X' && board['c3'] === 'X' && plays <= 9) {
    console.log('winner')
  } else if (board['c1'] === 'O' && board['c2'] === 'O' && board['c3'] === 'O' && plays <= 9) {
    console.log('winner')
  } else if (board['a1'] === 'X' && board['b1'] === 'X' && board['c1'] === 'X' && plays <= 9) {
    console.log('winner')
  } else if (board['a1'] === 'O' && board['b1'] === 'O' && board['c1'] === 'O' && plays <= 9) {
    console.log('winner')
  } else if (board['a2'] === 'X' && board['b2'] === 'X' && board['c2'] === 'X' && plays <= 9) {
    console.log('winner')
  } else if (board['a2'] === 'O' && board['b2'] === 'O' && board['c2'] === 'O' && plays <= 9) {
    console.log('winner')
  } else if (board['a3'] === 'X' && board['b3'] === 'X' && board['c3'] === 'X' && plays <= 9) {
    console.log('winner')
  } else if (board['a3'] === 'O' && board['b3'] === 'O' && board['c3'] === 'O' && plays <= 9) {
    console.log('winner')
  } else if (board['a1'] === 'X' && board['b2'] === 'X' && board['c3'] === 'X' && plays <= 9) {
    console.log('winner')
  } else if (board['a1'] === 'O' && board['b2'] === 'O' && board['c3'] === 'O' && plays <= 9) {
    console.log('winner')
  } else if (board['a3'] === 'X' && board['b2'] === 'X' && board['c1'] === 'X' && plays <= 9) {
    console.log('winner')
  } else if (board['a3'] === 'O' && board['b2'] === 'O' && board['c1'] === 'O' && plays <= 9) {
    console.log('winner')
  } else if (plays >= 9) {
    console.log('its a tie');
  }

}
game();