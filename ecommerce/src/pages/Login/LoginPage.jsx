import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import LoginErrorToast from '../../common/components/modals/LoginError/LoginErrorToast';
import { setItem } from "../../services/LocalStorage";
import { Link, useNavigate } from 'react-router-dom';
import { Container, ContainerLogin, Title, LoginForm, FormBody, InputContainer, ContainerLoginFormBtn, LoginFormBtn, CriarConta, Cadastrar, EsqueceuSenha, Input } from './style';
export function LoginPage() {

    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [redirectHome, setRedirectHome] = useState(false);

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

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handleSenhaChange = event => {
        setSenha(event.target.value);
    };

    function handleLogin() {
        api.post('/auth/signin', {
            username: username,
            password: senha
        }).then(response => {
                    setItem('user', response.data);
                    api.get(`/clientes/findByEmail?email=${response.data.email}`)
                    .then(response =>{
                        setOpen(true);
                        setSeverity('success');
                        setRedirectHome(true);
                        setItem('cliente', response.data);
                        console.log(response.data)
                    } );
                })
        }
    if (redirectHome) {
        setTimeout(() => {
            return navigate("/")
        }, 1500);
    }

    return (
        <>
            {
                open ? <LoginErrorToast show={open} severity={severity} /> : ''
            }

            <Container>
                <ContainerLogin>
                    <Title>Login</Title>
                    <LoginForm>
                        <FormBody>
                            <InputContainer>
                                <Input
                                    type="text"
                                    placeholder="Digite seu usuário"
                                    required
                                    onChange={handleUsernameChange}
                                    value={username}
                                />
                                <Input
                                    type="password"
                                    placeholder="Digite sua senha"
                                    required
                                    onChange={handleSenhaChange}
                                    value={senha}
                                />
                                <EsqueceuSenha>
                                    <span>Esqueceu sua senha?</span>
                                </EsqueceuSenha>
                            </InputContainer>
                        </FormBody>
                        <ContainerLoginFormBtn>
                            <LoginFormBtn onClick={handleLogin}>
                                Entrar
                            </LoginFormBtn>
                            <CriarConta>
                                <span className="texto">
                                    Não tem uma conta? <Link to='/cadastro'><Cadastrar>Cadastre-se</Cadastrar></Link>
                                </span>
                            </CriarConta>
                        </ContainerLoginFormBtn>
                    </LoginForm>
                </ContainerLogin>
            </Container>
        </>
    );
}
