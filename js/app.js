const app = angular.module('SithApp', []);

app.controller('MainController', function($scope) {

  $scope.names = ["Darth", "Lord", "Master"];
  $scope.genders = ["Male", "Female"];

  this.ready = false;

  this.done = () => {
    this.ready = true;
  }


});
