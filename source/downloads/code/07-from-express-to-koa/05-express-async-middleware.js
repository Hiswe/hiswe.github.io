// make a closure to keep a reference to our async function
function asyncMiddleware(asyncRouteHandler) {
  // this is what will be called by express.js
  return function routeHandler(request, response, next) {
    // because it's an async function it will always return a promise
    // • just call it with express' callback parameters
    return (
      asyncMiddleware(request, response, next)
        // catch any error that might happen in our async function
        .catch(next)
    );
  };
}
// OR:
// • thanks to arrow functions and params destructuring
//   we can write it that way:
const asyncMiddleware = fn => (...args) => fn(...args).catch(args[2]);
