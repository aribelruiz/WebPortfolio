import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import './Carousel.css';

const Caro = (props) => {

    
    // Getting image slides from props
    let imgSlides = props.slides;

    // Makes single slide projects into a single item array
    if (!Array.isArray(imgSlides)) {
        imgSlides = [imgSlides];
    }

    console.log(props.slides.length)
    return(
        <>
        <Carousel className={(imgSlides.length > 1? 'multi' : 'single')}>
            {imgSlides.map((item, index) => (
                <CarouselItem className="caro-img-div" key ={index}>
                  <img className='caro-img' src={item} alt='project-img'/>
                </CarouselItem>
            ))}
        </Carousel>
        </>
    );
}

export default Caro;