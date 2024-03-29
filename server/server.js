const express = require('express');

const app = express();
const PORT = 3000;

const testResponse = {
  test: 'testing',
  hi: 'hello',
};

app.get('/api', (req, res) => {
  res.send(testResponse);
});

app.get('/', (req, res) => {
  res.status(200).send('Testing initial server set up');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
