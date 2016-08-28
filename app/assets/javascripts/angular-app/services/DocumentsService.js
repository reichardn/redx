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

    this.index = function(id, name) {
      var data = {id: id, name: name};
      return $http.get('/documents', data);
    }


}
 
angular
    .module('app')
    .service('DocumentsService', DocumentsService);
