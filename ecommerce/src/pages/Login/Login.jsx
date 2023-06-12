import './Login.css'

function Login() {
    return (
        <div className="container">
            <div className="container-login">
                <span className="title">Login</span>
                <form className="login-form">
                    <div className="input">
                        <input className="input2" type="email" placeholder="Digite o seu Email" />
                    </div>
                    <div className="input">
                        <input className="input2" type="senha" placeholder="Digite a sua Senha" />
                    </div>
                    <div className="esqueceuSenha">
                        <span className="texto1">Esqueceu sua senha?</span>
                    </div>
                    <div className="container-login-form-btn">
                        <button className="login-form-btn">Entrar</button>
                    </div>
                    <div className="criarConta">
                        <span className="texto">Não tem uma conta? Inscreva-se</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;