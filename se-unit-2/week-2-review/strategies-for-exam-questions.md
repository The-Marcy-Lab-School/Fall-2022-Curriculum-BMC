# How to Approach Coding Questions
Coding exams and interviews can be scary. They are almost a skill separate from coding becuase they can feel so different to how you normally code. But like all things, learning strategies and processes can really help you.

# Working Through A Problem
Lets take this example question from your guide:

```plaintext
Write a function that takes a string, doubles every consonant character in the string, 
and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'),
digits, punctuation, or whitespace.

Examples:

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
```

This is a pretty standard layout, you have the prompt and then separate test cases of expected behavior.

## Overview
We'll go through step by step but the overall strategy when approaching problems is:
1. Read the question carefully and calmly
2. Solve the problem in pseudo-code/talking-out-loud before coding
3. Break your solution down into very small steps
4. Every time you code one of your steps, run your function to test your assumptions
5. BEWARE OF TYPOS

Ok, now let's actually solve this example problem.

## The 10 Steps
1. Read over the entire question slowly. Look over the prompt and the test cases as well.

2. Take a breath and wait for 5-10 seconds. Give your brain a chance to acclimate to what it just read.

3. Go back re-read the entire question. By coming at it again, now you should be crystal clear on what is being asked of you.

4. Copy the question prompt as a comment into your editor. This will save you time so you don't have to keep switching away from your code every time you want to double check the prompt.

5. Then, copy over the test examples as *actual* code. These will be your first test cases (you may want to wrap them in console logs). If no test cases are provided, you should write some yourself, so maybe something like:

```js
console.log(doubleConsonants('  ')) // "  "
console.log(doubleConsonants('s')) // "s"
console.log(doubleConsonants('y')) // "yy"
```

6. Write out the `doubleConsonants` function with its parameters and a dummy return value, and run the file. This makes sure you didn't misspell the function and can see that tests run but don't return the desired output yet.

7. With your file running, your nerves calmed, it's time to talk out how you would solve this:

> "Ok so I can't mutate a string, which means I will have to turn this string into something else to double things, and then convert it back to a string to return it. Alright, so what if I convert the string into an array, then iterate through it. I'll check each value against a regex of consonants. If it finds a consonant, I'll double the value at the index, if not, I'll do nothing. Once I've finished iterating through the whole thing, I'll join the array back into a string and return it. That's it!

8. Now that we talked it through, break that down into code tasks:

    - turn string to array
    - iterate through array
    - create consonant regex
    - compare array values to regex
    - double value at index if true, else do nothing
    - rejoin array to string
    - return string

I love checklists, they keep focus and give a sense of progress that fights off nerves. You don't have to literally write it down, just keep it in mind.

9. Work through your tasks, and as you code each one, run your code. Every idea that you code, test it. Constantly double check your work to ensure that no time is wasted on incorrect assumptions. The testing feels slow, but it's going to save time in the long run.

10.  Once you have coded and tested your solution and it *works* you have two options: Check for any refactors or move on to the next question. While it may be tempting to refactor, the only thing that matters at the moment is that you have found a solution. Move on to the next question, and if there is time at the end, come back to clean up your work.
> **Refactor** is a fancy programming word that means "cleaning up and optimizing your code"

# Common Questions
## What if I can't think of an answer?
Don't ever waste too much time on a single question. The important thing is to just get *something* down. Go through the steps and get as far as you can, but if you feel well and truly stuck, move on to the next exam question. It's possible that one question may hit your blind spot, but the other questions are better for you. It's a common test taking strategy to read over *all* the questions to see if there are answers you can focus on first, just to keep that essential forward momentum.

Just don't spend too much time analyzing the exam that you don't have time to answer the questions!

## What if I have a question?
If you are ever taking a test, or a company gives you a take home assignment for an interview, it's possible you may have questions. There are a few things you can do. First, you can reach out to the test taker to ask for clarification. Point out your *exact* point of confusion, and provide possible examples as to what you think they meant.

```plaintext
// BAD
"This question is confusing, what does it mean?"

// GOOD
"The question says we aren't allowed to use 'new array methods.' Sometimes, people include the spread operator in that list, while other people only mean the array iterator methods. Am I allowed to use a spread operator in this question?"
```

But, if you can't (or aren't allowed to) contact the person who is giving the test, then what you should do is make an educated guess as to what they meant, specify that in a comment, and move on.

```js
const doAThingHere = function (originalArr) {
  // I wasn't sure if ... counted as a new method, so I'm cloning
  // with a for loop instead of doing [...originalArr]
  const cloneArr = []
  for (let i = 0; i < originalArr.length; i++) {
    clone[i] = originalArr[i]
  }
```
The important thing is that you just keep moving. Code tests are about seeing what you know, so the more code you are able to write, the better the company can understand your skills.

## Mike, have you written any helpful blogs?
Oh man, I actually have! This article has some [tips for in person interview questions,](https://levelup.gitconnected.com/some-non-code-tips-for-coding-interviews-e0c9423ec76d?sk=9906e4507d86aed62c081113bfd101c0)
and this one helps you think about [how to ask questions effectively.](https://medium.com/the-marcy-lab-school/how-to-ask-questions-as-a-jr-dev-236207de3d55)
