// …koa app creation + middleware

const router = new Router()

router.post(`/my-action`, koaBody(), async ctx => {
  const result = await doSomethingAsync(ctx.request.body)
  ctx.redirect(`/`)
})

app.use(router.routes())
app.use(router.allowedMethods())

// …call our Nuxt middleware to handle anything that aren't our custom actions
