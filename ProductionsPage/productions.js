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

        //Create a new <h1> tag with the title of the programme
        var productionTitle = document.createElement("h1");
        console.log(productionTitle);
        var title = document.createTextNode(productions[i].programmeTitle);
        productionTitle.appendChild(title);

        //Create image + styling
        var productionImage = document.createElement("img");
        productionImage.style.width = "60%";
        productionImage.style.height = "50%";
        productionImage.style.margin = "auto";
        productionImage.setAttribute('src', productions[i]._links.image.href);
        productionImage.setAttribute('alt', "Image of production " + productions[i].channel);

        //Create a <p> tag with the corresponding categories
        var categorieName = document.createElement("p");
        console.log(productionTitle);
        var caName = document.createTextNode(productions[i].categories);
        categorieName.appendChild(caName);

        //Create a <p> tag with the corresponding duration of the programme
        var programmeDuration = document.createElement("p");
        var porDuration = document.createTextNode(productions[i].duration);
        programmeDuration.appendChild(porDuration);

        //Create a <p> tag with the date
        var programmeDate = document.createElement("p");
        var proDate = document.createTextNode(productions[i].broadcastDateTime.displayFormat);
        programmeDate.appendChild(proDate);

        //Create a <p> tag with the synopsis
        var programeSynopsis = document.createElement("p");
        var proSynopsis = document.createTextNode(productions[i].synopsis);
        programeSynopsis.appendChild(proSynopsis);

        //Create a <p> tag with the availability
        var programmeAvailability = document.createElement("p");
        programmeAvailability.style.color = "red";
        var proAvailability = document.createTextNode(productions[i].availabilityEnd.displayFormat);
        programeSynopsis.appendChild(proAvailability);

        //Create a <p> tag with "more episodes label"
        var programmeEpisodes = document.createElement("p");
        var proEpisodes = document.createTextNode(productions[i].moreEpisodesLabel);
        programmeEpisodes.appendChild(proEpisodes);

        //Create a <p> with the total number of episodes
        var programmeTotalEpisodes = document.createElement("p");
        var proTotalEpisodes = document.createTextNode(productions[i].numberOfEpisodes);
        programmeTotalEpisodes.appendChild(proTotalEpisodes);


        //Adding <h1> tag with the programme title
        newDiv.appendChild(productionTitle);
        //Appending image into <a> tag
        hRef.appendChild(productionImage);
        //Adding <a> tag into the <div>
        newDiv.appendChild(hRef);
        //Adding <p> tag with the corresponding categorie type
        newDiv.appendChild(categorieName);
        //Adding <p> tag with the programme duration
        newDiv.appendChild(programmeDuration);
        //Adding <p> tag with the date
        newDiv.appendChild(programmeDate);
        //Adding <p> tag with the with the synopsis
        newDiv.appendChild(programeSynopsis);
        //Adding <p> tag with the availability
        newDiv.appendChild(programmeAvailability);
        //Adding <p> tag with "more episodes label"
        newDiv.appendChild(programmeEpisodes);
        //Adding <p> tag with the total number of episodes
        newDiv.appendChild(programmeTotalEpisodes);

        //Now that the div is complete, adding to master DOM object
        fullContent.appendChild(newDiv);
        console.log(productions[i]);
    }
    document.getElementById("productions").appendChild(fullContent);
}

getApiContent("http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&channelId=itv&broadcaster=itv", "application/vnd.itv.default.production.v2+hal+json; charset=UTF-8", showProductions);
