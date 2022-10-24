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
                speed={100}
                slidePerView={1}
                loop
                className="myswiper"
            >
                    <SwiperSlide className="swiper-slide">
                        <img src="images/cute-dog-image-that-gaelle-likes.jpeg" alt="1" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="images/dog-ass-heart.jpeg" alt="2" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="images/golden-retriever-lick-funny.jpeg" alt="3" />
                    </SwiperSlide>
            </Swiper>
        </div>
    )
}