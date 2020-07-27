console.log('success')

var currPlayer = 'X';
// var a1 = document.getElementById('a1').innerText;
// var a2 = document.getElementById('a2').innerText;
// var a3 = document.getElementById('a3').innerText;
// var b1 = document.getElementById('b1').innerText;
// var b2 = document.getElementById('b2').innerText;
// var b3 = document.getElementById('b3').innerText;
// var c1 = document.getElementById('c1').innerText;
// var c2 = document.getElementById('c2').innerText;
// var c3 = document.getElementById('c3').innerText;

// console.log ('game:',a1,a2,a3)
// console.log('current player:', currPlayer);
var board = {a1:'',a2:'',a3:'',b1:'',b2:'',b3:'',c1:'',c2:'',c3:''};
var plays = 0;
console.log(board);
var game = function () {
  clickHandler()
  //  var playerPosX = (document.getElementById(event.target.id).innerHTML = 'X');
// console.log('event', a1)
}

var clickHandler = function () {
//   var a1 = document.getElementById('a1').innerText;
// var a2 = document.getElementById('a2').innerText;
// var a3 = document.getElementById('a3').innerText;
// var b1 = document.getElementById('b1').innerText;
// var b2 = document.getElementById('b2').innerText;
// var b3 = document.getElementById('b3').innerText;
// var c1 = document.getElementById('c1').innerText;
// var c2 = document.getElementById('c2').innerText;
// var c3 = document.getElementById('c3').innerText;
  const ele = document.getElementById("board")

  ele.addEventListener("click", (event) => {
    var playerPos = event.target.innerText;

    if (currPlayer === 'X' && playerPos !== 'O') {
      document.getElementById(event.target.id).innerHTML = 'X';
      board[event.target.id] = document.getElementById(event.target.id).innerHTML;
      console.log(board);
      currPlayer = 'O';
      plays++;
      isWinner();
    } else if (currPlayer === 'O' && playerPos !== 'X') {
      document.getElementById(event.target.id).innerHTML = 'O';
      board[event.target.id] = document.getElementById(event.target.id).innerHTML;
      console.log(board);
      currPlayer = 'X'
      plays++;
      isWinner();

    }
    // if (a1 === 'X' && a2 === 'X' && a3 === 'X'){
    //   console.log ('X wins')
    // }
    // console.log('logging this spot',document.getElementById('a1').innerText)
    // console.log ('game:',a1, a2, a3)
  });
}

var isWinner = function() {
  if (board['a1'] === 'X' && board['a2'] === 'X' && board['a3'] === 'X' && plays <=9) {
    console.log('winner')
  } else if (board['a1'] === 'O' && board['a2'] === 'O' && board['a3'] === 'O' && plays <=9) {
    console.log('winner')
  } else if (board['b1'] === 'X' && board['b2'] === 'X' && board['b3'] === 'X' && plays <=9) {
    console.log('winner')
  } else if (board['b1'] === 'O' && board['b2'] === 'O' && board['b3'] === 'O' && plays <=9) {
    console.log('winner')
  } else if (board['c1'] === 'X' && board['c2'] === 'X' && board['c3'] === 'X' && plays <=9) {
    console.log('winner')
  } else if (board['c1'] === 'O' && board['c2'] === 'O' && board['c3'] === 'O' && plays <=9) {
    console.log('winner')
  } else if (board['a1'] === 'X' && board['b1'] === 'X' && board['c1'] === 'X' && plays <=9) {
    console.log('winner')
  } else if (board['a1'] === 'O' && board['b1'] === 'O' && board['c1'] === 'O' && plays <=9) {
    console.log('winner')
  } else if (board['a2'] === 'X' && board['b2'] === 'X' && board['c2'] === 'X' && plays <=9) {
    console.log('winner')
  } else if (board['a2'] === 'O' && board['b2'] === 'O' && board['c2'] === 'O' && plays <=9) {
    console.log('winner')
  } else if (board['a3'] === 'X' && board['b3'] === 'X' && board['c3'] === 'X' && plays <=9) {
    console.log('winner')
  } else if (board['a3'] === 'O' && board['b3'] === 'O' && board['c3'] === 'O' && plays <=9) {
    console.log('winner')
  } else if (board['a1'] === 'X' && board['b2'] === 'X' && board['c3'] === 'X' && plays <=9) {
    console.log('winner')
  } else if (board['a1'] === 'O' && board['b2'] === 'O' && board['c3'] === 'O' && plays <=9) {
    console.log('winner')
  } else if (board['a3'] === 'X' && board['b2'] === 'X' && board['c1'] === 'X' && plays <=9) {
    console.log('winner')
  } else if (board['a3'] === 'O' && board['b2'] === 'O' && board['c1'] === 'O' && plays <=9) {
    console.log('winner')
  } else if (plays>= 9){
    console.log('its a tie');
  }

}
game();