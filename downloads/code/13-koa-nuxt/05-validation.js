// after setting up koa-session

router.post(`/my-action`, koaBody(), async ctx => {
  const { body } = ctx.request
  // assuming that we have defined `isFormValid` before
  const isValid = isFormValid(body)
  if (isValid) {
    const result = await doSomethingAsync(body)
  } else {
    // assuming that we have defined `getValidation` before
    ctx.session.validation = getValidation(body)
  }
  ctx.redirect(`/`)
})

app.use(router.routes())
app.use(router.allowedMethods())

// put some data to the req object
// so we will be able to access them in the Nuxt app
// – in Vuex nuxtServerInit
// - in a Nuxt Middleware
app.use(async function passSessionToNuxt(ctx, next) {
  ctx.req.serverData = {
    validation: ctx.session.validation || {},
  }
  await next()
})
