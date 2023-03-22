import { useState, useEffect } from 'react';
import axios from 'axios';
import './divulgar.css'
import Globais from '../globais';
function Divulgar(){
    
    const [keyApi, setKeyApi] = useState()
    const [image, setImage] = useState('')
    const api = axios.create({
        baseURL: Globais.urlBack
    })
    useEffect(()=>{
        const sApi = async () => {
            await axios.get('https://chavesDF.ai-se-fosse-o-p.repl.co')
            .then(api=>{
                setKeyApi(api)
            })
        }
        sApi()
    })
    useEffect(()=>{
        const imgInput = document.querySelector('#imgEs')
        setImage(imgInput.files[0])
    })
    async function subButton(e){
        const inputs = [...document.querySelectorAll('input')]
        const catte = document.querySelector('#categoriasEscolha')

        const formData = new FormData()
        formData.append('image', image)
        const headers = {
            'headers':{
              'Content-Type': 'application/json',
              'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
            }
          }
        await api.post('/uploadImg', formData, headers)

        axios.post(`${Globais.urlBack}/register`, {
            //valores que serão mandados para o banco de dados
            nome: inputs[0].value,
            telefone: inputs[1].value,
            endereco: inputs[2].value,
            estado: inputs[3].value,
            cep: inputs[4].value,
            categoria: catte.value,
            imgName: inputs[5].files[0].name
        }).then(response=>console.log(response))
        
        console.log('mandou')
    }
    function enviarDados(tag){
        const key = document.querySelector('#keyInput')
        keyApi?.map((e)=>{
            if(e.chave == key.value){
                subButton(tag)
            } else{
                console.log('Chave de Divulgação inválida...')
            }
        })
    }
    return(
        <section id='sForm'>
            <h1>Divulgar</h1>
            <form  action={`${Globais.urlBack}/register`} autoComplete={'off'} id='form-api' method='post' enctype='multipart/form-data'>
                <div id='nome'>
                   <label htmlFor='nomeEs' >Nome da empresa</label>
                   <input id='nomeEs' type={'text'} maxLength='20' minLength='1' required/>
                </div>
                <div id='telefone'>
                    <label htmlFor='teleEs'>Telefone de contato</label>
                    <input id='teleEs' type={'number'} minLength='1' required/>
                </div>
                <div id='endereco'>
                    <label htmlFor='endeEs'>Endereço</label>
                    <input id='endeEs' type={'text'} required/>
                </div>
                
                <div id='estado'>
                    <label htmlFor='estaEs'>Estado</label>
                    <input id='estaEs' type={'text'} required/>
                </div>
                <div id='cep'>
                    <label htmlFor='cepEs'>Cep</label>
                    <input id='cepEs' type={'number'} minLength='8' maxLength={'8'} required/>
                </div>
                <div id='categoria'>
                    <label htmlFor='categoriasEscolha'>Categoria</label>
                    <select name='categoriasEscolha' id='categoriasEscolha'>
                        <option value='Comercio'>Comercio</option>
                        <option value='Mercado'>Mercado</option>
                        <option value='Hotel'>Hotel</option>
                        <option value='Farmácia'>Farmácia</option>
                        <option value='Automobilistico'>Automobilistico</option>
                        <option value='Roupas'>Roupas</option>
                        <option value='Construção'>Construção</option>
                        <option value='Imovei'>Imoveis</option>
                        <option value='Moveis'>Moveis</option>
                        <option value='Transporte'>Transporte</option>
                    </select>
                </div>
                <div id='imgDivulgar'>
                    <label htmlFor='imgEs'>Imagem da loja</label>
                    <input id='imgEs' name='image' type='file' accept="image/png, image/jpeg, image/jpg" required/>
                </div>
                <div id='key'>
                    <label htmlFor='keyInput'>Chave de Divulgação</label>
                    <input id='keyInput' type={'text'}/>
                </div>
                <div id='buttonTag'>
                    <input id='buttonInput' onClick={(e)=>enviarDados(e)} type={'button'} value='Divulgar'/>
                </div>
            </form>
        </section>
    )
}
export default Divulgar;