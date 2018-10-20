import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

//importing custom css
import './About.css';

const About = (props) => {
        return (
                <div>
                        <Jumbotron fluid className="about-container">
                                <Container fluid>
                                        <h1 className="display-3">About Us</h1>
                                        <p className="lead">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                </Container>
                        </Jumbotron>
                </div>
        );
};

export default About;