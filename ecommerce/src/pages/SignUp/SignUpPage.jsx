/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { setItem } from '../../services/LocalStorage';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import {
    AddressInformation,
    ButtonContainer,
    ButtonTitle, ButtonWrapper,
    CadastroContainer,
    CadastroContent,
    CadastroInput,
    CadastroTitle,
    InputDiv,
    PersonalInformation
} from './Style';
import './style.css';
import SignUpErrorToast from '../../common/components/modals/SignUpError/SignUpErrorToast';

export function SignUpPage() {
    let navigate = useNavigate();
    const [redirectHome, setRedirectHome] = useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [numero, setNumero] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [cep, setCep] = useState('');

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                setOpen(false);
            }, 99999999);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [open]);


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
    function handleCEPChange(e) {
        setCep(e.target.value)
    }

    function handleNumeroChange(e) {
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
                "data_nascimento": dataNascimento.toString(),
                "endereco": {
                    "id_endereco": response.data.id_endereco
                }
            }).then(response => {
                setItem('cliente', response.data);
                api.post('/auth/signin', {
                    "username": nome.replaceAll(" ", ""),
                    "password": senha
                }).then(response => {
                    setOpen(true);
                    setSeverity('success');
                    setItem('user', response.data);
                    setRedirectHome(true);
                }).catch(error => {
                    setOpen(true);
                    setSeverity('error');
                })
            })
        )
    }

    if (redirectHome) {
        setTimeout(() => {
            return navigate("/")
        }, 1500);
    }


    return (
        <>
            {
                open ? <SignUpErrorToast show={open} severity={severity} /> : ''
            }

            <CadastroContainer>
                <CadastroTitle>Cadastro</CadastroTitle>
                <CadastroContent>
                    <PersonalInformation>
                        <InputDiv>
                            <label>Nome</label>
                            <CadastroInput type={'text'} placeholder={'Digite seu nome'} onChange={handleNomeChange} />
                        </InputDiv>

                        <InputDiv>
                            <label>Email</label>
                            <CadastroInput type={'email'} placeholder={'Digite seu email'} onChange={handleEmailChange} />
                        </InputDiv>
                        <InputDiv>
                            <label>CPF</label>
                            <CadastroInput type={'text'} maxLength={11} placeholder={'Digite seu CPF'} onChange={handleCPFChange} />
                        </InputDiv>
                        <InputDiv>
                            <label>Telefone</label>
                            <CadastroInput type={'tel'} placeholder={'Digite seu telefone'} onChange={handleTelefoneChange} />
                        </InputDiv>


                    </PersonalInformation>
                    <AddressInformation>
                        <InputDiv>
                            <label>Data de Nascimento</label>
                            <CadastroInput type={'date'} placeholder={'Digite sua data de nascimento'} onChange={handleDataNascimentoChange} />
                        </InputDiv>
                        <InputDiv>
                            <label>Senha</label>
                            <CadastroInput type={'text'} placeholder={'Digite uma senha'} onChange={handleSenhaChange} />
                        </InputDiv>
                        <InputDiv>
                            <label>CEP</label>
                            <CadastroInput type={'text'} placeholder={'Digite seu CEP'} onChange={handleCEPChange} />
                        </InputDiv>
                        <InputDiv>
                            <label>Número</label>
                            <CadastroInput type={'numero'} placeholder={'Digite o número'} onChange={handleNumeroChange} />
                        </InputDiv>
                        <ButtonWrapper onClick={saveUser}>
                            <ButtonContainer>
                                <ButtonTitle>Cadastre-se</ButtonTitle>
                            </ButtonContainer>
                        </ButtonWrapper>
                    </AddressInformation>
                </CadastroContent>

            </CadastroContainer>
        </>
    )
}