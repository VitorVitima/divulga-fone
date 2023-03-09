const conectar = () =>{
    const mysql=require('mysql2/promise')
    const con=mysql.createConnection('mysql://root:VitorVitima159_@localhost:3306/dados')
    console.log('conectou ao banco de dados')
    return con
}
conectar()
module.exports = {conectar}