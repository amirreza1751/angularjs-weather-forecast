//SERVICE
weatherApp.service('cityService', function (){
    this.city = 'Ragusa'
});

weatherApp.service('weatherService', ['$resource', function ($resource){
    this.GetWeather = function (city, cnt){
        var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast?&appid=f8397e820ce3d584b2aa4d795f3c3a4e",
            {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
        return weatherAPI.get({q: city, cnt: cnt});
    }
}]);
