app.factory('usersFactory', ['$http', function($http) {
  var factory = {}
  // var users = [];
  // var user = {};
  var currentUser = {}
  factory.login = function(user, callback){
    currentUser = {}
    $http.post('/login', user).then(function(data){
      currentUser = data.data
      callback(data.data)
    });
  }
  // create new user
  factory.create = function(newuser, callback){
    $http.post('/users', newuser).then(function(data){
      if(!data.data){
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      }else{
        currentUser = data.data
        callback(data.data)
      }
    });
  };
  factory.getCurrentUser = function(callback){
    callback(currentUser);
  }
  // // grab all users from database and pass it to client
  // factory.index = function(callback){
  //   $http.get('/users').then(function(returned_data){
  //     users = returned_data.data;
  //     callback(users)
  //   });
  // };
  // // update specific user information
  // factory.update = function(user, callback){
  //   $http.put('/users/' + friend._id, friend).then(function(returned_data){
  //     callback(returned_data.data);
  //   })
  // };
  // //delete specific user
  // factory.delete = function(id, callback){
  //   $http.delete('/users/' + id).then(function(returned_data){
  //     callback();
  //   });
  // };
  // //display specific users information
  // factory.show = function(route, callback){
  //   $http.get('/users/' + route.id).then(function(returned_data){
  //     user = returned_data.data;
  //     callback(user)
  //   })
  // };
  // factory.getUsers = function(callback){
  //   callback(users);
  // };
  // factory.getUser = function(callback){
  //   callback(user);
  // };
  // need to return factory at the end of every factory
  return factory;
}]);
