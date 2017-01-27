app.controller('topicController', ['$scope', '$location', '$routeParams', 'topicsFactory', 'postsFactory', 'usersFactory', function($scope, $location, $routeParams, topicsFactory, postsFactory, usersFactory) {
  $scope.show = function(){
    topicsFactory.show($routeParams, function(data){
      $scope.topic = data;
    })
  }();

  var showPosts = function(){
    console.log($routeParams);
    postsFactory.index($routeParams, function(data){
      $scope.posts = data;
      $scope.post = {};
      console.log($scope.posts);
    })
  };
  showPosts();

  var getCurrentUser = function(){
    usersFactory.getCurrentUser(function(data){
      $scope.user = data
    })
  }
  getCurrentUser();

  $scope.logout = function(){
    $scope.user = {};
    $location.url('/')
  }

  $scope.createPost = function(){
    $scope.post.topic = $routeParams
    console.log($scope.post);
    postsFactory.create($scope.post, $scope.user, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }else{
        showPosts()
      }
    })
  }
  $scope.comment = {}
  $scope.createComment = function(){
    console.log($scope.comment);
    postsFactory.createComment($scope.comment, $scope.user, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }else{
        showComments()
      }
    })
  }
  // $scope.create = function(){
  //   customersFactory.create($scope.customer, function(returnedData){
  //     if(returnedData.errors){
  //       $scope.errors = returnedData.errors
  //     }else{
  //       index()
  //     }
  //   });
  // }
  // $scope.delete = function(id){
  //   customersFactory.delete(id, index)
  // }
}]);
