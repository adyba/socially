angular.module("socially").controller("PartiesListCtrl", ['$scope', '$collection',
  function($scope, $collection){
    $scope.orderProperty ="name";
    $collection(Parties).bind($scope, 'parties', true, true);

    $scope.delParty = function(party){
      $scope.parties.splice( $scope.parties.indexOf(party), 1 );
    };

    $scope.addParty = function(party){
      party.owner = $scope.currentUser._id;
      $scope.parties.push(party);
      $scope.newParty = {};
    };
}]);