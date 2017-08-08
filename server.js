const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi there!')
});

app.get('/api', (req, res) => {
  const myObj = {
    name1:"hey1",
    name2:"hey2",
    name3:"hey3",
  };
  res.json(myObj);
});

app.listen(3000, () => {
  console.log("Server is running!")
});
