//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
 }
// Function Expression
 var sub = function(n1,n2){
   return n1 - n2
 } 
 
// Callback example
 var cb = function(n1,n2, callback){
  typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
  //typeof callback === "function" //Will fail if callback is undefined or is not a function
  
   
   try {
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  } catch (e) {
    if ((typeof n1 !== "number" || typeof n2 !== "number") || (typeof n1 !== "number" && typeof n2 !== "number")){
      console.log("et af  er undefined elles er det ikke et tal");
    } else if (typeof callback === "function") {
      console.log("call back is undefined or not a function");
    }
  }
   
 };

 //console.log(add(1,2));// ligger 1 og 2 sammen og logger 3
 //console.log(add);// retunere [Function: add]
 //console.log( add(1,2,3)); // retunere 3
 //console.log(add(1)); // retunere NaN
 //console.log(cb(3,3,add));//retunere  de 2 tal samt 6
 //console.log(cb(4,3,sub)); // returnere de 2 tal samt det subtractet
 console.log(cb(3,3,add())); // fejl, da call back ikke er en function
 //console.log(cb(3,"hh",add)); // fejler da add menuen kun tager mod tal

 // More callbacks
 // 4, write a mu1(n1,n2)

 var mul = function(n1,n2){
    return n1*n2;
};
var div = function(n1,n2){
  return n1/n2;
};
console.log(cb(4,3,mul));


//-------------------------------------------------
//Callbacks(with map, filter and forEach)
//1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
//Use the filter method to create a new array with only names of length <=3.
//Use the forEach method to iterate and print (console.log) both the original and the new array.

var myArray = ["Lars","Bo","Jan","Peter","Frederik"];
console.log(myArray);
// filtere array så den kunde indeholder navne der har 3 eller mindre bogstaver
var sortArray = myArray.filter(function(x){
  return (x.length <= 3);
});

//printer det originale inhold
myArray.forEach(function(element) {
  console.log(element);
});

//printer det sortede inhold
sortArray.forEach(function(element){
  console.log(element);
});

//2) Use the names-array created above, and, using its map 
//method, create a new array with all names uppercased.
function nameToUpperCase(value) {
  return value.toUpperCase();
}

sortArray = sortArray.map(nameToUpperCase);
console.log(sortArray);

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

// 4)

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var carNewerThan199 = cars.filter(function(x){
  return x.year > 1999;
});

var volvoCar = cars.filter(function(x){
  return x.make == "Volvo";
});

var below5000 = cars.filter(function(x){
  return x.price < 5000;
});

//console.log(carNewerThan199);
//console.log(volvoCar);
//console.log(below5000);

function carsNewerThan1990(x){
  return x.year > 1999;
}

function findVolvoCars(x){
  return x.make == "Volvo";
}

function carsWithPriceUnder5000(x){
  return x.price < 5000;
}

cars.filter(carsNewerThan1990);

// opgave 4a,

var sqlArray = cars.map(function(x){
  return "INSERT INTO cars (id,year,make,model,price) VALUES "+x.id+","+x.year+","+x.make+","+x.model+","+x.price+";";  
});
sqlArray = sqlArray.join("");;
console.log(sqlArray);

// AAsynchronous Callbacks

// 1,
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
// aa,dd,ff,ee også bb.
/*
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");*/

//this and constructor functions
//1, add this code
/*
 function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Explain this , Denne bliver undefined fordi vi forsøger at print en local variable name som ikke er defined
  },2000);
}
*/
/*
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain this
*/

//2,
/*
var p = new Person("Kurt Wonnegut");
console.log("I'm global: "+ name); // den kan ikke finde name, da den ikke eksistere.
*/

// 3) Change your code to fix the problem, using both strategies given below.



// write run and understand the example below: 
/*
var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);
*/
// 1) Create an object with four different properties, with values, of your own choice (ex: name, birthday, hobby, email).

function Person(name,birthday,hobby,mail){
this.name = name;
this.birthday = birthday;
this.hobby = hobby;
this.mail = mail;
this.detail = function () {
  console.log(this.name+" "+this.birthday);
};
}

var p = new Person("kaj","14-02-2015","fodbold","kaj@youg.dk");

for(name in p){
  console.log(name,p[name])
}
p.detail();


//test
/*
var girls = ["Janne", "hanne", "Sanne","ssssss"];

function length6(navn){
  return navn.length === 6;
}
function length5(navn){
  return navn.length === 5;
}

function myFilter(arr, callback){
  var tempArray = []
  arr.forEach(function (navn){
    if(callback(navn)){
      tempArray.push(navn);
    }
  });
  return tempArray;
}

console.log(myFilter(girls,length6));
console.log(myFilter(girls,length5));
*/
