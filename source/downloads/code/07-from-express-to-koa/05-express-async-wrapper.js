// make a closure to keep a reference to our original async function
function asyncWrapper(asyncRouteHandler) {
  // this is what will be called by express.js
  return function routeHandler(request, response, next) {
    // because it's an async function it will always return a promise
    // – just call it with express' callback parameters
    return (
      asyncRouteHandler(request, response, next)
        // catch any error that might happen in our async function
        .catch(next)
    );
  };
}
// OR:
// thanks to arrow functions and params destructuring
// we can write it that way:
const asyncWrapper = fn => (...args) => fn(...args).catch(args[2]);
