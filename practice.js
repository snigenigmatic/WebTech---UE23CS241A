// var weather;

// const date = new Promise(
//     (resolve, reject) => {
//         weather = true;
//         if(weather){
//             resolve('Today is sunny');
//         }
//         else{
//             reject('Today is rainy');
//         }
//     }
// );

// date
// .then((done) => {
//     console.log("We are going to the beach because " + done);
// })
// .catch((error) => {
//     console.log("We are going to the mall because " + error);
// })

$(document).ready(function() {
    // Fetch the XML file
    fetch('./data.xml')
        .then(response => response.text())
        .then(text => {
            // Parse the XML string
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, "text/xml");

            // Check for parsing errors
            if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
                // Use jQuery to print error in the document
                $("#error").html("Error in parsing XML");
            } else {
                // Serialize XML and display in success div
                const oSerializer = new XMLSerializer();
                const sXML = oSerializer.serializeToString(xmlDoc);
                $('#success').html(sXML+ "</br>");
            }
        })
        .catch(err => {
            // Handle any errors in fetching the XML
            $("#error").html("Failed to load XML file: " + err);
        });
});
// parse the data from data.json

// const data = require('./data.json');
// var myData = JSON.stringify(data);
// console.log(myData);

/*strinng parse to JSON*/
/*
var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
console.log(myObj);
console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.city);*/

