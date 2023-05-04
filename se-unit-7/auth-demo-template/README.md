# Auth Template
Here is how we can do Auth for our projects.

- [Auth Template](#auth-template)
- [Authentication vs Authorization](#authentication-vs-authorization)
- [Advice](#advice)
- [Explaining Trade offs](#explaining-trade-offs)
  - [Sessions Over Tokens](#sessions-over-tokens)
    - [Cookie Session](#cookie-session)
    - [Harder Alternative: a true session system](#harder-alternative-a-true-session-system)
- [Client System](#client-system)
  - [/api/me](#apime)
  - [Auth failures](#auth-failures)
- [What kind of apps can we build with a Client like this?](#what-kind-of-apps-can-we-build-with-a-client-like-this)
  - [Be wary of errors](#be-wary-of-errors)
- [Understanding The Code](#understanding-the-code)
  - [Client Side](#client-side)
  - [Server Side](#server-side)

# Setup

* Fork this template repo
* Copy the `.env.template` and name it `.env`
* Create an `auth_example` database (or update your new `.env` to whatever database you are using)
* Double check that the `.env` variables are all correct (username, password, database name)
* `npm run kickstart` (`npm run dev` or `npm start` afterwards)

# Authentication vs Authorization
Remember, `authenticated` means "We have confirmed this person is who they say they are" and `authorized` means "This person is who they say they are AND they are allowed to be here." So if we just want a user to be logged into the site to show content, we just check if they're `authenticated`. However, if they wanted to update their profile info, we'd need to make sure they were `authorized` to do that (e.g. the profile they're updating is their own).

What's *super* annoying is if a user has missing or malformed credentials (they are not authenticated)...the 401 error we throw says "unauthorized." And when a user *is* authenticated but not authorized, the 403 you throw says "Forbidden." Sometimes the internet is just weird.

# Advice
Remember, **DO NOT TRUST THE FRONTEND**. Validate everything on the server. Just because you block a form in the GUI doesn't mean a nefarious actor couldn't just pop open a console and make a `fetch` request. Also, the frontend can be buggy and mistakes can happen.

# Explaining Trade offs
Nothing in life is free, so here are some of the pros/cons of this template's approach.

## Sessions Over Tokens
Since our entire application lives on one server (our frontend is just a bunch of static pages), that means we can use cookies and server sessions for auth. JWTs are better for situations where you don't control everything or have multiple servers that need to maintain users across them. Also, JWTS should be stored in the cookie anyway, so we might as well just use the much smaller sessions.

You may also see tutorials that use JWTs saved in `localStorage`, but that's super insecure and is getting increasingly frowned upon. Sessions also have security issues we aren't dealing with, but nowhere near as blatant.

### Cookie Session
While more limited in size (4kb is the absolute max amount of info), [cookie sessions](https://expressjs.com/en/resources/middleware/cookie-session.html) are much easier to understand. 
1. When a request comes in for signup/login, the server creates a cookie (the `handle-cookie-sessions` middleware does this for us). 
2. The model will store the user data in the database (or look it up for `/login`) and return back the user with it's unique `user.id`
3. When we get the `User` back from the model, we store the `user.id` in that cookie. 
4. Now, that cookie lives with every request made by that user (`req.session`) and the client can check if it is logged in using the `/api/me` endpoint (see below).

Unlike traditional sessions, there is no external store, the session data *is* the cookie. To log out, just remove the cookie via setting it to `null`.

In this example the cookie's lifespan isn't specified, which means it defaults to `Session`. A length of `Session` means that as long as the user's browser stays open (That's the browser, not the tab) the cookie will stick around. For now this is what we want, because we don't want to worry too much about re-auth flow at some arbitrary time in the middle of the user doing something.

That being said, we do have 2 examples of how we can handle if we unexpectedly fail auth: a "secret message" route, and a username update route. For more information see the client section.


### Harder Alternative: a true session system
You should only try this approach if you *fully* understand cookie sessions.

Here's a nice ["getting started" article on Express sessions](https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/). The big hurdle with sessions is that they need to be stored somewhere. *Usually* that's a global store like Redis (which is also crazy fast). But to keep things simple, we're just using our database, and hooking it up with knex.

The tl;dr on true sessions is this: when a user logs in, we create a session cookie and a session DB entry. All that cookie has on it is the session id. Then, on the server, we always have access to the same session info from the DB, so we can load and read anything from it. Generally, that's just the logged in user data. However, the only thing that ever gets sent in the cookie is the session id, which means we can load other things into our session without size concerns. With true sesssions, the session is saved on the DB, the session ID is the cookie.

To logout a user, simply call `.destroy()` on the session. The cookie still exists, but since there is no matching session, it just sort of chills there until it dies.

What's *super* cool about these two types is that it's extremely plug and play for us. So while we're using `handle-cookie-sessions.js` middleware, I've included `handle-sessions.js` middleware as well. It has all the DB directions copied in. Other than log outs, the application logic is exactly the same! You don't have to use it, but it's fun to experiment with once you fully understand cookie sessions.

# Client System
Without a proper front end router or backend template system, we're a little limited. So for this setup, let's try to keep the number of html files small (in fact, the signup and login pages could probably be combined). We also lack a proper bundler like Vite or an import system like ESModules, so we have to keep a `globals` file for universal functions and values. Make sure globals is always the first script loaded in the head tag of the page.

## /api/me
In order to keep source of truth simple, we're going to track who is logged in with that `GET /api/me` convention. Each time a page is loaded, we quickly hit `GET /api/me`. If there is a logged in user, we'll see that in the json. Saving the user info into another global store like localStorage has network advantages, but also some rather harsh drawbacks. Given that it has a different lifespan than our cookies (and can also be modified with client side JS), this was such a shaky source of truth, we ultimately reconsidered using that technique. Also, those network advantages go away once we have a proper front end router and we aren't constantly reloading our app. So let's learn best practices now!

The reason this route is used instead of `GET /api/users/:id` is two fold. One, we don't know the users id on load, so how could we hit it? And two, read REST routes are supposed to be **idempotent** (eye-dem-PO-tent) which means "don't change." `GET /api/me` will change depending on the auth cookie. So this little example app does have `GET /api/users` and `GET /api/users/:id` because `GET /api/me` is not a replacement for them. They just aren't used in the client yet. But your projects might in the future!

## Auth failures
So even though our cookies last as long as the user has the browser open, it's still possible that the cookies get deleted/expired somehow *while* the user is working. For one thing, they could clear their cache. So in this event we have 2 options:

- Ignore it: This is the "secret message" approach. That route only loads if there is an `authenticated` user (e.g. a cookie exists). But if it fails, we don't really do anything other than not display the message on the client. Sometimes this is what you want.
- Redirect: This is the update username route's approach. See, only `authorized` users should be able to view/edit their profile. So if we load the page and `api/me` is good, we render the `user.html` for them. However, if they clear their cache mid session, and *then* try to update their username, the auth fails. The server refuses to update the info, and then throws a 401 (or 403 if they've maliciously modified the cookie incorrectly). That means they shouldn't even *see* `user.html` anymore, so in this case we do actively redirect them away from the page. For sensitive information, this is the approach you should take: the second any request unexpectedly fails auth, kick them out.

Don't worry *too* much about mid session failures just yet. All you really need to do is make sure that when it comes to updating info on the server, you are always verifying proper auth.

# What kind of apps can we build with a Client like this?
The apps this would be suited for are ones where a user has info and children entities they can access, but they don't interact with other users. Primary reason being is that in order to load a different users and specific assets via the url, we'd have to use queries. And that can get messy quickly. So if we had a `dogs.html` we'd just load up all the dogs, and then *within* the page we could interact individually with them (like or comment on the photo for example).

## Be wary of errors
Given time constraints, this project is handling barely any errors. The model is very brittle right now, the server and sql errors should be handled like we've done before. We're also only handling the most basic of flows and errors on the client. Things like handling attempted recreations of users who already exist or even wrong passwords can be handled much more delicately.
