// "Productions Page" showing all the "productions" for each Channel

// This function builds the content of the "Productions Page"
function showProductions(jsonData) {

    // Creating a "var productions" to make the code more readable
    var productions = jsonData._embedded.productions;

    //Creating a "createDocumentFragment" in order to inject the content inot the "Productions Page"
    var fullContent = document.createDocumentFragment();

    // I created this function in order to show only the programmes from a day
    //  this is commented out because I no longer need this function
    // // Mark as false until we hook with GET function
    // var GETdate = false;
    // var date;
    // if ( GETdate ) {
    //     date = new Date(GETdate);
    // } else {
    //     // We generate our standard date (yesterday)
    //     date = new Date();
    //     date.setDate(date.getDate() - 1);
    // }
    // // Reset hours to 00:00:00
    // date.setHours(0,0,0,0);
    //
    // // Boolean semaphore to control if we have content, otherwise show "No data" page
    // var gotContent = false;

    // Loops through the productions
    for (var i = 0; i < productions.length; i++) {

        // Render div for program
        // Create a new "div" + styling
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDivProductions");

        // Creating a html link (<a> tag) in order to build the url
        var hRef = document.createElement("a");
        var productionsEpisode = productions[i].episodeId;
        var productionsProgramme = productions[i].programmeId;
        hRef.setAttribute('href', "../ProgrammePage/programme.html?episodeId=" +  productionsEpisode + "&programmeId=" + productionsProgramme);

        // Create a new <h1> tag with the title of the programme
        var productionTitle = document.createElement("h1");
        productionTitle.setAttribute("id", "productionTitle");
        // console.log(productionTitle);
        var title = document.createTextNode(productions[i].programmeTitle);
        productionTitle.appendChild(title);

        // Create image
        var productionImage = document.createElement("img");
        productionImage.setAttribute("id", "productionImage");
        productionImage.setAttribute('src', productions[i]._links.image.href);
        productionImage.setAttribute('alt', "Image of production " + productions[i].channel);

        // Create a <p> tag with the corresponding categories
        var categorieName = document.createElement("p");
        categorieName.setAttribute("id", "categorieNameProduction");
        // console.log(productionTitle);
        var caName = document.createTextNode(productions[i].categories);
        categorieName.appendChild(caName);

        //Create a <p> tag with the date
        var programmeDate = document.createElement("p");
        programmeDate.setAttribute("id", "programmeDateProduction");
        var proDate = document.createTextNode(productions[i].broadcastDateTime.displayFormat);
        programmeDate.appendChild(proDate);

        // Adding <h1> tag with the programme title
        newDiv.appendChild(productionTitle);
        // Appending image into <a> tag
        hRef.appendChild(productionImage);
        // Adding <a> tag into the <div>
        newDiv.appendChild(hRef);
        // Adding <p> tag with the corresponding categorie type
        newDiv.appendChild(categorieName);
        // Adding <p> tag with the date
        newDiv.appendChild(programmeDate);

        // Now that the div is complete, adding to master DOM object
        fullContent.appendChild(newDiv);
        console.log(productions[i]);

    // For loop finishes here
    }

    document.getElementById("productions").appendChild(fullContent);
}

// Get "channelId", if its null or empty show by default itv
var myChannelId = getUrlParamsByName("channelId");
if ( myChannelId === null || myChannelId === "" ) {
    myChannelId = "itv";
}
getApiContent("http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&channelId=" + myChannelId + "&broadcaster=itv", "application/vnd.itv.default.production.v2+hal+json; charset=UTF-8", showProductions);
