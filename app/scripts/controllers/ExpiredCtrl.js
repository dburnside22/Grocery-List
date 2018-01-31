(function(){
  function ExpiredCtrl(List) {
    this.list = List;

    this.deleteItem = function(item){
      this.list.deleteItem(item, "expiredList");
    }
  }

  angular
    .module('groceries')
    .controller('ExpiredCtrl', ['List', ExpiredCtrl]);
})();
