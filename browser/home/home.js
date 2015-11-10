app.config(function($stateProvider, $locationProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/home/home.html',
      controller: 'HomeCtrl'
    })
});

app.controller('HomeCtrl', function($scope){
  $scope.foo = 'bar';
});
