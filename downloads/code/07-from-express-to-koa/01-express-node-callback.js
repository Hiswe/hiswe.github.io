app.get("/", (request, response, next) => {
  database.doStuff((error, firstResult) => {
    // will send it the error middleware below
    if (error) return next(error);
    // we need another database call
    // a little bit of callback hell here but:
    // – we could have extract our callback to functions…
    //   …living on the first level of our route handler
    database.doAnotherStuff(firstResult, (error, finalResult) => {
      // will send it the error middleware below. Again.
      if (error) return next(error);
      // no error, send the result
      response.json(finalResult);
    });
  });
});
// our middleware that handle any errors
// – will catch anything that might have happened in our route
//   only if called with next(error)
// – won't catch an JSON.parse() error
app.use(function errorMiddleware(error, request, response, next) {
  response.status(500);
  response.send(error);
});
