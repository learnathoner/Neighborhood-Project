import '../style/style.css'
import ko from 'knockout';


/* jshint esversion: 6 */

const loadGoogleMapsAPI = require('load-google-maps-api')

loadGoogleMapsAPI().then(function(googleMaps) {
  initMap();
}).catch((err) => {
  console.error(`Map could not load: ` + err)
})

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
// Will store results from places Casino Search
const CASINO_LIST = [];
var vm;

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
    }

    function addCasino(place) {
        CASINO_LIST.push(place.name);
        vm.menuItems.push(place.name);
    }

    // 4. Marker Functions

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

    // Run by callback function after places search for each result
    // Creates initial markers
    // Pushes each into array and adds listeners (mouseover, click)
    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            title: place.name,
            label: place.name,
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
          let self = this;
          toggleBounce(marker);

          getInfoWindowContent(place.name, self);
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

function getInfoWindowContent(casinoName, marker) {
  // Title of 1st result for wikipedia search
  retrieveWikiSearch(casinoName)
    .then((wikiID) => {
      retrieveWikiObject(wikiID)
        .then((introPar) => {
          infowindow.setContent(`
            <div class="infoWindow">
              <h3> ${casinoName} </h3>
              <p> ${introPar} </p>
            </div>`);
          infowindow.open(map, marker);
        })
    })

  var wikiUrl = `https://en.wikipedia.org/w/api.php?` + $.param({
    action: 'query',
    origin: '*',
    list: 'search',
    srsearch: `${casinoName}`,
    format: 'json'
  });

}

// Retrieves first search result obj for casino name on Wikipedia
function retrieveWikiSearch(casinoName) {

  // Param for wikipedia search using casino name
  var searchParam = {
    action: 'query',
    origin: '*',
    list: 'search',
    srsearch: `${casinoName}`,
    format: 'json'
  }
  // Stores url to fetch search results
  var wikiUrl = `https://en.wikipedia.org/w/api.php?` + $.param(searchParam);

  // Fetches and returns first result
  return fetch( wikiUrl, {
      method: 'POST',
      headers: new Headers( {
          'Api-User-Agent': 'somesite.com/whatisthis'
      } ),
  } ).then( function ( response ) {
      if ( response.ok ) {
        return response.json();
      }
      throw new Error( 'Network response was not ok: ' + response.statusText );
  } ).then( function ( searchResults ) {
      return searchResults.query.search[0].pageid;
  });
}

// Retrieves first search result obj for casino name on Wikipedia
function retrieveWikiObject(wikiID) {

  // Param to retrieve wiki page
  var pageParam = {
    action: 'query',
    origin: '*',
    pageids: `${wikiID}`,
    prop: 'extracts',
    exintro: '',
    explaintext: '',
    rvsection: '0',
    format: 'json'
  }
  // Stores url to fetch search results
  var wikiUrl = `https://en.wikipedia.org/w/api.php?` + $.param(pageParam);

  // Fetches and returns the wikipedia page
  return fetch( wikiUrl, {
      method: 'POST',
      headers: new Headers( {
          'Api-User-Agent': 'somesite.com/whatisthis'
      } ),
  } ).then( function ( response ) {
      if ( response.ok ) {
        return response.json();
      }
      throw new Error( 'Network response was not ok: ' + response.statusText );
  } ).then((wikiPageObject) => {
      let pageIntroPar = wikiPageObject.query.pages[wikiID].extract;
      return pageIntroPar;
  })
}

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
    for (let marker of markers) {
        if (newList.indexOf(marker.title) != -1) {
            marker.setVisible(true);
        } else {
            marker.setVisible(false);
        }
    }
}

/******* KNOCKOUT VIEWMODEL ********/

var ViewModel = function() {

    var self = this;
    self.currentInput = ko.observable('');
    // Creates observable array list of casinos
    self.menuItems = ko.observableArray([]);

    //TODO: Erase
    // self.menuItems(CASINO_LIST);

    // Creates filtered array of results when text input changed
    self.filterItems = ko.computed(() => {

        // Tracks currentInput obervable for new input
        // If currentInput empty, returns original menuItem list
        if (self.currentInput() === '') {
            return self.menuItems();
        } else {
            // If currentInput not empty, returns filtered array based on input
            var filter = this.currentInput().toLowerCase();

            return ko.utils.arrayFilter(self.menuItems(), (casino) => {
                return casino.toLowerCase().indexOf(filter) !== -1;
            });
        }
    });

    // Event Listener for search-box text input
    // 1. Clears infowindows and resets animations
    // 2. Filters results and displays new markers / lists with matches
    $('#search-box').on('input', () => {
        let input = $('#search-box').val();
        self.currentInput(input);

        let newList = self.filterItems();

        clearSelected();
        closeInfoWindow();
        updateMarkers(newList);
    });
};

vm = new ViewModel();
ko.applyBindings(vm);
