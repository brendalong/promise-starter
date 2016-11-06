
//////////////// basic implementation ///////////////////

// let promise1 = function(){
// 	new Promise(function(resolve,reject){
// 		resolve(3);
// 	})
// 	.then(function(result){
// 		console.log("Promise1 resolve: ", result);
// 	});
// }
// promise1();

//////////////// end basic implementation ///////////////////////

//////////////// basic implementation with mockup async /////////

// let greetingPromise = function(){
//     new Promise(function(resolve, reject){
//         // mockup async/delayed action using setTimeout
//         setTimeout(function() { 
//             resolve("World"); 
//         }, 3000);
//     })
//     .then(function(result){
//         console.log(result);
//     });
// };

// greetingPromise();
// console.log("Hello");

//////////////// end basic implementation with mockup async //////////


////////////////  chaining .then with mockup async ///////////////////

// let waitPromise = function(){
// 	new Promise(function(resolve, reject) { 
//  		// A mock async/delay action using setTimeout
//  		setTimeout(function() { 
//  			resolve(10); }, 2000);
// 	})
//  	.then(function(num) { console.log('first then: ', num); return num * 2; })
//  	.then(function(num) { console.log('second then: ', num); return num * 2; })
//  	.then(function(num) { console.log('last then: ', num);});
// }

// waitPromise();

////////////////  end chaining .then with mockup async ///////////////////

/////////////// example with a reject ///////////////////////////////////

// let rejectPromise = function(){
// 	new Promise(function(resolve,reject){
// 		if (3 !== 2){
// 			reject("not equal");
// 		}else {
// 			resolve(3);
// 		}
		
// 	})
// 	.then(
// 		function(resolve){
// 			console.log("We did it: ", resolve);
// 		},
// 		function(reject){
// 			console.log("Promise rejected: ", reject);
// 	});
// }

// rejectPromise();

/////////////// end example with a reject ////////////////////////////////


////////////// example with .all /////////////////////////////////////////

// var req1 = new Promise(function(resolve, reject) { 
// 	// A mock async action using setTimeout
// 	setTimeout(function() { resolve('First!'); }, 4000);
// });
// var req2 = new Promise(function(resolve, reject) { 
// 	// A mock async action using setTimeout
// 	setTimeout(function() { resolve('Second!'); }, 3000); //change resolve to reject to see catch in action
// });

// let promiseAll = function(){
// 	Promise.all([req1, req2])
// 	.then(function(results) {
// 		console.log('Then: ', results);
// 	}).catch(function(err) {
// 		console.log('Catch: ', err);
// 	});
// };

// promiseAll();

////////////// end example with .all /////////////////////////////////////////

