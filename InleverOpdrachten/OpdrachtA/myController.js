app.controller('validateCtrl', function ($scope) {});

app.directive('huisnummerDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                mCtrl.$setValidity('numberRange', value > 0 && value < 1000);
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});

//Alleen tekst, geen cijfers.
app.directive('tekstDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                var pattern = /^\D*$/;
                mCtrl.$setValidity('regex', pattern.test(value));
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});

app.directive('postcodeDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                //Syntax: 1234 AB
                var pattern = /^\d{4}\s\w{2}$/;
                mCtrl.$setValidity('regex', pattern.test(value));
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});

app.directive('emailDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                //Syntax: <naam>@<provider>.<top-level-domein>
                //Voorbeeld: test@gmail.com
                var pattern = /^.[a-z0-9.]{2,}@\w*\.\w{2,}.?\w*?$/;
                mCtrl.$setValidity('regex', pattern.test(value));
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});