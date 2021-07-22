const User = require("egg").Service;

class UserService extends User {
    async user() {
        return {
            title: '你妈贵姓',
            content: '免贵姓李',
        };
    }
}

module.exports = UserService;