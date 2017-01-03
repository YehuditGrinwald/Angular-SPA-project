var app = angular.module('myApp', ['ngRoute', 'ngAnimate','ngSanitize', 'ui.bootstrap' ]);

app.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: '/Views/home.html',
        controller: 'HomeController'
    })

    .when('/Report', {
        templateUrl: '/Views/report.html',
        controller: 'ReportController'
    })

    .when('/DateTimeUpdate', {
        templateUrl: '/Views/dateTimeUpdate.html',
        controller: 'DateTimeUpdateController'
    })

    .otherwise({ redirectTo: '/' });
});
