var app = angular.module("myApp.services", []);

app.service('UserService', ['$http', '$location', function ($http, $location) {

    var user;

    this.isLoggedIn = function () {
        if (!user) {
            return false;
        }
        return true;
    }

    this.requireLogin = function () {
        if (!this.isLoggedIn()) {
            var current = $location.path();
            $location.path('/login').search('p', current);
        }
    }

    this.login = function (email, password) {
        return $http({
            method: "POST",
            url: "http://localhost:3000/api/users/login",
            data: { email, password }
        }).then(function (success) {
            user = success.data;
            return success.data;
        }, function(err) {
            console.log(err);
            throw err;
        });
    };

    this.logout = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/api/users/logout'
        }).then(function(success){
            user = undefined;
        }, function(err) {
            console.log(err);
            throw err;
        });
    }


    this.me = function() {
        if (user) {
            return Promise.resolve(user);
            console.log(user);
        } else {
            return $http ({
                method: "GET",
                url: 'http://localhost:3000/api/users/me'
            }).then(function (success){
                user = success.data;
                return success.data;
            }, function(err) {
                console.log(err);
                throw err;
            });
        }
    }

}]);
