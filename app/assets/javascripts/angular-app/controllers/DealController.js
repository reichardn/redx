function DealController(deal, DealsService) {
    
    var ctrl = this;
    ctrl.data = deal.data;
    ctrl.open = [];
    ctrl.finished = [];

    this.splitDocs = function() {
      var docs = ctrl.data.documents
      for (var i = 0; i < docs.length; i++) {
        if (docs[i].complete) {
          ctrl.finished.push(docs[i])
        } else {
          ctrl.open.push(docs[i])
        }
      }
    };

    this.splitDocs();
}
 
angular
    .module('app')
    .controller('DealController', DealController);