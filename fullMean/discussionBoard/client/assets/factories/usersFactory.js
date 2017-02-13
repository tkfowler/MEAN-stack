app.factory('usersFactory', ['$http', function($http) {
  var factory = {}

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

  return factory;
}]);
