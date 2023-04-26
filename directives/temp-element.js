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
