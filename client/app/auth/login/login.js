'use strict';

angular.module('testApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/auth/login/login.html',
        controller: 'LoginCtrl'
      });
  });