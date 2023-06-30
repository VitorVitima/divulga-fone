function NotFound(props){
    function determinante(){
        switch (props.determinante) {
            case 1:
            return <h1>Não temos parceiros dessa categoria {':('}</h1>    
                break;
            case 2:
            return <h1>Não temos nada desse tipo {':{'}</h1>    
                break;
            default:
            return <h1>!NotFound!</h1>    
                break;
        }
    }
    return (
        <>
            {determinante()}
        </>
    )
}
export default NotFound