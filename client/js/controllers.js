var app = angular.module('myApp.controllers', []);


// WELCOME PAGE CONTROLLER
app.controller('WelcomeController', ['$scope', '$location', function($scope, $location) {

}]);


// LOGIN PAGE CONTROLLER
app.controller('LoginController', ['$scope', '$location', 'UserService', 'User', function($scope, $location, UserService, User) {
        UserService.me().then(function (success) {
        redirect();
    });
    function redirect() {
        var dest = $location.search().p;
        if (!dest) { dest = '/'; }
        $location.path(dest).search('p', null);
    }

    $scope.login = function() {
        UserService.login($scope.email, $scope.password).then(function() {
            redirect();
        }, function(err) {
            console.log(err);
        })
    }
}]);


// SIGN UP PAGE CONTROLLER - CREATES NEW USERS
app.controller('SignupController', ['$scope', '$location', 'UserService', 'User', function($scope, $location, UserService, User) {

    $scope.signUp = function() {
        var u = new User({
            email: $scope.email,
            password: $scope.password,
            name: $scope.name
        });
        u.$save(function() {
            $location.path('/home');
        });
    };
}]);


//  HOME / BEGIN GAME / SELECT CATEGORY CONTROLLER
app.controller('HomeController', ['$scope', '$location', 'UserService', 'Cat', function($scope, $location, UserService, Cat) {

    UserService.requireLogin();

    $scope.cats = Cat.query();

}]);


// BADGES PAGE CONTROLLER
app.controller('BadgesController', ['$scope', '$location', 'Badge', 'UserService', function($scope, $location, Badge, UserService) {

    UserService.requireLogin();

    $scope.badges = Badge.query();

}]);


// BADGE DETAILS PG CONTROLLER FOR SINGLE BADGE
app.controller('BadgeDetailsController', ['$scope', '$routeParams', '$location', 'Badge', 'UserService', function($scope, $routeParams, $location, Badge, UserService) {

    UserService.requireLogin();

    $scope.badges = Badge.get({ id: $routeParams.id }, function(success) {
        $scope.badge = success;
    });

}]);


// HOW TO PLAY PG CONTROLLER
app.controller('HowToController', ['$scope', '$location', function($scope, $location) {

}]);


// ABOUT PG CONTROLLER
app.controller('AboutController', ['$scope', '$location', function($scope, $location) {

}]);


// CAMERA CONTROLLER
app.controller('cameraController', ['$scope', '$location', function($scope, $location) {

}]);


// PLAY PAGE CONTROLLER - LISTS ALL OBJECTIVES UNDER PLAY CATEGORY
app.controller('PlayController', ['$scope', '$location', 'Play', 'UserService', function($scope, $location, Play, UserService) {

    UserService.requireLogin();

    $scope.plays = Play.query();

}]);


// DETAILS PG CONTROLLER FOR SINGLE PLAY OBJECTIVE 
app.controller('PlayDetailsController', ['$scope', '$routeParams', '$location', 'Loc', 'Play', 'UserService', function($scope, $routeParams, $location, Loc, Play, UserService) {

    UserService.requireLogin();

    $scope.plays = Play.get({ id: $routeParams.id }, function(success) {
        $scope.play = success;
    });

}]);


// DRINK PAGE CONTROLLER - LISTS ALL OBJECTIVES UNDER DRINK CATEGORY
app.controller('DrinkController', ['$scope', '$location', 'Loc', 'Drink', 'UserService', function($scope, $location, Loc, Drink, UserService) {

    UserService.requireLogin();

    $scope.locs = Loc.query();

    $scope.drinks = Drink.query();

}]);


// DETAILS PG CONTROLLER FOR SINGLE DRINK OBJECTIVE 
app.controller('DrinkDetailsController', ['$scope', '$routeParams', '$location', 'Loc', 'Drink', 'UserService', function($scope, $routeParams, $location, Loc, Drink, UserService) {

    UserService.requireLogin();

    $scope.drinks = Drink.get({ id: $routeParams.id }, function(success) {
        $scope.drink = success;
    });

}]);


// EAT PAGE CONTROLLER - LISTS ALL OBJECTIVES UNDER EAT CATEGORY
app.controller('EatController', ['$scope', '$location', 'Loc', 'Eat', 'UserService', function($scope, $location, Loc, Eat, UserService) {

    UserService.requireLogin();

    $scope.eats = Eat.query();

}]);


