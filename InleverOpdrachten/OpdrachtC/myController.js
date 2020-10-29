app.controller('customersCtrl', function($scope, $http) {
    $http.get("auto.php").then(function (response) {$scope.names =
        response.data.records;});
});