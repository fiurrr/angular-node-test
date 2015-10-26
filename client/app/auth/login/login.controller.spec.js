'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('testApp'));

  var MainCtrl,
      scope,
      $httpBackend,
      $location,
      session;

  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $injector) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectPOST('/api/auth')
      .respond({token: 'test', username:'test2', role: 'admin'});

    scope = $rootScope.$new();

    $location = $injector.get('$location');
    spyOn($location, 'path');

    session = $injector.get('session');
    spyOn(session, 'create');

    MainCtrl = $controller('LoginCtrl', {
      $scope: scope,
      $location: $location
    });
  }));

  it(' should have login action', function () {
    expect(scope.submit).toBeDefined();
  });

  it(' should have submit action', function () {
    scope.submit();
    $httpBackend.flush();
    expect($location.path).toHaveBeenCalledWith('/main');
    expect(session.create).toHaveBeenCalled();
  });
});
