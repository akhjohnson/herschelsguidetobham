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


app.controller('WelcomeController', ['$scope', '$location', function($scope, $location){
    
}])


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

app.controller('PlayController', ['$scope', '$location', 'Play', function ($scope, $location, Play) {

    $scope.plays = Play.query();

    $scope.goToSpots = function () {
        $path.location = ('/')
    }
}]);

app.controller('PlayDetailsController', ['$scope', '$routeParams', '$location', 'Loc', 'Play', function ($scope, $routeParams, $location, Loc, Play) {

    $scope.plays = Play.get({ id: $routeParams.id }, function (success) {
        $scope.play = success;
    });

}]);

app.controller('DrinkController', ['$scope', '$location', 'Loc', 'Drink', function ($scope, $location, Loc, Drink) {
    $scope.locs = Loc.query();
    $scope.drinks = Drink.query();
    // $scope.objectives = Objective.query(); 
}]);

app.controller('DrinkDetailsController', ['$scope', '$routeParams', '$location', 'Loc', 'Drink', function ($scope, $routeParams, $location, Loc, Drink) {

    $scope.drinks = Drink.get({ id: $routeParams.id }, function (success) {
        $scope.drink = success;
    });

}]);

app.controller('EatController', ['$scope', '$location', 'Eat', function ($scope, $location, Eat) {

    $scope.eats = Eat.query();

    $scope.goToRes = function () {
        $path.location = ('/')
    }
}]);

app.controller('EatDetailsController', ['$scope', '$routeParams', '$location', 'Obj', 'Loc', 'Drink', 'Eat', function ($scope, $routeParams, $location, Obj, Loc, Drink, Eat) {

    $scope.eats = Eat.get({ id: $routeParams.id }, function (success) {
        $scope.eat = success;
    });

}]);

app.controller('ShopController', ['$scope', '$location', 'Shop', function ($scope, $location, Shop) {

    $scope.shops = Shop.query();


    $scope.goToStores = function () {
        $path.location = ('/')
    }
}]);

app.controller('ShopDetailsController', ['$scope', '$routeParams', '$location', 'Loc', 'Shop', function ($scope, $routeParams, $location, Loc, Shop) {

    $scope.shops = Shop.get({ id: $routeParams.id }, function (success) {
        $scope.shop = success;
    });

}]);

app.controller('locationController', ['$scope', '$location', function ($scope, $location) {

}]);

app.controller('UploadController', ['$scope', '$location', 'fileUploadService', function ($scope, $location, fileUploadService) {

        // var config = {
        //     projectId: 'api-project-346993894176',
        //     keyFilename: '/server/config/config.json'
        // };

  
        var uploadUrl = "https://vision.googleapis.com/v1/images:annotate"; //Url of webservice/api/server
        var myfile = $scope.file;

        var dataFile = function () {
            fs.readFile(myfile, function read(err, data) {
                if (err) {
                    console.log(error + file)
                } else {
                    content= data;
                    console.log(content) 
                }
            })
        }

        var promise = fileUploadService.uploadFileToUrl(myfile, uploadUrl);

            return promise;

    //     promise.then(function (response) {
    //         serverResponse = response;
    //     }.then(function () {
    //         serverResponse.read(15)
    //     }), function () {
    //         $scope.serverResponse = 'An error has occurred';
    //     })
    // };



        promise.then(function (response) {
            serverResponse = response;
        }.then(function () {
            serverResponse.read(15)
        }), function () {
            $scope.serverResponse = 'An error has occurred';
        })
    };

    var content;
    // First I want to read the file
    fs.readFile('./Index.html', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;

        // Invoke the next step here however you like
        console.log(content);   // Put all of the code here (not the best solution)
        processFile();          // Or put the next step in a function and invoke it
    });

    function processFile() {
        console.log(content);


    }

app.controller('HowToController', ['$scope', '$location', function ($scope, $location) {

}]);

app.controller('AboutController', ['$scope', '$location', function ($scope, $location) {

}]);



