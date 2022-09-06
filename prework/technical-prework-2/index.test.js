const {
  firstElement,
  lastElement,
  arrayLength,
  sequence,
  sum,
  average,
  multiplicativeAverage,
  addList,
  negatedArray,
  doubleArray,
  multiplyList,
  introducePerson,
  canVote
} = require('./index');

test('firstElement function works', () => {
  expect(firstElement(['hello', 1, true, 6])).toBe('hello');
  expect(firstElement([2, 3, 'hi'])).toBe(2);
  expect(firstElement([true, false])).toBe(true);
});

test('firstElement function works for an empty array', () => {
  expect(firstElement([])).toBe(undefined);
});

test('lastElement function works', () => {
  expect(lastElement(['hello', 1, true, 6])).toBe(6);
  expect(lastElement([2, 3, 'hi'])).toBe('hi');
  expect(lastElement([true, false])).toBe(false);
});

test('lastElement function works for an empty array', () => {
  expect(lastElement([])).toBe(undefined);
});

test('arrayLength function works', () => {
  expect(arrayLength([2, 3, 'hi'])).toBe(3);
  expect(arrayLength(['hello', 1, true, 6])).toBe(4);
  expect(arrayLength([true, false])).toBe(2);
});

test('arrayLength function works for an empty array', () => {
  expect(arrayLength([])).toBe(0);
});

test('sequence function works', () => {
  expect(sequence(5)).toEqual([1, 2, 3, 4, 5]);
  expect(sequence(3)).toEqual([1, 2, 3]);
  expect(sequence(1)).toEqual([1]);
});

test('sum function works', () => {
  expect(sum([6, 7, 8])).toBe(21);
  expect(sum([-100, 2, 1])).toBe(-97);
  expect(sum([-100, -2, -1])).toBe(-103);
  expect(sum([1.0001, 2, 3])).toBe(6.0001);
});

test('sum function works for an empty array', () => {
  expect(sum([])).toBe(0);
});

test('average function works', () => {
  expect(average([1, 2, 6])).toBe(3);
  expect(average([1, 2, 3])).toBe(2);
  expect(average([1, 2, 6, 8])).toBe(4.25);
  expect(average([-1, 2, 5])).toBe(2);
});

test('multiplicativeAverage function works', () => {
  expect(multiplicativeAverage([3, 5])).toBe(7.5);
  expect(multiplicativeAverage([2, 5, 7, 11, 13])).toBe(2002);
});


test('doubleArray function works', () => {
  expect(doubleArray([3, 6, 8])).toEqual([6, 12, 16]);
  expect(doubleArray([3.25, -2, 5.5])).toEqual([6.5, -4, 11]);
  expect(doubleArray([-1, 4, -3])).toEqual([-2, 8, -6]);
  expect(doubleArray([10, 20, 30])).toEqual([20, 40, 60]);
});

test('doubleArray function works for an empty array', () => {
  expect(doubleArray([])).toEqual([]);
});

test('negatedArray function works', () => {
  expect(negatedArray([3, 6, 8])).toEqual([-3, -6, -8]);
  expect(negatedArray([3.25, -2, 5.5])).toEqual([-3.25, 2, -5.5]);
  expect(negatedArray([-1, 4, -3])).toEqual([1, -4, 3]);  
  expect(negatedArray([1, 2, 3])).toEqual([-1, -2, -3]);
});

test('negatedArray function works for an empty array', () => {
  expect(negatedArray([])).toEqual([]);
});

test('addList function works', () => {
  expect(addList([3, 5, 7], [9, 10, 11])).toEqual([12, 15, 18]);
  expect(addList([5, 10, 15, 20], [1, 2, 3, 4])).toEqual([6, 12, 18, 24]);
  expect(addList([1, 2, 3, 4], [1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
});

test('multiplyList function works', () => {
  expect(multiplyList([3, 5, 7], [9, 10, 11])).toEqual([27, 50, 77]);
  expect(multiplyList([5, 10, 15, 20], [1, 2, 3, 4])).toEqual([5, 20, 45, 80]);
  expect(multiplyList([1, 1, 1, 1], [1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test('introducePerson function matches exactly', () => {
  expect(introducePerson({name: 'Ann', age: 29})).toBe("My name is Ann. I am 29 years old.");
  expect(introducePerson({age: 30, name: 'Maya'})).toBe("My name is Maya. I am 30 years old.");
  expect(introducePerson({name: 'Reuben', age: 31})).toBe("My name is Reuben. I am 31 years old.");
});

test('canVote function works', () => {
  expect(canVote({age: 20, isCitizen: true})).toBe(true);
  expect(canVote({age: 16, isCitizen: true})).toBe(false);
  expect(canVote({isCitizen: false, age: 30})).toBe(false);
  expect(canVote({age: 7, isCitizen: false})).toBe(false);
});
