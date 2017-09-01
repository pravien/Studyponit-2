var lastCountryId = "fr";
function country (event) {
    //console.log(document.getElementById(lastCountryId));
    // sætter det gamle land til grå
    document.getElementById(lastCountryId).style.fill="#c0c0c0";
    var clickedTarget = event.target.id;
    //sætter det nye land til rød
    document.getElementById(clickedTarget).style.fill="red";
    //sætter det nye land = det gamle
    lastCountryId =clickedTarget; 
    url = "http://restcountries.eu/rest/v1/alpha?codes="+clickedTarget;
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        document.getElementById("countrytext").innerHTML = "Name: "+json[0].name+"</br> Population: "+json[0].population;
        //countrytext
    });
    
}


