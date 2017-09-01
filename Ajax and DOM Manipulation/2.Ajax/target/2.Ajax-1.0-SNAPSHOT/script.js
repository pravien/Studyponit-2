function fetchQ() {
    fetch('https://jokes-plaul.rhcloud.com/api/joke').then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById("json").innerHTML = data.id;
        return data;
    });
}

function fetchFromServer() {
    var app = document.getElementById("json");
    app.innerHTML = "blabalblaab";
    var url = "http://localhost:8080/2.Ajax/DateControl";
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        var time  = json.hour+":"+json.minut+":"+json.seconds;
        app.innerHTML = time;
    });
}


button.onclick = function () {
    fetchFromServer();

};


//window.setInterval(function () {
//    fetchQ();
//}, 5000);




