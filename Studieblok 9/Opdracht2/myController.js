app.controller('customersCtrl', function($scope, $http) {
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl : "home.html"
        })
        .when("/overmij", {
            templateUrl : "overmij.html"
        })
        .when("/hobby", {
            templateUrl : "hobby.html"
        })
        .otherwise({
            template : "<h1>Er niet niets geselecteerd.</h1>"
        });
});