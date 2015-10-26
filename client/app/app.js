'use strict';
(function () {
    var app = angular.module('testApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngMaterial'
    ]);

    app.config(function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/login'
            });

        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('authInterceptor');
    });

    authInterceptor.$inject = ['$rootScope', '$q', 'session', '$location'];
    app.factory('authInterceptor', authInterceptor);

    function authInterceptor($rootScope, $q, session, $location) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if (session.getToken()) {
                    config.headers.Authorization = 'Bearer ' + session.getToken();
                }
                return config;
            },
            responseError: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                    session.kill();
                    return $q.reject(response);
                }
                else {
                    return $q.reject(response);
                }
            }
        };
    }
})();

