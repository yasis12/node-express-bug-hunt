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
source axios is above the clinet.js script

### Bug 2
changed port from 5007 to 5001

### Bug 3
changed app.use(express.static('public')); to 
        app.use(express.static('server/public'));
### Bug 4
let quote list = an array and not {}
### Bug 5
added module.exports = router; to quote.router.js
### Bug 6
client.js changed get quotes pat to /quotes/ and 
quote router.js to '/'
### Bug 7
changes quotesList.push to quoteList.push
### Bug 8

### Bug 9

## Extra Practice (Optional)

Complete the JS debugging exercises at:

- https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/exercises.html
