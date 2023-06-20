import { Link } from 'react-router-dom'
import { useState } from 'react'
import Globais from '../globais'
import './header.css'
function Header() {
    const [getCat, setCat] = useState(false)
    const categorias = [...document.querySelectorAll('.categorias')]
    categorias.map((e) => {
        e.addEventListener('click', () => {
            Globais.cat = e.id
            Globais.par = 'all'
        })
    })
    function menuClick(e) {
        if (e.className == 'close') {
            setCat(true)
            e.className = 'open'
        } else if (e.className == 'open') {
            setCat(false)
            e.className = 'close'
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
    function ClickBarMenu(e){
        menuClick(e.target.parentNode)
    }
    return (
        <header>
            <div id='menu' className='close' onClick={(e) => menuClick(e.target)}>
                <div onClick={(e)=>ClickBarMenu(e)}></div>
                <div onClick={(e)=>ClickBarMenu(e)}></div>
                <div onClick={(e)=>ClickBarMenu(e)}></div>
            </div>
            <div id='categorias' onClick={(e) => closeMenuCat(e)} className={cat()}>
                <div id='cat'>
                    <div className='categorias'>
                        <spaLink to='/'>Todos</spaLink>
                    </div>
                    <div className='categorias' id='Comercio'>
                        <Link to='/Comercio'>Comercio</Link>
                    </div>
                    <div className='categorias' id='Mercado'>
                        <Link to='/Mercado'>Mercado</Link>
                    </div>
                    <div className='categorias' id='Hotel'>
                        <Link to='/Hotel'>Hotel</Link>
                    </div>
                    <div className='categorias' id='Motel'>
                        <Link to='/Motel'>Motel</Link>
                    </div>
                    <div className='categorias' id='Distribuidora'>
                        <Link to='/Distribuidora'>Distribuidora</Link>
                    </div>
                    <div className='categorias' id='Farmacia'>
                        <Link to='/Farmacia'>Farmacia</Link>
                    </div>
                    <div className='categorias' id='Construcao'>
                        <Link to='/Construcao'>Construção</Link>
                    </div>
                    <div className='categorias' id='Imoveis'>
                        <Link to='/Imoveis'>Imoveis</Link>
                    </div>
                    <div className='categorias' id='Moveis'>
                        <Link to='/Moveis'>Moveis</Link>
                    </div>
                    <div className='categorias' id='Automobilistico'>
                        <Link to='/Automobilistico'>Automobilistico</Link>
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