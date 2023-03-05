import { useState } from 'react'
import Globais from '../globais'
import './header.css'
function Header(){
    const [getCat, setCat] = useState(false)
    const categorias = [...document.querySelectorAll('.categorias')]
    categorias.map((e)=>{
        e.addEventListener('click', ()=>{
            Globais.cat = e.childNodes[0].innerHTML
        })
    })
    function menuClick(e){
        if(e.target.className == 'close'){
            setCat(true)
            e.target.className = 'open'
        } else if(e.target.className == 'open'){
            setCat(false)
            e.target.className = 'close'
        }
    }
    function cat(){
        if(getCat){
            return 'openCat'
        } else{
            return 'closeCat'
        }
    }
    function closeMenuCat(e){
        const menu = document.querySelector('#menu')
        if(getCat){
            setCat(false)
            e.target.className = 'closeCat'
            menu.className = 'close'
        }
    }
    function divulgarFun(){
        Globais.divulgar = true
        Globais.parceiros = false
        Globais.contato = false
    }
    function homeFun(){
        Globais.divulgar = false
        Globais.parceiros = true
        Globais.contato = false
    }
    function contatoFun(){
        Globais.divulgar = false
        Globais.parceiros = false
        Globais.contato = true
    }
    return(
        <header>
            <div id='menu' className='close' onClick={(e)=>menuClick(e)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id='categorias' onClick={(e)=>closeMenuCat(e)} className={cat()}>
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
                </div>
            </div>
            <a
                href='/'
            >
                <div id='logo'>
                    <img
                        src='./logo/logoBranca/logo.png'
                    >
                    </img>
                    <span>ivulga Fone</span>
                </div>
            </a>

            <nav>
                <span onClick={()=>homeFun()}>Home</span>
                <span onClick={()=>divulgarFun()}>Divulgar</span>
                <span onClick={()=>contatoFun()}>Contato</span>
                <span>Ver Rotas</span>
            </nav>
        </header>
    )
}
export default Header;