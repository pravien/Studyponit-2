var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = [];
all = boys.concat(girls);
//b: Comma seperated string
console.log(all.join(","));
//- seperared string
console.log(all.join("-"));

//d: add Lone and gitte to the end.
all.push("Lone","Gitte");
console.log(all);

//e: add Hans and Kurt to the start
all.unshift("Hans","Kurt");
console.log(all);

//f og g: remove hans and Gitte
all.shift();
all.pop();
console.log(all);

//h: Remove Ole and Janne
all.splice(3,2);
console.log(all);

//i: reverse the array
all.reverse();
console.log(all);

//j: Sort the array
all.sort();
console.log(all);

// convert all the names  in the array to uppercase
all = all.map(function(x){
    return x.toUpperCase();
});
console.log(all)

// create array only containing names beging with I or L.
    namesStartWithIOrL = all.filter(function(x){
    return (x.charAt(0) == 'I' || x.charAt(0) == 'L');
});
console.log(namesStartWithIOrL);

all = all.map(function(x){
    return "<li>"+x+"</li>";
});