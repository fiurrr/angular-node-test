'use strict';

angular.module('testApp')
    .service('session', function () {
        var sessionStorage = {};

        return {
            create: function (sessionData) {
                sessionStorage = sessionData;
            },
            kill: function () {
                sessionStorage = {};
            },
            getUsername: function () {
                return sessionStorage.username;
            },
            getRole: function () {
                return sessionStorage.role;
            },
            getToken: function () {
                return sessionStorage.token;
            }
        };
    });
