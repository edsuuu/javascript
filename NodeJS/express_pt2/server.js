const express = require('express')
const app = express()

app.get('/', (req, res) => {
     res.send(`
          <form action="/" method="POST">
               Nome: <input type="text" name="nome">
               <button>Enviar</button>
          </form>
     `)

});

app.post('/', (req, res) => {
     res.send('recebi o formulario')
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

