(function() {
    'use strict';

    angular
        .module('TodoApp')
        .directive('sorted', function () {
            return {
                scope: true,
                transclude: true,
                template: '<a ng-click="do_sort()" ng-transclude></a>'+
        '<span ng-show="do_show(true)"><i class ="fa fa-arrow-up"></i></span>'+
        '<span ng-show="do_show(false)"><i class ="fa fa-arrow-down"></i></span>',
                controller: function ($scope, $element, $attrs) {
                    $scope.sort = $attrs.sorted;

                    $scope.do_sort = function() {$scope.sort_by($scope.sort);};

                    $scope.do_show = function(asc) {
                        return (asc != $scope.is_desc) && ($scope.sort_order == $scope.sort);
                    };
                }
            };
        });
})();