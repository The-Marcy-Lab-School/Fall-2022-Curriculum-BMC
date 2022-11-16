# [PEDAC](https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f)

### Challenge

Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the input number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored. The rules are as follows:
* If the phone number is less than 10 digits, assume that it is a bad number.
* If the phone number is 10 digits, assume that it is good.
* If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
* If the phone number is 11 digits and the first number is not 1, then it is a bad number.
* If the phone number is is more than 11 digits, assume that it is a bad number.
* If it is a good number, return a string of just the 10 digits.
* If it is a bad number, just a return a string of 10 '0's.

## Examples
```js
cleanNumbers('919-621-9388');  // '9196219388'
cleanNumbers('919-621-');      // '0000000000'
cleanNumbers('1-347-382-4493') // '3473824493'
cleanNumbers('2-347-382-4493') // '0000000000'
cleanNumbers('919-621-938845') // '0000000000'
```

## Edge Cases
```js
cleanNumbers("")                 // '0000000000'
cleanNumbers()                   // '0000000000'
cleanNumbers("919 621 9388")     // '9196219388'
cleanNumbers("whatever")         // '0000000000'
cleanNumbers("919x621x9388")     // '9196219388'
cleanNumbers([])                 // '0000000000'
```