import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home" className="ms-3">
                Gestionnaire de Tâches Pro
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ms-3">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#features">Fonctionnalités</Nav.Link>
                    <Nav.Link href="#about">À Propos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}