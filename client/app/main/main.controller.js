'use strict';

(function () {
    MainCtrl.$inject = ['$scope', 'session', 'mainDao'];
    angular.module('testApp').controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, session, mainDao) {
        var role = session.getRole();

        $scope.isAdmin = isAdmin;

        if(isAdmin()) {
            mainDao.getList()
                .success(function (res) {
                    $scope.entries = res.logs;
                })
                .error(function (res) {
                    console.log(res);
                });
        }

        function isAdmin() {
            return role === 'admin';
        }
    }
})();

