
function displayISSLoc(lat, lon) {
    document.getElementById("lat").innerText = lat
    document.getElementById("lon").innerText = lon
    document.getElementById("results").style.display = "block"
}

function findISS() {

    fetch("https://api.wheretheiss.at/v1/satellites/25544") // fetch returns a Promise object containing the response

    .then(res => {
        if (res.ok) {
            console.log("API Lookup successful"); // Console success message
            return res.json(); // convert response to json data
        } else {
            console.log("API Lookup unsuccessful"); // Console failure message
        }
    })

    .then(data => { // copy over atitude and longitude data to hash table
        var coord = {};
        var lat = data['latitude'];
        var lon = data['longitude'];
        displayISSLoc(lat, lon);
    })

};

// function findNearestCountry()

// function findNearestCity()

// function embedLivestream()
