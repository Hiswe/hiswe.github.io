const sessionOptions = {
  // don't autoCommit
  // we will handle the header update ourself
  autoCommit: false,
}
app.use(session(sessionOptions, app))

router.post(`/my-action`, koaBody(), async ctx => {
  const { body } = ctx.request
  const isValid = isFormValid(body)
  if (isValid) {
    const result = await doSomethingAsync(body)
  } else {
    ctx.session.validation = getValidation(body)
    // set the headers manually
    await ctx.session.manuallyCommit()
  }
  ctx.redirect(`/`)
})

// …mount the router…

app.use(async function passSessionToNuxt(ctx, next) {
  ctx.req.serverData = {
    validation: ctx.session.validation || {},
  }
  // don't persist the validation on more than one page
  delete ctx.session.validation
  // set the headers manually
  await ctx.session.manuallyCommit()
  await next()
})

// headers are set! we can safely call our Nuxt middleware
