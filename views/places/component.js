(function () {
  "use strict";

  let places = [
    {
      id: 1,
      place: 'London',
      title: 'Tower Bridge',
      desc: 'Tower Bridge is sometimes mistakenly referred to as London Bridge, which is actually the next bridge upstream.',
      image: 'http://static.travel.usnews.com/images/destinations/82/494764110.jpg'
    },
    {
      id: 2,
      place: 'London',
      title: 'London Eye',
      desc: 'Next to Parliament and Tower Bridge, the London Eye is one of the most iconic structures in the city.',
      image: 'http://static.travel.usnews.com/images/destinations/82/138711698.jpg'
    },
    {
      id: 3,
      place: 'London',
      title: 'Big Ben',
      desc: 'Big Ben, otherwise known as the clock tower connected to Parliament, stuns visitors with its intricate beauty.',
      image: 'http://static.travel.usnews.com/images/destinations/82/506103798.jpg'
    },
    {
      id: 4,
      place: 'London',
      title: 'Buckingham Palace',
      desc: 'If you want to experience Buckingham Palace sans the admission fees, don\'t miss the traditional Changing of the Guard.',
      image: 'http://static.travel.usnews.com/images/destinations/82/80471741.jpg'
    },
    {
      id: 5,
      place: 'London',
      title: 'Westminster Abbey',
      desc: 'Westminster Abbey is the traditional coronation site of the British Monarchy.',
      image: 'http://static.travel.usnews.com/images/destinations/82/183829644.jpg'
    }
  ];

  angular.module('foundang1').component('places', {
    templateUrl: '/views/places/places.tpl.html',
    //$routeConfig: [
    //  {path: '/', name: 'Places', component: 'places', useAsDefault: true},
    //  {path: '/:id', name: 'PlaceDetails', component: 'placeDetails'}
    //],
    controller: ['$window', function ($window) {
      $window.document.title = 'Places';
      this.places = places;
    }]
  });

})();
