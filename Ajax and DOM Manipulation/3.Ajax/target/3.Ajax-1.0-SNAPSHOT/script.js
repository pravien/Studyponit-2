var personList = [];
function fetchFromServer() {
    var app = document.getElementById("json");
    app.innerHTML = "blabalblaab";
    var url = "http://localhost:8080/3.Ajax/PersonController";
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.json();
    }).then(function (json) {
        var persons = json;

        arrayToTable(persons);
    });
    event.preventDefault();
}


function fetchToServer() {
    var pers = personList[personList.length - 1];
    console.log(pers);
    //var obj = JSON.parse(pers);

    //var request = new Request("http://localhost:8080/3.Ajax/PersonController", {
     var conf = {method: 'post', 
        body: JSON.stringify(pers) 
    }
    //fetch(request)
    fetch('http://localhost:8080/3.Ajax/PersonController',conf)
    .then(function () {
                alert(pers.name);
            });
}


button.onclick = function () {
    fetchFromServer();
    event.preventDefault();
};

function addName() {
    event.preventDefault();
    var name_ = document.getElementById("name").value;
    console.log(name_);
    console.log(this.personList);
    personList.push({name: name_})
    fetchToServer();
    arrayToTable(personList);



}


function arrayToTable(person) {
    personList = person;
    list = person.map(function (person) {
        console.log(person.name);
        return '<li>' + person.name + '</li>'
    });
    list = list.join("");
    document.getElementById("json").innerHTML = '<ul>' + list + '</ul>';
}



//window.setInterval(function () {
//    fetchQ();
//}, 5000);




