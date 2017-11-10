/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

var CALLBACK_NAME = '__googleMapsApiOnLoadCallback'

var OPTIONS_KEYS = ['client', 'key', 'language', 'region', 'v']

module.exports = function(options) {
  options = options || {
    key: 'AIzaSyDR9w43fPwNxTG2nYWwWK8PCjrlDqH93U0',
    v: '3',
    libraries: ['places']
  }

  return new Promise(function(resolve, reject) {
    // Exit if not running inside a browser.
    if (typeof window === 'undefined') {
      return reject(
        new Error('Can only load the Google Maps API in the browser')
      )
    }

    // Reject the promise after a timeout.
    var timeoutId = setTimeout(function() {
      window[CALLBACK_NAME] = function() {} // Set the on load callback to a no-op.
      reject(new Error('Could not load the Google Maps API'))
    }, options.timeout || 10000)

    // Hook up the on load callback.
    window[CALLBACK_NAME] = function() {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
      resolve(window.google.maps)
      delete window[CALLBACK_NAME]
    }

    // Prepare the `script` tag to be inserted into the page.
    var scriptElement = document.createElement('script')
    var params = ['callback=' + CALLBACK_NAME]
    OPTIONS_KEYS.forEach(function(key) {
      if (options[key]) {
        params.push(key + '=' + options[key])
      }
    })
    if (options.libraries && options.libraries.length) {
      params.push('libraries=' + options.libraries.join(','))
    }
    scriptElement.src =
      'https://maps.googleapis.com/maps/api/js?' + params.join('&')

    // Insert the `script` tag.
    document.body.appendChild(scriptElement)
  })
}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


/* jshint esversion: 6 */

var loadGoogleMapsAPI = __webpack_require__(0);

loadGoogleMapsAPI().then(function (googleMaps) {
    initMap();
}).catch(function (err) {
    console.error('Map could not load: ' + err);
});

/************ GLOBAL VARS **************/
var map;
var markers = [];
var selectedMarker = '';
var infowindow;
// Address used
var vegasStrip = {
    lat: 36.1116423,
    lng: -115.1697258
};
// Will store results from places Casino Search
var CASINO_LIST = [];

/************* MAP FUNCTIONS ************/

function initMap() {

    // 1. Styling

    var myStyle = [{
        featureType: "administrative",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }];

    // 2. Map and infowindow creation

    map = new google.maps.Map(document.getElementById('map'), {
        center: vegasStrip,
        zoom: 15,
        styles: myStyle
    });

    infowindow = new google.maps.InfoWindow();

    // 3. Search for Places and initiate Knockout

    var service = new google.maps.places.PlacesService(map);

    // Search for casinos then run callback
    service.nearbySearch({
        location: vegasStrip,
        radius: 2000,
        type: ['casino']
    }, callback);

    // For casino in results - add to list, create marker
    //    After list created, apply KO bindings
    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                addCasino(results[i]);
                createMarker(results[i]);
            }
        } else {
            //TODO: Add else if PlacesServiceStatus not OK
        }
        ko.applyBindings(new ViewModel());
    }

    function addCasino(place) {
        CASINO_LIST.push(place.name);
    }

    // 4. Marker Functions

    var defaultIcon = 'https://png.icons8.com/dice/android/40/000000';
    var highlightedIcon = 'https://png.icons8.com/dice/android/40/27ae60';

    // Returns image obj to assign to Marker:icon
    function makeMarkerIcon(iconUrl) {
        var url = '' + iconUrl;
        var image = {
            url: url,
            size: new google.maps.Size(21, 34),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(10, 34),
            scaledSize: new google.maps.Size(21, 34)
        };
        return image;
    }

    // Run by callback function after places search for each result
    // Creates initial markers
    // Pushes each into array and adds listeners (mouseover, click)
    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            title: place.name,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            position: place.geometry.location
        });

        markers.push(marker);

        // On Mouseover changes marker to highlight
        marker.addListener('mouseover', function () {
            this.setIcon(highlightedIcon);
        });

        // On Mouseout, returns marker to default
        marker.addListener('mouseout', function () {
            this.setIcon(defaultIcon);
        });

        // OnClick, toggles bounce for marker and sets InfoWindow
        marker.addListener('click', function () {
            toggleBounce(marker);
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

    // Toggle Bounce animation for markers
    function toggleBounce(marker) {
        // If clicking on the same marker, turn bounce off
        if (marker.animation) {
            marker.setAnimation(null);
        } else {
            // If marker currently selected, turn off its animation
            if (selectedMarker) {
                selectedMarker.setAnimation(null);
            }
            // Set bounce animation on new marker
            marker.setAnimation(google.maps.Animation.BOUNCE);
            // Sets new marker as currently selected
            selectedMarker = marker;
        }
    }
}

/**** MAP FUNCTIONS OUTSIDE initMap ***/

// Clears selected when input entered
function clearSelected() {
    if (selectedMarker) {
        selectedMarker.setAnimation(null);
        selectedMarker = '';
    }
}

// Closes infoWindows
function closeInfoWindow() {
    if (infowindow) {
        infowindow.close();
    }
}

// Called when search-box input changed
// Adjust visible markers based on KO filtered array with input
function updateMarkers(newList) {
    // For each marker:
    // If marker in newList of results, visible=true, otherwise hidden
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = markers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var marker = _step.value;

            if (newList.indexOf(marker.title) != -1) {
                marker.setVisible(true);
            } else {
                marker.setVisible(false);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

/******* KNOCKOUT VIEWMODEL ********/

var ViewModel = function ViewModel() {
    var _this = this;

    var self = this;
    self.currentInput = ko.observable('');
    // Creates observable array list of casinos
    self.menuItems = ko.observableArray([]);
    self.menuItems(CASINO_LIST);

    // Creates filtered array of results when text input changed
    self.filterItems = ko.computed(function () {

        // Tracks currentInput obervable for new input
        // If currentInput empty, returns original menuItem list
        if (self.currentInput() === '') {
            return self.menuItems();
        } else {
            // If currentInput not empty, returns filtered array based on input
            var filter = _this.currentInput().toLowerCase();

            return ko.utils.arrayFilter(self.menuItems(), function (casino) {
                return casino.toLowerCase().indexOf(filter) !== -1;
            });
        }
    });

    // Event Listener for search-box text input
    // 1. Clears infowindows and resets animations
    // 2. Filters results and displays new markers / lists with matches
    $('#search-box').on('input', function () {
        var input = $('#search-box').val();
        self.currentInput(input);

        var newList = self.filterItems();

        clearSelected();
        closeInfoWindow();
        updateMarkers(newList);
    });
};

/***/ }
/******/ ]);