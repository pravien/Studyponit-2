

var myArray = ["*","/","+","-"];
buttons.onclick = function(event) {
    console.log("call")
    var clickedTarget = event.target;
    //var temp = document.getElementById(display).innerText;
   var temp = clickedTarget.innerText;
    if(clickedTarget.id == "calculate"){
        console.log("we in");
        var str = document.getElementById("display").innerText;
        var result =checkIfStringContainOperator(myArray,str);
        document.getElementById("display").innerHTML=result;
    }
    else{
        document.getElementById("display").innerHTML+=temp;
    }
    
  };

  function add (arguments){
      var returnNum = 0;
      for (var index = 0; index < arguments.length; index++) {
         returnNum+=Number(arguments[index]);
          
      }
      return returnNum;
  }

  function subtract (arguments){
    var returnNum = 0;
    for (var index = 0; index < arguments.length; index++) {
        if(index == 0){
            returnNum=Number(arguments[index]);
        }
        else{
       returnNum-=Number(arguments[index]);
        }
    }
    return returnNum;
}

  function divide (arguments){
    var returnNum = 0;
    for (var index = 0; index < arguments.length; index++) {
        if(index==0){
         returnNum = Number(arguments[index]);   
        }
        else{
       returnNum/=Number(arguments[index]);
        }
    }
    return returnNum;
}

function multiply(arguments){
    var returnNum = 1;
    for (var index = 0; index < arguments.length; index++) {
       returnNum*=Number(arguments[index]);
    }
    return returnNum; 
}

  function checkIfStringContainOperator(arr,str){
    for (var index = 0; index < arr.length; index++) {
        //str.indexOf(array[index]);
        if(str.indexOf(arr[index])!== -1){
            var operator = arr[index];
           
           var tempArry = str.split(arr[index]);

           if(operator=="+"){
            return add(tempArry);
           }
           if(operator=="/"){
            return divide(tempArry);
           }
           if(operator=="-"){
            return subtract(tempArry);
           }

           if(operator=="*"){
            return multiply(tempArry);
           }
        }
    }
    
  }