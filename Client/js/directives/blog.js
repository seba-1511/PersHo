blog.directive('backButton', function() {
    return {
        restrict: 'CA',
        replace: true,
        transclude: true,
        templateUrl: 'Client/templates/blog/backButton.html',
        link: function ($scope, elements, attr) {
        },
    };
});