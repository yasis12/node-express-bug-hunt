// Require express
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const quoteRouter = require('./routes/quote.router');

// Allow req.body
// Alternative to body parser when using Axios
app.use(express.json());

app.use('/quotes', quoteRouter);

// FIXED Look here for files
app.use(express.static('server/public'));

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
