const app = angular.module('SithApp', []);

app.controller('MainController', function($scope) {

  $scope.prefixes = ["Darth", "Lord", "Master", "Emperor"];
  $scope.funnys = ["Yes", "No"];

  this.randomName = [
    "Kreia", "Revan", "Malak", "Zannah", "Shira Brie", "Valek", "Toki Ran", "Sheev Daral", "Exar", "Andeddu"
  ];
  this.randomFunnyName = [
    "Patrick Stevens", "lil Saber", "Scoopity Whoop", "Darth", "Daddy", "Papa", "Toe-Licker",
  ];

  this.ready = false;

  this.reload = () => {
    location.reload();
  };

  this.done = () => {
    if ($scope.selectedFunny === "Yes") {
      this.sithName = this.randomFunnyName[Math.floor(Math.random() * this.randomFunnyName.length)];
      this.ready = true;
    } else {
      this.sithName = this.randomName[Math.floor(Math.random() * this.randomName.length)];
      this.ready = true;
    }
  };


});
