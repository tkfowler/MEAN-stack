app.controller('userController', ['$scope', '$location', 'usersFactory', function($scope, $location, usersFactory) {
  // var index = function(){
  //   customersFactory.index(function(data){
  //     $scope.customers = data;
  //     $scope.customer = {};
  //   })
  // };
  // index();
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
  $scope.login = function(){
    usersFactory.login($scope.user, function(data){
      if(data === null){
        usersFactory.create($scope.user, function(data){
          if(data.errors){
            $scope.errors = data.errors
          }else{
            $location.url('/dashboard')
          }
        })
      }else{
        $location.url('/dashboard')
      }
    })
  }
}]);
