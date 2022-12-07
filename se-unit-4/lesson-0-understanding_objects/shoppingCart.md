# Shopping Cart - Object Practice

Do the following in a blank JavaScript file.

1. Create an object called `cart` using Object literal syntax (`{}`).
2. Add a `shopper` property to your `cart` object whose value is a string for the name of the shopper.
3. Add an `items` property to your `cart` object whose value is an empty array. This array will hold values of the form: `{ itemName, price }`
4. Add an `addItem` method to your `cart` object. It should accept two arguments: `itemName` and `price`. It should add an object to the `items` array with the form `{ itemName, price }`.
5. Invoke your `cart` obejct's `addItem` method 3 times on your `cart`, adding in the following items:
    * `'Apple'` with a price of `1`
    * `'Banana'` with a price of `0.5`
    * `'Cherry'` with a price of `2.5`
6. Print your `cart` object's `item` array to the console. You should see an array with the three item objects that you just added.
7. Add a `getTotal` method to your `cart` object. It should calculate and return the sum of the prices of all of your cart's items.
8. Invoke your `cart` object's `getTotal` method and print the returned value to the console. If you've been following along, it should return `4`.
9. Add a `removeItem` method. It should accept one argument: `itemName`. It should find the provided item your cart's `items` array and remove it if it is found. 
10. Invoke your `cart` object's `removeItem` method passing in one of your cart's items.
11. Print your `cart` object's `items` array to the console. You should NOT see the removed item.
12. Add a `removeMostExpensiveItem` method. It should find the most expensive item in your cart's `items` array and remove it.
13. Invoke your `cart` object's `removeMostExpensiveItem` method passing in one of your cart's items.
14. Print your `cart` object's `items` array to the console. You should NOT see the removed item.