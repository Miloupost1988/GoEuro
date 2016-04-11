'use strict';

/**
 * @ngdoc overview
 * @name goEuroApp
 * @description
 * # goEuroApp
 *
 * Main module of the application.
 */
angular
        .module('goEuroApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
        ])
        .config(function ($routeProvider, $logProvider) {
            $logProvider.debugEnabled(true);

            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl as ctrl'
                    })
                    .when('/about', {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        });
