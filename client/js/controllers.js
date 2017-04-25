angular.module('myApp.controllers', [])

    .controller('LoginController', ['$scope', '$location', 'UserService', function ($scope, $location, UserService) {
        UserService.me().then(function (success) {

        })
        function redirect() {
            var dest = $location.search().p;
            if (!dest) {
                dest = '/login';
            }
            $location.path(dest).search('p', null);
        }
        $scope.login = function () {
            UserService.login($scope.email, $scope.password)
                .then(function () {
                    redirect();
                }, function (err) {
                    console.log(err);
                })
        }
    }])

angular.module('myApp.controllers', [])
    // .controller ('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
    //     UserService.me().then(function(success) {
    //     })
    //     function redirect() {
    //         var dest= $location.search().p;
    //         if (!dest) {
    //             dest = '/login';
    //         }
    //         $location.path(dest).search('p', null);
    //     }
    //     $scope.login = function() {
    //         UserService.login($scope.email, $scope.password)
    //             .then(function() {
    //                 redirect();
    //             }, function(err) {
    //                 console.log(err);
    //             })
    //     }
    // }])
    // angular.module('app.controllers', [])
    .controller('HomeController', ['$scope', '$location', '$SEOService', function ($scope, $location, $SEOService) {
        $scope.location = path('/login');
        SEOService.setSEO({
            title: ' herschelsguide | Home',
            description: 'herschelsguide',
            url: $location.url()
        });

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
            $location.path('/tabsController/sHOP')
        }
    }])
    .controller('badgesCtrl', ['$scope', '$location', '$ionicUser', function ($scope, $location, $ionicUser) {
        $scope.badges = Badges.query();
        $scope.goToBadges = function () {
            $location.path('/tabsController/yourBadges')
        }
        $scope.badgeById = function (id) {
            return $scope.badges[id]
        }
    }])
    .controller('cameraController', ['$scope', '$location', function () {
    }])
    .controller('playController', ['$scope', '$location', function () {
        $scope.goToSpots = function () {
            $path.location = ('/')
        }
        $scope.Spots = function () {
            var spots
        }
    }])
    .controller('drinkController', ['$scope', '$location', function () {
        $scope.goToBars = function () {
            $path.location = ('/')
        }
    }])
    .controller('eatController', ['$scope', '$location', function () {
        $scope.goToRes = function () {
            $path.location = ('/')
        }
    }])
    .controller('shopController', ['$scope', '$location', function () {
        $scope.goToStores = function () {
            $path.location = ('/')
        }
    }])
    .controller('locationController', ['$scope', '$location', function () {

    }])
    .controller('uploadController', ['$scope', '$location', 'fileUploadService' function () {

            var myApp = angular.module('app');
            myApp.controller('FileUploadController', function ($scope, fileUploadService) {

                    $scope.uploadFile = function () {
                            var file = $scope.myFile;
                            var uploadUrl = "../server/service.php", //Url of webservice/api/server
                                    promise = fileUploadService.uploadFileToUrl(file, uploadUrl);

                            promise.then(function (response) {
                                    $scope.serverResponse = response;
                            }, function () {
                                    $scope.serverResponse = 'An error has occurred';
                            })
                    };
            });
    }])
    .controller('howToController', ['$scope', '$location', function () {
    }])
    .controller('aboutController', ['$scope', '$location', function () {
    }])

