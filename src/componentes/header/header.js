import { Link } from 'react-router-dom'
import { useState } from 'react'
import Globais from '../globais'
import './header.css'
function Header() {
    const [getCat, setCat] = useState(false)
    const categorias = [...document.querySelectorAll('.categorias')]
    categorias.map((e) => {
        e.addEventListener('click', () => {
            Globais.cat = e.childNodes[0].innerHTML
            Globais.par = 'all'
        })
    })
    function menuClick(e) {
        if (e.target.className == 'close') {
            setCat(true)
            e.target.className = 'open'
        } else if (e.target.className == 'open') {
            setCat(false)
            e.target.className = 'close'
        }
    }
    function cat() {
        if (getCat) {
            return 'openCat'
        } else {
            return 'closeCat'
        }
    }
    function closeMenuCat(e) {
        const menu = document.querySelector('#menu')
        if (getCat) {
            setCat(false)
            e.target.className = 'closeCat'
            menu.className = 'close'
        }
    }
    function linkFun(e) {
        Globais.titu = e
        Globais.par = 'all'
        Globais.cat = 'todos'
    }
    return (
        <header>
            <div id='menu' className='close' onClick={(e) => menuClick(e)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id='categorias' onClick={(e) => closeMenuCat(e)} className={cat()}>
                <div id='cat'>
                    <div className='categorias'>
                        <span>Todos</span>
                    </div>
                    <div className='categorias'>
                        <span>Comercio</span>
                    </div>
                    <div className='categorias'>
                        <span>Mercado</span>
                    </div>
                    <div className='categorias'>
                        <span>Hotel</span>
                    </div>
                    <div className='categorias'>
                        <span>Motel</span>
                    </div>
                    <div className='categorias'>
                        <span>Distribuidora</span>
                    </div>
                    <div className='categorias'>
                        <span>Farmacia</span>
                    </div>
                    <div className='categorias'>
                        <span>Construção</span>
                    </div>
                    <div className='categorias'>
                        <span>Imoveis</span>
                    </div>
                    <div className='categorias'>
                        <span>Moveis</span>
                    </div>
                    <div className='categorias'>
                        <span>Automobilistico</span>
                    </div>
                </div>
            </div>
            <Link to='/' onClick={() => linkFun('Parceiros')}>
                <div id='logo'>
                    <img
                        src='./logo/logoBranca/logo.png'
                    >
                    </img>
                    <span>ivulga Fone</span>
                </div>
            </Link>
            <nav>

                <Link to='/' onClick={() => linkFun('Parceiros')}>Home</Link>
                <Link to='divulgar' onClick={() => linkFun('Divulgar')}>Divulgar</Link>
                <Link to='contato' onClick={() => linkFun('Contato')}>Contato</Link>
                <a id='linkRotas' target={'_blank'} href='https://www.google.com/maps/dir///@-23.4093624,-46.757523,15z'>Ver Rotas</a>
            </nav>
        </header>
    )
}
export default Header;