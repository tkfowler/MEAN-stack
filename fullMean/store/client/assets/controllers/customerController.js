app.controller('customerController', ['$scope', '$location', 'customersFactory', function($scope, $location, customersFactory) {
  var index = function(){
    customersFactory.index(function(data){
      $scope.customers = data;
      $scope.customer = {};
    })
  };
  index();
  $scope.create = function(){
    customersFactory.create($scope.customer, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors
      }else{
        index()
      }
    });
  }
  $scope.delete = function(id){
    customersFactory.delete(id, index)
  }
}]);
