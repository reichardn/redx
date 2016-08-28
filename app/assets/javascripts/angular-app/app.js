angular
    .module('app', ['ui.router', 'templates'])
    .config(function ($stateProvider) {
        
        $stateProvider
            .state('deals', {
                url: '/deals',
                templateUrl: 'deals.html',
                controller: 'DealsController as ctrl',
                resolve: {
                    deals: function (DealsService) {
                        return DealsService.getIndex();
                    }
                }
            })
            .state('deal', {
                url: '/deal/:id',
                templateUrl: 'deal.html',
                controller: 'DealController as ctrl',
                resolve: {
                    deal: function ($stateParams, DealsService) {
                        return DealsService.getDeal($stateParams.id);
                    }
                }
            })
            .state('deal.newDoc', {
                url: '/add',
                templateUrl: 'new_document.html',
                controller: 'NewDocumentController as ctrl',
            })
            .state('document', {
                url: '/document/:id',
                templateUrl: 'document.html',
                controller: 'DocumentController as ctrl',
                resolve: {
                    doc: function ($stateParams, DocumentsService) {
                        return DocumentsService.getDoc($stateParams.id);
                    }
                }
            })
            .state('document.import', {
                url: '/import',
                templateUrl: 'import.html',
                controller: 'ImportDocumentController as ctrl'
            });

    })
    .config([
      "$httpProvider", function($httpProvider) {
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
      }
    ]);