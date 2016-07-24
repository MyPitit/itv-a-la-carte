// Make XMLHttpRequest
function getApiContent(url, header, callback) {
    var xmlhttp = new XMLHttpRequest();
    //console.log("Processant url: " + url);
    xmlhttp.onreadystatechange = function() {
        // console.log("Change onreadystate: " + xmlhttp.readyState);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // console.log("Response");
            callback(JSON.parse(xmlhttp.responseText));
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("accept", header);
    xmlhttp.send();
}

// Get parameters by name from all the urls
// Function from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getUrlParamsByName(name, url) {
    // If url is not specified use current location
    if (!url) url = window.location.href;
    // Replace characters [] in url
    name = name.replace(/[\[\]]/g, "\\$&");
    // Build regexp to match parameter in query string
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    // If results is null means this element does not exist
    if (!results) return null;
    // If results[2] does not exist means var is empty in querystring
    if (!results[2]) return '';
    // Return result and decodes URI string
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
