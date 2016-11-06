"use strict"



let showItems = function(legosData){
	// console.log("showItems", legosData);
	let legoDisplay = document.getElementById("lego-display");

	legosData.forEach(function(lego){
		let legoBlock = buildLego(lego);
		legoDisplay.innerHTML += legoBlock;
	});
}

let buildLego = function(lego){
	//building a string to create the visual display

	let block = "",
		wrapper = `<section class="block-wrapper" style="border: 2px solid #000000; background-color:#${lego.ColorHex}">`,
		title = `<h3>Name: ${lego.LegoName}</h3>`,
		years = `<div class="block-years">Manufactured ${lego.YearFrom} - ${lego.YearTo}</div>`;
		// image = `<div class="card-img" style="background-image: url('images/${car.image}')"></div>`,
		let link = lego.ColorstreamLinkImage;
		if (link){
			 block += `<a href="${link}">${wrapper + title + years}</section></a>`;
		}else{
			block += `${wrapper + title + years}</section>`;
		}
  	return block;
}


// The Promises Way puts the callback responsibility on the caller
// Each .then() receives the result of the previous then.

/////////////// version 1 /////////////////////////////////

let colorPromise = Legos.loadLegos();
console.log(colorPromise);  //what does the promise look like now or inside the then - object
colorPromise.then(
	function (resolve) {
		let newItem = {LegoName: "Brenda's Pick", ColorHex: "#333", YearFrom:"2009", YearTo:"Present"};
		resolve.push(newItem);
		showItems(resolve);
	},
	function (reject) {
		console.error("OOPs", reject);
		backupPlan();
	});



/////////////////// Alternative code for reject ///////////////////////////
let backupPlan = function (){
	console.log("The data did not load, so we'll need to subtitute some other code here.")
};















///////////////// version 2 with additional .then ////////////////////////

// let colorPromise = Legos.loadLegos()
// colorPromise.then(
// 	function (resolve) {
// 		let newItem = {LegoName: "Brenda's Pick", ColorHex: "#333", YearFrom:"2009", YearTo:"Present"};
// 		resolve.push(newItem); //automatically sends the resolve to the next then
// 	},
// 	function (reject) {
// 		console.error("OOPs", reject);
// 		backupPlan();
// 	});
// colorPromise.then( 
// 	function(resolve){
// 		 console.log("One for the road", resolve);
// 	},
// 	function() {  // default to catch anything else
//         console.log("there was an error somewhere");
//     });

