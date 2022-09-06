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

// Question 1
users.map((user) => user.name);

// Question 2
users.filter(function(user) {
  return user.verified;
});

// Question 3
users.filter(function(user) {
  return user.followers < 1000;
});

// Question 4
function searchUsername(str) {
  return users.find((user) => user.name === str);
}

// Question 6
[1, 3, 5, ]