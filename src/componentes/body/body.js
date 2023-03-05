import { useEffect, useState} from 'react';
import Global from '../globais'
import Divulgar from './divulgar.js'
import Parceiros from './parceiros';
import Contato from './contato';
import './body.css'
function Body(){
    const [Dados, setDados] = useState()
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
        fetch('https://DivulgaFone.ai-se-fosse-o-p.repl.co')
        .then(api=>api.json())
        .then(api=>setDados(api))
    })
    function pdc(){
        if(divul){
            return(
                <Divulgar></Divulgar>
            )
        } else if(parce){
            return(
                <div id='h1P'>
                    <h1>Parceiros</h1>
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