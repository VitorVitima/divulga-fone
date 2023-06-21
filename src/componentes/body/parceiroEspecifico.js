import './parceiroEspecifico.css';
function ParceiroEspecifico(props) {
  return (
    <div className="parceiroEspecifico">
      <h2>{props.api.nome}</h2>
        <div className="imgS">
          <img src={`${props.api.img.data.link}`} />
        </div>
        <span>
            <span>
                Endereço:
            </span>
            {props.api.endereco}
        </span>
        <span>
            <span>
                Estado: 
            </span>
            {props.api.estado}
        </span>
        <span id="cep">
            <span>
                Cep: 
            </span>
            {props.api.cep}
        </span>
        <span>
            <span>
                Telefone: 
            </span>
            {props.api.telefone}
        </span>
    </div>
  );
}
export default ParceiroEspecifico;
