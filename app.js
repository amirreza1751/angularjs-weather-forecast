// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    .when('/forecast/:cnt', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
});



// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function (){
        cityService.city = $scope.city;
    });
    $scope.submit = function (){
        $location.path("/forecast");
    }
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    $scope.cnt = $routeParams.cnt || '2';
    $scope.city = cityService.city;
    $scope.$watch('city', function (){
        cityService.city = $scope.city;
    });
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.cnt);

    $scope.convertTemp = function (degK){
        return Math.round(degK - 273.15);
    }

    $scope.convertDate = function (date){
        return new Date(date * 1000);
    }



}]);


weatherApp.directive('tempElement', function (){
    return {
        restrict : 'ACEM',
        replace: true,
        templateUrl: 'directives/temp-element.html',
        scope: {
            weatherDay: "=",
            convertTemp: "&",
            convertDate: "&",
            formatDate: "@"
        }
    }
});
