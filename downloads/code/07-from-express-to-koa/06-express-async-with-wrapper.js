const asyncWrapper = fn => (...args) => fn(...args).catch(args[2]);

app.get(
  "/:id",
  asyncWrapper(async (request, response, next) => {
    const { id } = req.params;
    const firstResult = await database.doStuff(id);
    const finalResult = await database.doAnotherStuff(firstResult);
    response.json(finalResult);
  })
);

app.get(
  "/",
  asyncWrapper(async (request, response, next) => {
    const firstResult = await database.doStuff();
    const finalResult = await database.doAnotherStuff(firstResult);
    response.json(finalResult);
  })
);

app.use(function errorMiddleware(error, request, response, next) {
  response.status(500);
  response.send(error);
});
