'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';  // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
    return (
        <div id='carousel' className='w-full h-screen py-5'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <img src="/assets/cr_desk.jpg" alt="Slide 1" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/cr_desk2.jpg" alt="Slide 2" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/cr_desk3.jpg" alt="Slide 3" className="w-full h-auto" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
