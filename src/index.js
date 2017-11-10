import '../style/style.css'
import * from '../knockout-3.2.0'

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
        let url = `${iconUrl}`;
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
        marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });

        // On Mouseout, returns marker to default
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });

        // OnClick, toggles bounce for marker and sets InfoWindow
        marker.addListener('click', function() {
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
    self.menuItems(CASINO_LIST);

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
