(function(){
  function HomeCtrl(Task) {
    this.tasks = Task.all;

  }

  angular
    .module('todo')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
