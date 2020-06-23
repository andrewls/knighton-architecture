import registerPageLoadHandler from 'utilities/register-page-load-handler';

console.log("In load maps");

let script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAvmtYd34lXs8YDFo9USzU69DF05FrzPA4&callback=initMap';
script.defer = true;
script.async = true;

let mapsLoaded = false;
let pageLoaded = false;

const loadMap = function() {
  console.log("Loading map");
  const element = document.getElementById('map');
  console.log("Found map?", element);
  let map = new google.maps.Map(element, {
    center: { lat: 40.252635, lng: -111.698531 },
    zoom: 13,
    styles: [
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#daddd1"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#daddd1"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#daddd1"
          }
        ]
      },
      {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#daddd1"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#daddd1"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#daddd1"
          }
        ]
      },
      {
        "featureType": "poi.government",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#daddd1"
          }
        ]
      },
      {
        "featureType": "poi.medical",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#daddd1"
          }
        ]
      },
      {
        "featureType": "poi.place_of_worship",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#daddd1"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#daddd1"
          }
        ]
      },
      {
        "featureType": "poi.sports_complex",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#daddd1"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#d9d9d9"
          },
          {
            "saturation": -95
          },
          {
            "lightness": 5
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#d9d9d9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#cacaca"
          }
        ]
      }
    ]
  });
};

registerPageLoadHandler(function() {
  console.log("Page loaded");
  pageLoaded = window.location.href.includes('connect');
  if (mapsLoaded && pageLoaded) {
    loadMap();
  }
});

window.initMap = function() {
  console.log("Maps loaded");
  mapsLoaded = true;
  if (mapsLoaded && pageLoaded) {
    loadMap();
  }
}

document.head.appendChild(script);
