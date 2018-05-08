const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// unlike in Express.js
// • declare our error middleware to the top most position
// • this will ensure to catch all the errors
//   that might happen in the following middleware call
app.use(async function handleError(context, next) {
  // call our next middleware
  try {
    await next();
  // catch any error that might have occurred
  } catch (error) {
    context.status = 500;
    context.body = error;
  }
});

/*
 * We will configure here our router later
 */

// mount the router to our web application
app.use(router.routes());
app.use(router.allowedMethods())

// launch the server
app.listen( 3000  )
