import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import resume from './images/carousel/resume.jpg';
import studying from './images/carousel/studying.jpg';
import working from './images/carousel/working.jpg';

const Styles = styled.div 
`
.carousel-img {
  max-width: 1300px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.carousel {
  padding-bottom: 10em;
}

.caption {
  position: absolute;
  top: 80%;
  background-color: whitesmoke;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  height: 120px;
  opacity: 0.8;
}

.caption p {
  color: black;
}
`

export const CarouselHomepage = () => (
  
    <React.Fragment className="carousel">
      <Styles>
        <Carousel>
        <Carousel.Item>
            <img
            className="carousel-img"
            src={resume}
            alt="First slide"
            />
          <Carousel.Caption className = "caption" style={{position: 'absolute',
    
    backgroundColor: 'whitesmoke',
   opacity:"0.8"}}>
              <h3>Swat Kats, an online E-Portfolio hosting service.</h3>
              <p style={{color:"grey"}}>Choose from multiple stunning templates to showcase your results and skills in an E-Portfolio format.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="carousel-img"
            src={studying}
            alt="Third slide"
            />

          <Carousel.Caption className = "caption" style={{position: 'absolute',
    
    backgroundColor: 'whitesmoke',
   opacity:"0.8"}}>
              <h3>Dazzle the world with your results</h3>
              <p style={{color:"grey"}}> You've worked hard and achieved a lot during your studies. Now's the chance to present them to the world - and future employers.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="carousel-img"
                src={working}
                alt="Third slide"
            />

          <Carousel.Caption className = "caption" style={{position: 'absolute',
    
    backgroundColor: 'whitesmoke',
   opacity:"0.8"}}>
              <h3>Get yourself closer to your dream job</h3>
              <p style={{color:"grey"}}>Swat Kats makes it easier for employers to view prospective employees' credentials. Don't miss the chance to secure your dream position.</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </Styles>
    </React.Fragment>
)

export default CarouselHomepage;