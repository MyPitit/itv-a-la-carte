// "Productions Page" shoing all the "productions" for each Channel

function allData(inputData) {
    showCurrentEpisode(inputData);
    showOtherEpisodes(inputData);
}

// This function builds the content of the "Productions Page"
function showCurrentEpisode(jsonData) {

    // Creating a "var productions" to make the code more readable
    var productions = jsonData._embedded.productions;

    // Creating a "createDocumentFragment" in order to inject the content inot the "Productions Page"
    var fullContent = document.createDocumentFragment();

    // Loops through the productions
    for (var i = 0; i < productions.length; i++) {

        var episodeID = productions[i].episodeId;
        var programmeID = productions[i].programmeId;

        if (myEpisodeId === episodeID && myProgrammeId === programmeID) {

            // Create a new "div" + styling
            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "showCurrentEpisode");
            // console.log(productions[i]);

            // Create a new <h1> tag with the title of the programme
            var productionTitle = document.createElement("h1");
            productionTitle.setAttribute("id", "productionTitleProg");
            // console.log(productionTitle);
            var title = document.createTextNode(productions[i].programmeTitle);
            productionTitle.appendChild(title);
            newDiv.appendChild(productionTitle);

            // Create image
            var productionImage = document.createElement("img");
            productionImage.setAttribute("id", "productionImage");
            productionImage.setAttribute("src", productions[i]._links.image.href);
            productionImage.setAttribute("alt", "Image of production " + productions[i].channel);
            newDiv.appendChild(productionImage);

            // Create a <p> tag with the corresponding categories
            var categorieName = document.createElement("p");
            categorieName.setAttribute("id", "categorieNameProgramme");
            // console.log(productionTitle);
            var caName = document.createTextNode(productions[i].categories);
            categorieName.appendChild(caName);
            newDiv.appendChild(categorieName);

            // Create a <p> tag with the corresponding duration of the programme
            var programmeDuration = document.createElement("p");
            programmeDuration.setAttribute("id", "programmeDuration");
            var porDuration = document.createTextNode("Duration: " + productions[i].duration);
            programmeDuration.appendChild(porDuration);
            newDiv.appendChild(programmeDuration);

            // Create a <p> tag with the date
            var programmeDate = document.createElement("p");
            programmeDate.setAttribute("id", "programmeDate");
            var proDate = document.createTextNode(productions[i].broadcastDateTime.displayFormat);
            programmeDate.appendChild(proDate);
            newDiv.appendChild(programmeDate);

            // Create a <p> tag with the synopsis
            var programeSynopsis = document.createElement("p");
            programeSynopsis.setAttribute("id", "programeSynopsis");
            var proSynopsis = document.createTextNode(productions[i].synopsis);
            programeSynopsis.appendChild(proSynopsis);
            newDiv.appendChild(programeSynopsis);

            // Create a <p> tag with the availability
            var programmeAvailability = document.createElement("p");
            programmeAvailability.setAttribute("id", "programmeAvailability");
            var proAvailability = document.createTextNode(productions[i].availabilityEnd.displayFormat);
            programeSynopsis.appendChild(proAvailability);
            newDiv.appendChild(programmeAvailability);

            // Now that the div is complete, adding to master DOM object
            fullContent.appendChild(newDiv);
            //console.log(productions[i]);

        }
    }
    document.getElementById("programme").appendChild(fullContent);
}

function showOtherEpisodes(jsonData) {
    // Creating a "var productions" to make the code more readable
    var productions = jsonData._embedded.productions;

    // Creating a "createDocumentFragment" in order to inject the content inot the "Productions Page"
    var fullContent = document.createDocumentFragment();

    // Create sempahore for counting episodes
    var loopNumberOfEpisodes = 0;

    // Loops through the productions
    for (var i = 0; i < productions.length; i++) {

        // console.log(productions[i]);
        var episodeID = productions[i].episodeId;
        var programmeID = productions[i].programmeId;

        if (myProgrammeId === programmeID) {
            loopNumberOfEpisodes++;
            // console.log(loopNumberOfEpisodes);
        }

        if (myEpisodeId != episodeID && myProgrammeId === programmeID) {
            // Create a new "div"
            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "showOtherEpisodes");

            // Create a href link to this episode
            var hRef = document.createElement("a");
            var productionsEpisode = productions[i].episodeId;
            hRef.setAttribute("border", 0);
            hRef.setAttribute('href', "?episodeId=" +  productionsEpisode + "&programmeId=" + myProgrammeId + "&broadcaster=itv");
            newDiv.appendChild(hRef);

            // Get Image for episode
            var episodeImage = document.createElement("img");
            episodeImage.setAttribute("id", "otherEpisodesImage");
            episodeImage.setAttribute("src", productions[i]._links.image.href);
            hRef.appendChild(episodeImage);

            // Get title for episode
            var episodeTitle = document.createElement("div");
            episodeTitle.setAttribute("id", "otherEpisodesTitle");
            var title = document.createTextNode(productions[i].programmeTitle + " " + productions[i].broadcastDateTime.displayFormat);
            episodeTitle.appendChild(title);
            hRef.appendChild(episodeTitle);

            // Now that the div is complete, adding to master DOM object
            fullContent.appendChild(newDiv);
        }
    }

    // Show this only if loopNumberOfEpisodes is less than 2
    if ( loopNumberOfEpisodes < 2 ) {

        // Here we say that there are no more episodes available
        var noEpisodes = document.createElement("p");
        noEpisodes.setAttribute("id", "noEpisodes");
        var noEpisodesText = document.createTextNode("No more episodes available.");
        noEpisodes.appendChild(noEpisodesText);
        fullContent.appendChild(noEpisodes);
    }
    document.getElementById("moreEpisodes").appendChild(fullContent);
}

// global vars that we capture from querystring
var myEpisodeId = getUrlParamsByName("episodeId");
var myProgrammeId = getUrlParamsByName("programmeId");

getApiContent("http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?programmeId=" + myProgrammeId + "&broadcaster=itv", "application/vnd.itv.default.production.v2+hal+json; charset=UTF-8", allData);
