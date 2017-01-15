var ang = angular.module("main", []);
ang.controller('intro', function($scope)
{
    $scope.logo =
    {
        wiki:"https://upload.wikimedia.org/wikipedia/commons/",
        then:"archive/c/ca/20161015100936%21AngularJS_logo.svg",
        now:"c/ca/AngularJS_logo.svg"
    };
    $scope.ang_title="AngularJS";
    $scope.title =
    {
        en_gb:"AngularJS",
        zh_tw:"安古利爾爪哇文"
    };
});

ang.controller('webpage', function($scope)
{
    $scope.title = "Practice";
    $scope.pract =
    [
        // { name: "", url: "" },
        { name: "CSS 示例",  url: "cssspec.html" },
        { name: "Hello AngularJS", url: "syntax/helloanjs.html" },
        { name: "ng-controller", url: "syntax/ng-controller/index.html" },
        { name: "ng-change", url: "syntax/ngchange.html" },
        { name: "ng-checked", url: "syntax/ngchecked.html" },
        { name: "ng-click", url: "syntax/ngclick.html" },
        { name: "ng-include", url: "syntax/ng-include/index.html" },
        { name: "ng-form", url: "syntax/ngform.html" },
        { name: "ng-options", url: "syntax/ngoptions.html" },
        { name: "ng-repeat", url: "syntax/ngrepeat.html" },
        { name: "ng-switch", url: "syntax/ngswitch.html" },
        { name: "ng-if", url: "syntax/ngif.html" },
        { name: "ng-show, ng-hide", url: "syntax/ngshowandhide.html" },
        { name: "timeout", url: "syntax/timeout.html" },
        { name: "ng-bind", url: "syntax/ngbind.html" },
        { name: "ng-style", url: "syntax/ngstyle.html" },
        { name: "Dependency Injection", url: "inject.html" },
        { name: "實做：民國西元換算器", url: "practice1.html" }
    ];
    $scope.webpage_pos = $scope.pract[0];
    $scope.webpage_load = function( ipt )
    {
        // console.log(ipt);
        $scope.webpage_pos = $scope.pract[ipt];
    };
});