(function(){
  function CompletedCtrl(Task) {
    this.task = Task;

    this.activateTask = function(task){
      if (task.complete === false){
        this.task.moveTask(task, "activeTask");
      }
    }

  }
  angular
    .module('todo')
    .controller('CompletedCtrl', ['Task', CompletedCtrl]);
})();
