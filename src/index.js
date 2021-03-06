/* jshint esversion: 6 */

import '../style/style.css';
import ko from 'knockout';

/************ GLOBAL VARS **************/

var map;
const markers = [];
let selectedMarker = '';
var infowindow;
// Address used
const vegasStrip = {
  lat: 36.1116423,
  lng: -115.1697258
};
// Variable to hold knockout Viewmodel, allowing external access
var vm;

// Error handling: replaces map with message displaying error
function displayError(error, location = 'map') {
  if (location === 'map') {
    $('#map').html(`<p>
        ${error}
      </p`);
    $('#map').toggleClass('error');
  } else {
    if (location === 'infoWindow') {}
  }

}

/*** JS GoogleMaps API loader ***/

const loadGoogleMapsAPI = require('load-google-maps-api');
var googleMapsAPIOptions = {
  key: 'AIzaSyDR9w43fPwNxTG2nYWwWK8PCjrlDqH93U0',
  v: '3',
  libraries: ['places'],
  timeout: 3000
};

// Loads Google Maps then launches initMap as callback
loadGoogleMapsAPI(googleMapsAPIOptions).then(function(googleMaps) {
  initMap();
}).catch(function(err) {
  console.error(`Map could not load: ` + err);
  let errorMsg = 'Could not load Google Maps: Please check your connection or search parameters!';
  displayError(errorMsg);
});

/************* MAP FUNCTIONS ************/

function initMap() {

  // 1. Styling
  // Turns off all labels aside from road names

  var myStyle = [
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }, {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }, {
      featureType: "transit",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }
  ];

  // 2. Map and infowindow creation

  map = new google.maps.Map(document.getElementById('map'), {
    center: vegasStrip,
    zoom: 15,
    styles: myStyle
  });

  infowindow = new google.maps.InfoWindow();

  // 3. Search for Places and initiate Knockout

  // Initiate places service
  var service = new google.maps.places.PlacesService(map);

  // Search for casinos then run callback
  service.nearbySearch({
    location: vegasStrip,
    radius: 2000,
    type: ['casino']
  }, callback);

  // For casino in results - add to KO observable list, create marker
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        addCasino(results[i]);
        createMarker(results[i]);
      }
    } else {
      console.log('Error: No Casinos found in given location');
      let errorMsg = 'Google Maps could not find any Casinos in the area!';
      displayError(errorMsg);
    }
  }

  function addCasino(place) {
    vm.menuItems.push(place.name);
  }

  // 4. Marker Functions

  // Defines marker icons, turns into image obj for map
  var defaultIcon = 'https://png.icons8.com/dice/android/40/000000';
  var highlightedIcon = 'https://png.icons8.com/dice/android/40/27ae60';
  var defaultMarker = makeMarkerIcon(defaultIcon);
  var highlightedMarker = makeMarkerIcon(highlightedIcon);

  // Returns image obj to assign to Marker:icon
  function makeMarkerIcon(iconUrl) {
    let url = `${iconUrl}`;
    var image = {
      url: url,
      size: new google.maps.Size(40, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(10, 34),
      scaledSize: new google.maps.Size(40, 40),
      labelOrigin: new google.maps.Point(20, 50)
    };
    return image;
  }

  // Run as callback on each casion after Places search
  // Creates initial markers
  // Pushes each into array and adds listeners (mouseover, click)
  function createMarker(place) {
    var marker = new google.maps.Marker({
      title: place.name,
      label: {
        text: place.name,
        color: "black"
      },
      map: map,
      animation: google.maps.Animation.DROP,
      icon: defaultMarker,
      position: place.geometry.location
    });

    markers.push(marker);

    // On Mouseover changes marker to highlight
    marker.addListener('mouseover', function() {
      this.setIcon(highlightedMarker);
    });

    // On Mouseout, returns marker to default
    marker.addListener('mouseout', function() {
      this.setIcon(defaultMarker);
    });

    // OnClick, toggles bounce for marker and sets InfoWindow
    marker.addListener('click', function() {
      activateMarker(this);
    });
  }
}

/****** INFOWINDOW & WIKIPEDIA API FUNCTIONS ******/

// Creates and opens infowindow with WikiPedia intro paragraph
function getInfoWindowContent(casinoName, marker) {
  // Calls function to turn casino name into wikipedia page id
  retrieveWikiSearch(casinoName).then((wikiID) => {
    // Uses wiki page id to retrieve info paragraph
    retrieveWikiParagraph(wikiID)
    // Populates infowindow with name and intro paragraph, then opens
      .then((introPar) => {
      infowindow.setContent(`
            <div class="infoWindow">
              <h3> ${casinoName} </h3>
              <p> ${introPar} </p>
            </div>`);
      infowindow.open(map, marker);
    });
  });
}

