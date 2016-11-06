"use strict";

var Legos = (function(originalLegos){

	let legoItems = [];

	let parseData = function(data){
		data.LegoColorss.forEach(function(element){
      		legoItems.push(element)
    	});
	}


	////////////////// properties of the Lego Object /////////////////////

	originalLegos.getLegoItems = function(){
		return legoItems;
	}

	originalLegos.loadLegos = function () {
      return new Promise(function (resolve, reject) {  // return the promise object to the caller
        let request = new XMLHttpRequest(); //regular XHR request
        request.onload = function () {
          if (request.status === 200) { // check the status. This is called even on 404 etc.
            // Success
            var data = JSON.parse(request.responseText);
            parseData(data); // modify the data into array
            resolve(legoItems); //the resolve contains the data -- returned to the caller
		    // resolve(request.response); // default
          } else {
            // Something went wrong (404 etc.)
            reject(new Error("XMLHttpRequest Error ",request.statusText));
          }
        };
        request.open('GET', "lego-colors.json");
        request.send();
      });
    }


	return originalLegos;

})(Legos || {}); // close iife and execute




