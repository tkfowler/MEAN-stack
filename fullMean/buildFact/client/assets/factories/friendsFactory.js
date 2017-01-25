console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  var factory = {}

  var friends = [];
  var friend = {};
  factory.create = function(newfriend, callback){
    $http.post('/friends', newfriend).then(function(returned_data){
      console.log(returned_data.data);
      if (typeof(callback) == 'function'){
        callback(returned_data.data);
      }
    });
  };
  factory.index = function(callback){
    $http.get('/friends').then(function(returned_data){
      console.log(returned_data.data);
      friends = returned_data.data;
      console.log(friends);
      callback(friends)
    });
  };
  factory.update = function(friend, route){
    console.log(route, 'route id');
    $http.put('/friends/' + route.id, friend).then(function(returned_data){
      console.log(returned_data.data);
    })
  };
  factory.delete = function(){

  };
  factory.show = function(){
    $http.get('/friends/')
  };
  factory.getFriends = function(callback){
    callback(friends);
  };
  factory.getFriend = function(callback){
    callback(friend);
  };

  return factory;
}]);
