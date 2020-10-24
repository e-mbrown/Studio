import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { register } from './../services';
import Button from 'react-bootstrap/Button';

//include button to direct to Account.jsx

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm: '',
            match: false,
            error: null
        }
    }

    componentDidMount() {
        
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    passwordChange = async e => {
        await this.handleChange(e);
        if (this.state.password.length > 4 && this.state.password == this.state.confirm) {
            this.setState({
                match: true
            })
        } else if(this.state.match) {
            this.setState({
                match: false
            })
        }
    }

    emailChange = async e => {
        await this.handleChange(e);
        if (this.state.error) {
            this.setState({ error: null })
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const resp = await register(this.state);
        if (resp.status == 205 ) {
            this.setState({
                error: 'This email address is already registered.'
            })
        } else {
            await this.props.setUser({id: resp.data.userId, name: resp.data.userName});
            this.props.history.push(`/account`);
        }
      }

    render() {
        const button = this.state.match && this.state.name && this.state.email ?
            (<Button variant="success" type='submit'>Register</Button>) :
            (<Button variant="danger" type='button' style={{cursor: 'not-allowed'}}>Incomplete</Button>)
        return(
            <form className='login' onSubmit={this.handleSubmit}>
                <h1>Register</h1>
                <div>
                    <label htmlFor='name'>Username: </label>
                    <br></br>
                    <input type='text' name='name' value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                </div>
                <br></br>
                <div>
                    <label htmlFor='email'>Email address: </label>
                    <br></br>
                    <input type='text' name='email' value={this.state.email} onChange={(e) => this.emailChange(e)}/>
                </div>
                <br></br>
                <div>
                    <label htmlFor='password'>Password (min: 8 characters): </label>
                    <br></br>
                    <input type='password' name='password' value={this.state.password} onChange={(e) => this.passwordChange(e)}/>
                </div>
                <br></br>
                <div>
                    <label htmlFor='confirm'>Confirm password: </label>
                    <br></br>
                    <input type='password' name='confirm' value={this.state.confirm} onChange={(e) => this.passwordChange(e)}/>
                </div>
                <br></br>
                <div className="loginButton">
                    {this.state.error}
                    {button}
                </div>
                <br></br>
                <div>
                    Already a member? <Link to="/login">Login here.</Link>
                </div>
            </form>
        )
    }
}

export default withRouter(Register);
