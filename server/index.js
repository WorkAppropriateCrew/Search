const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/transactions', (req, res) => {
  //TODO - your code here!
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
