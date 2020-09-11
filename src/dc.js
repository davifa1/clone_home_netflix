const netflix = require("express");
const samsung = netflix();
// pegar o banco de dados
const db = require("./aws/amazonwebserver.db");
// configurar pasta publica
samsung.use(netflix.static("public"));
// habilitar o uso do req.body na nossa aplicação
samsung.use(netflix.urlencoded({ extended: true }));
// utilizando template engine
const speedforce = require("nunjucks");
speedforce.configure("src/pages", {
    express: samsung,
    noCache: true
});
// configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
samsung.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título"})
});
// ligar o servidor
samsung.listen(3000);