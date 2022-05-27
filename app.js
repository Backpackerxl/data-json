const Koa = require('koa');
const data = require("./iphoneData.json");
const app = new Koa();


app.use(async ctx => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.body = data;
});

app.listen(8888, () => {

    console.log('8888项目启动')

});