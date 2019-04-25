'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 网页：我的信息
  router.get('/myMessage', controller.myMessage.index);
  // 广告业和首页
  router.get('/', controller.news.echo);
  router.get('/PhonePage',controller.phonePage.PhonePage);
};
