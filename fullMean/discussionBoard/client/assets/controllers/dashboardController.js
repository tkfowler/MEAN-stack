app.controller('dashboardController', ['$scope', '$location', 'usersFactory', 'topicsFactory', function($scope, $location, usersFactory, topicsFactory) {
  var index = function(){
    topicsFactory.index(function(data){
      $scope.topics = data;
      $scope.topic = {};
    })
  };
  index();
  var getCategories = function(){
    topicsFactory.getCategories(function(data){
      $scope.categories = data;
    })
  }
  getCategories();

  var getCurrentUser = function(){
    usersFactory.getCurrentUser(function(data){
      $scope.user = data
    })
  }
  getCurrentUser();

  //create topic
  $scope.create = function(){
    topicsFactory.create($scope.topic, $scope.user, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }else{
        // $scope.topics = data
        index()
      }
    });
  }
  // $scope.delete = function(id){
  //   customersFactory.delete(id, index)
  // }
}]);
