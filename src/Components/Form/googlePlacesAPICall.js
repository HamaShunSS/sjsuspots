"use strict"

const APIrequest = require('request');
const http = require('http');
const fs = require('fs');

const APIkey = "AIzaSyCbV3wfsr4FkxuDtbQH_p5vLJJDEzCoqEg";
// Base URL
const urlTextsearch = `${'https://cors-anywhere.herokuapp.com/'}https://maps.googleapis.com/maps/api/place/textsearch/json?query=`;

exports.searchPlaces = function(keysearch, city, responseF) { // Maybe pass object instead???
  let requestObject =
    {
      "search": keysearch,
      "location": city
    };
  console.log("Keysearch: ", requestObject); // Debug, check request object

  // const url = urlTextsearch + keysearch + "&location=" +
  //             requestObject.location[0] + "," + requestObject.location[1] + "&key=" + APIkey;

  const url = urlTextsearch + keysearch + "+" + city + "&key=" + APIkey;


  APIrequest(
 	  {
      url: url,
      method: "POST",
      headers: {"content-type": "application/json"},
      json: requestObject
    },
    APIcallback
  );

// Check for errors on response
  function APIcallback(err, APIresHead, APIresBody) {
    // gets three objects as input
 	  if ((err) || (APIresHead.statusCode != 200)) {
 	    // API is not working
 	    console.log("Got API error");
 	    console.log(APIresBody);
 	  } else {
 	    if (APIresHead.error) {
 		    // API worked but is not giving you data
 	  	  console.log(APIresHead.error);
   	  } else {
   		  console.log("Places Found: ", APIresBody.results); // change to .candidates
		    responseF(APIresBody.results); // change to .candidates
 	    }
 	  }
  } // end callback function
}

/*
https://console.cloud.google.com/google/maps-apis/api-list?project=recotto-1581657814839
https://developers.google.com/places/web-service/search
https://softauthor.com/google-maps-javascript-places-api

*example*
https://maps.googleapis.com/maps/api/place/textsearch/json?query=Restraurants+in+Salinas&key=AIzaSyCbV3wfsr4FkxuDtbQH_p5vLJJDEzCoqEg
*/
