# It will be done, I Promise

**_noun_** one's word that something will be done

Promises are a replacement for:

```
doSomething(function(error, result){...});
```

Callbacks are less than ideal because:
* difficult with complex flow
* once started, cannot interrupt with more handlers
* a single callback and tied to reacting code.

## Promise
**Object** that represents a potentially asynchronous operation
The promise object has a `then()` function with 3 states: 
* pending
* fulfilled
* rejected

`.then()` takes handler functions as parameters

Once fulfilled/rejected cannot change state

The returned value becomes a **promise** returned by then()

```javascript 

let greetingPromise = function(){
    new Promise(function(resolve, reject){
        // mockup async/delayed action using setTimeout
        setTimeout(function() { 
            resolve("World"); 
        }, 3000);
    })
    .then(function(resolve){
        console.log(resolve);
    });
};

greetingPromise();
console.log("Hello");

```

### Common Uses 
* Data Retrieval
* Anything with an external call
* Loading CSS Animation
* Other Animations
* Template Rendering

### Promise Vs. Callback Events
**Promises are objects**

>Promises are objects that store information about whether an event has happened and what the outcome is.

**Callbacks are functions**

>Callbacks are blocks of code that run in response to events (timers, click).<br>
Any function can be a callback and every callback is a function.

Promises are for operations executed once.<br>
Events are for repeated events.

Promises are returned.<br>
Callbacks are passed arguments. 

Callbacks handle success and failure and handle those options.<br>
Promises don't handle anything. Success and failure are attached.

Callbacks can represent multiple events - can be called multiple times (click).<br>
Promises represent one event and success once or failed once.

>Since `then()`` always returns a new promise object, there will always be at least one promise object that gets created, resolved and then ignored. Which can be viewed as wasteful. 

####Rejection Handlers####
Rejection handlers in promise.then return resolved promises, not rejected ones.

Any exception(error) thrown within the handlers passed to `promise.then` will be turned into a rejected promise. It is important to make sure that you finish each `.then` chain with a rejection-only handler –

`promise.catch(handler)` is equivalent to `promise.then(null, handler)`


### Promise.all
Trigger multiple async interactions and get a response when all of them are complete.

If any promise is rejected the catch fires for the first rejection.

### Promise.race
Instead of waiting for all promses to be resolved or rejected, race triggers as soon as any promise (within .all) is resolved or rejected.


### References
* https://davidwalsh.name/promises
* http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise





