const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'VitorVitima159_',
    database: 'dados'
})

app.use(cors())
app.use(express.json())
app.post('/register', (req, res)=>{
    const {nome} = req.body
    const {cep} = req.body
    const {telefone} = req.body
    const {endereco} = req.body
    const {estado} = req.body
    const {categoria} = req.body

    let SQL = "insert into parceiros (nome,cep,telefone,endereco,estado,categoria,img) values (?, ?, ?, ?, ?, ?, './imgs/fb.jpg');"
    db.query(SQL, [nome, cep, telefone, endereco, estado, categoria] ,(ERRO, result)=>{
        console.log(ERRO)
    })
})
app.get('/getSQL', (req, res)=>{
    let SQL = 'select * from parceiros;'

    db.query(SQL, (erro, result)=>{
        if(erro){
            console.log(erro)
        } else {
            res.send(result)
        }
    })

})

const serverFun = () =>{
    console.log('server rodando')
}
app.listen(3001, serverFun)