'use strict';

/**
 * @ngdoc service
 * @name goEuroApp.githubService
 * @description
 * # githubService
 * Service in the goEuroApp.
 */
angular.module('goEuroApp')
  .service('githubService', [
    '$http',
    '$log',
    '$q',
    'githubConstants',
    function ($http, $log, $q, githubConstants) {
      var getUserInfo = function(user) {
        return checkUserExist(user)
        .then(function success(response){
          $log.debug('User ' + user + ' exists, getting her data.');
          return getUserRepos(response.data.repos_url);
        },
        function error(response) {
          if(response.status == 404){
            return $q(function(resolve, reject){
              reject("User does not exist!");
            });
          }

          if(response.status == 500) {
            return $q(function(resolve, reject){
              reject("There was an error when calling the github API. Is github down?");
            });
          }

          return $q(function(resolve, reject){
            reject("Unexpected error!");
          });
        })
        .then(function success(response) {
          return processReposResponse(response);
        });
      };

      // Checks if the user exists, returns a promise with the result of the HTTP call
      var checkUserExist = function checkUserExist(username) {
        var url = 'https://' + githubConstants.baseUrl
          + githubConstants.getUserEndpoint
          + username;

        $log.debug('Calling endpoint ' + url + ' to see if user exists.')

        return executeGetRequest(url);
      }

      // Fetches the data from a URL, returns a promise with the result of the HTTP call
      var getUserRepos = function getUserRepos(url){
        return executeGetRequest(url);
      }

      var executeGetRequest = function executeGetRequest(url){
        return $http({
          method: 'GET',
          url: url
        });
      }

      var processReposResponse = function processReposResponse(httpResponse) {
        var resultArray = [];

        httpResponse.data.forEach(function processOne(repoInformation, i) {
          $log.debug('Processing repository ' + i + ': ' + repoInformation.full_name);
          resultArray.push({
            name: repoInformation.full_name,
            url: repoInformation.html_url
          });
        });

        return $q(function(resolve, reject) {
          if(resultArray.length == 0) {
            reject('No repositories found!')
          } else {
            resolve(resultArray);
          }
        });
      }

      return {
        getUserInfo: getUserInfo
      };
    }
  ]);
