import { useEffect, useState} from 'react';
import axios from 'axios';
import Global from '../globais'
import Divulgar from './divulgar.js'
import Parceiros from './parceiros';
import Contato from './contato';
import Globais from '../globais';

import './body.css'
function Body(){
    const [Dados, setDados] = useState([])
    const [par, setPar] = useState(Global.par)
    const [cat, setCat] = useState(Global.cat)

    const [divul, setDivul] = useState(Global.divulgar)
    const [parce, setParce] = useState(Global.parceiros)
    const [cont, setCont] = useState(Global.contato)
    useEffect(()=>{
        setCat(Global.cat)
        setDivul(Global.divulgar)
        setParce(Global.parceiros)
        setCont(Global.contato)

        setPar(Global.par)
    })
    useEffect(()=>{
        axios.get(`${Globais.urlBack}/getSQL`).then(response=>{
            setDados(response.data)
        })
    })
    function pesFun(e){
        if(e.target.value == ''){
            Global.cat = 'Todos'
        } else{
            Global.cat = e.target.value
        }
    }
    function pdc(){
        if(divul){
            return(
                <Divulgar></Divulgar>
            )
        } else if(parce){
            return(
                <div id='h1P'>
                    <h1>Parceiros</h1>
                    <div id='pesquisa'>
                        <label htmlFor='pes'>
                            <div id='svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            </div>
                        </label>
                        <input autoComplete='off' id='pes' placeholder='Pesquisa' name='pes' onChange={(e)=>pesFun(e)} type={'text'}/>
                    </div>
                    <Parceiros
                        api={Dados}
                        par={par}
                        cat={cat}
                        global={Global}
                    >
                    </Parceiros>
                </div>
            )
        } else if(cont){
            return(
                <Contato></Contato>
            )
        }
    }
    
    return(
        <main>
            
            {pdc()}
        </main>
    )
}
export default Body;