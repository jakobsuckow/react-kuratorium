const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_6qvjFkCyr6CSMLH7CVnDncHW00FW7aDj0L')


// Express
const app = express();
app.use(cors());

const PORT = 5000

app.get('/api/', (req, res) => res.send({ version: '1.0' }))


app.get('api/v1/products', async (req, res) => {
    try {
        const products = await stripe.products.list({limit: 3})
        console.log(products);
    } catch(err) {
        console.log(`Our Error: ${err}`)
        return res.sendStatus(404)

    }

    return res.sendStatus(200)
})

// Retrieve Products:
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

app.listen(PORT, () => {console.log(`listening on Port ${PORT}`)})

