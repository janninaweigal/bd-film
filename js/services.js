//头部服务
(function () {
    var service=angular.module('headServiceModule',[]);
    service.factory('headerService',['$http', function ($http) {
        return {
            getNavList:function(callback){
                $http.get('json/navList.json').then(callback);
            },
            getLabels:function(callback){
                $http.get('json/labels.json').then(callback);
            }
        }
    }]);
})();
//index服务
(function () {
    var index=angular.module('IndexServiceModule',[]);
    index.factory('IndexService',['$http', function ($http) {
        return {
            getTabList: function (callback) {
                $http.get('json/tabList.json').then(callback);
            },
            getFilms: function (callback) {
                $http.get('json/films.json').then(callback);
            },
            getImages: function (callback) {
                $http.get('json/images.json').then(callback);
            },
            getRecommends: function (callback) {
                $http.get('json/recommend.json').then(callback);
            }
        }
    }]);
})();
//newest服务
(function () {
    var newest=angular.module('NewestServiceModule',[]);
    newest.factory('NewestService',['$http', function ($http) {
        return {
            getTabList: function (callback) {
                $http.get('json/tabList.json').then(callback);
            },
            getFilms: function (callback) {
                $http.get('json/films.json').then(callback);
            },
        }
    }]);
})();
//high服务
(function () {
    var high=angular.module('HighServiceModule',[]);
    high.factory('HighService',['$http', function ($http) {
        return {
            getTabList: function (callback) {
                $http.get('json/tabList.json').then(callback);
            },
            getFilms: function (callback) {
                $http.get('json/films.json').then(callback);
            },
        }
    }]);
})();
//mandarin服务
(function () {
    var mandarin=angular.module('MandarinServiceModule',[]);
    mandarin.factory('MandarinService',['$http', function ($http) {
        return {
            getTabList: function (callback) {
                $http.get('json/tabList.json').then(callback);
            },
            getFilms: function (callback) {
                $http.get('json/films.json').then(callback);
            },
        }
    }]);
})();
//classic服务
(function () {
    var classic=angular.module('ClassicServiceModule',[]);
    classic.factory('ClassicService',['$http', function ($http) {
        return {
            getTabList: function (callback) {
                $http.get('json/tabList.json').then(callback);
            },
            getFilms: function (callback) {
                $http.get('json/films.json').then(callback);
            },
        }
    }]);
})();
//animation服务
(function () {
    var animation=angular.module('AnimationServiceModule',[]);
    animation.factory('AnimationService',['$http', function ($http) {
        return {
            getTabList: function (callback) {
                $http.get('json/tabList.json').then(callback);
            },
            getFilms: function (callback) {
                $http.get('json/films.json').then(callback);
            },
        }
    }]);
})();
//页脚服务
(function () {
    var footer=angular.module('FooterServiceModule',[]);
    footer.factory('FooterService',['$http', function ($http) {
        return {
            getFooters: function (callback) {
                $http.get('json/footers.json').then(callback);
            }
        }
    }]);
})();