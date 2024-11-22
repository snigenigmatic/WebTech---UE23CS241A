// geolocation functionality
// get the current position of the user
// if the user allows the location, the position will be displayed
// if the user denies the location, an error message will be displayed
// if the user's location is not available, an error message will be displayed
// if the user's location is not supported, an error message will be displayed
// if the user's location is not enabled, an error message will be displayed
// if the user's location is not found, an error message will be displayed
var x = document.getElementById("demo");
var y = document.getElementById("demo2");

const currentLocation = () =>{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else
    {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

const liveLocation = () => {
    if(navigator.geolocation)
    {
        navigator.geolocation.watchPosition(showPosition);
    }
    else
    {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

const showPosition = (position) => {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}