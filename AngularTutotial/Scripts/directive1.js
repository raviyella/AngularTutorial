(function() {
    'use strict';

    angular
        .module('app')
        .directive('directive1', directive1);

    directive1.$inject = ['$window'];
    
    function directive1 ($window) {
        // Usage:
        //     <directive1></directive1>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();