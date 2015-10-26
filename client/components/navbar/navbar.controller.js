'use strict';

(function () {
    NavbarCtrl.$inject = ['$scope', '$location', 'session'];
    angular.module('testApp').controller('NavbarCtrl', NavbarCtrl);

    function NavbarCtrl($scope, $location, session) {

        function init() {
            $scope.username = session.getUsername();
            if (!$scope.username) {
                $location.path('/login');
            }
        }

        init();
    }
})();