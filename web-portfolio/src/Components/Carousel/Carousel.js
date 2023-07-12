import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

import './Carousel.css';
import bbImg from '../../Images/Projects/BrainBeatsHome.png';
import bbImg2 from '../../Images/Projects/EpilapseHome.png';

const Caro = () => {

    let bbSlides = [bbImg, bbImg2];

    return(
        <>
        <Carousel>
            {bbSlides.map((item, index) => (
                <CarouselItem className="caro-img-div" key ={index}>
                  <img className='caro-img' src={item} alt='project-img'/>
                </CarouselItem>
            ))
            }
        </Carousel>
        </>
    );
}

export default Caro;