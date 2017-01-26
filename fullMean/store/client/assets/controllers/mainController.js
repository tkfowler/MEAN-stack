app.controller('mainController', ['$scope','moment', 'productsFactory','customersFactory', 'ordersFactory', function($scope, moment, productsFactory, customersFactory, ordersFactory ) {
  var index = function(){
    productsFactory.index(function(returnedData){
      $scope.products = returnedData;
      $scope.product = {}
    });
    customersFactory.index(function(data){
      $scope.customers = data;
      $scope.customer = {};
      $scope.timeDiff($scope.customers)
    })
    ordersFactory.index(function(data){
      $scope.orders = data;
      $scope.order = {};
      $scope.timeDiff($scope.orders)
    })
  };
  index();
  // console.log($scope.now);
  $scope.timeDiff = function(arr){
    for(var i in arr){
      arr[i].createdAt = moment(arr[i]).toNow(true);
    }
  }
  //
  // $scope.new = function(){
  //   $location.url('/new')
  // }
  //
  // $scope.delete = function(id){
  //   friendsFactory.delete(id, index)
  // }
}]);
