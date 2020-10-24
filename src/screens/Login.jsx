import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { login } from './../services';
// import { login, wakeHeroku } from './../services';

//include button to direct to Account.jsx

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
        }
    }

    // componentDidMount = async () => {
    //     await wakeHeroku(); // wakes Heroku server; not for professional use
    // }

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
            await this.props.setUser({id: resp.data.userId, name: resp.data.userName});
            this.props.history.push(`/account`);
        }
      }

    render() {
        return(
            <form className='login' onSubmit={this.handleSubmit}>
                <h3>Log In</h3>
                <div>
                    <label htmlFor='email'>Email address: </label>
                    <input type='text' name='email' value={this.state.email} onChange={(e) => this.handleChange(e)}/>
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
