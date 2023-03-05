import './contato.css'
function Contato(){
    return(
        <>
            <h1>Contato</h1>
            <section id='con'>
                <form action="https://api.staticforms.xyz/submit" method='post' autoComplete="off">
                    <input type="hidden" name="accessKey" value='490ce584-31f5-4ead-a260-e85ff99c5bd6' />
                    <div id="nomeTag">
                        <label htmlFor="nome" id="nomeL">Nome</label>
                        <input id="nome" required type={'text'}></input>
                    </div>
                    <div id="emailTag">
                        <label htmlFor="email" id="emailL">Email</label>
                        <input id="email" required type={'email'}></input>
                    </div>
                    <div id="menTag">
                        <label htmlFor="men" id="emailL">Mensagem</label>
                        <textarea id="men" required rows={'5'} cols='24'></textarea>
                    </div>
                    <div id="button">
                        <input type={'submit'} value='Enviar'></input>
                        <input type="hidden" name="redirectTo" value="http://localhost:3000/"></input>
                    </div>
                </form>
            </section>
        </>
    )
}
export default Contato