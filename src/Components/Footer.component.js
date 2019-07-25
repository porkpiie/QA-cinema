import React, { Component } from 'react';
import { Navbar, Container, NavbarBrand } from 'reactstrap';

export default class AppFooter extends Component{
    render() {
        return(
            <div className="fixed-bottom">  
                <Navbar color="dark" dark>
                    <Container>
                        <NavbarBrand style={{color: 'white', textDecoration: 'none'}}>&copy; QA Cinemas 2019</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}