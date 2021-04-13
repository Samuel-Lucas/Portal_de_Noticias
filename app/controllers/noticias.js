module.exports.noticias = function(application, req, res) {
	var connection = application.config.db_connection()
	var noticiasModel = new application.app.models.noticiasDAO(connection) // Acessando módulo 'noticiasModel'

	noticiasModel.getNoticias(function(error, result) {
		res.render('noticias/noticias', {noticias : result})
	})
}

module.exports.noticia = function(application, req, res) {
	var connection = application.config.db_connection()
	var noticiasModel = new application.app.models.noticiasDAO(connection)

	var id_noticia = req.query  // Recebe o parâmetro passado no link

	noticiasModel.getNoticia(id_noticia, function(error, result) {
		res.render('noticias/noticia', {noticia : result})
	})
}
