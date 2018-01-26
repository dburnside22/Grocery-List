(function(){
  function ExpiredCtrl(Task) {
    this.task = Task;

  }
  angular
    .module('todo')
    .controller('ExpiredCtrl', ['Task', ExpiredCtrl]);
})();
