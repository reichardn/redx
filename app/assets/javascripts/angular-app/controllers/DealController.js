function DealController(deal, DealsService) {
    
    var ctrl = this;
    ctrl.data = deal.data;

}
 
angular
    .module('app')
    .controller('DealController', DealController);