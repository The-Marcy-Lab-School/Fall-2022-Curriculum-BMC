module.exports.cake = 'chocolate';
module.exports.weather = 'rainy';
module.exports.day = 'tuesday';

const getFavoriteNumber = () => {
	const favoriteNumber = 33;
	return favoriteNumber;
};

module.exports.getFavoriteNumber = getFavoriteNumber;
console.log(`Here are my module.exports:`, module.exports);
