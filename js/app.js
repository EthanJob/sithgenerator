const app = angular.module('SithApp', []);

app.controller('MainController', function($scope) {

  $scope.prefixes = ["Darth", "Lord", "Master", "Emperor"];
  $scope.funnys = ["Yes", "No"];
  this.randomName = ["Kreia", "Revan", "Malak", "Zannah", "Shira Brie", "Valek", "Toki Ran", "Sheev Daral", "Exar", "Andeddu"];

  this.ready = false;

  this.reload = () => {
    location.reload();
  }

  this.done = () => {
    this.ready = true;
    this.sithName = this.randomName[Math.floor(Math.random() * this.randomName.length)];
  }


});
