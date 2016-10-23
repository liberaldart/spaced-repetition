angular.module("spaced-repetition-app", ['ui.router', 'ngMaterial', 'textAngular'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'app/components/home/home.html'
  })
  .state('create/memory', {
    url: '/create/memory',
    templateUrl: 'app/components/create/memory/memory.html'
  })
});
