(function () {
  "use strict";

  angular.module('foundang1').component('houses', {
    templateUrl: '/views/houses/houses.tpl.html',
    controller: ['$window', function($window) {
      $window.document.title = 'Houses';
    }]
  });

})();
