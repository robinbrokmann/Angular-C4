angular.module('myApp', []).controller('autoCtrl', function($scope) {
    $scope.autoArray=[
        honda={kenteken: '56-ri-69', kleur: 'Rood', merk: 'Honda', aantaldeuren: 4, prijs:1000},
        subaru={kenteken: 'ab-789-f', kleur: 'Blauw', merk: 'Subaru', aantaldeuren: 4, prijs:1500},
        bmw={kenteken: 'ar-45-ba', kleur: 'Grijs', merk: 'BMW', aantaldeuren: 2, prijs:1200},
        opel={kenteken: 'iz-49-nw', kleur: 'Groen', merk: 'Opel', aantaldeuren: 6, prijs:1100},
        nissan={kenteken: 'ka-985-i', kleur: 'Zwart', merk: 'Nissan', aantaldeuren: 2, prijs:1180}]
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});