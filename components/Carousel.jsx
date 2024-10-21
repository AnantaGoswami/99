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
                    <picture>
                        <source media="(max-width: 640px)" srcSet="/assets/cr_mobile.jpg" />
                        <source media="(min-width: 641px)" srcSet="/assets/cr_desk.jpg" />
                        <img src="/assets/cr_desk.jpg" alt="Slide 1" className="w-full h-full object-cover" />
                    </picture>
                </SwiperSlide>
                <SwiperSlide>
                    <picture>
                        <source media="(max-width: 640px)" srcSet="/assets/cr_mobile2.jpg" />
                        <source media="(min-width: 641px)" srcSet="/assets/cr_desk2.jpg" />
                        <img src="/assets/cr_desk2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
                    </picture>
                </SwiperSlide>
                <SwiperSlide>
                    <picture>
                        <source media="(max-width: 640px)" srcSet="/assets/cr_mobile3.jpg" />
                        <source media="(min-width: 641px)" srcSet="/assets/cr_desk3.jpg" />
                        <img src="/assets/cr_desk3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
                    </picture>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
