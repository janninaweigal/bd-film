var rootApp = angular.module('rootApp',['ui.router','headerModule','IndexModule','NewestModule','HighModule','MandarinModule','ClassicModule','AnimationModule','FooterModule']);
rootApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
    .state('index', {
        url: '/index',
        views: {
            '': {
                templateUrl: 'tpls/section.html'
            }
        }
    })
    .state('newest', {
        url: '/newest',
        views: {
            '': {
                templateUrl: 'tpls/other/zx.html'
            }
        }
    })
    .state('high', {
        url: '/high',
        views: {
            '': {
                templateUrl: 'tpls/other/gq.html'
            }
        }
    })
    .state('mandarin', {
        url: '/mandarin',
        views: {
            '': {
                templateUrl: 'tpls/other/gy.html'
            }
        }
    })
    .state('classic', {
        url: '/classic',
        views: {
            '': {
                templateUrl: 'tpls/other/jd.html'
            }
        }
    })
    .state('animation', {
        url: '/animation',
        views: {
            '': {
                templateUrl: 'tpls/other/dh.html'
            }
        }
    })
}]);