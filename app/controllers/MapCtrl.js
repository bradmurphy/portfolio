'use strict';

// require app, config and bowser
var app = require('../app');
var config = require('../config');
var browser = require('bowser');

// map controller
app.controller('MapCtrl', ['$scope', function($scope) {

  $scope.data = config.data;
  $scope.styledMap = false;

  this.latLng = new google.maps.LatLng($scope.data.lat, $scope.data.lng);
  this.map = document.querySelector('#map');

  var styles = [
    {
      stylers: [
        {hue: '#001f3f'},
        {saturation: -55},
        {lightness: 30}
      ]
    }
  ];

  var styledMap = new google.maps.StyledMapType(styles, {name: 'Styled Map'});

  var mapOptions = {
    zoom: 13,
    center: this.latLng,
    scrollwheel: false,
    disableDefaultUI: true,
    draggable: false
  };

  $scope.map = new google.maps.Map(this.map, mapOptions);

  $scope.map.mapTypes.set('map_style', styledMap);
  $scope.map.setMapTypeId('map_style');

  $scope.markers = [];

  var marker;

  var createMarker = function (info) {

    marker = new google.maps.Marker({
      map: $scope.map,
      position: new google.maps.LatLng(info.lat, info.lng),
      title: info.name,
      icon: info.marker
    });

    google.maps.event.addListener(marker, 'click', function() {
      window.location.href = '#contact';
    });

    $scope.markers.push(marker);

  };

  createMarker($scope.data);

  if (browser.mobile || browser.tablet) {

    this.map.parentNode.removeChild(this.map);

  }

}]);

// map directive
app.directive('mapDir', function() {

  return {
    restrict: 'C',
    controller: 'MapCtrl',
    controllerAs: 'map',
  };

});
