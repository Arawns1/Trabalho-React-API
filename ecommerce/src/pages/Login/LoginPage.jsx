import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import './Login.css';
import LoginErrorToast from '../../common/components/modals/LoginError/LoginErrorToast';
import { setItem } from "../../services/LocalStorage";
import { Link, useNavigate } from 'react-router-dom';
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
                    } );
                }).catch(error => {
                    setOpen(true);
                    setSeverity('error');
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

            <div className="container">
                <div className="container-login">
                    <span className="title">Login</span>
                    <div className="login-form">
                        <div className="form-body">
                            <div className="input-container">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Digite seu usuário"
                                    required
                                    onChange={handleUsernameChange}
                                    value={username}
                                />
                                <input
                                    className="input"
                                    type="password"
                                    placeholder="Digite sua senha"
                                    required
                                    onChange={handleSenhaChange}
                                    value={senha}
                                />
                                <div className="esqueceuSenha">
                                    <span>Esqueceu sua senha?</span>
                                </div>
                            </div>
                        </div>
                        <div className="container-login-form-btn">
                            <button className="login-form-btn" onClick={handleLogin}>
                                Entrar
                            </button>
                            <div className="criarConta">
                                <span className="texto">
                                    Não tem uma conta? <Link to='/cadastro'><span className="cadastrar">Cadastre-se</span></Link>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
