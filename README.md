# Udacity's Neighborhood Project

## About

The purpose of this application is to use HTML, CSS, JS, and a Javascript framework such as jQuery and MVVM model Knockout JS to create a responsive, interactive map application. The application must contain:
- **A responsive nav-menu:** Left sidebar on full width, turning into a top dropdown menu on smaller screens
  - **Filtering functionality from Knockout:** Allows updating results based on user input
- **API interaction:** API functionality by Google Maps and a third party API

## Personal Project Functionality

* **Markers:** My map displays a list of Casinos around the Las Vegas strip, near my current location. The list is generated using a Google Place search for casinos
  * **Interaction:** Markers change icon upon mouseover, add bounce effect and infoWindow on click, and can be filtered through menu (see below)
* **InfoWindow:** The infoWindow information is generated through Wikipedia's API. Uses Google's provided casino name to search for Wikipedia results, then extracts intro paragraph from the first result's Wikipedia page.
* **Menu:** Typing in the filter menu changes the visible markers to only match results with the new input

## USE

To access the hosted app, go to: **https://learnathoner.github.io/Neighborhood-Project/** 
