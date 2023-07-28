# Node & Express Bug Hunt!

**READ ALL INSTRUCTIONS BEFORE STARTING**

There are 10 bugs in total, can you find them all? There are hints throughout (???), you should only need to make minor modifcations to 10 lines of code.

**Don't race through the files looking for the issues!** They should all have a console log or error that help you identify them. Read the console so that you know what error will cause each bug. The last one is tricky since it doesn't throw any errors. Document the error, line number and your fix in this README for each of the bugs.

## Setup
```
npm install
npm start
```

> NOTE: A couple of bugs prevent the server from starting.

## Error List

TODO: Add the error here followed by the line of code you fixed.

### Bug 0

`ReferenceError: app is not defined`

Fixed `quote.router.js` line 28: switch `app` to `router`. _This is the solution to the first bug._

### Bug 1

`TypeError: Router.use() requires a middleware function but got a Object`

Added `module.exports = router;` to the bottom of `quote.router.js`.

### Bug 2

`Cannot GET /`

In `server.js`, `app.use(express.static('public'));` should be `app.use(express.static('server/public'));`

### Bug 3

`Uncaught ReferenceError: axios is not defined`

In the `index.html` file, `axios` should be sourced before the `client.js` file.

### Bug 4

`GET http://localhost:5007/quotes 404 (Not Found)`

In the `quote.router.js` file, `router.get('/quotes',` should be `router.get('/',`

### Bug 5

`TypeError: quotesFromServer is not iterable`

In the `quote.router.js` file, `let quoteList = {};` should be `let quoteList = [];`

### Bug 6

`500 internal server error` (`ReferenceError: quotesList is not defined`)

In the `quote.router.js` file (`router.post`), `quotesList.push(quoteToAdd);` should be `quoteList.push(quoteToAdd);`

### Bug 7

`ReferenceError: getQuote is not defined`

In the `client.js` file line 51, `getQuote();` should be `getQuotes();`

### Bug 8

`Uncaught ReferenceError: deleteQuotes is not defined`

In the `client.js` file line 20, `<button onClick="deleteQuotes(${i})">Delete</button>` should be `<button onClick="deleteQuote(${i})">Delete</button>`

### Bug 9

No error!

In the `client.js` file line 60, switch single quotes to back ticks.

## Extra Practice (Optional)

Complete the JS debugging exercises at:

- https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/exercises.html
