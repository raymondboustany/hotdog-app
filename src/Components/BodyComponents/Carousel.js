import {useRef} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Navigation, EffectFade} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import "../../styling/BodyStyling/carousel.css"

export default function Carousel(){
    return(
        <div className="swiper-container">
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation
                effect={'fade'}
                speed={800}
                slidePerView={1}
                loop
                className="myswiper"
            >

                <SwiperSlide className="swiper-slide">
                    <img src="Downloads/dog1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="Downloads/dog2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="Downloads/dog3.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}