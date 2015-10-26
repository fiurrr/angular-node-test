'use strict';

(function () {
    loginDao.$inject = ['$http'];
    function loginDao($http) {
        function login(username, password) {
            return $http.post('/api/auth', {username: username, password: password});
        }
        function logout(username, password) {
            return $http.get('/api/auth/logout');
        }

        return {
            login: login,
            logout: logout
        }
    }

    angular.module('testApp').service('loginDao', loginDao);
})();