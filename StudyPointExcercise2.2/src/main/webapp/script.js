var originalJson;
function fetchFromServer() {

    var gender = document.getElementById("gender").value;
    var region = document.getElementById("region").value;
    var amount = document.getElementById("amount").value;
    url = generateURL(region, gender, amount);
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.json();
    }).then(function (json) {
        originalJson = json;
        console.log(originalJson);
        var array = [];
        var html = generateTable(originalJson);
//        for (var i = 0; i < json.length; i++) {
//            html += "<tr><td>" + json[i].name + "</td><td>" + json[i].surname + "</td><td>" + json[i].gender + "</td></tr>"
//            array.push(json[i]);
//        }
//        array = array.map(function (x) {
//            return "INSERT INTO names (name,surname,gender) VALUES " + x.name + "," + x.surname + "," + x.gender + "";
//        });
//        array = array.join(";&#13;&#10");
//        console.log(array);
        document.getElementById("tblbody").innerHTML = html;
        document.getElementById("btnsql").disabled = false;
//        document.getElementById("sql").innerHTML = array;
    });

}
function generateSql(json) {
    var array = [];
    for (var i = 0; i < json.length; i++) {

        array.push(json[i]);
    }
    array = array.map(function (x) {
        return "INSERT INTO names (name,surname,gender) VALUES ('" + x.name + "','" + x.surname + "','" + x.gender + "')";
    });
    return array = array.join(";&#13;&#10");

}
function generateTable(json) {
    var html;
    for (var i = 0; i < json.length; i++) {
        html += "<tr><td>" + json[i].name + "</td><td>" + json[i].surname + "</td><td>" + json[i].gender + "</td></tr>"

    }
    return html;
}

function generateURL(region, gender, amount) {
    if (amount < 1) {
        amount = 1;
    }
    var url = "http://uinames.com/api/?amount=" + amount;
    if (region === "All" && gender === "both") {
        return url;
    } else if (region === "All") {
        url += "&gender=" + gender;
        return url;
    } else if (gender === "both") {
        console.log("both");
        url += "&region=" + region;
        return url;
    } else {
        url = "http://uinames.com/api/?amount=" + amount + "&region=" + region + "&gender=" + gender;
        return url;
    }

}

btnsql.onclick = function () {
   document.getElementById("sql").innerHTML = generateSql(originalJson);
};

btnsend.onclick = function () {
    if (amount = document.getElementById("amount").value > 500) {
        alert("you retrice more than 500")
    } else {
        fetchFromServer();
    }
};