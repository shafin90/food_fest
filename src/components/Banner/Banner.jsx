import { Col, Container, Row } from "react-bootstrap";
import './Banner.css';
import Bounce from 'react-reveal/Bounce';
import { Fade, Zoom, Flip, Jello ,Roll} from "react-reveal";


const Banner = () => {


    return (
        <Container className="my-5 pt-5">
            <Bounce left>
                <h1 className="display-3 fw-bold">Flavors of Bangladesh: A Culinary Journey</h1>
            </Bounce>

            <Row>

                {/* left part */}
                <Col sm={12} md={6}>



                    <Fade bottom>
                        <article className="mt-5 fs-5">
                            Indulge in Bangladeshi Delights at Food-Fest! 🍜🌶️

                            Welcome to Food-Fest, where the flavors of Bangladesh come alive! 🇧🇩

                            Discover a treasure trove of mouthwatering dishes, from zesty street food to exquisite homemade specialties. Each bite is an adventure, blending spices and traditions that have stood the test of time.

                            Join us on this culinary voyage and experience the essence of Bangladeshi culture through its vibrant and diverse cuisine. Let Food-Fest be your guide to savoring the magic of Bangladesh!
                        </article>
                    </Fade>

                    
                        {/* <svg className="banner-svg-left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        
                            <path fill="#FF0066" d="M15.8,-35.4C16.7,-24,11.1,-13.3,20.4,-5.6C29.6,2,53.7,6.6,53.9,8C54.1,9.4,30.4,7.6,17.8,7.1C5.3,6.5,3.8,7.2,-0.4,16.9C-4.7,26.5,-11.7,45.2,-21.3,51.8C-31,58.5,-43.2,53.3,-44.7,43.3C-46.2,33.3,-36.9,18.7,-30.8,9.3C-24.6,-0.2,-21.5,-4.3,-22.7,-14C-24,-23.8,-29.5,-39.2,-26.4,-49.7C-23.4,-60.2,-11.7,-65.8,-2.1,-62.5C7.4,-59.1,14.9,-46.9,15.8,-35.4Z" transform="translate(100 100)" />
                            
                        
                        </svg> */}
              

                </Col>





                {/* right pasrt */}
                <Col className="banner-slider " sm={12} md={6}>

                    <Row>
                        <Col>
                            <Flip left>
                                <img className="img-fluid" src="https://www.nicepng.com/png/full/914-9141005_about-chicken-biryani-ad.png" alt="" />
                            </Flip>
                        </Col>

                        <Col>
                            <Flip left>
                                <img className="img-fluid" src="https://karamathsrestaurant.com/wp-content/uploads/2022/02/Untitled-4.png" alt="" />
                            </Flip>
                        </Col>

                    </Row>


                    <Row>
                        <Col md={1}>
                        </Col>
                        <Col md={8}>
                            <Flip left>


                                <img className="img-fluid chicken-korai" src="https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0048_49-Korma-500x500.png" alt="" />
                            </Flip>


                          

                        </Col>
                        <Col md={3}>
                       
                        </Col>
                        {/* <svg className="d-flex justify-content-center align-items-center  banner-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path className="blob-path" fill="#FF0066" d="M61.1,-16.5C68.9,4,57.7,34,35.1,51C12.6,67.9,-21.3,71.9,-40.8,57.4C-60.3,42.9,-65.5,10,-56.3,-12.4C-47.2,-34.9,-23.6,-46.7,1.6,-47.3C26.7,-47.8,53.4,-36.9,61.1,-16.5Z" transform="translate(100 100)" /></svg>
                         */}




                     
                        
                  
                       



                    </Row>
                    
                    

                




                </Col>


            </Row>
        </Container>
    );
};

export default Banner;