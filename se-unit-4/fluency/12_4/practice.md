# Fluency Practice
## Wednesday, December 4, 2019

For today's questions, we will perform all of our operations on the following array, `users`.

```javascript
const users = [
  { name: 'Reuben O.',
    username: '@blood_pressure_killa',
    followers: 7,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Laisha C',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Anne H.',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  { name: 'Steph S.',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  { name: 'Carmen S',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  },
]
```

1. Return an array of all of the `name`s of the users.

2. We want all of the celebrities. Return an array of only the `verified` users.

3. Give me the folks who are struggling. Return an array of all of the users with less than 1000 `followers`.

4. Write a function, `searchUsername`, that takes a string and returns the user object whose `username` matches the string parameter.

5. Who is most long-winded? Return the object with the longest bio.

6. Return an array sorted by `follower` count, least to greatest.
