console.log("routes");

var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');
module.exports = function(app){
  app.get('/customers', customers.index);
  app.get('/customers/:id', customers.show);
  app.post('/customers', customers.create);
  app.put('/customers/:id', customers.update);
  app.delete('/customers/:id', customers.delete);

  app.get('/products', products.index);
  app.get('/products/:id', products.show);
  app.post('/products', products.create);
  app.put('/products/:id', products.update);
  app.delete('/products/:id', products.delete);

  app.get('/orders', orders.index);
  app.get('/orders/:id', orders.show);
  app.post('/orders', orders.create);
  app.put('/orders/:id', orders.update);
  app.delete('/orders/:id', orders.delete);
}
