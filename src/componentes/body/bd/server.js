const express = require('express')
const app = express()

const serverFun = () =>{
    console.log('server criado')
}
app.get('/', (rest, ques)=>ques.send('Hello Worls'))
app.listen(3001, serverFun)