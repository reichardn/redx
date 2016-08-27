function NewDocumentController($scope, DocumentsService) {

    var ctrl = this;

    ctrl.name = "";

    ctrl.processForm = function() {
      var data = {
        document: {name: ctrl.name, deal_id: $scope.dealID},
      };
      DocumentsService.new(data).then(ctrl.addDeal, ctrl.error);
    }

    ctrl.addDeal = function(resp) {
      ctrl.name = ""; 
      $scope.open.push(resp.data);
    }

    ctrl.error = function(resp) {
      alert("Deal NOT created");
    }

}
 
angular
    .module('app')
    .controller('NewDocumentController', NewDocumentController);