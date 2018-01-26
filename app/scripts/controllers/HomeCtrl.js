(function(){
  function HomeCtrl(Task) {
    this.activeTask = Task.activeTask;
    this.task = Task;

    this.hideTask = function(task){
      var today = new Date();
      var taskDate = new Date(task.createdAt);

      if (today.getTime() > (taskDate.getTime()+ 6.048e+8)){
        this.task.moveTask(task, "timedOut");
      }else if (task.complete === true){
        this.task.moveTask(task, "completedTask");
      }
    }

  }

  angular
    .module('todo')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
