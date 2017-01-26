app.factory('productsFactory', ['$http', function($http) {
  var factory = {}
  var products = [];
  var product = {};
  // create new user
  factory.create = function(newproduct, callback){
    $http.post('/products', newproduct).then(function(returned_data){
      if(!returned_data.data.errors){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      }else{
        callback(returned_data.data)
      }
    });
  };
  // grab all users from database and pass it to client
  factory.index = function(callback){
    $http.get('/products').then(function(returned_data){
      products = returned_data.data;
      callback(products)
    });
  };
  // update specific user information
  factory.update = function(product, callback){
    $http.put('/products/' + product.product, product).then(function(returned_data){
      callback(returned_data.data);
    })
  };
  //delete specific user
  factory.delete = function(id, callback){
    $http.delete('/products/' + id).then(function(returned_data){
      callback();
    });
  };
  //display specific users information
  factory.show = function(route, callback){
    $http.get('/products/' + route.id).then(function(returned_data){
      product = returned_data.data;
      callback(product)
    })
  };
  factory.getProducts = function(callback){
    callback(products);
  };
  factory.getProduct = function(callback){
    callback(product);
  };
  // need to return factory at the end of every factory
  return factory;
}]);
