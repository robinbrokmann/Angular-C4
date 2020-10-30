app.controller('persoonControler', function($scope, $http, $location) {
    $scope.currentID = -1;
    $http.get("databaseget.php").then(function (response) {$scope.names =
        response.data.records;});

    $scope.persoon = {};
    $scope.currentlySelected = 0;

    $scope.setCurrentRow = function (id, index){
        $scope.currentRowId = id;
        $scope.currentRowIndex = index;
    }

    $scope.prepareDelete = function() {
        console.log($scope.currentRowId)

        $http.get("dbdelete.php?id=" + $scope.currentRowId).then(function (response) {
            if(!response.data.error){
                $scope.names.splice($scope.currentRowIndex, 1);
                $location.path('/');

            }
        });
    }

    $scope.updateTimestamp = function (x){
        if(!x){
            $scope.timestamp = "0000-00-00 00:00:00"
        } else {
            $scope.timestamp = x;
        }
    }

    $scope.editRow = function (){
        var persoon = $scope.names[$scope.currentRowIndex];

        $http({
            method: 'POST',
            url: 'dbedit.php',
            data: {persoon: persoon},
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function (response) {
            if(!response.data.error){
                $location.path('/');
            }
        });
    }

    $scope.addRow = function (){
        var persoon = $scope.persoon;

        $http({
            method: 'POST',
            url: 'dbadd.php',
            data: {persoon: persoon},
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function (response) {
            if(!response.data.error){
                $scope.names.push(persoon);
                $location.path('/');
            }
        });
    }

    $scope.routePage = function (page){
        $location.path(page);
    }

    $scope.clearSort = function (){
        $scope.currentlySelected = 0;
        $scope.myOrderBy = 'id';
    }

    $scope.orderByMe = function(x, y) {
        $scope.currentlySelected = y;
        console.log($scope.currentlySelected);
        $scope.myOrderBy = x;
    }
});

app.directive('overviewTable', function() {
    return {
        templateUrl: 'overview-table.html'
    };
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/delete", {
            templateUrl : "delete.html"
        })
        .when("/edit", {
            templateUrl : "edit.html"
        })
        .when("/create", {
            templateUrl : "create.html"
        })
        .otherwise({
            templateUrl : "overview.html"
        });
});
