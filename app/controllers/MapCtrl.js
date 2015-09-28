'use strict';

// app, config, bowser
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
        {hue: '#007178'},
        {saturation: -55},
        {lightness: 30}
      ]
    },
    {
      elementType: 'labels.text',
      stylers: [
        {visibility: 'off'}
      ]
    }
  ];

  var styledMap = new google.maps.StyledMapType(styles, {name: 'Styled Map'});

  var mapOptions = {
    zoom: 10,
    center: this.latLng,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  $scope.map = new google.maps.Map(this.map, mapOptions);

  $scope.map.mapTypes.set('map_style', styledMap);
  $scope.map.setMapTypeId('map_style');

  $scope.markers = [];

  var infoWindow = new google.maps.InfoWindow();
  var marker;

  var createMarker = function (info, marker) {

    if (marker) {

      marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(info.lat, info.lng),
        title: info.name,
        icon: marker.marker
      });

    } else {

      marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(info.lat, info.lng),
        title: info.name
      });

    }

    marker.content = '<div class="info-block window">'
    + '<span>' + info.address + '</span>'
    + '<span>' + info.cityState + '</span>'
      + '<a href="' + 'tel:' + info.telLink + '">' + info.tel + '</a>' + '<br/>'
      + '<a href="' + info.dir + '" target="_blank">Directions</a> | '
      + '<a href="' + info.web + '" target="_blank">Website</a> | '
      + '<a href="' + info.contact + '" target="_blank">Contact Us</a>'
    + '</div>';

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
      infoWindow.open($scope.map, marker);
    });

    $scope.markers.push(marker);

  };

  $scope.map.addListener('maptypeid_changed', function() {

    if ($scope.styledMap) {

      $scope.markers.forEach(function(el) {
        el.setMap(null);
      });

      createMarker($scope.data, $scope.data);

      $scope.styledMap = false;

    } else {

      $scope.markers.forEach(function(el) {
        el.setMap(null);
      });

      createMarker($scope.data);

      $scope.styledMap = true;

    }

  });

  createMarker($scope.data, $scope.data);

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
