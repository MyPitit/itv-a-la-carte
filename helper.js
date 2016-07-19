// XMLHttpRequest
function getApiContent(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    //console.log("Processant url: " + url);
    xmlhttp.onreadystatechange = function() {
        //console.log("Canvi onreadystate: " + xmlhttp.readyState);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log("Resposta");
            callback(JSON.parse(xmlhttp.responseText));
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("accept", "application/vnd.itv.default.channel.v1+hal+json; charset=UTF-8");
    xmlhttp.send();
}

// Get parameters by name from all the urls
// Function from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getUrlParamsByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
