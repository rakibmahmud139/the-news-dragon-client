import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProviders';

const NavigationBar = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            {/* Nav Bar */}
            <Navbar collapseOnSelect expand="lg" className='mt-4'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none text-primary ms-3' to='/category/0'>Home</Link>
                            <Link className='text-decoration-none text-primary ms-3' to='/about'>About</Link>
                            <Link className='text-decoration-none text-primary ms-3' to='/career'>Career</Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem' }} />

                            }

                            {
                                user ?
                                    <Button variant="secondary">Logout</Button>
                                    :
                                    <Link to='/login'><Button variant="secondary">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;