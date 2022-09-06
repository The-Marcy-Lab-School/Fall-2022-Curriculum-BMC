# Solutions

## Authorization and Authentication

### Exercise 1 - Cross-Side Scripting Solution:

1. This code binds dynamic content to the innerHTML attribute. Since the code is not using will not be escaped automatically as it would be if we used curly braces/JSX.

2. If the HTTPOnly cookie attribute is set, we cannot steal the cookies through JavaScript. However, using the XSS attack, we can still perform unauthorized actions inside the application on behalf of the user. For instance, in this attack scenario, we will post a new message in the SecretBook on behalf of the victim user, without their consent. For this, we need to forge an HTTP POST request to the SecretBook page with the appropriate parameters with JavaScript

### Exercise 2 - Session Fixation Solution:

1. Hypothetical Scenario:
   a. Attacker visits `http://vulnerable.example.com/` and checks which SID is returned. For example, the server may respond: `Set-Cookie: SID=0D6441FEA4496C2`.
   b. Attacker is now able to send Victim an e-mail: "Check out this new cool feature on our bank, `http://vulnerable.example.com/?SID=0D6441FEA4496C2.`
   c. Victim logs on, with fixated session identifier `SID=0D6441FEA4496C2`.
   d. Attacker visits `http://vulnerable.example.com/?SID=0D6441FEA4496C2` and now has unlimited access to Alice's account.

A web application authenticates a user without first invalidating the existing session. This continues the use of a session already associated with the user. Then, an attacker is able to force a known session identifier on a user so that, once the user authenticates, the attacker has access to the authenticated session. The application uses a predictable session identifier. In this example, the attacker creates a new session on a web application and records the associated session identifier. The attacker then causes the victim to associate, and possibly authenticate, against the server using that session identifier, giving the attacker access to the user's account through the active session.

### Exercise 3 - Injection Solution:

1. Injection attacks often rely on the attacker being able to craft an input that will prematurely close the argument string in which they appear in the SQL statement. This is why you will often see ' or " characters in attempted SQL injection attacks.

2. See refactored `getCurrentUser()` [solution](/lesson-7-authentication_authorization/solutions/1-injection/injection.js)\*\*

### Exercise 4 - Security Misconfiguration Solution:

1. Exposing API keys can lead to others using the key to do illicit activity, allows others to use data, and could lead to increased costs if an API key is connected to a bank account.

2. A potential [solution](/lesson-7-authentication_authorization/solutions/weather-app-solutions.js) includes
   a. creating an environment variable called `CLIENT_SECRET` or something else.
   b. use the environment variable within the code base rather than the API Key itself.

   Check out free code academy's [other solution ideas](https://www.freecodecamp.org/news/how-to-securely-store-api-keys-4ff3ea19ebda/).

3. Using a environment variables is fine when applications are run within a development environment. However, engineers could not use that environment variable in production, such as when hosting an application on Heroku. The keys would need to be securely saved on the machines running the application.

### Exercise 5 - Data Exposure Solution:

1. See a potential [solution for `checkPassword`](/lesson-7-authentication_authorization/solutions/4-data-exposure/check-password-1.js)
