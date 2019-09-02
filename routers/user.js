// 啥都不会charles QQ: 752781621

const Router = require('koa-router')
const router = new Router()
const User = require('../controllers/user')

router.prefix('/user')

router.get('/', User.findAllUserData)

module.exports = router