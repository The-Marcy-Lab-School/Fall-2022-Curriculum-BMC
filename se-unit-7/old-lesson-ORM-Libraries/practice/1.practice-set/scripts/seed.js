'use strict';

const { db, Customer, Address, Food, Reviews } = require('../models');

const customers = [
	{
		name: 'User 1',
		phoneNumber: '(555)555-5555',
		email: 'user1@email.com'
	},
	{
		name: 'User 2',
		phoneNumber: '(555)555-5555',
		email: 'user2@email.com'
	},
	{
		name: 'User 3',
		phoneNumber: '(555)555-5555',
		email: 'user3@email.com'
	}
];

const addresses = [
	{
		street: '123 M Ave',
		city: 'Cityville',
		state: 'OK',
		zipCode: 12345,
		customerId: 1
	},
	{
		street: '345 Nancy Ave',
		city: 'Drewston',
		state: 'OH',
		zipCode: 44567,
		customerId: 2
	},
	{
		street: '54 Old Clock Way',
		city: 'Carson',
		state: 'NV',
		zipCode: 56123,
		customerId: 3
	}
];

const foods = [
	{
		title: 'Duck Dinner',
		price: 45.5,
		description: 'Tasty duck! Buy it.',
		customerId: 2
	},
	{
		title: 'Vegetarian Dinner',
		price: 45.5,
		description: 'Tasty veggies! Buy it.',
		customerId: 2
	},
	{
		title: 'Pasta Dinner',
		price: 45.5,
		description: 'Tasty pasta! Buy it.',
		customerId: 1
	}
];
const reviews = [
	{
		title: 'great product',
		text:
			'I love this product so much, it makes my heart soar and my eyes fill with tears of joy',
		stars: 4,
		customerId: 1,
		foodId: 1
	},
	{
		title: 'eh',
		text: 'this was a nice skill, but it did not save my marriage',
		stars: 3,
		customerId: 2,
		foodId: 2
	},
	{
		title: 'I think I ordered the wrong thing',
		text:
			'I thought I was ordering a meal for delivery, but instead now I know how to cook it?? Very weird, but cool',
		stars: 5,
		customerId: 2,
		foodId: 3
	}
];

function seed() {
	return Promise.all(customers.map(customer => Customer.create(customer)))
		.then(() => Promise.all(foods.map(food => Food.create(food))))
		.then(() => Promise.all(addresses.map(address => Address.create(address))))
		.then(() => Promise.all(reviews.map(review => Reviews.create(review))))
		.catch(error =>
			console.error('There is an error seeding the database', error)
		);
}

//  `seed` function is separate from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
	console.log('seeding...');
	await db.sync({ force: true }); // tables didn't drop (ie. when npm run seed occured, Carts model still existed and Order model was not updated)
	try {
		await seed();
	} catch (err) {
		console.error(err);
		process.exitCode = 1;
	} finally {
		console.log('closing db connection');
		await db.close();
		console.log('db connection closed');
	}
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
	runSeed();
}

// we export the seed function for testing purposes
module.exports = seed;
