import dynamic from 'next/dynamic';
import React from 'react'
const Carousel = dynamic(
    () => import('flat-carousel'),
    { ssr: false }
)

const ImageSlider = ({ images }) => {
    return (
        <Carousel transitionDuration={300}>
            {images.map(item => (
                <img key={item.id} className='w-full h-full object-contain pointer-events-none' src={item.img} alt={item.name} />
            ))}
        </Carousel>

    );
}

export default ImageSlider