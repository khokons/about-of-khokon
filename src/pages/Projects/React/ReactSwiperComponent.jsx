import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import reactData from '../React/ReactData';
import Reacts from './Reacts';
import './swiper.css';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';



const ReactSwiperComponent = () => {
    return (
        <div>
            <h2 className="mb-2 mt-8 md:mt-0 ml-32 md:ml-6 text-[#C68B59] uppercase text-2xl font-bold">React Js</h2>
            
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                freeMode={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[FreeMode, Navigation]}
                className="mySwiper relative"
            >
                {reactData.map(data => (
                    <SwiperSlide key={data.id}>
                        <Reacts 
                            name={data.name}
                            image={data.image}
                            status={data.status}
                            description={data.description}
                            tags={data.tags}
                            github_link={data.github_link}
                            live_link={data.live_link}
                        />
                    </SwiperSlide>
                ))}
                
                {/* Navigation buttons */}
                <div className="swiper-button-next absolute right-2 top-0 transform translate-y-1/2 z-10 cursor-pointer text-white">
                    {/* <FaAngleRight className='' /> */}
                </div>
                <div className="swiper-button-prev absolute left-2 top-0 transform translate-y-1/2 z-10 cursor-pointer text-white">
                    {/* <FaAngleLeft  /> */}
                </div>
            </Swiper>
        </div>
    );
};

export default ReactSwiperComponent;
