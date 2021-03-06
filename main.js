// Showing all the Channels on Home Page with the corresponding images

// This function builds the content of "Home Page"
function showChannels(jsonData) {

    //Creating a "var channels" to make the code more readable
    var channels = jsonData._embedded.channels;

    //Creating a "createDocumentFragment" in order to inject the content into the "Home Page"
    var fullContent = document.createDocumentFragment();

    // Loops through the channels
    for (var i = 0; i < channels.length; i++) {

        // Create a new "div"
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "showChannelsMain");

        // Creating a html link (<a> tag), in order to build the url
        var hRef = document.createElement("a");
        var productionUrl = channels[i]._links.productions.href;
        // console.log(productionUrl);
        var productionChannel = getUrlParamsByName("channelId", productionUrl);
        hRef.setAttribute('href', "ProductionsPage/productions.html?channelId=" + productionChannel);

        //Create image
        var channelImage = document.createElement("img");
        channelImage.setAttribute("id", "channelImageMain");
        channelImage.setAttribute('src', channels[i]._links.backgroundImage.href);
        channelImage.setAttribute('alt', "Image of channel " + channels[i].channel);

        var getChannelLogos = document.createElement("img");
        getChannelLogos.setAttribute("id", "channelLogosMain");
        getChannelLogos.style.height = "3em";
        getChannelLogos.style.padding = "0.9em";
        getChannelLogos.setAttribute('src', channels[i]._links.primaryImage.href);
        // console.log(channels[i]._links.primaryImage.href);
        newDiv.appendChild(getChannelLogos);

        // Appending image into <a> tag
        hRef.appendChild(channelImage);
        // Adding <a> tag into the <div>
        newDiv.appendChild(hRef);

        // Now that the div is complete, adding to master DOM object
        fullContent.appendChild(newDiv);
        // console.log(channels[i]);
    }
    document.getElementById("allChannels").appendChild(fullContent);
}

getApiContent("http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/channels?broadcaster=ITV", "application/vnd.itv.default.channel.v1+hal+json; charset=UTF-8", showChannels);
