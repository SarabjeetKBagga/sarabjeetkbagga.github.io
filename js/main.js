

var app = angular.module('sarabjeet', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {

      $routeProvider.
          when('/', {
              templateUrl: 'views/home.html',
              controller: 'homeCtrl'
          }).
          otherwise({
              redirectTo: '/'
          });

  }]);

app.controller("mainCtrl", ['$scope',
    function ($scope) {

    }
]);


app.controller("homeCtrl", ['$scope', function ($scope) {
}]);


