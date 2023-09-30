import { Col, Container, Row } from "react-bootstrap";
import './Banner.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";





const Banner = () => {

    useEffect(() => {
        AOS.init();
      }, []);


    return (
        <Container className="my-5 pt-5">
                
                {/* BANNER HEADING=========== */}
                <h1 data-aos="fade-up"  data-aos-duration="1500" className="display-3 fw-bold">Flavors of Bangladesh: A Culinary Journey</h1>
            

            <Row>

                {/* left part */}
                <Col sm={12} md={6}>



                    
                        <article data-aos="fade-right" data-aos-duration="1500" className="mt-5 fs-5">
                            Indulge in Bangladeshi Delights at Food-Fest! 🍜🌶️

                            Welcome to Food-Fest, where the flavors of Bangladesh come alive! 🇧🇩

                            Discover a treasure trove of mouthwatering dishes, from zesty street food to exquisite homemade specialties. Each bite is an adventure, blending spices and traditions that have stood the test of time.

                            Join us on this culinary voyage and experience the essence of Bangladeshi culture through its vibrant and diverse cuisine. Let Food-Fest be your guide to savoring the magic of Bangladesh!
                        </article>
            

                  

                </Col>





                {/* right pasrt */}
                <Col className="banner-slider " sm={12} md={6}>

                    <Row>
                        <Col>
                            
                                <img data-aos="flip-left" data-aos-duration="1500" className="img-fluid" src="https://www.nicepng.com/png/full/914-9141005_about-chicken-biryani-ad.png" alt="" />
                    
                        </Col>

                        <Col>
                        
                                <img data-aos="flip-left" data-aos-duration="1500" className="img-fluid" src="http://mughal.com.bd/admin/uploads/mughal_3.png" alt="" />
                            
                        </Col>

                    </Row>


                    <Row>
                        <Col md={1}>
                        </Col>
                        <Col md={8}>
                    


                                <img data-aos="flip-left" data-aos-duration="1500" className="img-fluid chicken-korai" src="https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0048_49-Korma-500x500.png" alt="" />
                            


                          

                        </Col>
                        <Col md={3}>
                       
                        </Col>
                     




                     
                        
                  
                       



                    </Row>
                    
                    

                




                </Col>


            </Row>
        </Container>
    );
};

export default Banner;