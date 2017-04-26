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

app.controller('SignupController', ['$scope', '$location', 'UserService', 'User', 'Cat', 'Objective', 'Location', 'Badge', function ($scope, $location, UserService, User, Cat, Objective, Location, Badge) {

    $scope.cats = Cat.query();

    $scope.objectives = Objective.query();

    $scope.locations = Location.query();

    $scope.badges = Badge.query();
}]);

app.controller('HomeController', ['$scope', '$location', 'Cat', function ($scope, $location, Cat) {

    $scope.cats = Cat.query();

    $scope.goToDrink = function () {
        $location.path('/tabsController/dRINK')
    }
    $scope.goToEat = function () {
        $location.path('/tabsController/eAT')
    }
    $scope.goToPlay = function () {
        $location.path('/tabsController/pLAY')
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

app.controller('cameraController', ['$scope', '$location', function () {

}])

app.controller('PlayController', ['$scope', '$location', function () {
    $scope.goToSpots = function () {
        $path.location = ('/')
    }

}]);

app.controller('DrinkController', ['$scope', '$location', 'Location', 'Objective', function ($scope, $location) {
    $scope.locations = Location.query();
    $scope.objectives = Objective.query(); 
}]);

app.controller('EatController', ['$scope', '$location', function () {
    $scope.goToRes = function () {
        $path.location = ('/')
    }
}]);

app.controller('ShopController', ['$scope', '$location', function () {
    $scope.goToStores = function () {
        $path.location = ('/')
    }
}]);

app.controller('locationController', ['$scope', '$location', function () {

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

app.controller('HowToController', ['$scope', '$location', function () {

}]);

app.controller('AboutController', ['$scope', '$location', function () {

}]);

