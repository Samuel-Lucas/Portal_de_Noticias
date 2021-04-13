var express = require('express')
var consign = require('consign')  // Autoload de rotas
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

var app = express() // Executa função da váriavel express
app.set('view engine', 'ejs') // ejs será o motor da aplicação
app.set('views', './app/views') // acessa do nivel do app.js

app.use(express.static('./app/public'))   // Acessar o que contém na pasta public
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())

consign()
	.include('./app/routes')
	.then('config/db_connection.js')
	.then('app/controllers')
	.then('app/models')
	.into(app)  // include das rotas no consign

module.exports = app