// koa app creation + middleware + router creation

koa.use(async function handleErrors(ctx, next) {
  try {
    await next()
  } catch (error) {
    ctx.status = 500
    ctx.body = error
  }
})

router.post(`/my-action`, koaBody(), async ctx => {
  const result = await doSomethingAsync(ctx.request.body)
  ctx.redirect(`/`)
})

// mount router + Nuxt
