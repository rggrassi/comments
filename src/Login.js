import React, { Component } from 'react';

class Login extends Component {

    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    login = () => {
        this.props.login(this.state.email, this.state.passwd)
    }

    render() {
        const { isAuthError, authError } = this.props;
        const errorMessages = {
            'auth/wrong-password': 'E-mail ou senha inválidos',
            'auth/user-not-found': 'Usuário não encontrado',
            'auth/invalid-email': 'E-mail inválido' 
        }
        
        return (
            <div>
                <h3>Entre para comentar:</h3>
                <form className='form-inline'>
                    <input className='form-control mr-2' type="text" onChange={this.handleChange("email")} placeholder="e-mail"/>
                    <input className='form-control mr-1' type="password" onChange={this.handleChange("passwd")} placeholder="senha"/>
                    <button className='btn btn-primary mr-1' type="button" onClick={this.login}>Login</button>
                    <button className='btn' onClick={() => this.props.changeScreen('signup')}>Criar conta</button>
                    </form>
                    { 
                        isAuthError && 
                            <div className='card text-white bg-danger mt-3'>
                                <div className='card-header'>Erro ao entrar</div>
                                <div className='card-body'>
                                    { errorMessages[authError] } 
                                </div>
                            </div> 
                    }
            </div>
        )
    }
}


export default Login