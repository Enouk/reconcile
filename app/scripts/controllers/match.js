'use strict';

angular.module('reconcileApp')
  .controller('MatchCtrl', function($scope) {
    $scope.accounts = [{
      name: 'SEB 2014-08'
    }, {
      name: 'Swedbank 2014-08'
    }];

    $scope.leftAccount = undefined;
    $scope.rightAccount = undefined;

    $scope.matchResult = undefined;

    $scope.transactions = [{
      id: '22323',
      amount: '10',
      currency: 'SEK'
    }, {
      id: '22325',
      amount: '17',
      currency: 'SEK'
    }];

    $scope.match = function() {
      $scope.matchResult = $scope.transactions;
    };

  });
