module.exports.formulario_inclusao_noticia = function(application, req, res) {
	res.render('admin/form_add_noticia', {validacao : {}, noticia : {}})
}

module.exports.noticias_salvar = function(application, req, res) {
	var noticia = req.body

		// Validação
	req.assert('titulo', 'O título é obrigatório').notEmpty();
	req.assert('resumo', 'O resumo é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
	req.assert('autor', 'Autor é obrigatório').notEmpty();
	req.assert('data_noticia', 'A data dos fatos é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia', 'A notícia é obrigatória').notEmpty();

	var erros = req.validationErrors();

	if(erros) {
		res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
		return;
	}

	// conexao
	var connection = application.config.db_connection()

	// model
	var noticiasModel = new application.app.models.noticiasDAO(connection)

	// salvar noticia
	noticiasModel.salvarNoticia(noticia, function(error, result) {
		res.redirect('/noticias')
	})
}