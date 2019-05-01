import React from 'react';
import './Login.scss';
import Grid from '@material-ui/core/Grid';
import login from '../../assets/imgs/login.png';
import Input from '@material-ui/core/Input';
import { LoginState } from './Login.model';

class Login extends React.Component{

    state: LoginState = {
      username: '',
      password: '',
      showPassword: false
    };

    handleUsernameChange = (event: any) => {
      this.setState({username: event.target.value});
    }

    handlePasswordChange = (event: any) => {
      this.setState({password: event.target.value});
    }

    render(){
        return (
            <Grid container spacing={0}>
              <Grid item xs={5}>
                <img src={login} className="login-background" />
              </Grid>
              <Grid item xs={7}>
                <div className="login-form-container">
                  <div>
                    <h2>Log In</h2>
                    <form noValidate autoComplete="off" className="login-form">
                      <label htmlFor="username" className="username-label">USERNAME</label>
                      <Input
                        id="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                        className="username-input"
                        placeholder="Input username"
                      />
                      <label htmlFor="password" className="password-label">PASSWORD</label>
                      <Input
                        id="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        className="password-input"
                        placeholder="Input password"
                      />
                    </form>
                  </div>
                </div>
              </Grid>
            </Grid>
        );
    }
}

export default Login;