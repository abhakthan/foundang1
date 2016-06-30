(function () {
  "use strict";

  angular.module('foundang1').component('index', {
    templateUrl: '/views/index/index.tpl.html',
    $routeConfig: [
      {path: '/places', name: 'Places', component: 'places', useAsDefault: true},
      {path: '/houses', name: 'Houses', component: 'houses'},
      {path: '/men', name: 'Men', component: 'men'},
      {path: '/women', name: 'Women', component: 'women'}
    ]
  });


})();
