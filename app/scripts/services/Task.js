(function() {
  function Task($firebaseArray){
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    Task.all = tasks;


    return Task;
  }

  angular
    .module("todo")
    .factory('Task', ['$firebaseArray', Task]);
})();
