import { useState, useEffect } from 'react';
import axios from 'axios';
import './divulgar.css'
import Globais from '../globais';
function Divulgar(){
    const CLIENT_ID = 'ba0c9a120594fad'
    const [keyApi, setKeyApi] = useState()
    const [image, setImage] = useState('')
    useEffect(()=>{
        const sApi = async () => {
            await axios.get(`${Globais.urlBack}/keys`)
            .then(api=>{
                setKeyApi(api.data)
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
          const doUpload = (url, options) => {
            const promiseCallback = (resolve, reject) => {
              const getFetchJson = (response) => {
                if(!response.ok) return reject(response);
                return response.json().then(resolve);
              }
              fetch(url, options)
                .then(getFetchJson)
                .catch(reject);
            };
            return new Promise(promiseCallback);
          };
          const uploadDados = img => {
            axios.post(`${Globais.urlBack}/register`, {
                //valores que serão mandados para o banco de dados
                nome: inputs[0].value,
                telefone: inputs[1].value,
                endereco: inputs[2].value,
                estado: inputs[3].value,
                cep: inputs[4].value,
                categoria: catte.value,
                img: img
            }).then(response=>console.log(response))
          }
          const uploadImage = async () => {
            const data = new FormData();
            data.append('image', image);
            await doUpload('https://api.imgur.com/3/image', {
              method: 'POST',
              body: data,
              headers: {
                'Authorization': `Client-ID ${CLIENT_ID}`,
              }
            }).then((e)=>{
                uploadDados(e)
            }).catch(console.error)
        }
        uploadImage()
        Globais.parceiros = true
        Globais.divulgar = false
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
    function erroDados () {
        const inputs = [...document.querySelectorAll('input')]
        const time = 1000
        function erroInput(e){
            e.className = 'erroInput'
            setTimeout(()=>{
                e.className = ''
            },time)
        }
        function imgErro(){
            const div = document.querySelector('#imgInfo')
            div.classList = 'divFocus'
            setTimeout(()=>{
                div.classList = ''
            },time)
        }
        let validador = 0
        if(inputs[0].value.length < 100){
            validador++
        } else {
            erroInput(inputs[0])
        }
        if(inputs[1].value.length <= 11 && inputs[1].value.length >= 8){
            validador++
        } else{
            erroInput(inputs[1])
        }
        if(inputs[2].value.length <= 250){
            validador++
        } else{
            erroInput(inputs[2])
        }
        if(inputs[3].value.length <= 50){
            validador++
        } else{
            erroInput(inputs[3])
        }
        if(inputs[4].value.length == 8){
            validador++
        } else{
            erroInput(inputs[4])
        }
        if(inputs[5].files.length != 0){
            validador++
        } else{
            imgErro()
        }
        if(inputs[6].value.length != 0){
            validador++
        } else{
            erroInput(inputs[6])
        }
        if(validador == 7){
            enviarDados()
        }
    }
    function buttonEvent(){
        erroDados()
    }
    function imgFun(e){
        const span = document.querySelector('#nameImgSpan')
        span.innerHTML = `${e.files[0].name}`
    }
    return(
        <section id='sForm'>
            <h1>Divulgar</h1>
            <form  action={`${Globais.urlBack}/register`} autoComplete={'off'} id='form-api' method='post' encType='multipart/form-data'>
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
                        <option value='Motel'>Motel</option>
                        <option value='Farmácia'>Farmácia</option>
                        <option value='Distribuidora'>Distribuidora</option>
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
                    <div id='imgInfo'>
                        <label htmlFor='imgEs'>
                            <span>Escolher</span>
                            <span id='nameImgSpan'>Imagem.png/jpg</span>
                        </label>
                        <input onChange={(e)=>imgFun(e.target)} id='imgEs' name='image' type='file' accept="image/png, image/jpeg, image/jpg" required/>
                    </div>
                </div>
                <div id='key'>
                    <label htmlFor='keyInput'>Chave de Divulgação</label>
                    <input id='keyInput' type={'text'}/>
                </div>
                <div id='buttonTag'>
                    <input id='buttonInput' onClick={(e)=>buttonEvent(e)} type={'button'} value='Divulgar'/>
                </div>
            </form>
        </section>
    )
}
export default Divulgar;