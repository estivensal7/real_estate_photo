import React from 'react';
import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink
} from 'reactstrap';

export default class Example extends React.Component {
        constructor(props) {
                super(props);

                this.toggle = this.toggle.bind(this);
                this.state = {
                        isOpen: false
                };
        }
        
        toggle() {
                this.setState({
                        isOpen: !this.state.isOpen
                });
        }


        render() {
                return (
                <div>
                        <Navbar color="light" light expand="md" className="fixed-top">
                                <NavbarBrand href="/">reactstrap</NavbarBrand>
                                <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                        <Nav className="ml-auto" navbar >
                                                <NavItem>
                                                        <NavLink href="/components/">About</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                        <NavLink href="https://github.com/reactstrap/reactstrap">Services</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                        <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
                                                </NavItem>
                                        </Nav>
                                </Collapse>
                        </Navbar>
                </div>
                );
        }
}