const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:pagename', (req, res) => {
  const pageName = req.params.pagename
  res.render(`${pageName}`)
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})