import React from 'react';
import './CardContainer.css'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture';
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import CustomCard from '../CustomCard/CustomCard';
import AOS from "aos";
import "aos/dist/aos.css";










const CardContainer = () => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });



    const [data, setData] = useState([]);




















    useEffect(() => {
        AOS.init();



        fetch('https://food-fest-server-shafin90.vercel.app/all_info')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])




    const filteredData = data.filter(item => data.indexOf(item) <= 5)






    if (filteredData.length == 0) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }






























    return (
        <Container className='chef'>


            {/* header of this section */}


            <div data-aos="flip-left" data-aos-duration="1000" className='card-heading mb-5'>
                <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="indicator"
                        style={{ pathLength: scrollXProgress }}
                    />
                </svg>
                
                <h1  className="display-3 fw-bold text-center mb-0">
                    Chef Carnival  <img className='img-fluid chef-carnival-pic' src="https://images.fineartamerica.com/images-medium-large-5/chef-cook-baker-smiling-cartoon-aloysius-patrimonio.jpg" alt="" />
                </h1>

            </div>









            {/* cards section */}

            <>

                <ul data-aos="zoom-in-up" data-aos-duration="1000" ref={ref}>
                    {
                        filteredData.map(item => <li><CustomCard


                            id={item._id}
                            name={item.Chef_Name}
                            image={item.Chef_Picture}
                            description={item.Biography}

                        ></CustomCard></li>)
                    }


                </ul>
            </>


















        </Container >
    );
}

export default CardContainer;