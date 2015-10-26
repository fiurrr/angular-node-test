'use strict';

describe('Service: login', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var login;
  beforeEach(inject(function (_login_) {
    login = _login_;
  }));

  xit('should exist', function () {
    expect(login).toBeDefined();
  });

});
