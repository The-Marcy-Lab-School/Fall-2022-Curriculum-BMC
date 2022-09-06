// Question 1 
const halved = numArr => numArr.map(num => num / 2);

// Question 2
const onlyPositive = numArr => numArr.filter(num => num > 0);

// Question 3
const sum = numArr => numArr.reduce((total, num) => total + num);

// Question 4
const strippedStrings = strArr => strArr.map(str => str.replace(/[^a-z0-9]/g, ''));

// Question 5
const findSpecial = strArr => strArr.indexOf("special");

// Question 6
const validContacts = function(contacts) {
  return contacts.filter((contact) => contact.phoneNumber.match(/^\d{10}$/));
}

// Question 7
const contactNames = function(contacts) {
  return contacts.map(contact => contact.name);
}