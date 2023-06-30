import { Link } from 'react-router-dom'
import './parceiros.css'
import Globais from '../globais'
import Loading from './loading'
import NotFound from './notFound'
function Parceiros(props){
    function dadosBasicos(e){
        return(
            <>
                <h2><span>{e.nome}</span></h2>
                <div className='img'>
                    <Link to={`/focus/${e.img.data.id}`}>
                        <img src={`${e.img.data.link}`}></img>
                    </Link>
                </div>
                <span>
                    Endereço: {e.endereco}
                </span>
            </>
        )
    }
    function todosOsParceiros(e){
        return(
            <div key={e.img.data.id}>
                {dadosBasicos(e)}
            </div>
        )
    }
    const retorno = props.api.map(e=>{
        if(
            Globais.cat == 'TODOS' || 
            e.categoria.toUpperCase().includes(Globais.cat.toUpperCase()) ||
            e.nome.toUpperCase().includes(Globais.cat.toUpperCase())
        ){
            return todosOsParceiros(e)
        }
    })
    const retorno2 = () =>{
        if(props.api.length > 0 && (props.api.length != 1 || window.location.pathname != '/')){
            return retorno
        } else if(props.api.length == 1 || props.api.length == 0){
            return <Loading></Loading>
        }
    }
    return(
        <section id='par'>
            {retorno2()}
        </section>
    )
}
export default Parceiros