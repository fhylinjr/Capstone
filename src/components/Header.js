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

import Home from '../pages/Home';
import TestPrep from '../pages/TestPrep';
import FAQ from '../pages/FAQ';
import FinancialAid from '../pages/FinancialAid';
import CollegeApp from '../pages/CollegeApp';
import RequiredDocs from '../pages/RequiredDocs';


class Header extends React.Component {
    render() {
        return (
            <Router>
                <div className="Header">
                    {/*NavBar*/}
                    <div className="container-fluid sticky-top bg-white">
                        <header className="d-flex flex-wrap justify-content-center py-3 mb-1 border-bottom">
                            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-primary text-decoration-none navbar-brand">
                                <svg className="bi me-2 img-fluid" width={40} height={32}>
                                    <image href="./media/graduation-cap-solid.svg" height={40} width={32} />
                                </svg>
                                <span className="fs-4 text-primary">GH Prep Scholar</span>
                            </a>
                            <ul className="nav nav-pills">
                                <li className="nav-item"><Link to="/">Home</Link></li>
                                <li className="nav-item"><Link to="/requiredDocs">Gathering Docs</Link></li>
                                <li className="nav-item"><Link to="/testPrep">Test Prep</Link></li>
                                <li className="nav-item"><Link to="/apply">Applying To Colleges</Link>
                                </li>
                                <li className="nav-item"><Link to="/financialAid">Financial Aid</Link></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">About Us</a></li>
                                        <li><a className="dropdown-item" href="https://youtube.com/playlist?list=PLK_coAouRKGMi267s8-F6vPZ_pfQEd7aG">Stories</a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><Link to="/contactUs">Contact Us</Link></li>
                                    </ul>
                                </li>
                            </ul>
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

export default Header;