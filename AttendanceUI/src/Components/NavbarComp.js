import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Viewemp from './Viewemp';
import Addemp from './Addemp';
export default class NavbarComp extends Component {
    render() {
        return (
            <body>
                <Navbar bg="light" variant={"#682f0a"} expand="lg">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/" >Login Page</Nav.Link>
                            <Nav.Link as={Link} to="Viewemp"  >Employee Details</Nav.Link>
                            <Nav.Link as={Link} to="Addemp"  >Addemp</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes>
                    <Route exact path='/Viewemp' element={<Viewemp />} ></Route>
                    <Route exact path='/Addemp' element={<Addemp />} ></Route>
                </Routes>
            </body>)
    }
}