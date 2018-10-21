app.use(async function passSessionToNuxt(ctx, nuxt) {
  ctx.req.serverData = {
    validation: ctx.session.validation || {},
  }
  // don't persist the validation on more than one page
  delete ctx.session.validation
  await next()
})
