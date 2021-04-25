app.use(async function passSessionToNuxt(ctx, next) {
  ctx.req.serverData = {
    validation: ctx.session.validation || {},
  }
  // don't persist the validation on more than one page
  delete ctx.session.validation
  await next()
})
