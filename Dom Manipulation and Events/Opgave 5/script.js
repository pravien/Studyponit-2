var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  function arrayToTable(cars){
  cars = cars.map(function(x){
    return "<tr><td>"+x.id+"</td><td>"+x.year+"</td><td>"+x.make+"</td><td>"+x.model+"</td><td>"+x.price+"</td></tr>";  
  });
  cars = cars.join("");
  document.getElementById("_tablebody").innerHTML = cars;
}

window.onload = function() {
    arrayToTable(cars);
};


function carsWithPriceUnder5000(x,number){
    var tempArray = [];
    
    for (var index = 0; index < x.length; index++) {
        console.log(x[index].price);
        console.log(number);
        if(x[index].price < number){
        console.log("we in");
        tempArray.push(x[index]);
        }
        
    }
    return tempArray;
  }

  function filterCarPrice(){
   var number = document.getElementById("carPrice").value;
   console.log(number);
   event.preventDefault();
   console.log(number);
   console.log(cars);
   var temp = carsWithPriceUnder5000(cars,number);
   console.log(temp);
   arrayToTable(temp);
   
  }