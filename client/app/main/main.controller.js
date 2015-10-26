'use strict';

(function () {
    MainCtrl.$inject = ['$scope', 'session', 'mainDao'];
    angular.module('testApp').controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, session, mainDao) {
        $scope.role = session.getRole();
        mainDao.getList()
            .success(function (res) {
                $scope.entries = res.logs;
            })
            .error(function (res) {
                console.log(res);
            });
    }
})();

