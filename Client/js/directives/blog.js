blog.directive('backButton', function() {
    return {
    restrict: 'CA',
    replace: true,
    transclude: true,
    templateURL: 'Client/templates/blog/backButton.html',
        link: function () {

        }
    };
});