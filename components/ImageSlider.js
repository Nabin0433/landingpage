import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react'
const Carousel = dynamic(
    () => import('flat-carousel'),
    { ssr: false }
)


const ImageSlider = ({ images }) => {
    const [img, setImg] = useState(null)

    useEffect(() => {
        if (img) {
            lockScroll()
        } else {
            removeLockScroll()
        }
    }, [img])

    const lockScroll = () => {
        document.body.classList.add('lock-scroll');
    }

    const removeLockScroll = () => {
        document.body.classList.remove('lock-scroll');
    }

    return (
        <>
            <Carousel transitionDuration={300}>
                {images.map(item => (
                    <div onClick={() => setImg(item.img)}>
                        <img key={item.id} className='w-full h-full object-contain pointer-events-none' src={item.img} alt={item.name} />
                    </div>
                ))}
            </Carousel>
            {img && (
                <>
                    <div className='fixed w-screen h-screen inset-0 z-20 bg-primary/95 flex justify-center items-center' onClick={() => setImg(null)}>
                        <span className='text-[30px] text-white absolute top-3 lg:top-6 right-6 lg:right-8 font-[Montserrat] font-semibold cursor-pointer'>x</span>
                        <img onClick={(e) => e.stopPropagation()} className='w-full max-h-[90vh] object-contain pointer-events-none' src={img} alt="Modal" />
                    </div>
                </>

            )}

        </>
    );
}

export default ImageSlider