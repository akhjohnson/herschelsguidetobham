angular.module('myApp.controllers', [])

.controller ('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
    UserService.me().then(function(success) {

    })
    function redirect() {
        var dest= $location.search().p;
        if (!dest) {
            dest = '/login';
        }
        $location.path(dest).search('p', null);
    }
    $scope.login = function() {
        UserService.login($scope.email, $scope.password)
            .then(function() {
                redirect();
            }, function(err) {
                console.log(err);
            })
    }
}])