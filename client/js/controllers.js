var app = angular.module('myApp.controllers', []);

// WELCOME PAGE CONTROLLER
app.controller('WelcomeController', ['$scope', '$location', function ($scope, $location) {

}]);

// LOGIN PAGE CONTROLLER
app.controller('LoginController', ['$scope', '$location', 'UserService', 'User', function ($scope, $location, UserService, User) {
    UserService.me().then(function (success) {
        // $location.path('/home');
        redirect();
    });

    function redirect() {
        var dest = $location.search().p;
        if (!dest) {
            dest = '/';
        }
        $location.path(dest).search('p', null);
    }

    $scope.login = function () {
        UserService.login($scope.email, $scope.password)
            .then(function () {
                $location.path('/home');
            }, function (err) {
                console.log(err);
            })
    }
}]);


// SIGN UP PAGE CONTROLLER - CREATES NEW USERS
app.controller('SignupController', ['$scope', '$location', 'UserService', 'User', function ($scope, $location, UserService, User) {

    $scope.signUp = function () {
        var u = new User({
            email: $scope.email,
            password: $scope.password,
            name: $scope.name
        });
        u.$save(function () {
            $location.path('/home');
        })
    }
}]);


//  HOME / BEGIN GAME / SELECT CATEGORY CONTROLLER
app.controller('HomeController', ['$scope', '$location', 'UserService', 'Cat', function ($scope, $location, UserService, Cat) {

    UserService.requireLogin();

    $scope.cats = Cat.query();

}]);


// BADGES PAGE CONTROLLER
app.controller('BadgesController', ['$scope', '$location', 'Badge', 'UserService', function ($scope, $location, Badge, UserService) {

    UserService.requireLogin();

    $scope.badges = Badge.query();

}]);

// BADGE DETAILS PG CONTROLLER FOR SINGLE BADGE
app.controller('BadgeDetailsController', ['$scope', '$routeParams', '$location', 'Badge', 'UserService', function ($scope, $routeParams, $location, Badge, UserService) {

    UserService.requireLogin();

    $scope.badges = Badge.get({ id: $routeParams.id }, function (success) {
        $scope.badge = success;
    });

}]);


// HOW TO PLAY PG CONTROLLER
app.controller('HowToController', ['$scope', '$location', function ($scope, $location) {

}]);


// ABOUT PG CONTROLLER
app.controller('AboutController', ['$scope', '$location', function ($scope, $location) {

}]);


// CAMERA CONTROLLER
app.controller('cameraController', ['$scope', '$location', function ($scope, $location) {

}]);


// PLAY PAGE CONTROLLER - LISTS ALL OBJECTIVES UNDER PLAY CATEGORY
app.controller('PlayController', ['$scope', '$location', 'Play', 'UserService', function ($scope, $location, Play, UserService) {

    UserService.requireLogin();

    $scope.plays = Play.query();

}]);


// DETAILS PG CONTROLLER FOR SINGLE PLAY OBJECTIVE 
app.controller('PlayDetailsController', ['$scope', '$routeParams', '$location', 'Loc', 'Play', 'UserService', function ($scope, $routeParams, $location, Loc, Play, UserService) {

    UserService.requireLogin();

    $scope.plays = Play.get({ id: $routeParams.id }, function (success) {
        $scope.play = success;
    });

}]);


// DRINK PAGE CONTROLLER - LISTS ALL OBJECTIVES UNDER DRINK CATEGORY
app.controller('DrinkController', ['$scope', '$location', 'Loc', 'Drink', 'UserService', function ($scope, $location, Loc, Drink, UserService) {

    UserService.requireLogin();

    $scope.locs = Loc.query();

    $scope.drinks = Drink.query();

}]);


// DETAILS PG CONTROLLER FOR SINGLE DRINK OBJECTIVE 
app.controller('DrinkDetailsController', ['$scope', '$routeParams', '$location', 'Loc', 'Drink', 'UserService', function ($scope, $routeParams, $location, Loc, Drink, UserService) {

    UserService.requireLogin();

    $scope.drinks = Drink.get({ id: $routeParams.id }, function (success) {
        $scope.drink = success;
    });

}]);


// EAT PAGE CONTROLLER - LISTS ALL OBJECTIVES UNDER EAT CATEGORY
app.controller('EatController', ['$scope', '$location', 'Loc', 'Eat', 'UserService', function ($scope, $location, Loc, Eat, UserService) {

    UserService.requireLogin();

    $scope.eats = Eat.query();

}]);


// DETAILS PG CONTROLLER FOR SINGLE EAT OBJECTIVE 
app.controller('EatDetailsController', ['$scope', '$routeParams', '$location', 'Loc', 'Eat', 'UserService', function ($scope, $routeParams, $location, Loc, Eat, UserService) {

    UserService.requireLogin();

    $scope.eats = Eat.get({ id: $routeParams.id }, function (success) {
        $scope.eat = success;
    });

}]);


