// 啥都不会charles QQ: 752781621

const Koa = require('koa')
const app = new Koa();
const views = require('koa-views')
const koaStatic = require('koa-static');

const Chalk = require('chalk')
const ip = require('ip');
const path = require('path');

// 静态文件类
const static = koaStatic(path.join(__dirname) + '/static/');
app.use(static);

// 加载模板引擎
app.use(views(path.join(__dirname) + '/views', {
  extension: 'ejs'
}))

// 路由类
const registerRouters = require('./routers/init')

// 加载中间件模板
app.use(registerRouters());


/**
 * @param 端口
 */

const port = '6322'
const local = `http://localhost:${port}/`
const network = `http://${ip.address()}:${port}`
app.listen(port, _=> {
    console.log(`${Chalk.yellow('\t\t 运行成功！')}`)
    console.log(`\t  Local: \t${Chalk.green(local)}`)
    console.log(`On Your Network: \t${Chalk.green(network)}`)
    console.log(Chalk.red(`
        _
        | |__ _ _ __ _
        | '_  \| | | |/ _' |
        | |_) | |_| | (_| |
        |_.__ / \__,_|\__,  |
                    |___ /                                       
    `))
    console.log(`${Chalk.blue.underline.bold('前端小白QQ群： 213787432   欢迎你的加入~')}`)
    console.log(``)
})