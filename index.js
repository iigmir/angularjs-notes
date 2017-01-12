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
        { name: "CSS 示例", url: "cssspec.html" },
        { name: "Hello AngularJS", url: "helloanjs.html" },
        { name: "ng-controller", url: "ng-controller/index.html" },
        { name: "ng-include", url: "ng-include/index.html" },
        { name: "ng-click", url: "ngclick.html" },
        { name: "ng-change", url: "ngchange.html" },
        { name: "ng-checked", url: "ngchecked.html" },
        { name: "ng-click", url: "ngclick.html" },
        { name: "ng-form", url: "ngform.html" },
        { name: "ng-options", url: "ngoptions.html" },
        { name: "ng-repeat", url: "ngrepeat.html" },
        { name: "ng-switch", url: "ngswitch.html" },
        { name: "ng-if", url: "ngif.html" },
        { name: "show and hide", url: "showandhide.html" },
        { name: "timeout", url: "timeout.html" },
        { name: "實做：民國西元換算器", url: "practice1.html" }
    ];
    $scope.webpage_pos = $scope.pract[0];
    $scope.webpage_load = function( ipt )
    {
        // console.log(ipt);
        $scope.webpage_pos = $scope.pract[ipt];
    };
});