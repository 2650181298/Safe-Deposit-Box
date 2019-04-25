'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 网页：我的信息
  router.get('/', controller.myMessage.index);
};
