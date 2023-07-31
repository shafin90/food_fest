import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const RegistrationForm = () => {
    // ALL INFORMATION COMES FROM CONTEXT API=============
    const { handleCreateAccountUsingEmail, user } = useContext(AuthContext);



    // Declaring all state=========
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [error, setError] = useState('');



    // DECLARING USENAVIGATE ==================
    const navigate = useNavigate();








    // submition of the form handling function=================
    const handleSubmit = (e) => {
        e.preventDefault();


        // ERROR VALIDATION=========
        if (password.length < 6) {
            setError('The password must be atleast 6 characters');
            setTimeout(() => {
                setError('')
            }, 3000)
        }

        // FUNCTION THAT TAKE EMAIL AND PASSWORD AND PASS IT TO AUTHPROVIDER=========
        handleCreateAccountUsingEmail(email, password);


        //AFTER REGISTRATION, USER WILL BE REDIRECTED TO HOME PAGE=======
        if (user) {
            navigate('/');
        }

    }



    // INITIALIZE AOS==============
    useEffect(() => {
        AOS.init();
    }, [])









    return (
        <Container data-aos="fade-up" data-aos-duration="1500">

            {/* heading of this component========== */}
            <h1 className='text-center fw-bold  display-4'>Registration</h1>
            <Row className="justify-content-center mt-5">
                <Col md={6}>
                    {/* form start from here======= */}
                    <Form onSubmit={handleSubmit}>

                        {/* user name input=============== */}
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                required

                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>


                        {/* users email input here============== */}
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"

                                onChange={(e) => { setEmail(e.target.value) }}

                                required

                            />

                        </Form.Group>




                        {/* users password input here====================== */}
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"

                                onChange={(e) => { setPassword(e.target.value) }}

                            />

                        </Form.Group>





                        {/* users photoURL input here============================ */}
                        <Form.Group controlId="formPhotoURL">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="photoURL"

                                onChange={(e) => { e.target.value }}
                                required
                            />
                        </Form.Group>


                        {/* REGISTER  button of the form */}
                        <Button className='mt-3' variant="primary" type="submit">
                            Register
                        </Button>
                        <p className='text-danger text-sm'>{error}</p>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default RegistrationForm;
