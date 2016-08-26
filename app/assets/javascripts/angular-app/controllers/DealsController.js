function DealsController(deals, DealsService) {

    var ctrl = this;
    ctrl.index = deals.data;
    ctrl.categories = [
        { id: 0, name: 'Merger' },
        { id: 1, name: 'Securities Offering'},
        { id: 2, name: 'Loan Agreement'},
    ];

    ctrl.newDealName = "";
    ctrl.newDealCategory; 

    ctrl.processForm = function() {
      var data = {
        deal: {name: ctrl.newDealName, category: ctrl.newDealCategory},
      };
      console.log(data);
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