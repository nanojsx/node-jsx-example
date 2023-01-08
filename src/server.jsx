import { express } from 'express6'
import { renderSSR } from 'nano-jsx'
import { initSSR } from 'nano-jsx/lib/ssr.js'
import { App } from './app'
import 'source-map-support/register'
const app = express()
initSSR()

app.get('/', (req, res) => {
  res.send(renderSSR(<h1>Hello World</h1>))
})

app.get('/app', (req, res) => {
  res.send(renderSSR(<App />))
})

const server = app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})

process.on('SIGTERM', () => server.close())
