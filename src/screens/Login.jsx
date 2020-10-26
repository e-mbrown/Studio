import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { login/*, wakeHeroku*/ } from './../services';
import Button from 'react-bootstrap/Button';

//include button to direct to Account.jsx

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            // collection_id: null,
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
            await this.props.setUser(resp);
            // this.setState({
            //     collection_id: resp.collection_id
            // })
            this.props.history.push(`/account`);
        }
      }

    render() {

        if (localStorage.token === undefined) {
            localStorage.removeItem('token')
        }
        return(
            <form className='login' onSubmit={this.handleSubmit}>
                <h1>Log In</h1>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <br></br>
                    <input type='text' name='username' value={this.state.username} onChange={(e) => this.handleChange(e)} />
                </div>
                <br></br>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <br></br>
                    <input type='password' name='password' value={this.state.password} onChange={(e) => this.handleChange(e)}/>
                </div>
                <br></br>
                <div className="loginButton">
                    {this.state.error}
                    <Button variant="primary" type="submit">Log In</Button>
                </div>
                <br></br>
                <div>
                    New user? <Link to="/register">Register here.</Link>
                </div>
            </form>
        )
    }
}

export default withRouter(Login);
