const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(3000, () => {
     console.log()
     console.log('Server execute http://localhost:3000')
     console.log()
     console.log('Press Ctrl+C to quit.')
});

