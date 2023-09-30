import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";


const BanglaFood = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <Container className='mt-5 pt-5'>
            <h1 data-aos="fade-right" data-aos-duration="2000" className='text-center mt-5 pt-5 display-3 fw-bold'>Smell Of Bangla Food</h1>
            <article data-aos='zoom-out' data-aos-duration="2000" className='text-size'>
            Bengali traditional food culture is a rich tapestry woven from history, geography, and a deep appreciation for culinary artistry. Situated in the fertile delta of the Ganges, Brahmaputra, and Meghna rivers, Bengal's cuisine is a reflection of its agrarian heritage and diverse influences. Rice is the staple, forming the foundation of every meal, often accompanied by a plethora of fish and vegetable dishes. The region's connection to waterways translates to an unmatched expertise in preparing fish – from the iconic "Hilsa" prepared during festivals to everyday fish curries cooked with mustard or poppy seed pastes. Another highlight is the "Panta Bhat," a dish of fermented rice soaked in water, consumed during the Bengali New Year. Sweets like "Rasgulla," "Sandesh," and "Mishti Doi" exemplify Bengali culinary craftsmanship, offering a perfect blend of flavors, textures, and sweetness. The "Durga Puja" season unveils a spectrum of traditional delicacies, showcasing the best of Bengali gastronomy. In the ultimate test of skill, preparing a perfect plate of "Shorshe Ilish" (Hilsa fish cooked in mustard sauce) or "Bhapa Doi" (steamed sweet yogurt) requires mastering intricate techniques and achieving a harmonious balance of spices. Bengali traditional food culture is not just about sustenance; it's a celebration of history and identity, passed down through generations, enticing both locals and food enthusiasts worldwide.
            </article>
            
        </Container>
    );
};

export default BanglaFood;