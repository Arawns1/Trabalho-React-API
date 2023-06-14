import './style.css'

export function SignUpPage() {
    return (
        <div className='cadastro-wrapper'>
            <div className="container-cadastro">
                <span className="title">Cadastro</span>
                <form className="form">
                    <div className="infodados">
                        <div className="subtitulo">
                            <span className="dados">Dados Pessoais:</span>
                        </div>
                        <label >Nome</label>
                        <div className="input-cadastro">
                            <input className="input2-cadastro" type="nome" placeholder="Digite o seu nome" />
                        </div>
                        <label >Email</label>
                        <div className="input-cadastro">
                            <input className="input2-cadastro" type="email" placeholder="Digite o seu Email" />
                        </div>
                        <label >CPF</label>
                        <div className="input-cadastro">
                            <input className="input2-cadastro" type="cpf" placeholder="Digite o seu CPF" />
                        </div>
                        <label >Telefone</label>
                        <div className="input-cadastro">
                            <input className="input2-cadastro" type="telefone" placeholder="Digite o seu telefone" />
                        </div>
                        <label >Data de Nascimento</label>
                        <div className="input-cadastro">
                            <input className="input2-cadastro" type="dataNascimento" placeholder="DD/MM/YYYY" />
                        </div>
                        <label >Crie uma Senha</label>
                        <div className="input-cadastro">
                            <input className="input2-cadastro" type="senha" placeholder="Crie uma senha" />
                        </div>
                        <label >Confirme a sua senha</label>
                        <div className="input-cadastro">
                            <input className="input2-cadastro" type="senhaConfirm" placeholder="Confirme a sua senha" />
                        </div>
                    </div>
                    <div className="infoendereco">
                        <div className="subtitulo">
                            <span className="endereco">Informações de Endereço:</span>
                        </div>
                        <label >CEP</label>
                        <div className="input-cadastro">
                            <input className="input2-cadastro" type="cep" placeholder="Informe seu CEP" />
                        </div>
                        <div className="numcomple">
                            <div className="input-cadastro divcomplemento">
                                <label >Número</label>
                                <input className="input3-cadastro" type="numero" placeholder="ex: 154" />
                            </div>

                            <div className="input-cadastro divcomplemento">
                                <label >Complemento</label>
                                <input className="input3-cadastro" type="complemento" placeholder="ex: A" />
                            </div>
                        </div>
                        <label >Cidade</label>
                        <div className="input-cadastro">
                            <input className="input2-cadastro" type="cidade" placeholder="Informe sua cidade" />
                        </div>
                        <label >Rua</label>
                        <div className="input-cadastro">
                            <input className="input2-cadastro" type="rua" placeholder="Informe sua rua" />
                        </div>
                        <label >Bairro</label>
                        <div className="input-cadastro">
                            <input className="input2-cadastro" type="bairro" placeholder="Informe seu bairro" />
                        </div>
                        <div className="container-login-form-btn-cadastro">
                        <button className="login-form-btn-cadastro">Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}