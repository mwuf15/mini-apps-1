
  var isDefault = true;
var addClick = function (clickId) {
  if(isDefault){
    document.getElementById(clickId).innerHTML = 'X';
    isDefault = false;
  } else {
    document.getElementById(clickId).innerHTML = 'O';
    isDefault = true;
  }
      console.log('clicked')
}
