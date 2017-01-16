// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){

  $scope.city = cityService.city;

  // watch this value on the $scope --> when it changes - do:
  $scope.$watch('city', function(){
    cityService.city = $scope.city;
  })

  $scope.submit = function(){
    $location.path ("/forecast");
  }

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$routeParams', 'weatherService', function($scope, cityService, $routeParams, weatherService){
  $scope.city = cityService.city;

  // defaults to 2 if no param is passed
  $scope.days = $routeParams.days || 2;


  $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

  $scope.convertToFahrenheit = function(degK){
    return Math.round((1.8 * (degK - 273)) + 32);
  }

  $scope.convertDate = function(dt){
    return new Date(dt * 1000);
  }

  console.log($scope.weatherResult);

}]);