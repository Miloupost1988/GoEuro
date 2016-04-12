'use strict';

describe('Service: githubService', function () {
  var $http, mainCtrl, githubService;

  // load the service's module
  beforeEach(module('goEuroApp'));

  // instantiate service


  beforeEach(inject(function (mainCtrl, _githubService_, $http) {
    githubService = _githubService_;
  }));

  it('should make http request when app starts', function () {
    var executeGetRequest;
    $http.expectGET(url).respond(user, repos);
    githubService.getItem.then(function(httpResponse){
      executeGetRequest = response.data;
    });
    expect(githubService).toHaveBeenCalled();
  });

});
