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
