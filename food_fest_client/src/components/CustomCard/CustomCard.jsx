import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const CustomCard = ({ name, image, description, id }) => {
    // RECIEVING DATA THROUGH CONTEXT API FROM AUTHPROVIDER COMPONENT======
    const { user, setChefID } = useContext(AuthContext);

    // DECLARING USENAVIGATION===============
    const navigate = useNavigate();
    
    
    // THIS FUNCTION IS TO TAKE THE USER TO CHEF'S PROFILE==================
    const handleNavigate = (id) => {
        
        // FIRST WE CHECK THE USER LOGGED IN OR NOT. IF THE USER IS LOGGED IN THEN USER IS PERMITTED TO VISIT THE CHEF'PROFILE DIRECTLY. ELSE, USER WILL BE  REDIRECTED TO LOGIN PAGE.
        if (user) {
            navigate(`chef/${id}`);
        }
        else{
            setChefID(`${id}`);
            navigate('/login');
        }
    }



    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img-fluid" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => handleNavigate(id)} variant="primary">View recipie</Button>
                </Card.Body>
            </Card>

        </Container>
    );
};

export default CustomCard;