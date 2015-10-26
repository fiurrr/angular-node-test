'use strict';

(function () {
    loginDao.$inject = ['$http'];
    function loginDao($http) {
        function login(username, password) {
            return $http.post('/api/auth', {username: username, password: password});
        }

        return {
            login: login
        }
    }

    angular.module('testApp').service('loginDao', loginDao);
})();