function DealsController(deals, DealsService) {
    var ctrl = this;
    ctrl.index = deals.data;

}
 
angular
    .module('app')
    .controller('DealsController', DealsController);