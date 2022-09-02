const {
  add,
  subtract,
  multiply,
  square,
  squareRoot,
  greet,
  goodbye,
  askTime,
  convertToMinutes,
  fahrenheitToCelsius,
  absoluteValue,
  isPositive,
  isSquare,
  canVote,
  ageGroup,
  triangle
} = require('./submission.js');

test('add function works as expected', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(8, 2)).toBe(10);
  expect(add(-1, 5)).toBe(4);
  expect(add(2.5, 3.25)).toBe(5.75);
});

test('subtract function works as expected', () => {
  expect(subtract(1, 2)).toBe(-1);
  expect(subtract(8, 2)).toBe(6);
  expect(subtract(-1, 5)).toBe(-6);
  expect(subtract(2.5, 3.25)).toBe(-0.75);
});

test('multiply function works as expected', () => {
  expect(multiply(1, 2)).toBe(2);
  expect(multiply(8, 2)).toBe(16);
  expect(multiply(-1, 5)).toBe(-5);
  expect(multiply(2.5, 3.25)).toBe(8.125);
});

test('square function returns the original number multipled by itself', () => {
  expect(square(5)).toBe(25);
  expect(square(1)).toBe(1);
  expect(square(-10)).toBe(100);
  expect(square(2.5)).toBe(6.25);
});

test('squareRoot function returns the square root of the number', () => {
  expect(squareRoot(25)).toBe(5);
  expect(squareRoot(1)).toBe(1);
  expect(squareRoot(100)).toBe(10);
  expect(squareRoot(6.25)).toBe(2.5);
});

test('greet function matches exactly', () => {
  expect(greet("Ann")).toBe("Hello, Ann!");
  expect(greet("Reuben")).toBe("Hello, Reuben!");
  expect(greet("fellows")).toBe("Hello, fellows!");
  expect(greet("Maya")).toBe("Hello, Maya!");
  expect(greet("")).toBe("Hello, !");
});

test('goodbye function matches exactly', () => {
  expect(goodbye("Ann")).toBe("Goodbye, Ann.");
  expect(goodbye("Reuben")).toBe("Goodbye, Reuben.");
  expect(goodbye("fellows")).toBe("Goodbye, fellows.");
  expect(goodbye("Maya")).toBe("Goodbye, Maya.");
  expect(goodbye("")).toBe("Goodbye, .");
});

test('askTime function matches exactly', () => {
  expect(askTime("Ann")).toBe("Ann, do you know what time it is?");
  expect(askTime("Reuben")).toBe("Reuben, do you know what time it is?");
  expect(askTime("fellows")).toBe("fellows, do you know what time it is?");
  expect(askTime("Maya")).toBe("Maya, do you know what time it is?");
  expect(askTime("")).toBe(", do you know what time it is?");
});

test('convertToMinutes function works as expected', () => {
  expect(convertToMinutes(5)).toBe(300);
  expect(convertToMinutes(2.25)).toBe(135);
  expect(convertToMinutes(1)).toBe(60);
  expect(convertToMinutes(100)).toBe(6000);
});

test('fahrenheitToCelsius function works as expected with no rounding', () => {
  expect(fahrenheitToCelsius(212)).toBe(100);
  expect(fahrenheitToCelsius(32)).toBe(0);
  expect(fahrenheitToCelsius(50)).toBe(10);
  expect(fahrenheitToCelsius(140)).toBe(60);
});

test('absoluteValue function works for positive numbers', () => {
  expect(absoluteValue(1)).toBe(1);
  expect(absoluteValue(99)).toBe(99);
  expect(absoluteValue(1.1)).toBe(1.1);
});

test('absoluteValue function works for zero', () => {
  expect(absoluteValue(0)).toBe(0);
});

test('absoluteValue function works for negative numbers', () => {
  expect(absoluteValue(-99)).toBe(99);
  expect(absoluteValue(-5)).toBe(5);
  expect(absoluteValue(-1.1)).toBe(1.1);
});

test('isPositive function returns true for positive numbers', () => {
  expect(isPositive(1)).toBe(true);
  expect(isPositive(1.1)).toBe(true);
  expect(isPositive(99)).toBe(true);
});

test('isPositive function returns null for zero', () => {
  expect(isPositive(0)).toBe(null);
});

test('isPositive function returns false for negative numbers', () => {
  expect(isPositive(-5)).toBe(false);
  expect(isPositive(-5.5)).toBe(false);
});

test('isSquare function checks for squares and that all values are equal', () => {
  expect(isSquare(6, 6, 6, 6)).toBe(true);
  expect(isSquare(Math.PI, Math.PI, Math.PI, Math.PI)).toBe(true);
});

test('isSquare function checks for nonsquares', () => {
  expect(isSquare(1, 2, 2, 2)).toBe(false);
  expect(isSquare(8, 7, 8, 8)).toBe(false);
  expect(isSquare(8, 8, 9, 8)).toBe(false);
  expect(isSquare(3, 3, 3, 4)).toBe(false);
});

test('canVote function returns true if the person can vote', () => {
  expect(canVote(21, true)).toBe(true);
  expect(canVote(18, true)).toBe(true);
});

test('canVote function checks if you are not a citizen', () => {
  expect(canVote(18, false)).toBe(false);
  expect(canVote(17, false)).toBe(false);
});

test('canVote function checks if you are the right age', () => {
  expect(canVote(17, true)).toBe(false);
  expect(canVote(17, false)).toBe(false);
});

test('ageGroup function works for children', () => {
  expect(ageGroup(11)).toBe("You're still a child");
  expect(ageGroup(12)).toBe("You're still a child");
});

test('ageGroup function works for teenagers', () => {
  expect(ageGroup(13)).toBe("Now you're a teenager");
  expect(ageGroup(17)).toBe("Now you're a teenager");
  expect(ageGroup(18)).toBe("Now you're a teenager");
});

test('ageGroup function works for adults', () => {
  expect(ageGroup(19)).toBe("Welcome to adulthood");
  expect(ageGroup(64)).toBe("Welcome to adulthood");
});

test('ageGroup function works senior citizens', () => {
  expect(ageGroup(65)).toBe("You are a senior citizen");
  expect(ageGroup(66)).toBe("You are a senior citizen");
});

test('triangle function works for acute triangles', () => {
  expect(triangle(60, 70, 50)).toBe("acute");
  expect(triangle(65, 60, 55)).toBe("acute");
});

test('triangle function works for right triangles', () => {
  expect(triangle(30, 90, 60)).toBe("right");
  expect(triangle(90, 45, 45)).toBe("right");
  expect(triangle(45, 45, 90)).toBe("right");
});

test('triangle function works for obtuse triangles', () => {
  expect(triangle(120, 50, 10)).toBe("obtuse");
  expect(triangle(15, 50, 115)).toBe("obtuse");
  expect(triangle(50, 120, 10)).toBe("obtuse");
});

test('triangle function returns invalid if angles do not add up to 180', () => {
  expect(triangle(50, 50, 50)).toBe("invalid");
  expect(triangle(10, 15, 200)).toBe("invalid");
});

test('triangle function returns invalid if there is a 0 angle', () => {
  expect(triangle(0, 90, 90)).toBe("invalid");
  expect(triangle(0, 180, 0)).toBe("invalid");
  expect(triangle(100, 0, 80)).toBe("invalid");
});
