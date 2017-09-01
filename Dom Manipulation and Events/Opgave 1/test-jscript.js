function changeDivBackroundColor(divId,color){
   console.log(divId,color) 
   var element = document.getElementById(divId);
   element.style.backgroundColor = color;
}

window.onload = function() {
    changeDivBackroundColor("1","red");
    changeDivBackroundColor("2","blue");
    changeDivBackroundColor("3","green");
    changeDivBackroundColor("4","yellow");
  };


