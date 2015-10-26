'use strict';

(function () {
    MainDao.$inject = ['$http'];
    function MainDao($http) {
        function getList(username, password) {
            return $http.get('/api/logs');
        }

        return {
            getList: getList
        }
    }

    angular.module('testApp').service('mainDao', MainDao);
})();