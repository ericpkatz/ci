beforeEach(module('app'));
var $injector;
var $controller;

beforeEach(inject(function(_$injector_, _$controller_){
  $injector = _$injector_;
  $controller = _$controller_;
}));

describe('HomeCtrl', function(){
  var HomeCtrl, scope;
  beforeEach(function(){
    scope = {};
    HomeCtrl = $controller('HomeCtrl', { $scope: scope });
  });
  it('works', function(){
    expect(HomeCtrl).to.be.ok;
  });
  it('scope foo is bar', function(){
    expect(scope.foo).to.eq('bar');
  });
});
