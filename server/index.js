const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const API_KEY = require('./config.js').API_KEY;

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', (req, res) => {
  console.log(`Searching for ${req.query.query}`);
  axios.get('https://api.yelp.com/v3/businesses/search', {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    },
    params: {
      location: req.query.query,
      categories: 'bubbletea'
    }
  })
  .then(data => {
    console.log('sending data');
    res.send(data.data);
  })
  .catch(err => {
    console.log(err);
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});