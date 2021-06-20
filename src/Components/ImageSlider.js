import React, { useState } from 'react'
import { SliderData } from './SliderData'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
   const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const preSlide = () => {
        setCurrent(current === 0 ?length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        
        <div classNmae="col">
            <button  className="btn" onClick={preSlide}>
                <ChevronLeftIcon />
            </button>
            <button className="btn" onClick={nextSlide}>
                <ChevronRightIcon />
            </button>
            <section className="slider">
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.images} alt="product" className='image' />)}


                        </div>
                    
                    )
                })}
            </section>
            </div>

    )
}

export default ImageSlider
