import './divulgar.css'
import { useState, useEffect } from 'react';
function Divulgar(){
    const [key, setKey] = useState()
    const [keyClient, setKeyClient] = useState()
    useEffect(()=>{
        fetch('https://chavesDF.ai-se-fosse-o-p.repl.co')
        .then((api)=>api.json())
        .then((api)=>setKey(api))
    })
    return(
        <section id='sForm'>
            <form autoComplete={'off'}>
                <div id='nome'>
                   <label htmlFor='nomeEs' >Nome da empresa</label>
                   <input id='nomeEs' type={'text'} maxLength='20' minLength='1' required/>
                </div>
                <div id='telefone'>
                    <label htmlFor='teleEs'>Telefone de contato</label>
                    <input id='teleEs' type={'number'} min='10' max='11' required/>
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
                    <input id='cepEs' type={'number'} min='8' max='8' required/>
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
                    <input id='imgEs' type={'file'} accept="image/png, image/jpeg" required/>
                </div>
                <div id='key'>
                    <label htmlFor='keyInput'>Chave de Divulgação</label>
                    <input id='keyInput' type={'text'}/>
                </div>
                <div id='button'>
                    <input type={'submit'} value='Divulgar'/>
                </div>
            </form>
        </section>
    )
}
export default Divulgar;