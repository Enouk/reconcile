'use strict';

angular.module('reconcileApp')
  .controller('AccountCtrl', function($scope) {
    $scope.accounts = [{
      name: 'SEB 2014-08'
    }, {
      name: 'Swedbank 2014-08'
    }];

    $scope.add = function() {

    };
    
    $scope.remove = function(Index){

    };

  });
