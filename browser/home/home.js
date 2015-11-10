app.config(function($stateProvider, $locationProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/home/home.html'
    })
});
