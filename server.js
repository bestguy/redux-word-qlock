const webpack    = require('webpack')
const webpackDMW = require('webpack-dev-middleware')
const webpackHMW = require('webpack-hot-middleware')
const config     = require('./webpack.config')

const app  = new (require('express'))()
const port = 3000 || process.env.port

const compiler = webpack(config)

app.use(webpackDMW(compiler, { publicPath: config.output.publicPath }))
app.use(webpackHMW(compiler))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, (err) => {
  if (err) console.error(err)

  console.log(`Listening on ${port}`)
})
