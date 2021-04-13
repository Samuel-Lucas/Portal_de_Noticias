var mysql = require('mysql')

var connMySql = function() {
	
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'portal_noticias'
	})
}

module.exports = function() {
	console.log('O autoload carregou as rotas com o db !')
	return connMySql
}