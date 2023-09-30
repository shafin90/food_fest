import { useContext, useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";


const CustomNavbar = () => {
    // RECIEVING DATA USING CONTEXT API FROM AUTHPROVIDER COMPONENT=======
    const { user, logoutUser } = useContext(AuthContext)

    // TAKING THE LOCATION TO DETECT PATHNAME ==
    const location = useLocation();



    // FUNCTION TO MAKE LOGOUT====
    const handleLogout = () => {
        logoutUser();
    }




    // INITIALIZE AOS =========
    useEffect(() => {
        AOS.init();
    }, [])




    return (


        <Navbar expand="lg" className="pt-4 bg-transparent mb-5">
            <Container>
                <Navbar.Brand  href="#home">Food-Fest</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav data-aos="fade-left" data-aos-duration="1500" className="ms-auto ">
                        <Nav.Link className={location.pathname == '/' ? "d-flex fw-bold justify-content-center align-items-center me-3 text-primary" : "d-flex fw-bold justify-content-center align-items-center me-3 text-black"} as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link className={location.pathname == '/blog' ? "d-flex text-primary fw-bold justify-content-center align-items-center me-3" : "d-flex text-black fw-bold justify-content-center align-items-center me-3"} as={Link} to='/blog'>Blog</Nav.Link>

                        <Nav.Link >
                            {user ? <Button onClick={handleLogout}>Logout</Button> : <Button as={Link} to='/login'>Login</Button>}


                        </Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
};

export default CustomNavbar;