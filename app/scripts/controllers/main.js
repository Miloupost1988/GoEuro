'use strict';

/**
 * @ngdoc function
 * @name goEuroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goEuroApp
 */
angular.module('goEuroApp')
        .controller('MainCtrl', ['githubService', function(githubService) {
            var self = this;

            this.githubRepos = ['Milou\'s turbo app', 'GoEuro'];
            this.newRepo     = '';
            this.repositories = [];
            this.error = '';

            this.addRepo = function ( ) {
                this.githubRepos.push( this.newRepo );
                this.newRepo = '';
            };

            this.getUserInfo = function getUserInfo() {
              self.repositories = [];

              githubService.getUserInfo(this.newRepo)
                .then(function success(data) {
                  self.error = '';
                  self.repositories = data;
                },
                function error(message) {
                  self.error = message;
                });
            };
        }
]);
