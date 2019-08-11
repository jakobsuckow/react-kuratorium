const express = require('express');
const stripe = require('stripe')('sk_test_6qvjFkCyr6CSMLH7CVnDncHW00FW7aDj0L')
const path = require('path');


// Express
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));


const PORT = 5000

app.get('/api/', (req, res) => res.send({ version: '1.0' }))




app.get('/api/v1/products', (req, res) => {
    stripe.products.list(
        { limit: 3 },
        function(err, products) {
          if(err) {console.log(err)}
          else {
              res.send(products);
          }
        }
      );
})


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });


app.listen(PORT, () => {console.log(`listening on Port ${PORT}`)})

