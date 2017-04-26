var app = angular.module('myApp', ['myApp.factories', 'myApp.controllers', 'myApp.services', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
    .when('/upload-image', {
        templateUrl: 'views/upload-image.html',
        controller: 'UploadController'
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
    .when('/drink/:id', {
       templateUrl: 'views/objective.html',
       controller: 'DrinkDetailsController'
   })
    .when('/eat/:id', {
       templateUrl: 'views/eat-details.html',
       controller: 'EatDetailsController'
   })
    .when('/shop/:id', {
       templateUrl: 'views/objective.html',
       controller: 'ShopDetailsController'
   })
    .when('/play/:id', {
       templateUrl: 'views/objective.html',
       controller: 'PlayDetailsController'
   })

}]);

