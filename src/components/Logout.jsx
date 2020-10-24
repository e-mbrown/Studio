import React from 'react';
import { JwtToken } from '../services/apiConfig';
import Link from 'react-router-dom';
import { render } from '@testing-library/react';

class Logout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedin: true
        }
    }

    handleLogout = () => {
        localStorage.removeItem('token')
        this.setState({loggedin: false})
    }

    render() {
        return (
            <>
                { this.state.loggedin ? (<button onClick={this.handleLogout}>Logout</button>) : (<h3>You may or may not be logged <input type="file" name="" id=""/></h3>)}
            </>
        )
    }
}

// {JwtToken == null ? (<Link to="/"></Link>) : (<button onClick={this.handleLogout}>Logout</button>)}

// export the component to enable use in other files
export default Logout;