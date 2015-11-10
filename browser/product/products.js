app.config(function($stateProvider, $locationProvider){
  $stateProvider
    .state('products', {
      url: '/products',
      templateUrl: '/product/products.html'
    })
});
