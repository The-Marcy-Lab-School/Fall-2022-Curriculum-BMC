window.addEventListener('load', () => {
	let long;
	let lat;

	let locationTimezone = document.querySelector('.location-timezone');

	let animatedIcon = document.querySelector('.animated-icon');

	let temperatureDegree = document.querySelector('.temperature-degree');
	let temperatureSpan = document.querySelector('.temperature-span');
	let temperatureDescription = document.querySelector(
		'.temperature-description'
	);

	let temperatureSection = document.querySelector('.temperature');

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;

			console.log('here is my position:', position);
			const proxy = 'https://cors-anywhere.herokuapp.com/';
			const api = `${proxy}https://api.darksky.net/forecast/9a1876b30001d14d532f6c8fa14e95a8/${lat},${long}`;
			fetch(api)
				.then(response => {
					return response.json();
				})
				.then(data => {
					console.log('Data returned from the Dark Sky API:', data);
					const { temperature, summary, icon } = data.currently;
					// Set DOM Elements from the API
					temperatureDegree.textContent = temperature;
					temperatureDescription.textContent = summary;
					locationTimezone.textContent = data.timezone;
					// Set icon
					setIcons(icon, animatedIcon);

					// Formula for Celsius
					let celsius = (temperature - 32) * (5 / 9);

					// Change temperature to Celsius/Farenheit
					temperatureSection.addEventListener('click', () => {
						if (temperatureSpan.textContent === 'F') {
							temperatureSpan.textContent = 'C';
							temperatureDegree.textContent = Math.floor(celsius);
						} else {
							temperatureSpan.textContent = 'F';
							temperatureDegree.textContent = temperature;
						}
					});
				})
				.catch(error => {
					console.error(
						`Please try again. There was an error when getting the local weather: ${error}`
					);
				});
		});
	}

	function setIcons(icon, iconID) {
		const skycons = new Skycons({ color: 'white' });
		const currentIcon = icon.replace(/-/g, '_').toUpperCase();
		skycons.add(iconID, Skycons[currentIcon]);
		skycons.play();
	}
});
