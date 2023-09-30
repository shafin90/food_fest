import React, { useEffect } from 'react'
import { Container } from "react-bootstrap";
import './BangladeshiFoodItem.css';
import { motion, Variants } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="cardContainer"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {/* <div className="splash" style={{ background }} /> */}
      <motion.div className="cardd" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  [


    <div className='d-flex flex-column justify-content-start align-items-center'>
      <h1 className='text-center fw-bold'>Biriyani</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Chicken_Biryani.jpg" className="img-fluid" alt="" />
    </div>



    , 340, 10],





  [<div className='d-flex flex-column justify-content-start align-items-center'>
    <h1 className='text-center fw-bold'>Chicken Korma</h1>
    <img src="https://www.mutherfudger.co.uk/wp-content/uploads/2018/08/chicken-korma2.jpg" className="img-fluid" alt="" />
  </div>

    , 20, 40],



  [<div className='d-flex flex-column justify-content-start align-items-center'>
    <h1 className='text-center fw-bold'>Khichuri</h1>
    <img src="https://3.bp.blogspot.com/-JTEr4cjzpmU/WHOXqSt0JJI/AAAAAAAALpk/Kb5V6k07mLMx6obBT2lLzTVUeabbiet0QCLcB/s1600/bhoger-khichuri.jpg" className="img-fluid" alt="" />
  </div>

    , 60, 90],




  [
    <div className='d-flex flex-column justify-content-start align-items-center'>
      <h1 className='text-center fw-bold'>Nalli-Nehari</h1>
      <img src="https://2.bp.blogspot.com/--emmPcjyuQ8/VDwd3CYSHGI/AAAAAAAAD10/Wn0k9z_GdzQ/s1600/Nalli%2BNihari%2B15.jpg" className="img-fluid" alt="" />
    </div>
    , 80, 120],


  [
    <div className='d-flex flex-column justify-content-start align-items-center'>
      <h1 className='text-center fw-bold'>Mutton Korahi</h1>
      <img src="https://i.pinimg.com/originals/95/14/8e/95148e0c52992cca8b6081f5fb07dfaa.jpg" className="img-fluid" alt="" />
    </div>
    , 100, 140],


  [
    <div className='d-flex flex-column justify-content-start align-items-center'>
      <h1 className='text-center fw-bold'>Shorshe Ilish</h1>
      <img src="https://i.pinimg.com/originals/d6/c0/13/d6c013858373d4389f8a48c996793d3c.jpg" className="img-fluid" alt="" />
    </div>


    , 205, 245],


  [
    <div className='d-flex flex-column justify-content-start align-items-center'>
      <h1 className='text-center fw-bold'>Ilish Paturi</h1>
      <img src="https://i.pinimg.com/originals/61/40/14/61401451eb0f3d85db256e2cf213a303.jpg" className="img-fluid" alt="" />
    </div>


    , 260, 290],



];





const BangladeshiFoodItem = () => {

  // INITIALIZE AOS===========
  useEffect(() => {
    AOS.init();
  }, [])




  return (
    <Container className="my-5">



      <div data-aos="fade-right" data-aos-duration="1000" className='d-flex flex-column flex-md-row justify-content-center align-items-center mb-5'>


        <h1  className="text-center fw-bold display-3 ">Bangladeshi Delicious Food Item</h1>

        <img src="https://www.emoji.co.uk/files/microsoft-emojis/smileys-people-windows10/9905-face-savouring-delicious-food.png" className='bangladeshi-food-item-pic' alt="" />
      </div>



      {
        food.map(([emoji, hueA, hueB]) => (
          <Container>

            <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />

          </Container>
        ))


      }
    </Container>
  );
};

export default BangladeshiFoodItem;