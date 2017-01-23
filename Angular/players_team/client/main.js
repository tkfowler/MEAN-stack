var app = angular.module('myApp', ['ngRoute'])
app.config(function($routeProvider){
  $routeProvider
    .when('/players', {
      templateUrl: 'partials/players.html'
    })
    .when('/teams', {
      templateUrl: 'partials/teams.html'
    })
    .when('/associations', {
      templateUrl: 'partials/associations.html'
    })
    .otherwise({
      redirectTo: '/players'
    })
})

app.factory('playerFactory', ['$http', function($http){
  var factory = {}
  var players = [{name:'Speros', team:'Seahawks'}, {name:'Jimmy', team:""}, {name:'Jay', team:""}]

  factory.index = function(callback){
    callback(players);
  }
  factory.create = function(player, callback){
    player.team = ""
    players.push(player);
    callback(players);
  }
  factory.delete = function(index, callback){
    players.splice(index, 1);
    callback(players);
  }
  factory.addToTeam = function(data){
    players[data.idx].team = data.team
  }
  return factory;
}])

app.factory('teamFactory', ['$http', function($http){
  var factory = {}
  var teams = [{name:'Seahawks'}, {name:'49ers'}, {name:'Honeybadgers'}]
  factory.index = function(callback){
    callback(teams);
  }
  factory.create = function(team, callback){
    teams.push(team);
    callback(teams);
  }
  factory.delete = function(index, callback){
    teams.splice(index, 1);
    callback(teams);
  }
  return factory;
}])

app.controller('playerController', ['$scope', 'playerFactory', function($scope, playerFactory){
  function setPlayer(data){
    $scope.players = data;
    $scope.player = {};
  }
  $scope.index = function(){
    playerFactory.index(setPlayer)
  }();
  $scope.create =function(){
    playerFactory.create($scope.player, setPlayer)
  }
  $scope.delete = function(index){
    playerFactory.delete(index, setPlayer)
  }
}])

app.controller('teamController', ['$scope', 'teamFactory', function($scope, teamFactory){
  function setTeam(data){
    $scope.teams = data;
    $scope.team = {};
  }
  $scope.index = function(){
    teamFactory.index(setTeam)
  }();
  $scope.create = function(){
    teamFactory.create($scope.team, setTeam)
  }
  $scope.delete = function(index){
    teamFactory.delete(index, setTeam)
  }
}])

app.controller('associationsController', ['$scope', 'playerFactory', 'teamFactory', function($scope, playerFactory, teamFactory){
  $scope.players = []
  $scope.teams = []

  playerFactory.index(function(players){
    $scope.players = players
  })
  teamFactory.index(function(teams){
    $scope.teams = teams;
  })
  $scope.create = function(){
    console.log($scope.association.idx);
    playerFactory.addToTeam($scope.association)
  }
}])
