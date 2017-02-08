

// .service('weatherApi', function WeatherApi($http) {
//   this.getForCity = function getForCity(city) {
//     var url = '...' + city + '...';
//     return $http.get(url);
//   };
// })

// .controller('MyCtrl', function MyCtrl($scope, weatherApi) {
//   weatherApi.
//     getForCity($scop.city).
//     then(function onSuccess(response) {
//       ...
//     });
// })


    // $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", 
    // { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    //     $scope.weatherResult = $scope.weatherAPI.get({ 
    //         q: "delhi", 
    //         units: "metric",
    //         cnt: 2,
    //         appid: "5990ba0330621044010e6bc7397759fa"  
    //     });

    //     //$log.log($scope.weatherResult);
    // $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast?q=' + $scope.city + '&units=metric&cnt=2&appid=5990ba0330621044010e6bc7397759fa');
    // $scope.weatherResult =  $scope.weatherAPI.get(function() {        
    // });
    // $log.log($scope.weatherAPI);
    // $log.log($scope.weatherResult);
// units=metric&cnt=2&appid=5990ba0330621044010e6bc7397759fa


// weatherApp.config(["$sceDelegateProvider", function ($sceDelegateProvider) {
//     $sceDelegateProvider.resourceUrlWhitelist([
//         // Allow same origin resource loads.
//         'self',
//         // Allow loading from our assets domain.  Notice the difference between * and **.
//         'http://srv1.assets.http://api.openweathermap.org/data/2.5/forecast/daily/'
//   ]);   
// }]);

// weatherApp.config(function($sceProvider) {
//   // Completely disable SCE.  For demonstration purposes only!
//   // Do not use in new projects.
//   $sceProvider.enabled(false);
// });
