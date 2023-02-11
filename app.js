const express = require('express');
const userRouter = require('./routes/userRoutes');
const bankRouter = require('./routes/bankRoutes');

const app = express();

app.use(express.json()); // this is a middleware use too convert body too json, it also stand at the middle of the request of too i nspect it wen the request comes it covert it too Json

app.use('/api/v1/users', userRouter);  // use is a function use too add a route too an express
app.use('/api/v1/banks',bankRouter );

module.exports = app;