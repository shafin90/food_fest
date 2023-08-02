import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';


const NotFoundPage = () => {
    const history = useNavigate();

    const handleGoBack = () => {
      history(-1);
    };
    return (
        <Container>
            <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Col xs={12} sm={8} md={6} lg={4}>
                    <Image src="https://www.imarkinfotech.com/wp-content/uploads/2017/10/404-Page-Cover.png" alt="404 Not Found" fluid />
                    <h1 className="text-center">Oops! Page not found</h1>
                    <p className="text-center">The page you are looking for might have been removed or temporarily unavailable.</p>
                    <div className="text-center">
                        <Button variant="primary" onClick={handleGoBack}>Go Back</Button>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default NotFoundPage;
