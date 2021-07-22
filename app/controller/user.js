const Controller = require("egg").Controller;

class UserController extends Controller {
    async add() {
        const {ctx} = this;
        // const {title, content} = ctx.request.body
        const {title, content} =await ctx.service.user.user();
        ctx.body = {
            title, content
        }
    }
}

module.exports = UserController;