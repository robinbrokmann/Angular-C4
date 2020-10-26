app.controller('myCtrl', function($scope) {
    $scope.fruit = [
        {kleur : "geel", fruitSoorten : ["banaan", "stervrucht"]},
        {kleur : "rood", fruitSoorten : ["bessen", "aardbeien"]},
        {kleur : "groen", fruitSoorten : ["kiwi"]},
        {kleur : "bruin", fruitSoorten : ["appel"]}
    ];
});
app.filter('capitalize', function() {
    return function(input) {
        return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    }
});