// Searches wikipedia for Casino name, returns first result's PageID
function retrieveWikiSearch(casinoName) {

  // Params for wikipedia search using casino name
  var searchParam = {
    action: 'query',
    origin: '*',
    list: 'search',
    srsearch: `${casinoName}`,
    format: 'json'
  };

  // Wiki API URL, with search params
  var wikiUrl = `https://en.wikipedia.org/w/api.php?` + $.param(searchParam);

  // Fetches and returns first result
  return fetch(wikiUrl, {
    method: 'POST',
    headers: new Headers({'Api-User-Agent': 'somesite.com/whatisthis'})
  // Checks for response from wikipedia, else error
  }).then(function(response) {
    if (response.ok) {
      return response.json();
    }
    alert('No response from Wikipedia, please check your connection!');
    throw new Error('Network response was not ok: ' + response.statusText);
  // Sends response json to retrieve paragraph, or if unavailable throws error
  }).then(function(searchResults) {
    return searchResults.query.search[0].pageid;
  }).catch(function(err) {
    alert('Wikipedia search error! Please check your search parameters.');
  });
}

// Uses wikipedia PageID to return intro paragraph
function retrieveWikiParagraph(wikiID) {

  // Params for query to obtain page
  var pageParam = {
    action: 'query',
    origin: '*',
    pageids: `${wikiID}`,
    prop: 'extracts',
    exintro: '',
    explaintext: '',
    rvsection: '0',
    format: 'json'
  };

  // URL to obtain page from Wiki API
  var wikiUrl = `https://en.wikipedia.org/w/api.php?` + $.param(pageParam);

  // Fetches page, if found, returns introparagraph
  return fetch(wikiUrl, {
    method: 'POST',
    headers: new Headers({'Api-User-Agent': 'somesite.com/whatisthis'})
  }).then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok: ' + response.statusText);
  }).then((wikiPageObject) => {
    let pageIntroPar = wikiPageObject.query.pages[wikiID].extract;
    return pageIntroPar;
  }).catch(function(error) {
    alert(`Could not find Wikipedia intro paragraph for entry.
      Please verify that the entry name and search parameters are correct.`);
  });
}

/**** Global MAP FUNCTIONS OUTSIDE initMap ****/

// Clears selected markers
function clearSelected() {
  if (selectedMarker) {
    selectedMarker.setAnimation(null);
    selectedMarker = '';
  }
}

// Closes infoWindow
function closeInfoWindow() {
  if (infowindow) {
    infowindow.close();
  }
}

// Called on marker click
function activateMarker(marker) {
  // Centers map on marker
  map.setCenter(marker.getPosition());

  // Sets bounce, retrieves info window content
  toggleBounce(marker);
  getInfoWindowContent(marker.title, marker);
}

// Toggle Bounce animation for markers
function toggleBounce(marker) {
  // If clicking on the same marker, turn bounce off
  if (marker.animation) {
    marker.setAnimation(null);
  } else {
    // If a marker is currently selected, turn off its animation
    if (selectedMarker) {
      selectedMarker.setAnimation(null);
    }
    // Set bounce animation on new marker
    marker.setAnimation(google.maps.Animation.BOUNCE);
    // Sets new marker as currently selected
    selectedMarker = marker;
  }
}

// Called when search-box input changed
// Filters visible markers based on new input
function updateMarkers(filteredList) {
  // For each marker:
  // If marker in filteredList, visible=true, otherwise hidden
  // filteredList is an array of markers that match the current input
  for (let marker of markers) {
    if (filteredList.indexOf(marker.title) != -1) {
      marker.setVisible(true);
    } else {
      marker.setVisible(false);
    }
  }
}

/******* KNOCKOUT VIEWMODEL ********/

var ViewModel = function() {

  var self = this;
  // Observable tracking textInput changes
  self.currentInput = ko.observable('');
  // Creates observable array list of casinos
  self.menuItems = ko.observableArray([]);

  // When input changed, updates list and markers
  // Computed function that tracks currentInput observable
  self.filterItems = ko.computed(() => {
    let filteredList;

    // First closes info window and clears the selected marker
    closeInfoWindow();
    clearSelected();

    // If currentInput empty, returns original menuItem list
    if (self.currentInput() === '') {
      filteredList = self.menuItems();
    } else {
      // If currentInput not empty, creates filtered array based on input
      var filter = this.currentInput().toLowerCase();

      filteredList = ko.utils.arrayFilter(self.menuItems(), (casino) => {
        return casino.toLowerCase().indexOf(filter) !== -1;
      });
    }
    // Calls function to update Markers with new list, returns new list
    updateMarkers(filteredList);
    return filteredList;
  });

  self.selectMarker = function(casino, event) {
    for (let marker of markers) {
      if (marker.title === casino) {
        activateMarker(marker);
        return;
      }
    }
  };
};

vm = new ViewModel();
ko.applyBindings(vm);
