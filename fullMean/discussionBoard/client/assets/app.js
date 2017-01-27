//create angular module and inject ngRoute dependency
var app = angular.module('app', ['ngRoute', 'angularMoment']);
//set up routes on client-side. calls the partials and associated controllers
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'userController'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/topic/:id', {
      templateUrl: 'partials/topic.html',
      controller: 'topicController'
    })
    // .when('/orders', {
    //   templateUrl: 'partials/order.html',
    //   controller: 'orderController'
    // })
    .otherwise({
      redirectTo: '/'
    })
});
