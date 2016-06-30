(function () {
  "use strict";

  angular.module('foundang1').component('men', {
    templateUrl: '/views/men/men.tpl.html',
    controller: ['$window', function($window) {
      $window.document.title = 'Men';
    }]
  });

})();
