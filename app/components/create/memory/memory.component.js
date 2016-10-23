angular.module('spaced-repetition-app')
.component('createMemory', {
  templateUrl: "app/components/create/memory/createMemory.html",
  controller: "create-memory-controller",
  bindings: {
    htmlVariable: '='
  }
})
.controller("create-memory-controller", [function() {
  console.log("createMemory controller called");
  var cec = this;
  cec.importance = "";
}]);
