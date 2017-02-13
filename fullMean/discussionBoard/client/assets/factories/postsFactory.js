app.factory('postsFactory', ['$http', function($http) {
  var factory = {}
  var posts = [];
  // create new user
  factory.create = function(newpost, user, callback){
    console.log(user);
    $http.post('/posts/' + user.username, newpost).then(function(data){
      if(!data.data){
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      }else{
        console.log(data);
        callback(data.data)
      }
    });
  };
  // grab all users from database and pass it to client
  factory.index = function(topic, callback){
    console.log(topic);
    $http.get('/posts/' + topic.id).then(function(data){
      posts = data.data;
      callback(posts)
    });
  };

  factory.createComment = function(comment, user, callback){
    console.log(comment);
    console.log(user);
    $http.post('/comments/' + user._id, comment).then(function(data){
      callback(data.data);
    })
  }
  return factory;
}]);
