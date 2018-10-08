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
                <h3>Criar conta</h3>
                <form className='form-inline'>
                    <input className='form-control mr-2' type="text" onChange={this.handleChange("email")} placeholder="e-mail"/>
                    <input className='form-control mr-2' type="password" onChange={this.handleChange("passwd")} placeholder="senha"/>
                    <button className='btn btn-primary mr-1' type="button" onClick={this.createAccount}>Criar conta</button>
                    <button className='btn' onClick={() => this.props.changeScreen('login')}>Entrar</button>
                    </form>
                    { isSignUpError &&
                        <div className='card text-white bg-danger mt-3'>
                            <div className='card-header'>Erro ao criar nova conta</div>
                            <div className='card-body'>
                                { errorMessages[signUpError] } 
                            </div>
                        </div> 
                    }
            </div>
        )
    }
}


export default SignUp