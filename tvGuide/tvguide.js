//Adding elements to the <div> table for the TV Guide Page.

//This function displays the images (logos) into the <div> table
function currentProductions(jsonData) {

    // Creating a "var productions" to make the code more readable
    var channels = jsonData._embedded.channels;
    //console.log(jsonData._embedded.channels);

    //Create a new "div"
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "channelLogos");

    //Loops through the channels
    for (var i = 0; i < channels.length; i++) {

        var getChannelLogos = document.createElement("img");
        getChannelLogos.style.height = "3em";
        getChannelLogos.style.padding = "0.9em";
        getChannelLogos.setAttribute('src', channels[i]._links.primaryImage.href);
        //getChannelLogos.setAttribute('alt', "Image of channel " + productions[i].channel);
        //console.log(productions[i]._links.primaryImage.href);

        newDiv.appendChild(getChannelLogos);

    }
    document.getElementById("channelLogos").appendChild(newDiv);
}

getApiContent("http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/channels?broadcaster=ITV", "application/vnd.itv.default.channel.v1+hal+json; charset=UTF-8", currentProductions);


//This function gets the production times: "broadcastDateTime"
function currentTimeProductions(jsonData) {

    var timeProductions = jsonData._embedded.productions;

    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "Row");

    for (var i = 0; i < timeProductions.length; i++) {

        var times = document.createElement("p");
        var getTimeIso =
        console.log(times);
        var timesPro = document.createTextNode(timeProductions[i].broadcastDateTime.displayFormat);
        times.appendChild(timesPro);

        newDiv.appendChild(currentTimeProductions);
    }
    document.getElementById("Row").appendChild(newDiv);
}

getApiContent("http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&channelId=itv&broadcaster=itv", "application/vnd.itv.default.production.v2+hal+json; charset=UTF-8", currentTimeProductions);
