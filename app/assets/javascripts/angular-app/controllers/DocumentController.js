function DocumentController() {
    
    var ctrl = this;
    ctrl.data = {name: "fake name", content: "fake content", deal: {id: 99, name: 'fake deal'}};

    this.reset = function() {
      ctrl.newContent = ctrl.data.content;
    }

    this.reset();

}
 
angular
    .module('app')
    .controller('DocumentController', DocumentController);