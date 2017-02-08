
// MODULE    
var weatherApp = angular.module("weatherApp", ["ngRoute"]);

// convert hashPrefix ("!") to (""). For routing. This issue is only in angular 1.6.1
weatherApp.config(['$locationProvider', function($locationProvider) {
$locationProvider.hashPrefix('');
}]); 

// CUSTOM SERVICES
weatherApp.service("cityName", function () {
    this.cName = "Delhi";
});

weatherApp.service('weatherApi',["$http", function ($http) {
    this.getForCity = function (city, days) {
        var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&units=metric&cnt=' + days + '&appid=5990ba0330621044010e6bc7397759fa';
        return $http.get(url);
    };
}]);


// CONTROLLERS
weatherApp.controller("homeCtrl", ["$scope", "$location", "cityName",  
    function ($scope, $location, cityName) {
    $scope.city = cityName.cName;
    $scope.$watch("city", function () {
        cityName.cName = $scope.city;
    });
    $scope.submit = function () {
        $location.path("/forecast");
    };
    
}]);

weatherApp.controller("forecastCtrl", ["$scope","$log", "$routeParams", "cityName", "weatherApi",  
    function ($scope, $log, $routeParams, cityName, weatherApi) {    

    $scope.city = cityName.cName;

    $scope.days = $routeParams.days || '2';

    weatherApi
        .getForCity($scope.city, $scope.days)
        .then(function onSuccess(response) {                               
            $scope.weatherData = response;
            console.log(response);
            $scope.convertToDate = function (dt) {
                return new Date(dt * 1000);    
            }                
        });       
}]);

// ROUTE CONFIG
weatherApp.config(["$routeProvider", "$locationProvider", 
    function ($routeProvider, $locationProvider) {
    
    $routeProvider
    .when("/", {
        templateUrl: "pages/home.html",
        controller: "homeCtrl"
    })
    .when("/forecast", {
        templateUrl: "pages/forcast.html",
        controller: "forecastCtrl"
    })
    .when("/forecast/:days", {
        templateUrl: "pages/forcast.html",
        controller: "forecastCtrl"
    })     
}]);

