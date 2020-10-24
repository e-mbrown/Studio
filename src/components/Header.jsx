import React from 'react';
import Logout from './Logout'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log(this.props)
        return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    </Nav>
                    <Nav>
                    {this.props.tab}
                    {this.props.logout}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
        )
    }
}

export default Header