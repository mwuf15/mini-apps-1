console.log('success')


var getId = function() {
  const ele = document.getElementById("board")
  ele.addEventListener("click", (event) => {
    console.log(event.target.id);
    // return (event.target.id)
    document.getElementById(event.target.id).innerHTML ='X'
  });
}
// console.log(getId())
// var gameValue = document.getElementById(getId())
getId();

// gameValue.innerHTML = "X"