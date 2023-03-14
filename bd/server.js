import  express from 'express'
const app = express()
import mysql from 'mysql2'
import cors from 'cors'

import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, path.resolve('uploads'))
    },
    filename: (req, file, callback)=>{
        const time = new Date().getTime()

        callback(null, `${time}_${file.originalname}`)
    }
})
const upload = multer({storage: storage})
app.post('/upload', upload.single('file'), (req, res)=>{
    return res.json(req.file.filename)
})

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