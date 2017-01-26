//create angular module and inject ngRoute dependency
var app = angular.module('app', ['ngRoute', 'angularMoment']);
//set up routes on client-side. calls the partials and associated controllers
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'mainController'
    })
    .when('/customers', {
      templateUrl: 'partials/customer.html',
      controller: 'customerController'
    })
    .when('/products', {
      templateUrl: 'partials/product.html',
      controller: 'productController'
    })
    .when('/orders', {
      templateUrl: 'partials/order.html',
      controller: 'orderController'
    })
    .otherwise({
      redirectTo: '/'
    })
});
