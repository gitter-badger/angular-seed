var directives = angular.module('app.directives');

/**
 * File directive.
 *
 * Listens to the change event and triggers a function.
 */
directives.directive('file', function() {
    
    'use strict';

    return {
        restrict: 'E',
        template: '<input type="file" />',
        replace: true,
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
            var listener = function() {
                scope.$apply(function() {
                    attr.multiple ? ctrl.$setViewValue(element[0].files) : ctrl.$setViewValue(element[0].files[0]);
                });
            }
            element.bind('change', listener);
        }
    }
});