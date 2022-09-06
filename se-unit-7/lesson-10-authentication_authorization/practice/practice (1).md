# Practice Exercises

## Authorization and Authentication

### Exercise 1 - Cross-Site Scripting

- (3 min) Read about the threats of [cross-site scripting](<https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)>)

- Look at the following code:
    <div innerHTML="{{dynamicContent}}"></div>

**1. What are the dangers of allowing this line of code in a production application?**

**2. Describe the threat taking place in the below code block.**

<script>
    const xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:3000/fake/page',true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send('textName=xss&TextMessage=xss&btnSign=Sign+SecretBook');
</script>

### Exercise 2 - Session Fixation/Broken Authentication

- (3 min) Read about the threats of [broken authentication](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A2-Broken_Authenticationl).

**1. In as much detail as possible, describe a hypothetical scenario where an Attacker could gain access to a Victim's bank account by using session identifiers.**

### Exercise 3 - Injection

- (3 min)Read about the threat of [injection flaws](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A1-Injection).
- Using an ORM does not automatically make you immune to SQL injection, however. Many ORM frameworks allow you to construct SQL statements, or fragments of SQL statements, when more complex operations need to be performed on the database. For example, the following code is vulnerable to injection attacks:

```javascript
const getCurrentUser = email => {
	return User.where(`email = '" + ${email} + "'`);
};
```

**1. What makes this vulnerable code?**

- Open the [`injection.js`](/lesson-7-authentication_authorization/practice/exercises/1-injection/injection.js) file.

**2. Refactor the `getCurrentUser()` function so that it is more secure.**

### Exercise 4 - Security Misconfiguration/ Exposing Secrets

- (3 min) Read about the threat of [unprotected application secrets](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A6-Security_Misconfiguration).

- (1 min) Recall your [weather app project](https://github.com/The-Marcy-Lab-School/se-unit-6/blob/problem-set/problem-set/solutions/coding-exercises/solutions.js)? Open source code and posting code on GitHub (or similar sites), makes it easy to expose code to security threats. The weather app project exposes several API keys.

**1. What is the danger of exposing API keys like this in your app?**

**2. Using the [weather-app.js](/lesson-7-authentication_authorization/practice/exercises/2-security-misconfiguration/weather-app.js) file, correct the problem of exposing the API Key/Secret on line 24. Some solutions may require you to to create other files.**

**3. What are the limitations of using environment variables for storing API Keys?**

### Exercise 5 - Data Exposure

- (3 min) - Read about the threats of [sensitive data exposure](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A3-Sensitive_Data_Exposure).
- (5 min) - Review the interactive lesson from [HackSplaining - Password Mismanagement](https://www.hacksplaining.com/).
- Open the the file entitled[`4-data-exposure`](/lesson-7-authentication_authorization/practice/exercises/4-data-exposure)
- Run the [password.html file](/lesson-7-authentication_authorization/practice/exercises/4-data-exposure/password.html) in your browser.

**1. Within the [`check-password.js` file](/lesson-7-authentication_authorization/practice/exercises/4-data-exposure/check-password-1.js), code a function `checkPassword()` that:**

- requires users to create a password with:
  - minimum eight characters
  - at least one letter
  - one number and one special character
- shows a helpful alert message when the submitted password meets requirements
- shows a helpful alert message when the submitted password is wrong because it does not meet the requirements
