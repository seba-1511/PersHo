links.directive('addLinkButton', function() {
    return {
        restrict: 'CA',
        replace: true,
        transclude: false,
        templateUrl: 'Client/templates/links/addLinkButton.html',
        link: function($scope, element, attr) {
        }
    };
});