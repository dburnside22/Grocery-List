(function() {
  function Task($firebaseArray){
    var Task = {};
    var ref = firebase.database().ref().child("activeTask");
    var activeTask = $firebaseArray(ref);
    var completedTaskRef = firebase.database().ref().child("completedTask");
    var completedTask = $firebaseArray(completedTaskRef);
    var timedOutRef = firebase.database().ref().child("timedOut");
    var timedOut = $firebaseArray(timedOutRef);

    Task.activeTask = activeTask;

    Task.completedTask = completedTask;

    Task.completeTask = function(task){
      firebase.database().ref("activeTask/" + task.$id).update({
        complete :true
      });
    }

    Task.moveTask = function(task, where){
      if (where === "timedOut"){
        timedOut.$add(task);
      } else if (where === "completedTask"){
        completedTask.$add(task);
      }
      activeTask.$remove(task);
    }
    return Task;
  }

  angular
    .module("todo")
    .factory('Task', ['$firebaseArray', Task]);
})();
