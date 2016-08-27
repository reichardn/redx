function DealController($scope, deal, DealsService) {
    
    var ctrl = this;
    ctrl.data = deal.data;
    $scope.dealID = ctrl.data.id;
    $scope.open = [];
    $scope.finished = [];

    this.splitDocs = function() {
      var docs = ctrl.data.documents
      for (var i = 0; i < docs.length; i++) {
        if (docs[i].complete) {
          $scope.finished.push(docs[i])
        } else {
          $scope.open.push(docs[i])
        }
      }
    };

    this.splitDocs();
}
 
angular
    .module('app')
    .controller('DealController', DealController);