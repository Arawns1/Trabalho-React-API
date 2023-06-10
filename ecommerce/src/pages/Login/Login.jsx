import './Login.css'

function Login() {
    return (
    <div className="container">
        <div className="container-login">
                <form className="login-form">
                    <span className="title">Login</span>

                    <div className="criarConta">
                        <span className="texto">Não tem uma conta? Inscreva-se</span>
                    </div>
                    <div className="input">
                        <input className="input2" type="email" />
                    </div>
                    <div className="input">
                        <input className="input2" type="senha" />
                    </div>
                    <div className="esqueceuSenha">
                        <span className="texto1">Esqueceu sua senha?</span>
                    </div>
                    <div className="container-login-form-btn">
                        <button className="login-form-btn">Entrar</button>
                         </div>
                    </form>
                </div>
            </div>
    )
}

export default Login;