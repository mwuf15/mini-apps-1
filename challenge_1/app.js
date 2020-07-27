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
      isWinner();
    } else if (currPlayer === 'O' && playerPos !== 'X') {
      document.getElementById(event.target.id).innerHTML = 'O';
      board[event.target.id] = document.getElementById(event.target.id).innerHTML;
      console.log(board);
      currPlayer = 'X'
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
  if (board['a1'] === 'X' && board['a2'] === 'X' && board['a3'] === 'X') {
    console.log('winner')
  }

}
game();