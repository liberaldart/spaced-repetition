angular.module('spaced-repetition-app')
.component('createMemory', {
  templateUrl: "app/components/create/memory/createMemory.html",
  controller: "create-memory-controller",
  bindings: {

  }
})
.controller("create-memory-controller", [function(scope) {
  console.log("createMemory controller called");

}]);
