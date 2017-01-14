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
        { name: "CSS 示例", type:"syntax" , url: "cssspec.html" },
        { name: "Hello AngularJS", type:"syntax" ,url: "helloanjs.html" },
        { name: "ng-controller", type:"syntax" ,url: "ng-controller/index.html" },
        { name: "ng-change", type:"syntax" ,url: "ngchange.html" },
        { name: "ng-checked", type:"syntax" ,url: "ngchecked.html" },
        { name: "ng-click", type:"syntax" ,url: "ngclick.html" },
        { name: "ng-include", type:"syntax" ,url: "ng-include/index.html" },
        { name: "ng-form", type:"syntax" ,url: "ngform.html" },
        { name: "ng-options", type:"syntax" ,url: "ngoptions.html" },
        { name: "ng-repeat", type:"syntax" ,url: "ngrepeat.html" },
        { name: "ng-switch", type:"syntax" ,url: "ngswitch.html" },
        { name: "ng-if", type:"syntax" ,url: "ngif.html" },
        { name: "ng-show, ng-hide", type:"syntax" ,url: "showandhide.html" },
        { name: "timeout", type:"syntax" ,url: "timeout.html" },
        { name: "ng-bind", type:"syntax" ,url: "ngbind.html" },
        { name: "ng-style", type:"syntax" ,url: "ngstyle.html" },
        { name: "實做：民國西元換算器", type:"practice" ,url: "practice1.html" }
    ];
    $scope.webpage_pos = $scope.pract[0];
    $scope.webpage_load = function( ipt )
    {
        // console.log(ipt);
        $scope.webpage_pos = $scope.pract[ipt];
    };
});