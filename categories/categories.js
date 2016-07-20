//Display on the navigation bar all the avalable categories

//This function builds the list of the elements
function showCategories(jsonData) {

    //creating a "var categories" to make the code more readable
    var categories = jsonData._embedded.categories;

    //Creating a "createDocumentFragment" in order to inject the content into the "dropdown menu" from the navigation bar
    //var fullContent = document.createDocumentFragment();

    //Create a new <div> tag
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dropdownContent");

    //Loops through the categories
    for (var i = 0; i < categories.length; i++) {

        //Creating a <li> tag to list all the categories
        var categoriesList = document.createElement("li");
        console.log(categoriesList);
        var caList = document.createTextNode(categories[i].name);
        categoriesList.appendChild(caList);

        newDiv.appendChild(categoriesList);

        //fullContent.appendChild(newDiv);

    }
    document.getElementById("dropdownContent").appendChild(newDiv);
}

getApiContent("http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/categories?broadcaster=ITV", "application/vnd.itv.default.category.v1+hal+json; charset=UTF-8", showCategories);
