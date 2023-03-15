function main() {

    const astroImageEl = document.querySelector("#astro-image");
    const latitudeEl = document.querySelector("#latitude");
    const longitudeEl = document.querySelector("#longitude");
    const sunriseEl = document.querySelector("#sunrise");
    const sunsetEl = document.querySelector("#sunset");

    // Daily Astronomical Image

    fetch('https://go-apod.herokuapp.com/apod')
        .then(response => {
            console.log(response); // prints the `Response` object
            return response.json()
        })
        .then(jsonData => {
            console.log(jsonData)
            astroImageEl.src = jsonData.hdurl
        })
        .catch(error => { 
            console.log(error)
        });

    // Sunrise/Sunset

    latitudeEl.innerText = `Latitude: Loading...`;
    longitudeEl.innerText = `Longitude: Loading...`;
    sunriseEl.innerText = `Sunrise: Loading...`;
    sunsetEl.innerText = `Sunrise: Loading...`;
    
    // use the navigator API to get your device's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log('My General Position:', position);
            let long = position.coords.longitude;
            let lat = position.coords.latitude;

            fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today')
                .then(response => {
                    console.log(response); // prints the `Response` object
                    return response.json()
                })
                .then(jsonData => {
                    console.log(jsonData)
                    latitudeEl.innerText = `Latitude: ${lat}`;
                    longitudeEl.innerText = `Longitude: ${long}`;
                    sunriseEl.innerText = `Sunrise: ${jsonData.results.sunrise}`
                    sunsetEl.innerText = `Sunrise: ${jsonData.results.sunset}`
                })
                .catch(error => { 
                    console.log(error)
                });

        })
    }
}

main()