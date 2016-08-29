function DocumentsService($http) {
    
    this.getDoc = function(id) {
      var url = "/documents/" + id;
      return $http.get(url);
    }

    this.update = function(id, data) {
      var url = "/documents/" + id;
      return $http.patch(url, data);
    }

    this.new = function(data) {
      return $http.post('/documents', data);
    }

    this.index = function(deal_id, name) {
      var params = {deal_id: deal_id, name: name};
      return $http.get('/documents', {params: params});
    }

    this.delete = function(id) {
      var url = "/documents/" + id;
      return $http.delete(url);
    }


}
 
angular
    .module('app')
    .service('DocumentsService', DocumentsService);
