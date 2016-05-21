"user strict";

app.controller('HomeCtrl', function ($scope, UserAPI) {
  $scope.login = function (user) {
    UserAPI.login(user).then(function(obj) {
      console.log(obj.data);
      $location.path('/games');
    }, function(error) {
      console.log(error);
    });
  }
});