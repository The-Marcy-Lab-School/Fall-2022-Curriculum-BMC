const fizzbuzz = require('./index');

describe('fizzbuzz', () => {
  test('given 1, it returns 1', () => {
    expect(fizzbuzz(1)).toEqual(1);
  });

  test('given 2, it returns 2', () => {
    expect(fizzbuzz(2)).toEqual(2);
  });

  test('given 3, it returns "Fizz"', () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
  });

  test('given 5, it returns "Buzz"', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
  });

  test('given number divisble by 3, it returns "Fizz"', () => {
    expect(fizzbuzz(6)).toEqual('Fizz');
    expect(fizzbuzz(9)).toEqual('Fizz');
  });

  test('given number divisble by 5, it returns "Fizz"', () => {
    expect(fizzbuzz(10)).toEqual('Buzz');
    expect(fizzbuzz(20)).toEqual('Buzz');
  });

  test('given 15, it returns "FizzBuzz"', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
  });

  test('given number divisble by 15, it returns "FizzBuzz"', () => {
    expect(fizzbuzz(30)).toEqual('FizzBuzz');
    expect(fizzbuzz(90)).toEqual('FizzBuzz');
  });
})
