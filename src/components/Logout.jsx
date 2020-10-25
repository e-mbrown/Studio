import React from 'react'
import Button from 'react-bootstrap/Button';

export default () => {
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "login";
  }

  return (
    <Button variant="link" onClick={logout}>Logout</Button>
  )
}

// import React from 'react';
//import { JwtToken } from '../services/apiConfig';
// import { render } from '@testing-library/react';
// import Nav from 'react-bootstrap/Nav'

    // class Logout extends React.Component {
    //     constructor(props) {
    //         super(props)
    //         this.state = {
    //             loggedin: true
    //         }
    //     }

    // handleLogout = () => {
    //     localStorage.removeItem('token')
    //     this.setState({loggedin: false})
    //     const { cookies } = this.props;
    //     cookies.remove('Token');
    //     window.location.href = '/';
    //     return false;
    // }

    //     render() {
    //         return (
    //             <>
    //                 {/* { localStorage.token == null ? (<h5>You should hopefully be logged out if you see this because that means the token is indeed null</h5>) : (<Nav.Link onClick={ this.handleLogout }>Logout</Nav.Link>) } */}
    //             </>
    //         )
    //     }
    // }

    // localStorage.getItem('token') == null
    // JwtToken == null
    // this.state.loggedin
    // localStorage.token

    // {JwtToken == null ? (<Link to="/"></Link>) : (<button onClick={this.handleLogout}>Logout</button>)}

    // export the component to enable use in other files
// export default Logout;