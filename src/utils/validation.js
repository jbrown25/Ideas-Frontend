//i'll work on this later
export validatePassword = password => {
	const requirements = /[a-zA-Z]+/; //or whatever
	
	return {
		valid: false,
		length: false,
		characters: false
	};
};