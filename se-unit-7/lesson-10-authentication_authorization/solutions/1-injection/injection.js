const getCurrentUser = email => {
	return User.where({ email: email });
};
