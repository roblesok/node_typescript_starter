import express from 'express'

const port = 9000

const app = express()

app.get('/', (_req, res) => {
  res.send('Hello, World')
})

app.listen(port)

console.log(`Server listening at ${port}`)
