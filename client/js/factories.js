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

app.factory('Drink', ['$resource', function ($resource) {
    return $resource('/api/drink/:id', { id: '@id' }, 
        {
            "update": { method: "PUT" },
            "get": { method: "GET", isArray: false }
    })
}]);

app.factory('Eat', ['$resource', function ($resource) {
    return $resource('/api/eat/:id', { id: '@id' }, 
        {
            "update": { method: "PUT" },
            "get": { method: "GET", isArray: false }
    })
}]);

app.factory('Play', ['$resource', function ($resource) {
    return $resource('/api/play/:id', { id: '@id' }, 
        {
            "update": { method: "PUT" },
            "get": { method: "GET", isArray: false }
    })
}]);

app.factory('Shop', ['$resource', function ($resource) {
    return $resource('/api/shop/:id', { id: "@id" }, 
        {
            "update": { method: "PUT" },
            "get": { method: "GET", isArray: false }
    })
}]);

app.factory('Badge', ['$resource', function($resource) {
    return $resource('/api/badges/:id', { id: "@id" })
}]);

app.factory('Obj', ['$resource', function ($resource) {
    return $resource('/api/objectives/:id', { id: "@id" }, 
        {
            "update": { method: "PUT" },
            "get": { method: "GET", isArray: false }
    })
}]);

app.factory('Loc', ['$resource', function($resource) {
    return $resource('/api/locations/:id', { id: "@id" })
}]);