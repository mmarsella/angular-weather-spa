// Allows the home/forecast controller to share city data b/w eachother.
weatherApp.service('cityService', [function(){
    this.city = "San Francisco, CA";  //default val
}]);


weatherApp.service('weatherService', ['$resource',function($resource){


  this.GetWeather = function(city, days){

     var weatherAPI = 
      $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method:"JSONP"}});

      return weatherAPI.get({q: city, cnt: days, APPID:apikey});
  }
}])