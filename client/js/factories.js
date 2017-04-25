var app = angular.module('myApp.factories', []);


//create a factory that returns a resource for our user requests
app.factory('User', ['$resource', function ($resource) {
    return $resource('/api/users/:id', { id: '@id' }, 
        {
            "update": { method: "PUT" },
            "get": { method: "GET", isArray: false }
    })
}]);

app.factory('Cat', ['$resource', function ($resource) {
    return $resource('/api/categories/:id');
}]);

app.factory('Badge', ['$resource', function($resource) {
    return $resource('/api/badges/:id', { id: "@id" })
}]);

app.factory('Objective', ['$resource', function ($resource) {
    return $resource('/api/objectives/:id', { id: '@id' }, 
        {
            "update": { method: "PUT" },
            "get": { method: "GET", isArray: false }
    })
}]);

app.factory('Location', ['$resource', function($resource) {
    return $resource('/api/locations/:id', { id: "@id" })
}]);