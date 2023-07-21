import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import CardContainer from "../CardContainer/CardContainer";


const Home = () => {
    return (
        <Container fluid>
            <Banner></Banner>
            <CardContainer></CardContainer>

        </Container>
    );
};

export default Home;