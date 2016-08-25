function DealsController(deals, DealsService) {

    var ctrl = this;
    ctrl.index = deals.data;

    ctrl.newDealName = "";

    ctrl.processForm = function() {
      var data = {deal: {name: ctrl.newDealName}};
      DealsService.newDeal(data).then(ctrl.addDeal, ctrl.error);
    }

    ctrl.addDeal = function(resp) {
      ctrl.newDealName = ""; 
      ctrl.index.push(resp.data);
    }

    ctrl.error = function(resp) {
      alert("Deal NOT created");
    }

}
 
angular
    .module('app')
    .controller('DealsController', DealsController);