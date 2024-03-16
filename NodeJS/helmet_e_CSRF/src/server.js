const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const helmet = require('helmet');
const csrf = require('csurf');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const { checkCsrfError, csrfMiddleware, middlewareGlobal, outroMiddleware } = require('./middlewares/middleware');
app.use(helmet());

mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('Connectei ao banco');
    app.emit('pronto');
}).catch((e) => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));

const sessionOptions = session({
    secret: 'chaveSrecetea',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //sessao dura 7 dias
        httpOnly: true //nao permite que o navegador acesse o cookie, apenas o servidor
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

// PARA USAR EM DESENVOLVIMENTO DEIXAR COMENTADO, EM PRODUCAO DESCOMENTAR AQUI E NO INDEX.EJS
// app.use(csrf());
// app.use(csrfMiddleware);
// app.use(checkCsrfError);

app.use(middlewareGlobal);
app.use(outroMiddleware);

//app.use('/', middlewareGlobal);  se a variavel local for definina em uma rota, no ejs nao vai ficar disponivel 

app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log();
        console.log('Servidor rodando no http://localhost:3000');
    })


})

