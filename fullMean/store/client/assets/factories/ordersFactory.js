app.factory('ordersFactory', ['$http', function($http) {
  var factory = {}
  var orders = [];
  var order = {};
  // create new user
  factory.create = function(neworder, callback){
    $http.post('/orders', neworder).then(function(returned_data){
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
    $http.get('/orders').then(function(returned_data){
      orders = returned_data.data;
      callback(orders)
    });
  };
  // update specific user information
  factory.update = function(order, callback){
    $http.put('/orders/' + friend._id, friend).then(function(returned_data){
      callback(returned_data.data);
    })
  };
  //delete specific user
  factory.delete = function(id, callback){
    $http.delete('/orders/' + id).then(function(returned_data){
      callback();
    });
  };
  //display specific users information
  factory.show = function(route, callback){
    $http.get('/orders/' + route.id).then(function(returned_data){
      order = returned_data.data;
      callback(order)
    })
  };
  factory.getOrders = function(callback){
    callback(orders);
  };
  factory.getOrder = function(callback){
    callback(order);
  };
  // need to return factory at the end of every factory
  return factory;
}]);
