angular.module("socially").controller("PartyDetailsCtrl", 
  ['$scope', '$stateParams', '$collection', '$location',
    function($scope, $stateParams, $collection, $location){
      $collection(Parties).bindOne($scope, 'party', $stateParams.partyId, false);
      $collection(Parties).bind($scope, 'parties');
      $collection(Meteor.users).bind($scope, 'users', false, true);

      $scope.saveParty = function(){
        $scope.parties.save($scope.party);
        if ($scope.currentUser._id === $scope.party.owner) {$location.path('/parties');}
      };
    }
  ]);