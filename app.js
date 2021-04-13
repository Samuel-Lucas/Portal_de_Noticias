var app = require('./config/server') // importando módulo

/* var rotaHome = require('./app/routes/home')(app)
var rotaNoticias = require('./app/routes/noticias')(app)
var rotaFormulario = require('./app/routes/formulario_inclusao_noticias')(app) */


app.listen(3000, function(req, res) {
	console.log('Server On !')
})