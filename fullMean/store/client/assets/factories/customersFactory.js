app.factory('customersFactory', ['$http', function($http) {
  var factory = {}
  var customers = [];
  var customer = {};
  // create new user
  factory.create = function(newcustomer, callback){
    $http.post('/customers', newcustomer).then(function(returned_data){
      if(!returned_data.data){
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
    $http.get('/customers').then(function(returned_data){
      customers = returned_data.data;
      callback(customers)
    });
  };
  // update specific user information
  factory.update = function(customer, callback){
    $http.put('/customers/' + friend._id, friend).then(function(returned_data){
      callback(returned_data.data);
    })
  };
  //delete specific user
  factory.delete = function(id, callback){
    $http.delete('/customers/' + id).then(function(returned_data){
      callback();
    });
  };
  //display specific users information
  factory.show = function(route, callback){
    $http.get('/customers/' + route.id).then(function(returned_data){
      customer = returned_data.data;
      callback(customer)
    })
  };
  factory.getCustomers = function(callback){
    callback(customers);
  };
  factory.getCustomer = function(callback){
    callback(customer);
  };
  // need to return factory at the end of every factory
  return factory;
}]);
