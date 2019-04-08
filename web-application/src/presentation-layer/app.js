const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const awilix = require('awilix')
const bcrypt = require('bcryptjs')

//Routers
const mainRouter = require('./routers/main-router')

//Repositories
const databaseRepository = require('../data-access-layer/database-repository')

//Managers
const databaseManager = require('../business-logic-layer/database-manager')

//Setting container
const container = awilix.createContainer()
container.register('databaseManager', awilix.asFunction(databaseManager))
container.register('databaseRepository', awilix.asFunction(databaseRepository))
container.register('mainRouter', awilix.asFunction(mainRouter))

const theMainRouter = container.resolve('mainRouter')

app.use(express.static(path.join(__dirname, '/')))
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/'))
app.use('/', theMainRouter)

app.engine('hbs', expressHandlebars({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'layouts')
}))

app.set('views', path.join(__dirname, 'views'))

app.listen(8080, function () {
  console.log('Running on 3000!')
})