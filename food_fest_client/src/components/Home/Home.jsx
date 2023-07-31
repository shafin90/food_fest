import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import CardContainer from "../CardContainer/CardContainer";
import BangladeshiFoodItem from "../BangladeshiFoodItem/BangladeshiFoodItem"




const Home = () => {
    return (
        <Container fluid>
            <Banner></Banner>
            <CardContainer></CardContainer>
            <BangladeshiFoodItem></BangladeshiFoodItem>
            
          
            

        </Container>
    );
};

export default Home;