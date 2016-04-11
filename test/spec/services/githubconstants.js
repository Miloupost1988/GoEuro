'use strict';

describe('Service: githubConstants', function () {

  // load the service's module
  beforeEach(module('goEuroApp'));

  // instantiate service
  var githubConstants;
  beforeEach(inject(function (_githubConstants_) {
    githubConstants = _githubConstants_;
  }));

  it('should do something', function () {
    expect(!!githubConstants).toBe(true);
  });

});
