# Javascript Data Types Exercises

## Data Types

For each expression, predict what you think the output will be in a comment (`//`) ***without first running the command***. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

#### Example

```js
typeof("potato")
// Prediction: Vegetable
// Actual: String
```

What is the output of each of the expressions below?

```js
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof("hello")
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


"hamburger" + "s"
// Prediction:
// Actual:

"hamburgers" - "s"
// Prediction:
// Actual:

"1" + "3"
// Prediction:
// Actual:

"1" - "3"
// Prediction:
// Actual:

"johnny" + 5
// Prediction:
// Actual:

"johnny" - 5
// Prediction:
// Actual:

99 * "luftbaloons"
// Prediction:
// Actual:
```

What's going on in the second half of the previous question? Are there any "rules" we can pull from those examples?

## Booleans & Comparison Operators

Here's an example truth table for the `!` (not) operation. In it, we're listing the values of `!a` that correspond with a given value of `a`.

|a|!a|
|---|---|
|true|false|
|false|true|

Fill out the truth tables below for `&&` (and), `||` (or) and one that uses multiple comparison operators. All you need to do is replace the `?`'s with either `true` or `false`.

> **NOTE:** Because of markdown formatting, `||` and `&&` have been replaced with `OR` and `AND` respectively.
>
> **HINT:** With the last one, it may be helpful to add additional columns to the table for each individual comparison.

| a | b | a AND b |
| --- | --- | --- |
| true | true | ? |
| true | false | ? |
| false | true | ? |
| false | false | ? |

|a|b|a OR b|
|---|---|---|
|true|true|?|
|true|false|?|
|false|true|?|
|false|false|?|

|a|b|a `!=` b|
|---|---|---|
|3|3|?|
|1|5|?|
|2|"2"|?|

|a|b|!a AND (a OR b)|
|---|---|---|
|true|true|?|
|true|false|?|
|false|true|?|
|false|false|?|

<sup>Exercises adapted from [General Assembly](https://github.com/ga-wdi-exercises/js-data-types/blob/master/exercise.md)</sup>
