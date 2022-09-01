const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router/index');
const errorHandler = require('./middleware/error-handler');

// 连接数据库
require('./model/index');

const app = express();
const PORT = 3000;

// 加载中间件
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 挂载路由
app.use('/api', router);

// 挂载统一处理服务端错误中间件
app.use(errorHandler());

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
