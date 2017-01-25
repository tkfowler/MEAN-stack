app.controller('showController', ['$scope','friendsFactory', '$location', '$routeParams',function($scope, friendsFactory, $location, $routeParams) {

  friendsFactory.show($routeParams, function(returnedData){
    $scope.friend = returnedData
  })

  $scope.edit = function(){
    $location.url('/edit/' + $scope.friend._id)
  }
}]);
