// app/router.js

'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/getid/:id', controller.home.getid);
    router.get('/news', controller.news.list);
    router.post('/add', controller.user.add);
    router.get('/diary/list', controller.home.list);
    router.post('/diary/add', controller.home.add);
};