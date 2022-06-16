import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logout from './Logout';

const NavBar = () => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/"><img src="/logo256-full.png" alt="logo" width={40} height={40}/></Link>
                    
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/noticeboard" className='nav-link'>Notice Board</Link>
                    <Link to="/pickup" className='nav-link'>Pick Up</Link>
                    <a href='/kidsarea' target="_blank" className='nav-link'>Kids Area</a>

                    <div className='d-lg-none'>
                        <Link to="/account" className='nav-link'>View Account</Link>
                        <Link to="/history" className='nav-link'>History</Link>
                        <div className='nav-link text-danger'><Logout /></div>
                    </div>

                </Nav>
                <Nav className='d-none d-lg-block'>
                    <NavDropdown title="Account" id="basic-nav-dropdown" variant="light" menuVariant='dark'>
                        <Link to="/account" className='dropdown-item'>View Account</Link>
                        <Link to="/history" className='dropdown-item'>History</Link>
                        <NavDropdown.Divider />
                        <div className='dropdown-item text-danger'><Logout /></div>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavBar;