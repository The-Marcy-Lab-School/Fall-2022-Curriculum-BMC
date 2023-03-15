function main() {

    // HTML Elements
    const astroImageEl = document.querySelector("#astro-image");
    const latitudeEl = document.querySelector("#latitude");
    const longitudeEl = document.querySelector("#longitude");
    const sunriseEl = document.querySelector("#sunrise");
    const sunsetEl = document.querySelector("#sunset");

    // URLS to fetch from
    // 'https://go-apod.herokuapp.com/apod'
    // 'https://api.sunrise-sunset.org/json'


    // Astronomical Image

    // Fetch for the astronomical image here



    // Sunset/Sunrise 

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

            // Fetch sunrise/sunset data here

        })
    }

    
}

main()