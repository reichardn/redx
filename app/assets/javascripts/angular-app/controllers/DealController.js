function DealController($scope, deal, DealsService, $state) {
    
    var ctrl = this;
    ctrl.data = deal.data;
    $scope.dealID = ctrl.data.id;
    $scope.open = [];
    $scope.finished = [];

    ctrl.delete = function() {
      DealsService.delete($scope.dealID).then(ctrl.success)
    }

    ctrl.success = function() {
      $state.go('deals');
    }

    ctrl.splitDocs = function() {
      var docs = ctrl.data.documents
      for (var i = 0; i < docs.length; i++) {
        if (docs[i].complete) {
          $scope.finished.push(docs[i])
        } else {
          $scope.open.push(docs[i])
        }
      }
    };

    ctrl.splitDocs();
}
 
angular
    .module('app')
    .controller('DealController', DealController);