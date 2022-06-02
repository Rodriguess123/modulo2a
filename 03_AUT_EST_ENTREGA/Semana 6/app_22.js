const express = require('express'); // framework express
const app = express();
const hostname = '127.0.0.1'; // endereço
const port = 3055; // porta 
var sqlite3 = require('sqlite3').verbose()
var bodyParser = require('body-parser');
app.use(express.static("../src/")); // pega o diretório do front
app.use(express.json()); // pega o diretório do node.js
const DBSOURCE = "Database.db" // responsável pela operação do banco de dados
app.use(express.urlencoded({
    extended: true
}))

app.get('/returnDatabase', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    
    var get = 'SELECT * FROM Informações';

	var db = new sqlite3.Database(DBSOURCE);
	db.all(get, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
    console.log(`Page server running at http://${hostname}:${port}/`);
  });





