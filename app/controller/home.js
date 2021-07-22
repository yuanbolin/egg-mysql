// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const {username} = this.ctx.query;
        this.ctx.body = `Hello world ${username}`;
    }

    async getid() {
        const {ctx} = this;
        const {id} = ctx.params;
        ctx.body = id;
    }


    async list() {
        const {ctx} = this;
        const result = await ctx.service.diary.list();
        if (result) {
            ctx.body = {
                status: 200,
                data: result
            }
        } else {
            ctx.body = {
                status: 500,
                errMsg: "获取失败！"
            }
        }
    }

    async add(){
        const {ctx}=this;
        const params={
            ...ctx.request.body
        }
        const result =await ctx.service.diary.add(params);
        if (result) {
            ctx.body = {
                status: 200,
                data: {
                    ...result,
                    message:'添加数据成功！'
                }
            }
        } else {
            ctx.body = {
                status: 500,
                errMsg: "获取失败！"
            }
        }
    }
}

module.exports = HomeController;