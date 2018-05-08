// declare an async function
app.get('/', async (request, response, next) => {
  try {
    const firstResult = await database.doStuff();
    const finalResult = await database.doAnotherStuff(firstResult);
    response.json(finalResult);
  } catch( error ) {
    next( error )
  }
});
app.use(function errorMiddleware(error, request, response, next) {
  response.status(500);
  response.send(error);
});
