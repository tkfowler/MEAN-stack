app.controller('orderController', ['$scope','productsFactory','customersFactory', 'ordersFactory', function($scope, productsFactory,customersFactory, ordersFactory) {
  var index = function(){
    ordersFactory.index(function(returnedData){
      $scope.orders = returnedData;
      $scope.order = {}
    });
    productsFactory.index(function(returnedData){
      $scope.products = returnedData;
      $scope.product = {}
    });
    customersFactory.index(function(returnedData){
      $scope.customers = returnedData;
      $scope.customer = {};
    })
  };
  index();
  $scope.create = function(){
    console.log($scope.order, "SCOPE.ORDER");
    ordersFactory.create($scope.order, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors
      }else{
        for(var i = 0; i < $scope.products.length; i++){
          if($scope.products[i].name === $scope.order.product){
            console.log('hello');
            $scope.products[i].quantity -= $scope.order.quantity
            x = $scope.products[i].quantity
            console.log(x, "QUANTITY LEFT");
            console.log($scope.order.quantity, "QUANTITY ORDERED");
          }
        }
        $scope.order.quantity = x
        productsFactory.update($scope.order, function(returnedData){
          if(returnedData.errors){
            $scope.errors = returnedData.errors
          }else{
            index()
          }
        })
      }
    });
  }
  $scope.quantities = [];
  $scope.array = function(name){
    $scope.quantities = [];
    for(var i = 0; i < $scope.products.length; i++){
      if($scope.products[i].name === name){
        $scope.quantity = $scope.products[i].quantity
      }
    }
    for(var i = 1; i <= $scope.quantity; i++){
      $scope.quantities.push(i);
    }
    if($scope.quantities === []){
      $scope.quantities = 0
    }
  }
}]);
