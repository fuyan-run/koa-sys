// 啥都不会charles QQ: 752781621

const Router = require('koa-router')
const router = new Router()
const Index = require('../controllers/index')

router.prefix('/')

router.get('/', (ctx, next)=> {
    ctx.body = JSON.stringify({
        '欢迎来到': 'koa2 MC层~',
        '路由': '/mysql 请求数据库演示',
        '前端小白QQ群': '213787432   欢迎你的加入~'
    }, null, '\t')
})
router.get('/mysql', Index.findAllUserData)

module.exports = router