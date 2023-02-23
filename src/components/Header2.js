import React from 'react';
import '../css/required-docs.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/NavLink';
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../pages/Home';
import TestPrep from '../pages/TestPrep';
import FAQ from '../pages/FAQ';
import FinancialAid from '../pages/FinancialAid';
import CollegeApp from '../pages/CollegeApp';
import RequiredDocs from '../pages/RequiredDocs';


class Header2 extends React.Component {
    
    render() {
        return (
            <Router>
                <div className="Header2">
                    {/*NavBar*/}
                    <div className="container-fluid sticky-top bg-white">
                        <header className="d-flex flex-wrap justify-content-center py-3 mb-1 border-bottom">
                            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-primary text-decoration-none navbar-brand">
                                <svg className="bi me-2 img-fluid" width={40} height={32}>
                                    <image href="./media/graduation-cap-solid.svg" height={40} width={32} />
                                </svg>
                                <span className="fs-4 text-primary">GH Prep Scholar</span>
                            </a>
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link exact activeClassName="navbar__link--active" eventKey="1" as={Link} to="/">
                                        Home
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link activeClassName="navbar__link--active" eventKey="2" as={Link} to="/requiredDocs">
                                        Gathering Docs
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link activeClassName="navbar__link--active" eventKey="3" as={Link} to="/testPrep">
                                        Test Prep
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link activeClassName="navbar__link--active" eventKey="4" as={Link} to="/apply">
                                        Applying To Colleges
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link activeClassName="navbar__link--active" eventKey="5" as={Link} to="/financialAid">
                                        Financial Aid
                                    </Nav.Link>
                                </Nav.Item>
                                <NavDropdown title="Dropdown" id="nav-dropdown">
                                    <NavDropdown.Item><Nav.Link as={Link} to="/">
                                        About Us
                                    </Nav.Link></NavDropdown.Item>
                                    <NavDropdown.Item href='https://youtube.com/playlist?list=PLK_coAouRKGMi267s8-F6vPZ_pfQEd7aG'>Stories</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Nav.Link as={Link} to="/contactUs">
                                        Contact Us
                                    </Nav.Link></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </header>
                    </div>

                </div>
                <Switch>
                    <Route path="/apply"> <CollegeApp /></Route>
                    <Route path="/testprep"><TestPrep /></Route>
                    <Route path="/financialAid"> <FinancialAid /></Route>
                    <Route path="/requiredDocs"><RequiredDocs /></Route>
                    <Route path="/contactUs"> <FAQ /> </Route>
                    <Route path="/"><Home /> </Route>
                </Switch>

            </Router>
        );
    }
}

export default Header2;