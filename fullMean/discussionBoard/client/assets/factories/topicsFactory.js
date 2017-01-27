app.factory('topicsFactory', ['$http', function($http) {
  var factory = {}
  var categories = [];
  // var user = {};
  // create new user
  factory.create = function(newtopic, user, callback){
    $http.post('/topics/' + user.username, newtopic).then(function(data){
      if(!data.data){
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      }else{
        callback(data.data)
      }
    });
  };
  // grab all users from database and pass it to client
  factory.index = function(callback){
    $http.get('/topics').then(function(data){
      topics = data.data;
      callback(topics)
    });
  };
  factory.getCategories = function(callback){
    $http.get('/categories').then(function(data){
      categories = data.data;
      callback(categories)
    });
  };
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
  factory.show = function(route, callback){
    $http.get('/topics/' + route.id).then(function(data){
      topic = data.data;
      callback(topic)
    })
  };
  // factory.getUsers = function(callback){
  //   callback(users);
  // };
  // factory.getUser = function(callback){
  //   callback(user);
  // };
  // need to return factory at the end of every factory
  return factory;
}]);
