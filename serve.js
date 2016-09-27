const serve = require('koa-static')
const logger = require('koa-logger')
const Koa = require('koa')
const app = new Koa()

app.use(serve('./dist/'))
app.use(logger())

app.listen(3000)

console.log('listening on port 3000')
