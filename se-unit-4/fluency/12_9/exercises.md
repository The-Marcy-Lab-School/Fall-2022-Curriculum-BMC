# Fluency Challenge
## Monday, December 9, 2019

Today's fluency challenge requires you to go out and fetch data from an API and format that data to meet the needs of your application. The following commands return an object with two properties:
  * `info` which we won't use. This property contains information about our query
  * `results` this is what we want 😎. This property has a value of a 50 element array. Each element represents a user object.

Test these commands out in the console to explore the response data:
```javascript
const response = await fetch(https://randomuser.me/api/?results=50);
const data = await response.json();

data; // {results: Array(50), info: {...}}
```

### Fluency Challenges:
1. Return an array of the user emails.

2. Return an array of full names.
      ```javascript
      ['Mrs Emily Lawson', 'Ms Marita Smith', ..., 'Miss Phoebe Morales']
      ```
3. Return an array of `picture` `thumbnails` wrapped in an `<img>` tag.
      ```javascript
      ['<img src="https://randomuser.me/api/portraits/thumb/women/92.jpg">', '<img src="https://randomuser.me/api/portraits/thumb/women/55.jpg">']
      ```
4. Return the number of users who live in `"United Kingdom"`

5. Return the percentage of `females` in the sample.
