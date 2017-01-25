app.factory('friendsFactory', ['$http', function($http) {
  var factory = {}
  var friends = [];
  var friend = {};
  // create new user
  factory.create = function(newfriend, callback){
    $http.post('/friends', newfriend).then(function(returned_data){
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
    $http.get('/friends').then(function(returned_data){
      friends = returned_data.data;
      callback(friends)
    });
  };
  // update specific user information
  factory.update = function(friend, callback){
    $http.put('/friends/' + friend._id, friend).then(function(returned_data){
      callback(returned_data.data);
    })
  };
  //delete specific user
  factory.delete = function(id, callback){
    $http.delete('/friends/' + id).then(function(returned_data){
      callback();
    });
  };
  //display specific users information
  factory.show = function(route, callback){
    $http.get('/friends/' + route.id).then(function(returned_data){
      friend = returned_data.data;
      callback(friend)
    })
  };
  factory.getFriends = function(callback){
    callback(friends);
  };
  factory.getFriend = function(callback){
    callback(friend);
  };
  // need to return factory at the end of every factory
  return factory;
}]);
