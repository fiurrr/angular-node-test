'use strict';

(function () {
    NavbarCtrl.$inject = ['$scope', '$location', 'session', 'loginDao'];
    angular.module('testApp').controller('NavbarCtrl', NavbarCtrl);

    function NavbarCtrl($scope, $location, session, loginDao) {
        $scope.logout = logout;

        function init() {
            $scope.username = session.getUsername();
            if (!$scope.username) {
                $location.path('/login');
            }
        }

        init();

        function logout() {
            loginDao.logout().then(function(){
                session.kill();
                $location.path('/login');
            });
        }
    }
})();