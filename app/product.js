/**
 * Created by jessy on 26/10/2016.
 */

var app = angular.module('store-directives', []);

app.directive("descriptions", function() {
    return {
        restrict: "E",
        templateUrl: "descriptions.html"
    }
});

app.directive("productTabs", function() {
    return {
        restrict: "E",

        templateUrl: "product-Tabs.html",
        controller: function() {
            this.tab = 1;

            this.isSet = function(checkTab) {
                return this.tab === checkTab;
            };

            this.setTab = function(activeTab) {
                this.tab = activeTab;
            };
        },
        controllerAs: "tab"
    };
});

app.directive("specs", function () {
    return {
        restrict: 'E',
        templateUrl: "Specs.html"
    }
});

app.directive("review", function () {
    return {
        restrict: 'E',
        templateUrl: "review.html"
    }
});