app.controller('productController', ['$scope','productsFactory', function($scope, productsFactory) {
  var index = function(){
    productsFactory.index(function(returnedData){
      $scope.products = returnedData;
      $scope.product = {}
    });
  };
  index();
  $scope.create = function(){
    productsFactory.create($scope.product, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors
      }else{
        index()
      }
    });
  }
  $scope.displayNum = 15;
  $scope.showMore = function(num){
    $scope.displayNum += num;
  }
}]);
