app.controller('newController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory) {
  $scope.create = function(){
    friendsFactory.create($scope.friend, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors
      }else{
        $location.url('/')
      }
    });
  }
}]);
