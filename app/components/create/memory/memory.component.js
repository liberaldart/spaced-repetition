angular.module('spaced-repetition-app')
.component('createMemory', {
  templateUrl: "app/components/create/memory/createMemory.html",
  controller: "create-memory-controller",
  bindings: {
    htmlVariable: '='
  }
})
.controller("create-memory-controller", ['$scope', function($scope) {
  console.log("createMemory controller called");
  var cec = this;
  $scope.htmlVariable = "Initial Content";
}]);
