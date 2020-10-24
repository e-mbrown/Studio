import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { login/*, wakeHeroku*/ } from './../services';

//include button to direct to Account.jsx

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = async () => {
        //await wakeHeroku(); // wakes Heroku server; not for professional use
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async event => {
        event.preventDefault();
        const resp = await login(this.state);
        if (!resp) {
            this.setState({
                error: 'Invalid login.'
            })
        } else {
            console.log(resp);
            await this.props.setUser({token: resp.token});
            this.props.history.push(`/account`);
        }
      }

    render() {
        return(
            <form className='login' onSubmit={this.handleSubmit}>
                <h3>Log In</h3>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' name='username' value={this.state.username} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' value={this.state.password} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="loginButton">
                    {this.state.error}
                    <button type="submit">Log In</button>
                </div>
                <div>
                    New user? <Link to="/register">Register here.</Link>
                </div>
            </form>
        )
    }
}

export default withRouter(Login);
