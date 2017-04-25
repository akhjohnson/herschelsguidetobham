angular.module('myApp.controllers', [])

.controller ('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
    UserService.me().then(function(success) {

    })
    function redirect() {
        var dest= $location.search().p;
        if (!dest) {
            dest = '/login';
        }
        $location.path(dest).search('p', null);
    }
    $scope.login = function() {
        UserService.login($scope.email, $scope.password)
            .then(function() {
                redirect();
            }, function(err) {
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
    .controller('menuCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', '$rootScope', '$location', function ($scope, $stateParams, $ionicUser, $ionicAuth, $state, $rootScope, $location) {
        $scope.userData = $ionicUser.details;
        $scope.logout = function () {
            $ionicAuth.logout();
            $state.go('login');
        }
        $scope.goToHow = function () {
            $location.path('/howtoplay')
        }
        $scope.meetTheCreators = function() {
            $location.path('/s')
        }
    }])
    .controller('loginCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {
        $scope.data = {
            'email': '',
            'password': ''
        }
        $scope.error = '';
        if ($ionicAuth.isAuthenticated()) {
            // Make sure the user data is going to be loaded
            $ionicUser.load().then(function () { });
            $state.go('tabsController.home');
        }
        $scope.login = function () {
            $scope.error = '';
            $ionicAuth.login('basic', $scope.data).then(function () {
                $state.go('tabsController.home');
            }, function () {
                $scope.error = 'Error logging in.';
            })
        }
    }])
    .controller('signupCtrl', ['$scope', '$firebase', '$state', function ($scope, $firebase, $state) {
        $scope.data = {
            'name': '',
            'email': '',
            'password': ''
        }
        $scope.errorBox = '';
        $scope.signup = function () {
            $scope.errorBox = '';
            firebase.auth().createUserWithEmailAndPassword($scope.data.email, $scope.data.password).then(function () {
                console.log("logged in as", $scope.data.name);
                $state.go('home');
            }).catch(function (err) {
                // Handle Errors here.
                var errorCode = err.code;
                var errorMessage = err.message;
                $scope.errorBox = errorMessage;
                console.log('errorMessage: ' + errorMessage);
            });
        };
        UserService.me().then(function (success) {
            redirect();
        });
        $scope.redirect = function () {
            let dest = $location.search().p;
            if (!dest) {
                dest = '/login'
            };
            $location.path(dest).search('p', null);
        };
        $scope.login = function () {
            UserService.login($scope.email, $scope.password).then(function () {
                redirect();
            }, function (err) {
                console.log(err);
            })
    }])
    .controller('cameraController', ['$scope', '$location', function(){
    }])
    .controller('playController', ['$scope', '$location', function(){
        $scope.goToSpots = function() {
            $path.location=('/')
        }
        $scope.Spots = function() {
            var spots 
        } 
    }])
    .controller('drinkController', ['$scope', '$location', function(){
        $scope.goToBars = function() {
            $path.location=('/')
        }
    }])
    .controller('eatController', ['$scope', '$location', function(){
        $scope.goToRes = function() {
            $path.location=('/')
        }
    }])
    .controller('shopController', ['$scope', '$location', function(){
        $scope.goToStores = function() {
            $path.location=('/')
        }
    }])
    .controller('locationController', ['$scope', '$location', function(){
        
    }])
    .controller('uploadController', ['$scope', '$location', function(){
    }])
    .controller('howToController', ['$scope', '$location', function(){
    }])
    .controller('aboutController', ['$scope', '$location', function(){
    }])