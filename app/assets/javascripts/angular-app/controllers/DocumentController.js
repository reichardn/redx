function DocumentController(doc, DocumentsService, $scope, $state) {
    
    var ctrl = this;
    ctrl.data = doc.data;

    $scope.dealID = ctrl.data.deal.id
    $scope.name = ctrl.data.name
    $scope.newContent = {}

    ctrl.reset = function() {
      $scope.newContent.content = ctrl.data.content;
    }

    ctrl.processForm = function() {
      var data = {
        document: {content: $scope.newContent.content},
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

    ctrl.delete = function() {
      DocumentsService.delete(ctrl.data.id).then(ctrl.deleteSuccess)
    }

    ctrl.deleteSuccess = function() {
      console.log ($scope.dealID)
      $state.go('deal', {id: $scope.dealID});
    }

    ctrl.reset();

}
 
angular
    .module('app')
    .controller('DocumentController', DocumentController);