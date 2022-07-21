import Router from 'koa-router'

const router = new Router()

router.post('/api/v1/error/track', async ctx => {

  const body = JSON.parse(ctx.request.body)
  console.log(body)

  ctx.status = 200
  ctx.body = 'ok'
})

export { router }
