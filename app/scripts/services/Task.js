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

    Task.timedOut = timedOut;

    Task.completeTask = function(task){
      firebase.database().ref("activeTask/" + task.$id).update({
        complete :true
      });
    }

    Task.uncompleteTask = function(task){
      firebase.database().ref("completedTask/" + task.$id).update({
        complete :false
      });
    }

    Task.moveTask = function(task, where){
      if (where === "timedOut"){
        timedOut.$add(task);
        activeTask.$remove(task);
      } else if (where === "completedTask"){
        completedTask.$add(task);
        activeTask.$remove(task);
      }else if (where === "activeTask"){
        activeTask.$add(task);
        completedTask.$remove(task);
      }

    }

    Task.createNewTask = function(newTaskName, priority){
      var timestamp = new Date().getTime();
      activeTask.$add({
        name :newTaskName,
        priority :priority,
        createdAt :timestamp,
        complete :false
      });
    }
    return Task;
  }

  angular
    .module("todo")
    .factory('Task', ['$firebaseArray', Task]);
})();
