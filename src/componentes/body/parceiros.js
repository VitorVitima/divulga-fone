import { Link } from 'react-router-dom'
import './parceiros.css'
import Globais from '../globais'
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
        if(Globais.cat == 'Todos' || e.categoria.toUpperCase().includes(Globais.cat.toUpperCase())){
            return todosOsParceiros(e)
        }
    })
    const semRetorno = () => {
        return (
            <>
                <h1>Não temos parceiros dessa categoria {':('}</h1>
            </>
        )
    }
    const retorno2 = props.api.length > 0 ? retorno:semRetorno()
    return(
        <section id='par'>
            {retorno2}
        </section>
    )
}
export default Parceiros