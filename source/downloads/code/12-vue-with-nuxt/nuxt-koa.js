const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const { Nuxt, Builder } = require('nuxt')

startServer()

async function startServer() {
  const app = new Koa()
  const HOST = process.env.HOST || `127.0.0.1`
  const PORT = process.env.PORT || 3000

  app.use(async function handleError(ctx, next) {
    try {
      await next()
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500
      ctx.body = err
    }
  })

  //----- integrate a server API

  const apiRouter = new Router({ prefix: `/api` })

  apiRouter.get(`/foo`, async ctx => {
    ctx.body = { foo: `foo nuxt example` }
  })
  apiRouter.get(`/bar/:id`, async ctx => {
    const { id } = req.params
    ctx.body = { bar: `bar ${id}` }
  })
  apiRouter.post(`/bar/:id`, koaBody(), async ctx => {
    const { id } = req.params
    ctx.body = { bar: `bar ${id} is updated!` }
  })

  app.use(apiRouter.routes())
  app.use(apiRouter.allowedMethods())

  //----- NUXT

  const config = require('../nuxt.config.js')
  config.dev = !(app.env === `production`)

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false
    ctx.req.ctx = ctx
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(PORT, HOST, function endInit() {
    console.log(`APP Server is listening on ${HOST}:${PORT}`)
  })
}
