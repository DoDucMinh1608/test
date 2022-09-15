import { app, io, listen } from './src/app.js'
import index from './src/controllers/index.js'
import account from './src/controllers/accounts.js'

app.use('/', index)
app.use('/account', account)

io.on('connection', () => {
  console.log('New connect')
})

listen(3000)