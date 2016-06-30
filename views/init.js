(function () {
  //angular.module('foundang1', ['ngRoute']);
  angular.module('foundang1', ['ngComponentRouter']);

  angular.module('foundang1').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]).value('$routerRootComponent', 'index');

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['foundang1'], {
      strictDi: true
    });
  });

})();