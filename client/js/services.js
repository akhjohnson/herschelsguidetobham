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
        })
    };

    this.logout = function () {
        return $http({
            method: "GET",
            url: "http://localhost:3000/api/users/logout"
        }).then(function (success) {
            user = undefined;
        })
    };

    this.me = function () {
        if (user) {
            return Promise.resolve(user);
        } else {
            return $http({
                method: "GET",
                url: "http://localhost:3000/api/users/me"
            }).then(function (success) {
                user = success.data;
                return success.data;
            })
        }
    }
}])

// app.service("AuthService", ['$http', '$location', function ($http, $location) {
//     var google = require('googleapis');
//     var OAuth2 = google.auth.OAuth2;

//     var oauth2Client = new OAuth2(
//         "346993894176-4mnc5optl7vtv1mdu93c8b7f27kqghl1.apps.googleusercontent.com",
//         "L-5ttDYA8Q7IpDzf-Zr9Z8zx",
//         // NEED REDIRECT
//     );

//     // set auth as a global default
//     google.options({
//         auth: oauth2Client
//     });
//     // generate a url that asks permissions for Google+ and Google Calendar scopes
//     var scopes = [
//         'https://www.googleapis.com/auth/plus.me',
//         'https://www.googleapis.com/auth/calendar'
//     ];
//     var url = oauth2Client.generateAuthUrl({
//         // 'online' (default) or 'offline' (gets refresh_token)
//         access_type: 'offline',
//         // If you only need one scope you can pass it as a string
//         scope: scopes,
//         // Optional property that passes state parameters to redirect URI
//         // state: { foo: 'bar' }
//     });
// }])