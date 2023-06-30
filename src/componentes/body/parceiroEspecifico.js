import "./parceiroEspecifico.css";
function ParceiroEspecifico(props) {
  const apiAwait = () => {
    if (props.api.length > 0) {
      return (
        <>
          <h2>{props.api[0].nome}</h2>
          <div className="imgS">
            <img src={`${props.api[0].img.data.link}`} />
          </div>
          <span>
            <span>Endereço:</span>
            {props.api[0].endereco}
          </span>
          <span>
            <span>Estado:</span>
            {props.api[0].estado}
          </span>
          <span id="cep">
            <span>Cep:</span>
            {props.api[0].cep}
          </span>
          <span>
            <span>Telefone:</span>
            {props.api[0].telefone}
          </span>
        </>
      );
    }
  };
  return <div className="parceiroEspecifico">
    {apiAwait()}
  </div>;
}
export default ParceiroEspecifico;
