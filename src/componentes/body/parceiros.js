import './parceiros.css'
function Parceiros(props){
    const urlServer = `divulga-back-dcbzuzcjn-vitorvitima.vercel.app/file/`
    function parSelecionado(e){
        function selecionado (){
            if(e.nome == props.par){
                return(
                    <div className='selecionado' key={e.id}>
                        <h2>{props.par}</h2>
                        <div className='imgS'>
                            <img src={`${urlServer}${e.img}`}/>
                        </div>
                        <span>Endereço: {e.endereco}</span>
                        <span>Estado: {e.estado}</span>
                        <span id='cep'>Cep: {e.cep}</span>
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
                    <img onClick={()=>clickImg(e)} src={`${urlServer}${e.img}`}></img>
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
            <div key={e.id}>
                {dadosBasicos(e)}
            </div>
        )
    }
    function contemPesquisa(es, cat){
        const num = es.indexOf(cat)
        if(num >= 0)
            return true
        else
            return false
    }
    function pesquisa(e){
        if(contemPesquisa(e.categoria.toUpperCase(), props.cat.toUpperCase())){
            return true
        } else if(contemPesquisa(e.estado.toUpperCase(), props.cat.toUpperCase())){
            return true
        } else if(contemPesquisa(e.nome.toUpperCase(), props.cat.toUpperCase())){
            return true
        }
    }
    function funCat(e){
        if(pesquisa(e)){
            return(
                <div key={e.nome}>
                    {dadosBasicos(e)}
                </div>
            )
        }
    }
    const retorno = () => {
        for(let v1 = 0; v1 < props.api;v1++){
            if(props.par == 'all' &&  props.cat.toUpperCase() == 'TODOS'){
                return all(props.api[v1])
            } else if(props.par != 'all'){
                return parSelecionado(props.api[v1])
            } else {
                return funCat(props.api[v1])
            }
        }
        //props.api.map((e)=>{
        //    if(props.par == 'all' &&  props.cat.toUpperCase() == 'TODOS'){
        //        return all(e)
        //    } else if(props.par != 'all'){
        //        return parSelecionado(e)
        //    } else {
        //        return funCat(e)
        //    }
    }
    return(
        <section id='par'>
            {retorno()}
        </section>
    )
}
export default Parceiros