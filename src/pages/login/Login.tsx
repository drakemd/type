import React from 'react';
import './Login.scss';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import login from '../../assets/imgs/login.png';
import movingasone from '../../assets/imgs/movingasone.png';
import Input from '@material-ui/core/Input';
import ArrowRightAltIcon from '@material-ui/icons/ArrowForward';
import { LoginState, LoginProps } from './Login.model';
import { connect } from 'react-redux';
import { loginAction } from './Login.actions';

class Login extends React.Component<LoginProps>{

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

    isDisabled = (): boolean => {
      return this.state.username === '' || this.state.password === '';
    }

    render(){
        return (
            <Grid container spacing={0}>
              <Grid item xs={5}>
                <img src={login} className="login-background" alt="background"/>
              </Grid>
              <Grid item xs={7}>
                <img src={movingasone} className="movingasone" alt="logo"/>
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
                      <Button disabled={this.isDisabled()} variant="contained" 
                        className={this.isDisabled() ? "btn-login-disabled" : "btn-login"} 
                        onClick={() => this.props.login(this.state.username, this.state.password)}>
                        Log In &nbsp; &nbsp;
                        <ArrowRightAltIcon className="arrow-icon"/>
                      </Button>
                    </form>
                  </div>
                </div>
              </Grid>
            </Grid>
        );
    }
}

const mapDispatchToProps = { 
  login: loginAction,
}
export default connect<LoginProps>(null, mapDispatchToProps)(Login);