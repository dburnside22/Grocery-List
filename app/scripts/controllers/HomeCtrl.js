(function(){
  function HomeCtrl(List) {
    this.activeList = List.activeList;
    this.list = List;

    this.createNewItem = function(newItemName){
      this.list.createNewItem(newItemName);
      this.newItemName = '';
    }

    this.beginEdit = function(item){
      this.list.beginEdit(item, "activeList/");
    }

    this.deleteItem = function(item){
      this.list.deleteItem(item, "activeList");
    }
  }

  angular
    .module('groceries')
    .controller('HomeCtrl', ['List', HomeCtrl]);
})();
