'use strict';

describe('Service: session', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var session;
  beforeEach(inject(function (_session_) {
    session = _session_;
  }));

  xit('should do something', function () {
    expect(!!session).toBe(true);
  });

});
