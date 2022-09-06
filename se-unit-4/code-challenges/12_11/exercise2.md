# Wednesday, December 11, 2019
## Code Challenge #2

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list `a`, which are present in list `b`.
If a value is present in `b`, all of its occurrences must be removed from the other:

```javascript
array_diff([1,2],[1]) == [2]
array_diff([1,2,2,2,3],[2]) == [1,3]
```
