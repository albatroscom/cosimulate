require('dotenv').config(); // 환경변수들을 호출할 수 있다.
// load envirment variables
const {
    PORT: port,
    MONGO_URI: mongoURI
} = process.env;

const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');
const db = require('./db');

db.connect();
const app = new Koa();

const router = Router();
router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
    console.log(`this server is listening to port ${port}`);
});