const mysql = require('mysql') 

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"rocket"
    })
    connection.connect()

    //inserir
    function inserir(){
    let sql = "insert into foguete set ?"
    let dados = {nomefoguete:"neutron",tipo:"prótotipo",ano:2023}
    connection.query(sql,dados, function(error,results,fields){
        if(error)throw error
        console.log("Cadastrado!")
    })
    connection.end()
    }

    inserir()