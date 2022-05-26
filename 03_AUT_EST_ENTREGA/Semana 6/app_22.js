const express = require('express'); // framework express
const app = express();
const hostname = '127.0.0.1'; // endereço
const port = 3022; // porta do site
var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5') // recebe o módulo do md5 (criptografia)
var sqlite3 = require('sqlite3').verbose(); // import de todos os módulos necessários
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var get = 'SELECT * FROM Informações'
app.use(express.static("../src/")); // pega o diretório do front
app.use(express.json()); // pega o diretório do node.js
const DBSOURCE = "Database.db" // responsável pela operação do banco de dados
app.use(express.urlencoded({
    extended: true
}))
app.get("/returnDatabase", (req, res) => { //Método Get, pega todas as informações dentro do banco de dados e retorna elas, sendo possível exibi-las quando necessário
    db.run(get);
})







