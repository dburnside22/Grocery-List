(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      })
      .state('completedTask', {
         url: '/completedTask' ,
         controller: 'CompletedCtrl as completed',
         templateUrl: '/templates/completedTask.html'
      })
      .state('expiredTask', {
         url: '/expiredTask' ,
         controller: 'ExpiredCtrl as expired',
         templateUrl: '/templates/expiredTask.html'
      });;
  }

  angular
    .module('todo', ['ui.router', 'firebase'])
    .config(config);
})();
