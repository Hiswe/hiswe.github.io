koa.use(async function handleErrors(ctx, next) {
  try {
    await next()
  } catch (error) {
    ctx.status = 500
    ctx.req.serverError = error
    try {
      // let Nuxt handle the response
      await nuxtMiddleware(ctx)
    } catch (nuxtError) {
      // we tried our best
      // but if something wrong happened with Nuxt, we should handle it
      ctx.body = error
    }
  }
})
