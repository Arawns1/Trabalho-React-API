import './Cadastro.css'
import Logo from './img/logo.png'

export function Cadastro() {
    return (
        <div className="container">
            <div className="container-cadastro">
                <span className="title">Cadastro</span>

                <img src={Logo} alt="Logo" srcset="Logo" />

                <form className="form">
                    <div className="infodados">
                        <div className="subtitulo">
                            <span className="dados">Dados Pessoais:</span>
                        </div>
                        <label className="titul">Nome</label>
                        <div className="input">
                            <input className="input2" type="nome" placeholder="Digite o seu nome" />
                        </div>
                        <label className="titul">Email</label>
                        <div className="input">
                            <input className="input2" type="email" placeholder="Digite o seu Email" />
                        </div>
                        <label className="titul">CPF</label>
                        <div className="input">
                            <input className="input2" type="cpf" placeholder="Digite o seu CPF" />
                        </div>
                        <label className="titul">Telefone</label>
                        <div className="input">
                            <input className="input2" type="telefone" placeholder="Digite o seu telefone" />
                        </div>
                        <label className="titul">Data de Nascimento</label>
                        <div className="input">
                            <input className="input2" type="dataNascimento" placeholder="DD/MM/YYYY" />
                        </div>
                        <label className="titul">Crie uma Senha</label>
                        <div className="input">
                            <input className="input2" type="senha" placeholder="Crie uma senha" />
                        </div>
                        <label className="titul">Confirme a sua senha</label>
                        <div className="input">
                            <input className="input2" type="senhaConfirm" placeholder="Confirme a sua senha" />
                        </div>
                    </div>
                    <div className="infoendereco">
                        
                        <div className="subtitulo">
                            <span className="endereco">Informações de Endereço:</span>
                        </div>
                        <label className="titul">CEP</label>
                        <div className="input">
                            <input className="input2" type="cep" placeholder="Informe seu CEP" />
                        </div>
                        <div className="numcomple">
                            <div className="input divcomplemento">
                                <label className="titu">Número</label>
                                <input className="input3" type="numero" placeholder="ex: 154" />
                            </div>

                            <div className="input divcomplemento">
                                <label className="titu">Complemento</label>
                                <input className="input3" type="complemento" placeholder="ex: A" />
                            </div>
                        </div>
                        <label className="titul">Cidade</label>
                        <div className="input">
                            <input className="input2" type="cidade" placeholder="Informe sua cidade" />
                        </div>
                        <label className="titul">Rua</label>
                        <div className="input">
                            <input className="input2" type="rua" placeholder="Informe sua rua" />
                        </div>
                        <label className="titul">Bairro</label>
                        <div className="input">
                            <input className="input2" type="bairro" placeholder="Informe seu bairro" />
                        </div>
                        <div className="container-login-form-btn">
                        <button className="login-form-btn">Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}