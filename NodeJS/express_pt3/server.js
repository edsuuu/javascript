const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
     res.send(`
          <form action="/" method="POST">
               Nome: <input type="text" name="nome">
               <button>Enviar</button>
          </form>
     `)

});

app.get('/teste/:id?/:parametro?', (req, res) => {
     console.log(req.params);
     // console.log(req.query)
     res.send(req.params)
})
app.post('/', (req, res) => {
     console.log(req.body);
     res.send(`voce enviou ${req.body.nome}`)
     
})

app.get('/contato', (req, res) => {
     res.send('<h1>voce chegou em contato</h1>')

});

// crud -> create, read, update, delete
//            post  get  put  delete

app.listen(3000, () => {
     console.log()
     console.log('Server execute http://localhost:3000')
     console.log()
     console.log('Press Ctrl+C to quit.')
});

