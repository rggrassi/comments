import React, { Component } from 'react';
import Comments from './Comments'
import NewComment from './NewComment';
import Login from './Login';
import SignUp from './SignUp'
import User from './User';
import 'bootstrap-css-only';

class App extends Component {

  state = {
    comments: {},
    isLoading: false,
    isAuth: false,
    isAuthError: false,
    authError: '',
    isSignUpError: false,
    signUpError: '',
    user: {},
    userScreen: 'login'
  }

  componentDidMount() {
    const { database, auth } = this.props;

    this.setState({ isLoading: true })
    this.comments = database.ref('comments');
    this.comments.on('value', snapshot => {
      this.setState({ comments: snapshot.val(), isLoading: false });      
    })

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isAuth: true, user })
      } else {
        this.setState({ isAuth: false, user: {} })
      }
    })
  }

  login = async (email, passwd) => {
    const { auth } = this.props;
    this.setState({ authError: '', isAuthError: false })
    try {
      await auth.signInWithEmailAndPassword(email, passwd);
    } catch(err) {
      this.setState({ authError: err.code, isAuthError: true })
    }
  }

  createAccount = async (email, passwd) => {
    const { auth } = this.props;
    this.setState({ signUpError: '', isSignUpError: false })
    try {
      await auth.createUserWithEmailAndPassword(email, passwd);
    } catch(err) {
      this.setState({ signUpError: err.code, isSignUpError: true })
    }
  }

  sendComment = comment => {
    const { database } = this.props;
    const { user } = this.state;

    const id = database.ref().child('comments').push().key;
    const comments = {};
    comments['comments/'+id] = {
      comment,
      email: user.email,
      userId: user.uid
    }
    database.ref().update(comments);
  }

  logout = () => {
    const { auth } = this.props; 
    auth.signOut()
  }

  changeScreen = screen => {
    this.setState({ userScreen: screen });
  }

  render() {

    const { 
      isAuth, 
      isAuthError, 
      isLoading, 
      comments, 
      authError, 
      user, 
      isSignUpError, 
      signUpError
    } = this.state

    return (
      <div className='container mt-3'>
          { isAuth && <User email={user.email} logout={this.logout}/>}
          { !isAuth
              && this.state.userScreen === 'login' && 
              <Login login={this.login} isAuthError={isAuthError} authError={authError} changeScreen={this.changeScreen}/> 
          }
          { !isAuth
            && this.state.userScreen === 'signup' && 
            <SignUp createAccount={this.createAccount} isSignUpError={isSignUpError} signUpError={signUpError} changeScreen={this.changeScreen}/> 
        }

          { this.state.isAuth && <NewComment sendComment={this.sendComment}/> } 
          <Comments comments={comments} />
          { isLoading && <p>Carregando...</p> }
      </div>
    );
  }
}

export default App;