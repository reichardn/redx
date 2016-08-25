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
            });

        $stateProvider
            .state('deal', {
                url: '/deal/:id',
                templateUrl: 'deal.html',
                controller: 'DealController as ctrl',
                resolve: {
                    deal: function ($stateParams, DealsService) {
                        return DealsService.getDeal($stateParams.id);
                    }
                }
            });
    })
    .config([
      "$httpProvider", function($httpProvider) {
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
      }
    ]);