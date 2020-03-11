"use strict"

const APIrequest = require('request');
const http = require('http');
const fs = require('fs');

const APIkey = "AIzaSyCbV3wfsr4FkxuDtbQH_p5vLJJDEzCoqEg";
// Base URL
const urlFirst = `${'https://cors-anywhere.herokuapp.com/'}https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference`;


// https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY
// https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAdwtDivEsN3rGJO9PHPYhy0ngewW-7DSqcGZXcgNCo4U6CVbzzwaYOi81BQ6iQ7JYNIXzGfIdsB414aUZVYmHJZyoTXk6k-F7Mb_JOtPIqcWXJ1H91h2T5BgRffyEeGUYEhCiC9XI9HfEGYclwEg_GN3KGhTD0s2VfUMWJSoFJ85wUd-G19slog&key=AIzaSyCbV3wfsr4FkxuDtbQH_p5vLJJDEzCoqEg


exports.searchPlaces = function(ref, responseF) { // Maybe pass object instead???
    let requestObject =
        {
            "photo_reference": ref
        };
    console.log("photo_reference: ", requestObject); // Debug, check request object

    // const url = urlTextsearch + keysearch + "&location=" +
    //             requestObject.location[0] + "," + requestObject.location[1] + "&key=" + APIkey;

    const url = urlFirst + "=" + ref  + "&key=" + APIkey;
    console.log(url)

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
                console.log("Places Found: ", APIresBody); // change to .candidates
                responseF(APIresBody); // change to .candidates
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