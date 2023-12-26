import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { AuthorUserContext } from './Context/AuthorUserContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MdLogin, MdLogout, MdPersonAddAlt1, MdPerson2 } from "react-icons/md";


function NavigationBar() {
  const navigate = useNavigate();
  const {user, setUser} = useContext(AuthorUserContext);
  
  const logout = () => {
    setUser({});
    localStorage.clear()
    navigate('/')
  }
  return (
    <Navbar bg= 'dark' data-bs-theme= 'dark'expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand style={{fontFamily:'Sans'}} href="/">Modi.FYI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/posts'>Feed</Nav.Link>
            {/* <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {user._id ? <Nav>
            <div>
              <Nav.Link style={{color:'white'}} as={NavLink}to='/post'>Post</Nav.Link>
              <Button className='me-3' as = {Link} to="./users/profile">Hello {user.username}</Button>
              <Button onClick={logout}>Logout <MdLogout className="mb-1" size={18} /></Button>
            </div>
          </Nav>
          :
          <Nav>
            <div>
              <Button className='me-3' as={Link} to={'./register'}>Register</Button>
              <Button className='me-3' as={Link} to={'./login'}>Login</Button>
            </div>
          </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;