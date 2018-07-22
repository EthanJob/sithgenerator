const app = angular.module('SithApp', []);

app.controller('MainController', function($scope) {

  $scope.prefixes = ["Darth", "Lord", "Master"];
  $scope.funnys = ["Yes", "No"];
  this.randomName = ["Tester", "Test", "Also a Tester"];

  this.ready = false;

  this.reload = () => {
    location.reload();
  }

  this.done = () => {
    this.ready = true;
    this.sithName = this.randomName[Math.floor(Math.random() * this.randomName.length)];
  }


});
