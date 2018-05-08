app.use(async function handleError(context, next) {
  try {
    await next();
  } catch (error) {
    context.status = 500;
    context.body = error;
  }
});

router
  .get("/:id", async (context, next) => {
    const { id } = context.params;
    const firstResult = await database.doStuff(id);
    const finalResult = await database.doAnotherStuff(firstResult);
    context.body(finalResult);
  })
  .get("/", async (context, next) => {
    const firstResult = await database.doStuff();
    const finalResult = await database.doAnotherStuff(firstResult);
    context.body(finalResult);
  });
