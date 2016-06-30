(function () {
  "use strict";

  angular.module('foundang1').component('women', {
    templateUrl: '/views/women/women.tpl.html',
    controller: ['$window', function($window) {
      $window.document.title = 'Women';
    }]
  });

})();
