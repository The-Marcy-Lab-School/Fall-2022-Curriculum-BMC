# Lesson 4: Putting it All Together

For this lesson, we're going to build on everything you've learned during this unit by building a simplified version of America's favorite game show: Wheel of Fortune! Here's how it will work. 

1. Your application should choose a random word. You can use the `getRandomWord` function we've included for you (based on the `random-words` npm package.)
2. Display the word to the user using underscores to replace each letter. For example, if the word is "horse", you would dispaly "- - - - - ".
3. When the user clicks start, reveal any instances of the letters R,S,T,L,N, or E. Using the "horse" example above, we would then display: "_ _ R S E"
4. Via a form input, the user can then guess 3 constanants and one vowel. For example, the user might enter "B C D A" and press enter. You should validate to make sure that they enter a valid statement. 
5. Finally, allow the user to submit a guess at what the word is, and tell them if they're right or wrong. 

Some notes to help you as you work through the prompt. 

1. We've given you some basic starter files in this directory - feel free to create additional files as needed. 
2. The exact flow/UI is up to you, but try to give you users feedback as much as possible. For example, let them know which letters have already been guessed. 
3. How you organize the project is up to you, but try to keep your functions neatly organized. 

## Bonus

In the real Wheel of Foturne, players can guess as many words as they like during a ten second window. Update your app to:

1. Display a ten second countdown
2. Allow the user to guess during the countdown. If the win, the countdown should stop and they should be alerted that they won.
3. If the timer reaches zero, let them know that they did not win. 

