'use strict';

/**
 * @ngdoc service
 * @name goEuroApp.githubConstants
 * @description
 * # githubConstants
 * Constant in the goEuroApp.
 */
angular.module('goEuroApp')
  .constant('githubConstants', {
    baseUrl: 'api.github.com',
    getUserEndpoint: '/users/',
    getUserReposEndpoint: '/repos'
  });