// DETAILS PG CONTROLLER FOR SINGLE EAT OBJECTIVE 
app.controller('EatDetailsController', ['$scope', '$routeParams', '$location', 'Loc', 'Eat', 'UserService', function($scope, $routeParams, $location, Loc, Eat, UserService) {

    UserService.requireLogin();

    $scope.eats = Eat.get({ id: $routeParams.id }, function(success) {
        $scope.eat = success;
    });

}]);


// SHOP PG CONTROLLER - LISTS ALL OBJECTIVES UNDER SHOP CATEGORY
app.controller('ShopController', ['$scope', '$location', 'Loc', 'Shop', 'UserService', function($scope, $location, Loc, Shop, UserService) {

    UserService.requireLogin();

    $scope.shops = Shop.query();

}]);


// DETAILS PG CONTROLLER FOR SINGLE SHOP OBJECTIVE 
app.controller('ShopDetailsController', ['$scope', '$routeParams', '$location', 'Loc', 'Shop', 'UserService', function($scope, $routeParams, $location, Loc, Shop, UserService) {

    UserService.requireLogin();

    $scope.shops = Shop.get({ id: $routeParams.id }, function(success) {
        $scope.shop = success;
    });
}]);


// MAP PG CONTROLLER  - WAS PREVIOUSLY CALLED 'locationController' BUT WE DON'T NEED THAT NOW
app.controller('MapController', ['$scope', '$location', 'Loc', 'Badge', 'UserService', '$http', function($scope, $location, Loc, Badge, UserService, $http) {

    UserService.requireLogin();

}]);


// CONTACT US PG CONTROLLER
app.controller('ContactController', ['$scope', '$location', '$http', 'Message', function($scope, $location, $http, Message) {

   //SEND EMAIL - WORKING & SENDING TO KATIELYNNDECK@GMAIL.COM
    $scope.sendEmail = function () {
        var newMessage = new Message({
            from: $scope.from,
            subject: $scope.subject,
            content: $scope.content
        });

        newMessage.$save(function () {
            $location.path('/');
        });
    };
}]);


// MY PROFILE PG CONTROLLER
app.controller('MyProfileController', ['$scope', '$location', '$routeParams', 'Loc', 'Badge', '$http', 'User', 'UserService', function($scope, $location, $routeParams, Loc, Badge, $http, User, UserService) {

    UserService.requireLogin();

    $scope.users = User.query();

    $scope.badges = Badge.query();

    // $scope.user = User.get({ id: $routeParams.id });

    User.get({ id: $routeParams.id }, function(success) {
        $scope.user = success;
    });

    $scope.logMeOut = function() {
        UserService.logout();
    };

    $scope.update = function() {
        $scope.user.$update(function(success) {
            $location.path('/me');
        })
    };

}]);

app.controller('UploadController', ['$scope', '$location', '$routeParams', '$http', 'Badge', 'User', 'UserService', 'Loc', 'Drink', 'Eat', 'Play', 'Shop', function($scope, $location, $routeParams, $http, Badge, User, UserService, Loc, Drink, Eat, Play, Shop) {

    



}]);



// UPLOAD IMAGE PG CONTROLLER 
// app.controller('UploadController', ['$scope', '$location', '$http', '$rootScope', 'fileUploadService', function($scope, $location, $http, $rootScope, fileUploadService) {
    
//     $scope.textCompare = function() {
//         for (var i = 0; i < $rootScope.coupon.length; i++) {
//             alert("Inside for loop");
//             if (name === $rootScope.coupon[i].names)
//             {
//               console.log(Success);
//             }
//         }
//     }

//     var vaules = [];
//     $('#myFileField').val();

//     $scope.sendData = function() {


//         $http.post("https://vision.googleapis.com/v1/images:annotate?fields=responses&key=AIzaSyBxA6mwZvgZArDg-JocXNFf5x09TLTqA7s", { data: requestBody })
//             .then(function(response, error) {
//                 var data = response.data;
//                 fs.readFile(data);
//             }, function(error) {
//                 console.log(error);
//             });

//         var requestBody = {

//             "requests": [
//                 {
//                     "image": {
//                         "source": {
//                             "imageUri": "/images/good-people-logo.png"
//                         },
//                         "content": ""
//                     },
//                     "features": [
//                         {
//                             "type": "TEXT_DETECTION"
//                         }
//                     ]
//                 }
//             ]
//         }
//     }
// }]);

