const express = require('express');
const app = express();
const routes = require('./routes/routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);

app.listen(3000, () => {
     console.log();
     console.log('Servidor rodando no http://localhost:3000');
})