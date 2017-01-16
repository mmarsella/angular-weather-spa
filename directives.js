weatherApp.directive('forecastPanel', function(){
  return{
    templateUrl: "templates/forecastPanel.htm",
    replace: true,
    scope: {
      w: "=forecastObject",
      convertToStandard: "&",
      convertToDate: "&",
      dateFormat: "@"
    }
  }
});
