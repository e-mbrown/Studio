import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { withRouter, Link } from 'react-router-dom';

// for Login & Register buttons

// Login button opens Login.jsx screen

//Register button opens Register.jsx screen

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </header>
            </div>
        )
    }
}

export default withRouter(Landing);

