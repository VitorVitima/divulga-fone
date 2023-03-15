const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

let data = new Date().getMinutes()
let nameImg = data

const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, path.resolve('../public/imgs/'))
    },
    filename: async (req, file, callback)=>{
        let nameImg2 = `${nameImg}${file.originalname}`
        callback(null, nameImg2)
    }
})
const upload = multer({storage: storage})

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'VitorVitima159_',
    database: 'dados'
})

app.use(cors())
app.use(express.json())
app.post('/register', upload.single('file'), (req, res)=>{
    const {nome} = req.body
    const {cep} = req.body
    const {telefone} = req.body
    const {endereco} = req.body
    const {estado} = req.body
    const {categoria} = req.body
    const {imgName} = req.body
    let nameImg2 = `${nameImg}${imgName}`
    let SQL = "insert into parceiros (nome,cep,telefone,endereco,estado,categoria, img) values (?, ?, ?, ?, ?, ?, ?);"
    db.query(SQL, [nome, cep, telefone, endereco, estado, categoria, nameImg2] ,(ERRO, result)=>{
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