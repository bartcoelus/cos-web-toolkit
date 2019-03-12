const koaRouter = require('koa-router');
const router = koaRouter();
const rpc = require('./rpc');

router.post('/account', async (ctx, next) => {
  let name = ctx.request.body.name;
  ctx.body = await rpc.getAccountByName(name)
});

router.post('/create_account', async (ctx, next) => {
  let username = ctx.request.body.username.toLowerCase();
  let pubkey = ctx.request.body.pubkey;
  let r = await rpc.createAccount(username, pubkey);
  if (r.invoice.status === 200) {
    ctx.body = {"success": true}
  } else {
    ctx.body = {"success": false}
  }
});

module.exports = function () {
  return router.routes();
};
