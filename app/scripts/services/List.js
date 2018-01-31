(function() {
  function List($firebaseArray){
    var List = {};
    var ref = firebase.database().ref().child("activeList");
    var completedListRef = firebase.database().ref().child("completedList");
    var expiredListRef = firebase.database().ref().child("expiredList");
    var activeList = $firebaseArray(ref);
    var completedList = $firebaseArray(completedListRef);
    var expiredList = $firebaseArray(expiredListRef);

    List.activeList = activeList;

    List.completedList = completedList;

    List.expiredList = expiredList;

    List.moveItem = function(item, where){
      if (where === "completedList"){
        completedList.$add(item);
        activeList.$remove(item);
      } else if (where === "expiredList"){
        expiredList.$add(item);
        completedList.$remove(item);
      }
    }

    List.completeItem = function(item){
      firebase.database().ref("activeList/" + item.$id).update({
        complete :true
      });
      List.moveItem(item, "completedList")
    }

    List.createNewItem = function(newListName){
      activeList.$add({
        name :newListName,
        complete :false,
        editButtonClicked :false
      });
    }

    List.beginEdit = function(item, where){
      firebase.database().ref(where + item.$id).update({
        editButtonClicked :true
      });
    }

    List.editItemName = function(item, newName){
      firebase.database().ref("activeList/" + item.$id).update({
        name: newName,
        editButtonClicked :false
      });
    }

    List.setExpDate = function(item, theDate, where){
      firebase.database().ref(where + item.$id).update({
        expires : theDate.getMonth()+1 + "/" + theDate.getDate() + "/" + theDate.getFullYear(),
        editButtonClicked :false
      });
    }

    List.deleteItem = function(item, where){
      if (where === "expiredList"){
        expiredList.$remove(item);
      } else if (where === "completedList"){
        completedList.$remove(item);
      } else if (where === "activeList"){
        activeList.$remove(item);
      }
    }

    return List;
  }

  angular
    .module("groceries")
    .factory('List', ['$firebaseArray', List]);
})();
