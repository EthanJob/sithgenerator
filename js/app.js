const app = angular.module('SithApp', []);

app.controller('MainController', function($scope) {

  this.run = () => {
    this.name = $scope.name;
    console.log(this.name);
  }


});
