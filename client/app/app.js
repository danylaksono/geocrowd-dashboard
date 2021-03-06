'use strict';

angular.module('geocrowdApp', ['geocrowdApp.auth', 'geocrowdApp.admin',
    'geocrowdApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router',
    'ui.bootstrap',
    'validation.match', 'nemLogging', 'leaflet-directive', 'nvd3'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
