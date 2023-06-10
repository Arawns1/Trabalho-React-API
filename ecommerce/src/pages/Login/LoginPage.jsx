import './Login.css'

export function LoginPage() {
    return (
        <div className="container">
            <div className="container-login">
                <span className="title">Login</span>
                <form className="login-form">
                    <div className='form-body'>
                        <div className="input-container">
                            <input className="input" type="email" placeholder='Digite seu email' required/>
                            <input className="input" type="password" placeholder='Digite sua senha' required />
                        </div>
                    </div>
                    <div className="container-login-form-btn">
                        <button className="login-form-btn">Entrar</button>
                        <div className='form-footer'>
                            <div className="criarConta">
                                <span className="texto">Não tem uma conta? <span className='cadastrar'>Cadastre-se</span></span>
                            </div>
                            <div className="esqueceuSenha">
                                <span>Esqueceu sua senha?</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}