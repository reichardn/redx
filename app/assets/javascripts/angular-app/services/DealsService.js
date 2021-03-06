function DealsService($http) {
    
    this.getIndex = function () {
      return $http.get('/deals');
    }

    this.getDeal = function(id) {
      var url = "/deals/" + id;
      return $http.get(url);
    }

    this.newDeal = function(data) {
      return $http.post('/deals', data);
    }

    this.delete = function(id) {
      var url = "/deals/" + id;
      return $http.delete(url);
    }

}
 
angular
    .module('app')
    .service('DealsService', DealsService);
