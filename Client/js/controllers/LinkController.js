links.controller('AllLinks', function($scope, $location, Links) {
    var links;
    links = Links.query();
    $scope.links = links;
    $scope.showForm = false;

    $scope.showAddLinkForm = function() {
        $scope.showForm = true;
    };

    $scope.showAddLinkButton = function() {
        $scope.showForm = false;
    };

    $scope.addLink = function() {
        var link = {};
        link.name = $scope.link.name;
        link.link = $scope.link.link;
        Links.save(link, function() {
            $scope.links = Links.query();
            $scope.link.link = '';
            $scope.link.name = '';
        });
    };

    $scope.deleteLink = function(id) {
        if (confirm('Are you sure you want to delete this Link ?')) {
            Links.remove({linkId: id}, function() {
                $scope.links = Links.query();
            });
        }
    }
});