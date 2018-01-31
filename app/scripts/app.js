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
      .state('fridgeList', {
         url: '/fridgeList' ,
         controller: 'FridgeCtrl as fridge',
         templateUrl: '/templates/fridgeList.html'
      })
      .state('expiredList', {
         url: '/expiredList' ,
         controller: 'ExpiredCtrl as expired',
         templateUrl: '/templates/expiredList.html'
      });;
  }

  angular
    .module('groceries', ['ui.router', 'firebase'])
    .config(config);
})();
