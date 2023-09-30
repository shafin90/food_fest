import { Container,  Form, Button } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import AOS from "aos";
import "aos/dist/aos.css";




const LoginPage = () => {
  // PASSED INFORMATION THROUGH CONTEXT API======
  const { handleGoogle, handleLogin, user, chefID} = useContext(AuthContext);



  // STATE DECLARATION FOR THIS COMPONENT=============
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // DECLARING USENAVIGATE===============
  const navigate = useNavigate();

  // FUNCTION TO HANDLE FORM SUBMITION ACTIVITIES======= 
  const handleSubmit = (e) => {
    e.preventDefault();

    // SENDING EMAIL AND PASSWORD TO AUTHPROVIDER COMPONENT FOR LOGIN USER=====
    handleLogin(email, password);

   

    //NAVIGATE USER TO HOME PAGE IF USER IS LOGGED IN=======
    if (user) {
      if (!chefID) {
        navigate('/')
      }
      else {
        console.log(chefID)
        navigate(`/${chefID}`)
      }
    }
  }

  // INITIALIZE AOS=====
  useEffect(() => {
    AOS.init();
  }, [])



  return (
    <Container fluid>
      
      
      <div data-aos="fade-up" data-aos-duration="1500" className="d-flex flex-column justify-content-center align-items-center vh-100">

        {/* FORM HEADING */}
        <h1 className='fw-bold display-4 text-center mb-5'>Login</h1>

        {/*LOGIN FORM========= */}
        <Form onSubmit={handleSubmit} className='w-25'>
          {/* EMAIL FIELD */}
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>

          {/* PASSWORD FIELD */}
          <Form.Group controlId="password" className='mt-2'>
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>

          {/* SUBMIT BUTTON */}
          <Button variant="primary" className='mt-2' type="submit">
            Submit
          </Button>
        </Form>




        <div className="mt-4">
          <p className='text-center'>Or sign in with:</p>

          {/* GOOGLE SIGN IN BUTTON */}
          <Button onClick={handleGoogle} variant="outline-danger" className="mr-2 me-2">
            Google Sign-in
          </Button>

          {/* GITHUB SIGN IN BUTTON */}
          <Button variant="outline-dark">
            GitHub Sign-in
          </Button>
        </div>

        {/* LINK TO REDIRECT USER TO REGISTER PAGE */}
        <div className="mt-4">
          <p>Don't have an account? <Link to="/registration">Register here</Link></p>
        </div>

      </div>


    </Container>



  );
}

export default LoginPage;
