In bold are the key takeaways from each solution.

1. I notice that my output is an empty object. As of now, there is nothing explictly being exported from the `lab.js` file. **Module.exports defaults to an empty object**.

2. Now I notice that the output is an object with my three key-value pairs that I placed on the module.exports object. **The output looks this way becasue module.exports is an object like any other javascript object.**

3. `getFavoriteNumber` is defined within `lab.js` and then exported on the `modules.exports` object. Now I notice that the output is an object with another key-value pair that is a method! **The output looks this way becasue module.exports is an object like any other javascript object.**

4. Some people may predict that I'd see multiple console logs. Normally when functions are invoked multiple times, the output is viewed multiple times. However, **node caches modules after the first time they are loaded**. This means (among other things) that every call to require('./someFile') will get exactly the same object returned, if it would resolve to the same file. Provided require.cache is not modified, multiple calls to require('./someFile') will not cause the module code to be executed multiple times.
