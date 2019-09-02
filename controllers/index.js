// @author 啥都不会charles QQ: 752781621

const Query = require('../pool/index')

class Index {

    static async findAllUserData(ctx) {
        let _sql = `select * from users;`
        let res;
        try { 
            res = await Query(_sql)
            console.log(res)
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '查询用户成功',
                data: res
            }
        } catch (err) {
            ctx.response.status = 200;
            ctx.body = {
                code: -1,
                msg: '查询失败',
                data: res
            }
        }
    }
}

module.exports = Index