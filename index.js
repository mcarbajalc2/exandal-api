const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  errorLog,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

routerApi(app);

app.use(errorLog);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Port: ' + port);
});
