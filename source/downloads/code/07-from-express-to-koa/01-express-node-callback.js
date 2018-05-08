app.get("/", (request, response, next) => {
  database.doStuff((error, firstResult) => {
    // will send it the error middleware below
    if (error) return next(error);
    // we need another database call
    // a little of callback hell here but:
    // • we could have extract our callback to functions
    //   living on the first level of our route middleware
    database.doAnotherStuff(firstResult, (error, finalResult) => {
      // will send it the error middleware below… again
      if (error) return next(error);
      // no error, send the result
      response.json(finalResult);
    });
  });
});
// our middleware to handle any errors that my have happened in our route
app.use(function errorMiddleware(error, request, response, next) {
  response.status(500);
  response.send(error);
});
