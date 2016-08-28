function ImportDocumentController($scope, DocumentsService, $stateParams, $state) {

    var ctrl = this;

    ctrl.import = function(i) {
      var data = {
        document: {content: ctrl.index[i].content},
      };
      DocumentsService.update($stateParams.id, data).then(ctrl.back);
    }

    ctrl.back = function() {
      $state.go('document({id: $stateParams.id})')
    }

    ctrl.getDocs = function () {
      DocumentsService.index($scope.dealID, $scope.name).then(ctrl.success, ctrl.failure);
    };

    ctrl.success = function(resp) {
      ctrl.index = resp.data
    };

    ctrl.failure = function(resp) {
      alert('could not load precedent documents')
    };

    ctrl.getDocs();

}
 
angular
    .module('app')
    .controller('ImportDocumentController', ImportDocumentController);