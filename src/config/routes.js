'use strict';

export default function($stateProvider, $urlRouterProvider, $locationProvider, $logProvider,$httpProvider, $provide) {
  $locationProvider.html5Mode(true);
  $logProvider.debugEnabled(true); //false to prevent _$log.debug output
  $httpProvider.defaults.useXDomain = true;

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  // Now set up the states
  $stateProvider
  .state('home', {
    url: '/',
    views: {
      '': {
        templateUrl: 'src/partials/home/home.html',
        controller: 'homeController as vm'
      }
    }
  });
}
