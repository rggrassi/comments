import React, { Component } from 'react';

class SignUp extends Component {

    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.passwd)
    }

    render() {
        const { isSignUpError, signUpError } = this.props;
        const errorMessages = {
            'auth/email-already-in-use': 'E-mail já foi utilizado',
            'auth/weak-password': 'Senha muito fraca',
            'auth/invalid-email': 'E-mail inválido' 
        }
        
        return (
            <div>
                <h2>Criar conta</h2>
                <input type="text" onChange={this.handleChange("email")} placeholder="e-mail"/>
                <input type="password" onChange={this.handleChange("passwd")} placeholder="senha"/>
                <button type="button" onClick={this.createAccount}>Criar conta</button>
                { isSignUpError && <p>
                    <b>Erro:</b> { errorMessages[signUpError] } 
                  </p> 
                }
                <button onClick={() => this.props.changeScreen('login')}>Entrar</button>
            </div>
        )
    }
}


export default SignUp