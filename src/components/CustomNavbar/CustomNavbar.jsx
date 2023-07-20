import { Button, Container, Nav,  Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const CustomNavbar = () => {
    return (
        
            
            <Navbar expand="lg" className="pt-4 bg-transparent">
                <Container>
                    <Navbar.Brand href="#home">Food-Fest</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto ">
                            <Nav.Link className="d-flex justify-content-center align-items-center me-3" as={Link} to='/' >Home</Nav.Link>
                            <Nav.Link className="d-flex justify-content-center align-items-center me-3" as={Link} to='/blog'>Blog</Nav.Link>
                            <Nav.Link  href="#link"><Button>Login</Button></Nav.Link>
                          

                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        
    );
};

export default CustomNavbar;