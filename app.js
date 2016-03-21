'use strict';

/* App Module */


var schedulerApp = angular.module('imdbSearchApp', [
    'ngRoute',
    'appControllers',
    'imdbServices'
]);



schedulerApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/search.html',
                    controller: 'MainCtrl'});

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);

