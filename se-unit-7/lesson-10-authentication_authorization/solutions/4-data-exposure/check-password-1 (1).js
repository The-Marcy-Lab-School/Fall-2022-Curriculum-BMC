const checkPassword = textInput => {
	const password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
	if (textInput.value.match(password)) {
		alert('Correct, try another...');
		return true;
	} else {
		alert('Wrong...!');
		return false;
	}
};
