(function(){
  'use strict';
// Create a new module
var myAppModule = angular.module('LunchCheck', []);
// configure the module with a controller
myAppModule.controller("LunchCheckController", LunchCheckController);
LunchCheckController.$inject =['$scope'];

function LunchCheckController($scope,$filter) {
    $scope.message = "";
    $scope.fontcolor = "";
    $scope.emptyspacewithComas = 0;
    $scope.CheckIfTooMuch = function(){
  var lunchMenu =  $scope.lunchMenu ;
var lunchMenuArray = lunchMenu.split(',');
$scope. lunchMenuArray = lunchMenuArray;
var foodLength = lunchMenuArray.length;
CheckIfEmpty();
foodLength = foodLength - $scope.emptyspacewithComas;
if(lunchMenu.length == 0){
    $scope.fontcolor  = "green";
  $scope.message = 'Please enter data first';
}else if(foodLength <= 3){
    $scope.fontcolor  = "green";
  $scope.message = 'Enjoy';
}else if(foodLength > 3){
  $scope.fontcolor  = "red";
  $scope.message = 'Too much!';
}
};
function CheckIfEmpty(){
  var EmptyValueArray = [];
  for(var i=0;i<$scope.lunchMenuArray.length;i++) {
  if ($scope.lunchMenuArray[i].length == 0 ) {
    EmptyValueArray[EmptyValueArray.length] = $scope.lunchMenuArray[i];
  }
}
  $scope.emptyspacewithComas = EmptyValueArray.length;
}

  }
})();
