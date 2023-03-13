import './parceiros.css'
function Parceiros(props){
    function parSelecionado(e){
        function selecionado (){
            if(e.nome == props.par){
                return(
                    <div className='selecionado'>
                        <h2>{props.par}</h2>
                        <div className='imgS'>
                            <img src={e.img}/>
                        </div>
                        <span>Endereço: {e.endereco}</span>
                        <span>Estado: {e.estado}</span>
                        <span>Cep: {e.cep}</span>
                        <span>Telefone: {e.telefone}</span>
                    </div>
                    
                )
            }
        }
        return (
            <>
                {selecionado()}    
            </>
            
        )
    }
    function dadosBasicos(e){
        return(
            <>
                <h2><span>{e.nome}</span></h2>
                <div className='img'>
                    <img onClick={()=>clickImg(e)} src={e.img}></img>
                </div>
                <span>
                    Endereço: {e.endereco}
                </span>
            </>
        )
    }
    function clickImg(e){
        props.global.par = e.nome
    }
    function all(e){
        return(
            <div key={e.nome}>
                {dadosBasicos(e)}
            </div>
        )
    }
    function funCat(e){
        if(e.categoria.toUpperCase() == props.cat.toUpperCase()){
            return(
                <div key={e.nome}>
                    {dadosBasicos(e)}
                </div>
            )
        }
    }
    const retorno = props.api ?.map((e)=>{
        if(props.par == 'all' &&  props.cat.toUpperCase() == 'TODOS'){
            return all(e)
        } else if(props.par != 'all'){
            return parSelecionado(e)
        } else {
            return funCat(e)
        }
    })
    return(
        <section>
            {retorno}
        </section>
    )
}
export default Parceiros