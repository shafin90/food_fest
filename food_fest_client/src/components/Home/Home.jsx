import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import CardContainer from "../CardContainer/CardContainer";
import BangladeshiFoodItem from "../BangladeshiFoodItem/BangladeshiFoodItem"
import BanglaFood from "../BanglaFood/BanglaFood";
import Opinion from "../Opinion/Opinion";




const Home = () => {
    return (
        <Container fluid>
            <Banner></Banner>
            <CardContainer></CardContainer>
            <BangladeshiFoodItem></BangladeshiFoodItem>
            <BanglaFood></BanglaFood>
            <Opinion></Opinion>
            
          
            

        </Container>
    );
};

export default Home;