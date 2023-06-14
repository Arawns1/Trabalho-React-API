import './style.css'
import { useState } from 'react';
import { api } from '../../services/api';
import { setItem } from '../../services/LocalStorage';

export function SignUpPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [numero, setNumero] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [cep, setCep] = useState('');

    function handleNomeChange(e) {
        setNome(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handleCPFChange(e) {
        setCPF(e.target.value)
    }
    function handleTelefoneChange(e) {
        setTelefone(e.target.value)
    }
    function handleDataNascimentoChange(e) {
        setDataNascimento(e.target.value)
    }
    function handleSenhaChange(e) {
        setSenha(e.target.value)
    }
    function handleConfirmaSenhaChange(e) {
        setConfirmaSenha(e.target.value)
    }
    function handleCEPChange(e) {
        setCep(e.target.value)
    }

    function handleNumero(e) {
        setNumero(e.target.value)
    }


    function saveUser() {
        api.post('/auth/signup', {
            "username": nome.replaceAll(" ", ""),
            "email": email,
            "password": senha,
            "role": ["user"]
        })

        api.post('/enderecos', {
            "cep": cep,
            "numero": numero
        }).then(response =>
            api.post('/clientes', {
                "nome_completo": nome,
                "email": email,
                "cpf": cpf,
                "telefone": telefone,
                "data_nascimento": dataNascimento,
                "endereco": {
                    "id_endereco": response.data.id_endereco
                }
            }).then(response => {
                    api.post('/auth/signin', {
                        "username": nome.replaceAll(" ", ""),
                        "password": senha
                    }).then(response => setItem('user', response.data))
                }) 
            )
    }

return (
    <div className='cadastro-wrapper'>
        <div className="container-cadastro">
            <span className="title-cadastro">Cadastro</span>
            <div className="form-cadastro">
                <div className="infodados">
                    <div className="subtitulo-cadastro">
                        <span className="dados">Dados Pessoais:</span>
                    </div>
                    <label >Nome</label>
                    <div className="input-cadastro">
                        <input className="input2-cadastro" type="text" placeholder="Digite o seu nome" onChange={handleNomeChange} />
                    </div>
                    <label >Email</label>
                    <div className="input-cadastro">
                        <input className="input2-cadastro" type="email" placeholder="Digite o seu Email" onChange={handleEmailChange} />
                    </div>
                    <label >CPF</label>
                    <div className="input-cadastro">
                        <input className="input2-cadastro" maxLength={10} type="number" placeholder="Digite o seu CPF" onChange={handleCPFChange} />
                    </div>
                    <label >Telefone</label>
                    <div className="input-cadastro">
                        <input className="input2-cadastro" type="tel" placeholder="Digite o seu telefone" onChange={handleTelefoneChange} />
                    </div>
                    <label >Data de Nascimento</label>
                    <div className="input-cadastro">
                        <input className="input2-cadastro" type="date" placeholder="DD/MM/YYYY" onChange={handleDataNascimentoChange} />
                    </div>
                    <label >Crie uma Senha</label>
                    <div className="input-cadastro">
                        <input className="input2-cadastro" type="text" placeholder="Crie uma senha" onChange={handleSenhaChange} />
                    </div>
                    <label >Confirme a sua senha</label>
                    <div className="input-cadastro">
                        <input className="input2-cadastro" type="text" placeholder="Confirme a sua senha" onChange={handleConfirmaSenhaChange} />
                    </div>
                </div>
                <div className="infoendereco">
                    <div className="subtitulo-cadastro">
                        <span className="endereco">Informações de Endereço:</span>
                    </div>
                    <label>CEP</label>
                    <div className="input-cadastro">
                        <input className="input2-cadastro" type="number" placeholder="Informe seu CEP" onChange={handleCEPChange} />
                    </div>
                    <div className="numcomple">
                        <div className="input-cadastro divcomplemento">
                            <label >Número</label>
                            <input className="input3-cadastro" type="number" placeholder="ex: 154" onChange={handleNumero} />
                        </div>

                        <div className="input-cadastro divcomplemento">
                            <label >Complemento</label>
                            <input className="input3-cadastro" type="text" placeholder="ex: casa" />
                        </div>
                    </div>
                    <label >Cidade</label>
                    <div className="input-cadastro">
                        <input className="input2-cadastro" type="text" placeholder="Informe sua cidade" />
                    </div>
                    <label >Rua</label>
                    <div className="input-cadastro">
                        <input className="input2-cadastro" type="text" placeholder="Informe sua rua" />
                    </div>
                    <label >Bairro</label>
                    <div className="input-cadastro">
                        <input className="input2-cadastro" type="text" placeholder="Informe seu bairro" />
                    </div>
                    <div className="container-login-form-btn-cadastro">
                        <button className="login-form-btn-cadastro" onClick={saveUser}>Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}