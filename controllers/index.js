// @author 啥都不会charles QQ: 752781621
/*
@author   对类的说明 标明开发该类模块的作者
@version   对类的说明 标明该类模块的版本
@see     对类、属性、方法的说明 参考转向，也就是相关主题
@param    对方法的说明 对方法中某参数的说明
@return   对方法的说明 对方法返回值的说明
@exception  对方法的说明 对方法可能抛出的异常进行说明
*/
const Query = require('../pool/index')

class Index {

    static async findAllUserData(ctx) {
        let _sql = `select * from users;`
        let res;
        try { 
            res = await Query(_sql)
            console.log(res)
            ctx.response.status = 200;
            ctx.body = JSON.stringify({
                code: 200,
                msg: '查询用户成功',
                data: res
            }, null, '\t')
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
