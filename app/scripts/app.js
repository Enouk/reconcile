'use strict';

angular.module('reconcileApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/match', {
        templateUrl: 'views/match.html',
        controller: 'MatchCtrl'
      })
      .otherwise({
        redirectTo: '/account'
      });
  });
