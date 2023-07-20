import { Container } from "react-bootstrap";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <Container fluid>
            <CustomNavbar></CustomNavbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </Container>
    );
};

export default Layout;