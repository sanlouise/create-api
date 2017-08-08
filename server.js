const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache' )

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.render('index', {
    name:"Hello",
    color:"Black",
    languages:"yeah",
  });
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