// SHOP PG CONTROLLER - LISTS ALL OBJECTIVES UNDER SHOP CATEGORY
app.controller('ShopController', ['$scope', '$location', 'Loc', 'Shop', 'UserService', function ($scope, $location, Loc, Shop, UserService) {

    UserService.requireLogin();

    $scope.shops = Shop.query();

}]);


// DETAILS PG CONTROLLER FOR SINGLE SHOP OBJECTIVE 
app.controller('ShopDetailsController', ['$scope', '$routeParams', '$location', 'Loc', 'Shop', 'UserService', function ($scope, $routeParams, $location, Loc, Shop, UserService) {

    UserService.requireLogin();

    $scope.shops = Shop.get({ id: $routeParams.id }, function (success) {
        $scope.shop = success;
    });
}]);


// MAP PG CONTROLLER  - WAS PREVIOUSLY CALLED 'locationController' BUT WE DON'T NEED THAT NOW
app.controller('MapController', ['$scope', '$location', 'Loc', 'Badge', 'UserService', '$http', function ($scope, $location, Loc, Badge, UserService) {

    UserService.requireLogin();

}]);




// UPLOAD IMAGE PG CONTROLLER 
app.controller('UploadController', ['$scope', '$location', 'fileUploadService', '$http', function ($scope, $location, $http, fileUploadService) {

    $scope.success = function() {
        $scope.data =data
        return data;
    }

    $scope.error = function() {
        console.log(error);
    }

    $scope.sendData = function () {
        $scope.data = {
            data: { test: 'test' },
            status: { number: 204 },
            headers: { 'Content-Type': 'json' },
            json: {
                "type": TEXT_DETECTION
            }
        }
    $http.post("https://vision.googleapis.com/v1/images:annotate?fields=responses&key=AIzaSyBxA6mwZvgZArDg-JocXNFf5x09TLTqA7s", data, config).then(success, error);
    
    
    // $http({
    //     method: 'POST',
    //     url: "https://vision.googleapis.com/v1/images:annotate?fields=responses&key=AIzaSyBxA6mwZvgZArDg-JocXNFf5x09TLTqA7s"
    // }).then(function successCallback(response, data) {
    //     // this callback will be called asynchronously
    //     // when the response is available
    //         $scope.data = data;
    // }, function errorCallback(response, status) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //     $scope.status = status;
    // });

    // $scope.myfile = $scope.file;

    // $scope.req = {
    //     method: 'POST',
    //     url: "https://vision.googleapis.com/v1/images:annotate?fields=responses&key=AIzaSyBxA6mwZvgZArDg-JocXNFf5x09TLTqA7s",
    //     data: {test: 'test'},
    //     status: {number: 204},
    //     headers: {'Content-Type': 'json'},
    // }

    // $http(req).then(function (data, status) {
    //     $scope.data = data;

    // }, function (status) {
    //     $scope.status = status;
    // });


    // $scope.dataFile = function () {
    //     fs.readFile(myfile, function read(err, data) {
    //         if (err) {
    //             console.log(error + file)
    //         } else {
    //             content = data;
    //             console.log(content)
    //         }
    //     })
    // }
    // var config = {
    //     projectId: 'api-project-346993894176',
    //     keyFilename: '/server/config/config.json'
    // };

    // $scope.promise = fileUploadService.uploadFileToUrl(myfile, uploadUrl);

    // return promise;



    // var uploadUrl= {
    //      ("https:vision.googleapis.com/v1/images:annotate?fields=responses&key=AIzaSyBxA6mwZvgZArDg-JocXNFf5x09TLTqA7s",)
    //         method: "POST",
    //         uri: "https://vision.googleapis.com/v1/images:annotate?fields=responses&key=AIzaSyBxA6mwZvgZArDg-JocXNFf5x09TLTqA7s",
    //         contentType: "image.jpg",
    //         data: "JSON()"

    // }

    // var uploadUrl = {
    //     method: "POST",
    //     uri: "https://vision.googleapis.com/v1/images:annotate?fields=responses&key=AIzaSyBxA6mwZvgZArDg-JocXNFf5x09TLTqA7s", 
    //     dataType: 'json',
    //     json: {
    //         "requests":
    //         [
    //             {
    //                 "features":
    //                 [
    //                     {
    //                         "type": "TEXT_DETECTION"
    //                     }
    //                 ],
    //                 "image":
    //                 {
    //                     "source":
    //                     {
    //                         // "gcsImageUri": "gcs://herschelsbucket/file"
    //                     }
    //                 }
    //             }
    //         ]
    //     }
    // })

    //     promise.then(function (response) {
    //         serverResponse = response;
    //     }.then(function () {
    //         serverResponse.read(15)
    //     }), function () {
    //         $scope.serverResponse = 'An error has occurred';
    //     })
    // };

}]);

