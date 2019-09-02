// 啥都不会charles QQ: 752781621

const Router = require('koa-router')
const router = new Router()
const Artical = require('../controllers/artical')

router.prefix('/artical')

router.get('/', Artical.findAllUserData)

module.exports = router