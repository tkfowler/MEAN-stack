//create angular module and inject ngRoute dependency
var app = angular.module('app', ['ngRoute']);
//set up routes on client-side. calls the partials and associated controllers
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'indexController'
    })
    .when('/show/:id', {
      templateUrl: 'partials/show.html',
      controller: 'showController'
    })
    .when('/new', {
      templateUrl: 'partials/new.html',
      controller: 'newController'
    })
    .when('/edit/:id', {
      templateUrl: 'partials/edit.html',
      controller: 'editController'
    })
    .otherwise({
      redirectTo: '/'
    })
});
