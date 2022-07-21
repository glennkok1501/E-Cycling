import {Navbar, Container, Nav, NavDropdown, DropdownButton} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Language from './Language';
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
                    <Link to="/info" className='nav-link text-white'>Information</Link>

                    <div className='d-lg-none'>
                        <Link to={`/account/${user._id}`} className='nav-link text-white'>View Account</Link>
                        <Link to="/history" className='nav-link text-white'>History</Link>
                        <Link to="/report" className='nav-link text-white'>Report</Link>
                        <Link to="/contact" className='nav-link text-white'>Contact Us</Link>

                        <div className='nav-link text-danger'><Logout /></div>
                    </div>
                    <Link to="/kidsarea" className='nav-link text-secondary'><strong>Kids Area</strong></Link>
                    

                </Nav>
                <div className='d-none d-lg-block'>
                <Language />
                    
                </div>
                <Nav className='d-none d-lg-block'>
                    <DropdownButton title={user.username} id="dropdown-basic-button" variant="dark" menuVariant='dark'>
                        <Link to={`/account/${user._id}`} className='dropdown-item text-white'>View Account</Link>
                        <Link to="/history" className='dropdown-item text-white'>History</Link>
                        <Link to="/report" className='dropdown-item text-white'>Report</Link>
                        <Link to="/contact" className='dropdown-item text-white'>Contact Us</Link>

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