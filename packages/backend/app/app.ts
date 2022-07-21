import Koa from 'koa'
import { router } from './router'
import koaBody from 'koa-body'
import * as path from 'path'

const app = new Koa()

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', '*')
  ctx.set('Access-Control-Allow-Methods', 'POST')
  await next()
})

app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, `/public/uploads/`),
    keepExtensions: true,
  },
}))

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(7001, () => {
  console.log('服务启动了 http://localhost:7001')
})
