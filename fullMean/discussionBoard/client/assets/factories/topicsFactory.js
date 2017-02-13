app.factory('topicsFactory', ['$http', function($http) {
  var factory = {}
  var categories = [];

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
  factory.show = function(route, callback){
    $http.get('/topics/' + route.id).then(function(data){
      topic = data.data;
      callback(topic)
    })
  };
  return factory;
}]);
