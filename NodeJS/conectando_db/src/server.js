const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const { middlewareGlobal, outroMiddleware } = require('./middlewares/middleware');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(( )=>  {
    console.log('Connectei ao banco');
    app.emit('pronto');
}).catch((e) => console.log(e));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log();
        console.log('Servidor rodando no http://localhost:3000');
    })


})

