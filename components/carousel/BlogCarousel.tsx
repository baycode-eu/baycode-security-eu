import React, { useEffect } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import { EffectCoverflow } from "swiper";
import CarouselArticle from "./CarouselArticle"

import "swiper/css";

import { useState } from 'react';

export default (props) => {
  const [amountOfSlides, setAmountOfSlides] = useState(3);
  const setAmountOfSlidesFunc = () => {
    if (window.innerWidth >= 1200) {
      setAmountOfSlides(4)
    } else if (window.innerWidth >= 800) {
      setAmountOfSlides(3)
    } else if (window.innerWidth >= 560) {
      setAmountOfSlides(2)
    } else {
      setAmountOfSlides(1)
    }
  }
  useEffect(() => {
    setAmountOfSlidesFunc()
    window.addEventListener('resize', ()=> {
      setAmountOfSlidesFunc()
    })
  }, [])


  return <>
    <Swiper
      slidesPerView={amountOfSlides}
      spaceBetween={30}
      modules={[ EffectCoverflow]}
      className="blog-carousel-swiper"
      >
        {props.articles.map((v,k) => 
          <SwiperSlide key={k}>
            <CarouselArticle key={k} onPress={props.onPress} article={v}/>
          </SwiperSlide>
        )}
    </Swiper>
  </>
}