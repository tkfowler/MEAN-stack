app.controller('indexController', ['$scope','friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, $routeParams) {
  var index = function(){
    friendsFactory.index(function(returnedData){
      $scope.friends = returnedData;
      $scope.friend = {}
    });
  };
  index();
  
  $scope.new = function(){
    $location.url('/new')
  }

  $scope.delete = function(id){
    friendsFactory.delete(id, index)
  }
}]);
