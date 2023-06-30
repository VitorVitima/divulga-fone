import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Global from '../globais'
import Divulgar from './divulgar.js'
import Parceiros from './parceiros';
import Contato from './contato';
import Globais from '../globais';
import ParceiroEspecifico from './parceiroEspecifico';
import './body.css'
function Body() {
    const [Dados, setDados] = useState([])
    const [titu, setTitu] = useState(Globais.titu)

    const apiReturn = async (e) =>{
        const routerApi = `${window.location.pathname}`
        await axios.get(`${Globais.urlBack}${routerApi}`).then(response => {
            setDados(response.data)
        })
    }
    useEffect(() => {
        setTitu(Globais.titu)

        apiReturn()
    })
    function pesFun(e) {
        if (e.target.value == '') {
            Global.cat = 'TODOS'
        } else {
            Global.cat = e.target.value
        }
    }
    function pesquisaLink() {
        if (titu == 'Parceiros') {
            return (
                <div id='pesquisa'>
                    <label htmlFor='pes'>
                        <div id='svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                    </label>
                    <input autoComplete='off' id='pes' placeholder='Pesquisa' name='pes' onChange={(e) => pesFun(e)} type={'search'} />
                </div>
            )
        }
    }
    return (
        <main>
            <div id="h1P">
                <h1>{titu}</h1>
                {pesquisaLink()}
            </div>
            <Routes>
                <Route path='*' element={<Parceiros
                    api={Dados}
                />}></Route>
                <Route path='divulgar' element={<Divulgar />}></Route>
                <Route path='contato' element={<Contato />}></Route>
                <Route path='/focus/*' element={<ParceiroEspecifico
                    api={Dados}
                />}></Route>
            </Routes>
        </main>
    )
}
export default Body;