links.controller('AllLinks', function($scope, $location, Links) {
    var links;
    links = Links.query();
    $scope.links = links;
});