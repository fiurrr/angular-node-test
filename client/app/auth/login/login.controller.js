'use strict';

(function () {
    login.$inject = ['$scope', 'loginDao', '$location', 'session'];
    function login($scope, loginDao, $location, session) {

        $scope.submit = submit;

        function submit() {
            loginDao.login($scope.username, $scope.password)
                .success(function (res) {
                    session.create(res);
                    $location.path('/main');
                })
                .error(function(res) {
                    $scope.error = res.message;
                });
        }
    }

    angular.module('testApp').controller('LoginCtrl', login);
})();

