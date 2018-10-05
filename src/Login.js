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
                <h2>Login</h2>
                <input type="text" onChange={this.handleChange("email")} placeholder="e-mail"/>
                <input type="password" onChange={this.handleChange("passwd")} placeholder="senha"/>
                <button type="button" onClick={this.login}>Login</button>
                { isAuthError && <p>
                    <b>Erro:</b> { errorMessages[authError] } 
                  </p> 
                }
            </div>
        )
    }
}


export default Login