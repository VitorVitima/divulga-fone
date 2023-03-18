import { useState } from 'react'
import Globais from '../globais'
import './header.css'
function Header(){
    const [atu, setAtu] = useState(false)
    const [getCat, setCat] = useState(false)
    const categorias = [...document.querySelectorAll('.categorias')]
    categorias.map((e)=>{
        e.addEventListener('click', ()=>{
            Globais.cat = e.childNodes[0].innerHTML
            Globais.par = 'all'
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
    function divulgarFun(e){
        setAtu(e.target.innerHTML)
        Globais.divulgar = true
        Globais.parceiros = false
        Globais.contato = false
    }
    function homeFun(e){
        Globais.divulgar = false
        Globais.parceiros = true
        Globais.par = 'all'
        Globais.cat = 'todos'
        Globais.contato = false
    }
    function contatoFun(e){
        setAtu(e.target.innerHTML)
        Globais.divulgar = false
        Globais.parceiros = false
        Globais.contato = true
    }
    function clickLogo(){
        homeFun()
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
                    <div className='categorias'>
                        <span>Hotel</span>
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
                </div>
            </div>
                <div id='logo' onClick={()=>clickLogo()}>
                    <img
                        src='./logo/logoBranca/logo.png'
                    >
                    </img>
                    <span>ivulga Fone</span>
                </div>
            <nav>

                <div onClick={()=>homeFun()}><span>Home</span></div>
                <div onClick={(e)=>divulgarFun(e)}><span>Divulgar</span></div>
                <div onClick={(e)=>contatoFun(e)}><span>Contato</span></div>
                <a target={'_blank'} href='https://www.google.com/maps/dir///@-23.4093624,-46.757523,15z'>Ver Rotas</a>
            </nav>
        </header>
    )
}
export default Header;