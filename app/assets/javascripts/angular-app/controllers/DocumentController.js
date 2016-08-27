function DocumentController(doc, DocumentsService) {
    
    var ctrl = this;
    ctrl.data = doc.data;
    ctrl.dealID = ctrl.data.deal.id

    ctrl.reset = function() {
      ctrl.newContent = ctrl.data.content;
    }

    ctrl.processForm = function() {
      var data = {
        document: {content: ctrl.newContent},
      };
      DocumentsService.update(ctrl.data.id, data).then(ctrl.updateContents, ctrl.error);
    }

    ctrl.updateContents = function(resp) {
      ctrl.data = resp.data; 
      ctrl.reset();
    }

    ctrl.error = function(resp) {
      alert("Deal NOT updated");
    }

    ctrl.reset();

}
 
angular
    .module('app')
    .controller('DocumentController', DocumentController);