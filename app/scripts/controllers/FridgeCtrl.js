(function(){
  function FridgeCtrl(List) {
    this.list = List;

    this.beginEdit = function(item){
      this.list.beginEdit(item, "completedList/");
    }

    this.setExpDate= function(item, theDate){
      this.list.setExpDate(item, theDate, "completedList/");
    }

    this.isItExpired = function(item){
      var today = new Date();
      var listDate = new Date(item.expires);

      if (today.getTime() > listDate.getTime()){
        this.list.moveItem(item, "expiredList");
      }
    }

    this.deleteItem = function(item){
      this.list.deleteItem(item, "completedList");
    }
  }

  angular
    .module('groceries')
    .controller('FridgeCtrl', ['List', FridgeCtrl]);
})();
