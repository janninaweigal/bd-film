// 头部控制器
(function(){
    var main=angular.module("headerModule",['headServiceModule']);
    main.controller('headerCtrl',['$scope','headerService',function($scope,headerService){
        $scope.HeaderInit=function(){
            headerService.getNavList(function (data) {
                $scope.navList=data.data;
            });
        };
        $scope.NavInit=function(){
            headerService.getLabels(function (data) {
                $scope.labels= data.data;
            });
        };
    }]);
    //登录控制
    main.controller('loginCtrl',['$scope', function ($scope) {
        $scope.myLogin= function () {
            alert('登录暂未开放');
        }
        $scope.myRegister= function () {
            alert('注册暂未开放');
        }
    }]);
    main.directive('myHeader', function () {//头部设置
        return {
            restrict:'ECAM',
            replace:true,
            templateUrl:'tpls/header.html',
            require:true,
            link: function (scope,element,attrs) {
                // console.log(scope);
            }
        }
    });
    main.directive('myNav',['headerService' ,function (headerService) {//导航设置
        return {
            restrict:'ECAM',
            replace:true,
            templateUrl:'tpls/nav.html',
            controller: function ($scope) {
                $scope.navList=navList();
                $scope.setActive= function(item) {
                    $scope.navActive.href = item.href;
                }
                $scope.navActive = $scope.navList[0];
                $scope.isActive = function(item){
                    return $scope.navActive.href == item.href;
                }
            },
            link: function () {
                //登录
                $('#login').click(function () {
                    $('#mymodal').modal({
                        container:'body',
                        show:true
                    });
                });
                //注册
                $('#register').click(function () {
                    $('#mymodal1').modal({
                        container:'body',
                        show:true
                    });
                });
            }
        }
    }]);
    //返回顶部
    $(function () {
        $('#xiangshang').hide();
        $(window).scroll(function() {
            if($(document).scrollTop()>0)
            {
                $('#xiangshang').show();
            }else
            {
                $('#xiangshang').hide();
            }
        });
        $('#xiangshang').click(function () {
            $("html, body").animate({
                "scroll-top":0
            },"fast");
        });
    });
    //分享
    window.onload= function () {
        var oDiv=document.getElementById('share');
        oDiv.onmouseover= function () {
            startMove(0);
        };
        oDiv.onmouseout= function () {
            startMove(-100);
        };
    }
    var timer=null;
    function startMove(iTarget){
        var oDiv=document.getElementById('share');
        clearInterval(timer);
        timer=setInterval(function () {
            var speed=0;
            if(oDiv.offsetLeft>iTarget)
            {
                speed=-10;
            }
            else
            {
                speed=10;
            }
            if(oDiv.offsetLeft==iTarget){
                clearInterval(timer);
            }
            else
            {
                oDiv.style.left=oDiv.offsetLeft+speed+'px';
            }
        },30);
    };
})();
//index
(function(){
    var index = angular.module('IndexModule',['IndexServiceModule']);
    index.controller('indexCtrl',['$scope','IndexService', function ($scope,IndexService) {
        $scope.CarouselInit= function () {
            IndexService.getImages(function (data) {
                $scope.images=data.data;
            })
        };
        $scope.tabListInit=function(){
            IndexService.getTabList(function (data) {
                $scope.tabList=data.data;
            })
        };
        $scope.recommendInit=function(){
            IndexService.getRecommends(function (data) {
                $scope.recommends=data.data;
            })
        };
        $scope.filmsInit=function(){
            IndexService.getFilms(function (data) {
                $scope.films=data.data;
            })
        };
    }]);
    index.directive('myCarousel', function () {//轮播图
        return {
            restrict:'E',
            replace:true,
            templateUrl:'tpls/index/carousel.html'
        }
    });
    index.directive('myTablist', function () {//点击排行tablist
        return {
            restrict:'E',
            replace:true,
            templateUrl:'tpls/index/tablist.html'
        }
    });
    index.directive('dayRecommend', function () {//今日推荐
        return {
            restrict:'E',
            replace:true,
            templateUrl:'tpls/index/recommend.html'
        }
    });
    index.directive('updateFilm', function () {//最新更新电影
        return {
            restrict:'E',
            replace:true,
            templateUrl:'tpls/index/updatefilm.html',
            controller: function ($scope) {

            },
        }
    });
    index.directive('typeFilm', function () {//其它四种类型的电影
        return {
            restrict:'E',
            replace:true,
            templateUrl:'tpls/index/films.html'
        }
    });
})();
//最新newest
(function(){
    var newest = angular.module('NewestModule',['NewestServiceModule']);
    newest.controller('newestCtrl',['$scope','NewestService', function ($scope,NewestService) {
        $scope.tabListInit=function(){
            NewestService.getTabList(function (data) {
                $scope.tabList=data.data;
            })
        };
        $scope.filmInit=function(){
            NewestService.getFilms(function (data) {
                $scope.allfilm=data.data[0];
                divide($scope);
            })
        };
    }]);
})();
//高清high
(function(){
    var high = angular.module('HighModule',['HighServiceModule']);
    high.controller('highCtrl',['$scope','HighService', function ($scope,HighService) {
        $scope.tabListInit=function(){
            HighService.getTabList(function (data) {
                $scope.tabList=data.data;
            })
        };
        $scope.filmInit=function(){
            HighService.getFilms(function (data) {
                $scope.allfilm=data.data[1];
                divide($scope);
            })
        };
    }]);
})();
//国语mandarin
(function(){
    var mandarin = angular.module('MandarinModule',['MandarinServiceModule']);
    mandarin.controller('mandarinCtrl',['$scope','MandarinService', function ($scope,MandarinService) {
        $scope.tabListInit=function(){
            MandarinService.getTabList(function (data) {
                $scope.tabList=data.data;
            })
        };
        $scope.filmInit=function(){
            MandarinService.getFilms(function (data) {
                $scope.allfilm=data.data[2];
                divide($scope);
            })
        };
    }]);
})();
//经典classic
(function(){
    var classic = angular.module('ClassicModule',['ClassicServiceModule']);
    classic.controller('classicCtrl',['$scope','ClassicService', function ($scope,ClassicService) {
        $scope.tabListInit=function(){
            ClassicService.getTabList(function (data) {
                $scope.tabList=data.data;
            })
        };
        $scope.filmInit=function(){
            ClassicService.getFilms(function (data) {
                $scope.allfilm=data.data[3];
                divide($scope);
            })
        };
    }]);
})();
//动画animation
(function(){
    var animation = angular.module('AnimationModule',['AnimationServiceModule']);
    animation.controller('animationCtrl',['$scope','AnimationService', function ($scope,AnimationService) {
        $scope.tabListInit=function(){
            AnimationService.getTabList(function (data) {
                $scope.tabList=data.data;
            })
        };
        $scope.filmInit=function(){
            AnimationService.getFilms(function (data) {
                $scope.allfilm=data.data[4];
                divide($scope);
            })
        };
    }]);
})();
//页脚控制器
(function(){
    var footer = angular.module('FooterModule',['FooterServiceModule']);
    footer.controller('footerCtrl',['$scope','FooterService', function ($scope,FooterService) {
        $scope.footersInit= function () {
            FooterService.getFooters(function (data) {
                $scope.footers=data.data;
            })
        };
    }]);
    footer.directive('myFooter', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:'tpls/footer.html'
        }
    });
})();
//分页公用代码
function divide($scope){
    var list=$scope.allfilm.list;
    //分页总数
    $scope.pageSize =15;
    $scope.pages = Math.ceil(list.length / $scope.pageSize); //分页数
    $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
    $scope.pageList = [];
    $scope.selPage = 1;
    //设置表格数据源(分页)
    $scope.setData = function () {
        $scope.items = list.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
        console.log($scope.items);
    }
    $scope.items = list.slice(0, $scope.pageSize);
    //分页要repeat的数组
    for (var i = 0; i < $scope.newPages; i++) {
        $scope.pageList.push(i + 1);
    }
    
    //打印当前选中页索引
    $scope.selectPage = function (page) {
        //不能小于1大于最大
        if (page < 1 || page > $scope.pages) return;
        //最多显示分页数5
        if (page > 2) {
            //因为只显示5个页数，大于2页开始分页转换
            var newpageList = [];
            for (var i = (page - 3) ; i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)) ; i++) {
                newpageList.push(i + 1);
            }
            $scope.pageList = newpageList;
        }
        $scope.selPage = page;
        $scope.setData();
        $scope.isActivePage(page);
    };
    //设置当前选中页样式
    $scope.isActivePage = function (page) {
        return $scope.selPage == page;
    };
    //上一页
    $scope.Previous = function () {
        $scope.selectPage($scope.selPage -1);
    }
    //下一页
    $scope.Next = function () {
        $scope.selectPage($scope.selPage + 1);
    };
    //首页
    $scope.Homepage = function () {
        $scope.selectPage($scope.selPage = 1);
    }
    //尾页
    $scope.Endpage = function () {
        $scope.selectPage($scope.selPage =$scope.pageList.length);
    };
}
function navList(){
    var navList=[
        {
            "href":"index",
            "name":"首页"
        },
        {
            "href":"newest",
            "name":"最新"
        },
        {
            "href":"high",
            "name":"高清"
        },
        {
            "href":"mandarin",
            "name":"国语"
        },
        {
            "href":"classic",
            "name":"经典电影"
        },
        {
            "href":"animation",
            "name":"动画电影"
        }
    ];
    return navList;
}