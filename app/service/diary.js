const Service = require("egg").Service;

class DiaryService extends Service {
    async list() {
        const {app} = this;
        try {
            const result = await app.mysql.select('diary');
            return result;
        } catch (err) {
            console.log(error);
            return null;
        }
    }

    async add(params) {
        const {app} = this;
        try {
            const result = await app.mysql.insert('diary', params)
            return result
        } catch (err) {
            console.log(error);
            return null;
        }
    }
}

module.exports = DiaryService;