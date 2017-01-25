app.controller('editController', ['$scope','friendsFactory', '$location','$routeParams', function($scope, friendsFactory, $location, $routeParams) {

  friendsFactory.show($routeParams, function(returnedData){
    $scope.friend = returnedData
    $scope.friend.birthday = new Date(returnedData.birthday)
  })

  $scope.update = function(){
    friendsFactory.update($scope.friend, function(returnedData){
      $location.url('/')
    })
  }
}]);
