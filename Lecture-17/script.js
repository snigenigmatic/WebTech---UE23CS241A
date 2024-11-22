// use JSON parser and stringyfy to convert object to string and vice versa
// JSON.parse() and JSON.stringify()
// JSON.parse() converts string to object
// JSON.stringify() converts object to string

// JSON.parse() example
/*let user = '{"name": "John", "age": 30}';
user = JSON.parse(user);
document.getElementById("demo").innerHTML = user.name + ", " + user.age;

// add year of birth and salary as object properties
user.birthYear = 1990;
user.salary = 2000;

str = JSON.stringify(user);
document.getElementById("demo2").innerHTML = str;
*/

// XML 
// XML stands for eXtensible Markup Language
// XML was designed to store and transport data

// parse XML and display data
/*
let parser = new DOMParser();
let xmlString = "<bookstore><book>" + "<title>Everyday Italian</title>" + "<author>Giada De Laurentiis</author>" + "<year>2005</year>" + "</book></bookstore>";
let xmlDoc = parser.parseFromString(xmlString, "text/xml");
document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

// create XML data from strings

let xmlDoc2 = document.implementation.createDocument("", "", null);
// print the data in XML format
let book = xmlDoc2.createElement("book");
bookstore.appendChild(book);
let title = xmlDoc2.createElement("title");
let titleText = xmlDoc2.createTextNode("Everyday Italian");
title.appendChild(titleText);
book.appendChild(title);
let author = xmlDoc2.createElement("author");
let authorText = xmlDoc2.createTextNode("Giada De Laurentiis");
author.appendChild(authorText);
book.appendChild(author);
let year = xmlDoc2.createElement("year");
let yearText = xmlDoc2.createTextNode("2005");
year.appendChild(yearText);
book.appendChild(year);
let xmlString2 = new XMLSerializer().serializeToString(xmlDoc2);
document.getElementById("demo2").innerHTML = xmlString2;
*/

// fetch implementation
const fetchData = () =>{
    mydiv = document.getElementById("demo");
    fetch('sample.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(text){
        mydiv.innerHTML = text;
    })
    .catch(function(error){
        console.log(error.message);
    })
}

// load the data from the fetch data function