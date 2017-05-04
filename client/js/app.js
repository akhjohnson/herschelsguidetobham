var app = angular.module('myApp', ['myApp.factories', 'myApp.controllers', 'myApp.services', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'SignupController'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/drink', {
            templateUrl: 'views/drink.html',
            controller: 'DrinkController'
        })
        .when('/eat', {
            templateUrl: 'views/eat.html',
            controller: 'EatController'
        })
        .when('/play', {
            templateUrl: 'views/play.html',
            controller: 'PlayController'
        })
        .when('/shop', {
            templateUrl: 'views/shop.html',
            controller: 'ShopController'
        })
        .when('/about', {
            templateUrl: 'views/aboutCreators.html',
            controller: 'AboutController'
        })
        .when('/how', {
            templateUrl: 'views/howToPlay.html',
            controller: 'HowToController'
        })
        .when('/map', {
            templateUrl: 'views/map.html',
            controller: 'MapController'
        })
        .when('/badges', {
            templateUrl: 'views/badges.html',
            controller: 'BadgesController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/thanks', {
            templateUrl: 'views/thanks.html',
            controller: 'ThanksController'
        })
        .when('/upload', {
            templateUrl: 'views/upload.html',
            controller: 'UploadController'
        })
        .when('/users/:id', {
            templateUrl: 'views/myprofile.html',
            controller: 'MyProfileController'
        })
        .when('/badges/:id', {
            templateUrl: 'views/badge-details.html',
            controller: 'BadgeDetailsController'
        })
        .when('/drink/:id', {
            templateUrl: 'views/drink-details.html',
            controller: 'DrinkDetailsController'
        })
        .when('/eat/:id', {
            templateUrl: 'views/eat-details.html',
            controller: 'EatDetailsController'
        })
        .when('/shop/:id', {
            templateUrl: 'views/shop-details.html',
            controller: 'ShopDetailsController'
        })
        .when('/play/:id', {
            templateUrl: 'views/play-details.html',
            controller: 'PlayDetailsController'
        })
        .when('/play/:id/upload', {
            templateUrl: 'views/upload.html',
            controller: 'UploadController'
        })
        .when('/shop/:id/upload', {
            templateUrl: 'views/upload.html',
            controller: 'UploadController'
        })
        .when('/drink/:id/upload', {
            templateUrl: 'views/upload.html',
            controller: 'UploadController'
        })
        .when('/eat/:id/upload', {
            templateUrl: 'views/upload.html',
            controller: 'UploadController'
        })

}]);

