const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., CSS)
app.use(express.static('client'));

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/Index.html');
});


app.listen(port, () => {
    console.log('Server is running on port ${port}');
});
