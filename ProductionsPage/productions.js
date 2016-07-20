//"Productions Page" shoing all the "productions" for each Channel

//This function builds the content of the "Productions Page"
function showProductions(jsonData) {

    // Creating a "var productions" to make the code more readable
    //var productions = jsonData._embedded.productions;
    var productions = jsonData._embedded.productions;

    //Creating a "createDocumentFragment" in order to inject the content inot the "Productions Page"
    var fullContent = document.createDocumentFragment();

    //Loops through the productions
    for (var i = 0; i < productions.length; i++) {

        //Create a new "div" + styling
        var newDiv = document.createElement("div");
        newDiv.style.marginLeft = "16em";

        //Creating a html link (<a> tag) in order to build the url
        var hRef = document.createElement("a");
        var productionsUrl = productions[i]._links.image.href;
        console.log("productionsUrl: " + productionsUrl);
        var productionsChannel = getUrlParamsByName("channelId", productionsUrl);
        hRef.setAttribute('href', "ProgrammesPage/programmes.html?channelid=" + productionsChannel);

        //Create image + styling
        var productionImage = document.createElement("img");
        productionImage.style.width = "60%";
        productionImage.style.height = "50%";
        productionImage.style.margin = "auto";
        productionImage.setAttribute('src', productions[i]._links.image.href);
        productionImage.setAttribute('alt', "Image of production " + productions[i].channel);

        //Appending image into <a> tag
        hRef.appendChild(productionImage);
        //Adding <a> tag into the <div>
        newDiv.appendChild(hRef);

        //Now that the div is complete, adding to master DOM object
        fullContent.appendChild(newDiv);
        console.log(productions[i]);
    }
    document.getElementById("productions").appendChild(fullContent);
}

getApiContent("http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&channelId=itv&broadcaster=itv", "application/vnd.itv.hubsvc.production.v3+hal+json; charset=UTF-8", showProductions);
