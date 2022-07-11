import {Navbar, Container, Nav, NavDropdown, DropdownButton} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const NavBar = () => {

    const user = useSelector((state) => state.user.value)

    return ( 
        <Navbar bg="primary" expand="lg" fixed="top" className="shadow">
            <Container>
                <Navbar.Brand>
                    <Link to="/"><img src="/logo256-full.png" alt="logo" width={40} height={40}/></Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/noticeboard" className='nav-link text-white'>Notice Board</Link>
                    <Link to="/pickup" className='nav-link text-white'>Pick Up</Link>
                    <Link to="/Guidelines" className='nav-link text-white'>Guidelines</Link>
                    <a href='/kidsarea' target="_blank" className='nav-link text-secondary'><strong>Kids Area</strong></a>

                    <div className='d-lg-none'>
                        <Link to={`/account/${user._id}`} className='nav-link'>View Account</Link>
                        <Link to="/history" className='nav-link'>History</Link>
                        <div className='nav-link text-danger'><Logout /></div>
                    </div>

                </Nav>
                <Nav className='d-none d-lg-block'>
                    <DropdownButton title={user.username} id="dropdown-basic-button" variant="dark" menuVariant='dark'>
                        <Link to={`/account/${user._id}`} className='dropdown-item text-white'>View Account</Link>
                        <Link to="/history" className='dropdown-item text-white'>History</Link>
                        <NavDropdown.Divider />
                        <div className='dropdown-item text-danger'><Logout /></div>
                    </DropdownButton>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavBar;