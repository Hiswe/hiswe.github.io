app.get('/', (request, response, next) => {
  database.doStuff()
  .then( firstResult => {
    return database.doAnotherStuff(firstResult);
  })
  .then( finalResult => {
    response.json(finalResult);
  })
  .catch( next )
});
app.use(function errorMiddleware(error, request, response, next) {
  response.status(500);
  response.send(error);
});
