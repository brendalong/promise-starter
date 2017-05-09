"use strict"

//simple example with delay - wait for it
let greetingPromise = () => {
    new Promise((resolve, reject) =>{
        // mockup async/delayed action using setTimeout
        setTimeout( () => { 
            resolve("World"); 
        }, 3000);
    })
    .then((resolve) => {
        console.log(resolve);
    });
};

greetingPromise();
console.log("Hello");


let showItems = (legosData) => {
	// console.log("showItems", legosData);
	let legoDisplay = document.getElementById("lego-display");

	legosData.forEach( (lego) => {
		let legoBlock = buildLego(lego);
		legoDisplay.innerHTML += legoBlock;
	});
}

let buildLego = (lego) => {
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

let colorPromise = Legos.loadLegos()
// colorPromise holds the response of the promise
// Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again). 
// With a stored value that will forever hold the state of the resolved Promise - use .then()
// then() is method on a promise that listens for resolve or reject.
.then(
	 (resolve) => {
		let newItem = {LegoName: "Brenda's Pick", ColorHex: "a3a3d1", YearFrom:"2009", YearTo:"Present"};
		resolve.push(newItem);
		showItems(resolve);
	},
	(reject) => {
		console.error("OOPs", reject);
		backupPlan();
	});



/////////////////// Alternative code for reject ///////////////////////////
let backupPlan = () => {
	console.log("The data did not load, so we'll need to subtitute some other code here.")
};















///////////////// version 2 with additional .then ////////////////////////

// let colorPromise = Legos.loadLegos()
// .then(
// 	(resolve) => {
// 		let newItem = {LegoName: "Brenda's Pick", ColorHex: "a3a3d1", YearFrom:"2009", YearTo:"Present"};
// 		resolve.push(newItem); //automatically sends the resolve to the next then
// 		return resolve;
// 	},
// 	(reject) => {
// 		console.error("OOPs", reject);
// 		backupPlan();
// 	}).then( //chaining then together, add more functionality
// 	(resolve) => {
// 		 console.log("One for the road", resolve);
// 	},
// 	() => {  // default to catch anything else
//         console.log("there was an error somewhere");
//  });






/////////////// version 3 with promise all ///////////////////////////////


// FROM MDN
///////////////// promise all ////////////////////
// if any rejected, catch fires

// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'foo');
// }); 

// Promise.all([p1, p2, p3]).then( (values) => { 
//   console.log("resolve values:", values); // [3, 1337, "foo"] 
// });



///////////////// promise race ////////////////////
// triggers as soon as any promise is returned
// setTimeout(function, milliseconds, param1, param2, ...)

// var p1 = new Promise((resolve, reject) => { 
//   	setTimeout(resolve, 1000, 'one'); 
// }); 
// var p2 = new Promise((resolve, reject) => { 
//   	setTimeout(resolve, 2000, 'two'); 
// });
// var p3 = new Promise((resolve, reject) => {
//   	setTimeout(resolve, 3000, 'three');
// });
// var p4 = new Promise((resolve, reject) => {
//   	setTimeout(resolve, 400, 'four');
// });
// var p5 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 1000, 'five');
//  	// try both ways
//   	// reject('reject');
// });

// Promise.race([p1, p2, p3, p4, p5])
// .then( (winner) => { 
// 	console.log("race winner:", winner);
// }, 
// reason => {
// 	console.log(reason)
// });





