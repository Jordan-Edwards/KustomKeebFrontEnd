import React, {Component} from "react"; 
import axios from "axios";

class Login extends Component {

  state = {
    credentials: {username: '', password: ''}
  }

  
  login = event => {
    console.log(this.state.credentials)
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/auth/',
      data: this.state.credentials
    })
    .then(data => {console.log(data.data.token)});
  }


  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value
    this.setState({credentials: cred});
  }

  render() {
  return (
    <div>
    <h1>Login user form</h1>

    <form>
      Username:
      <input type="text" name="username"
       value={this.state.credentials.username}
       onChange={this.inputChanged}/>
    </form>

    <br/>

    <form>
      Password:
      <input type="password" name="password"
       value={this.state.credentials.password}
       onChange={this.inputChanged} />
    </form>

    <br/>

    <button onClick={this.login}>Login</button>
    <button onClick={this.register}>Register</button>
  </div>
    );
  }
}

export default Login;