const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');

/** Target main element */
const main = document.getElementById('main');

/**
 * Loading a placeholder is a helpful technique when waiting for requests
 * to be resolved. Users will have more visual cues to ensure that the web app
 * is functioning. Blank white pages can lead users to think there is an error,
 * which can lead users to believe a service/web app is unreliable.
 */
main.innerHTML = '<p>Loading...';

/**Fetch data */
fetchPromise
	.then(response => {
		return response.json();
	})
	.then(people => {
		/** To ensure your http request is working, can first write a console.log()
		 * such as:
		 * console.log(people);
		 */
		/* Append names tot he main element */
		main.innerHTML = listOfNames(people);
	});

function listOfNames(people) {
	const names = people.map(person => `<li>${person.name}</li>`).join('\n');
	return `<ul>${names}</ul>`;
}
