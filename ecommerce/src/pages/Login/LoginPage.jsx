import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import './Login.css';
import LoginErrorToast from '../../common/components/modals/LoginError/LoginErrorToast';

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('')

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                setOpen(false);
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [open]);

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = event => {
        setSenha(event.target.value);
    };

    function handleLogin() {
        api.post('/auth/signin', {
                username: email,
                password: senha
            })
            .then(response => {
                console.log(response.data);
                console.log(response.status);
                setOpen(true);
                setSeverity('success');
            })
            .catch(error => {
                console.log(error);
                setOpen(true);
                setSeverity('error');
            })
    }

    return (
        <div className="container">
            <div className="container-login">
                <span className="title">Login</span>
                <div className="login-form">
                    <div className="form-body">
                        <div className="input-container">
                            <input
                                className="input"
                                type="text"
                                placeholder="Digite seu email"
                                required
                                onChange={handleEmailChange}
                                value={email}
                            />
                            <input
                                className="input"
                                type="password"
                                placeholder="Digite sua senha"
                                required
                                onChange={handleSenhaChange}
                                value={senha}
                            />
                        </div>
                    </div>
                    <div className="container-login-form-btn">
                        <button className="login-form-btn" onClick={handleLogin}>
                            Entrar
                        </button>
                        <div className="form-footer">
                            <div className="criarConta">
                                <span className="texto">
                                    Não tem uma conta? <span className="cadastrar">Cadastre-se</span>
                                </span>
                            </div>
                            <div className="esqueceuSenha">
                                <span>Esqueceu sua senha?</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                open ? <LoginErrorToast show={open} severity={severity} /> : ''
            }
        </div>
    );
}
