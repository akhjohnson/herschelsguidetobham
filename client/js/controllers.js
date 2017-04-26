var app = angular.module('myApp.controllers', []);

app.controller('LoginController', ['$scope', '$location', 'UserService', 'User', 'Cat', 'Objective', 'Location', 'Badge', function ($scope, $location, UserService, User, Cat, Objective, Location, Badge) {

    $scope.cats = Cat.query();

    $scope.objectives = Objective.query();

    $scope.locations = Location.query();

    $scope.badges = Badge.query();

    // UserService.me().then(function (success) {
    //     $location.path('/home');
    // });

    // function redirect() {
    //     var dest = $location.search().p;
    //     if (!dest) {
    //         dest = '/login';
    //     }
    //     $location.path(dest).search('p', null);
    // }

    // $scope.login = function () {
    //     UserService.login($scope.email, $scope.password)
    //         .then(function () {
    //             $location.path('/');
    //         }, function (err) {
    //             console.log(err);
    //         })
    // }
}]);

app.controller('SignupController', ['$scope', '$location', 'UserService', 'User', 'Cat', 'Objective', 'Loc', 'Badge', function ($scope, $location, UserService, User, Cat, Objective, Loc, Badge) {

    $scope.cats = Cat.query();

    $scope.objectives = Objective.query();

    $scope.locs = Loc.query();

    $scope.badges = Badge.query();
}]);

app.controller('HomeController', ['$scope', '$location', 'Cat', function ($scope, $location, Cat) {

    $scope.cats = Cat.query();

    $scope.goToDrink = function () {
        $location.path('/drink')
    }
    $scope.goToEat = function () {
        $location.path('/eat')
    }
    $scope.goToPlay = function () {
        $location.path('/play')
    }
    $scope.goToShop = function () {
        $location.path('/shop')
    }
}]);

app.controller('badgesCtrl', ['$scope', '$location', '$ionicUser', function ($scope, $location, $ionicUser) {
    $scope.badges = Badges.query();
    $scope.goToBadges = function () {
        $location.path('/tabsController/yourBadges')
    }
    $scope.badgeById = function (id) {
        return $scope.badges[id]
    }
}]);

app.controller('cameraController', ['$scope', '$location', function ($scope, $location) {

}])

app.controller('PlayController', ['$scope', '$location', function ($scope, $location) {
    $scope.goToSpots = function () {
        $path.location = ('/')
    }

}]);

app.controller('DrinkController', ['$scope', '$location', 'Loc', 'Objective', 'Drink', function ($scope, $location, Loc, Objective, Drink) {
    $scope.locs = Loc.query();
    $scope.drinks = Drink.query();
    // $scope.objectives = Objective.query(); 
}]);

app.controller('EatController', ['$scope', '$location', function ($scope, $location) {
    $scope.goToRes = function () {
        $path.location = ('/')
    }
}]);

app.controller('ShopController', ['$scope', '$location', function ($scope, $location) {
    $scope.goToStores = function () {
        $path.location = ('/')
    }
}]);

app.controller('locationController', ['$scope', '$location', function ($scope, $location) {

}]);

app.controller('UploadController', ['$scope', '$location', 'fileUploadService', function ($scope, $location, fileUploadService) {


    $scope.uploadFile = function () {
        var file = $scope.myFile;
        var uploadUrl = "../server/service.php"; //Url of webservice/api/server
        
        var promise = fileUploadService.uploadFileToUrl(file, uploadUrl);

        promise.then(function (response) {
            $scope.serverResponse = response;
        }, function () {
            $scope.serverResponse = 'An error has occurred';
        })
    };
}]);

app.controller('HowToController', ['$scope', '$location', function ($scope, $location) {

}]);

app.controller('AboutController', ['$scope', '$location', function ($scope, $location) {

}]);

app.controller('ObjectiveController', ['$scope', '$location', function ($scope, $location) {

}]);

