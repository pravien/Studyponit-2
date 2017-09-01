var myArray = ["Lars","Bo","Jan","Peter","Frederik"];

function insertList(myArray){

    //sortArray = sortArray.map(nameToUpperCase);
    //console.log(sortArray);
    
    //opgave 3
    // indsætter <li></li>
    myArray = myArray.map(function(x){
      return "<li>"+x+"</li>";
    });
    // indsætter ul
    myArray.unshift("<ul>");
    myArray.push("<ul>");
    // laver array omtil string
    myArray = myArray.join("");
    console.log(myArray);
    document.getElementById("k").innerHTML = myArray;
}

function addName(){
    var name = document.getElementById("name_name").value;
    event.preventDefault();
    myArray.push(name);
    insertList(myArray);
    
}
function myFunction() {
    alert("The form was submitted");
}

function removeLast(){
    myArray.pop()
    insertList(myArray);
    event.preventDefault();
}

function removeFirst(){
    myArray.shift();
    insertList(myArray);
    event.preventDefault();
}


window.onload = function() {
    insertList(myArray);
};