const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');

const Koa = require('koa');
const app = module.exports = new Koa();

app.use(logger());

app.use(koaBody());

router.post('/helloWorld', helloWorld)

app.use(router.routes());

async function helloWorld(ctx){
  var recieveData = ctx.request.body;
  var name = recieveData["name"];
  var message = "Hello " + name;
  await (ctx.body = {"test":message})
}

app.listen(3000, function() {
  console.log("El servidor Node.js se encuentra disponible en el puerto http://localhost:3000");
});
