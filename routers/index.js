// 啥都不会charles QQ: 752781621

const Router = require('koa-router')
const router = new Router()
const Index = require('../controllers/index')

router.prefix('/')

router.get('/', (ctx, next)=> {
    ctx.body = "欢迎来到koa2 MC层~"
})
router.get('/try', Index.findAllUserData)

module.exports = router