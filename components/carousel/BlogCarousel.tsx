import React, { useEffect } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import { EffectCoverflow, Grid, Pagination } from "swiper";
import CarouselArticle from "./CarouselArticle"

import "swiper/css";

import { useState } from 'react';
import { setConstantValue } from "typescript";

export default (props) => {
  const [amountOfSlides, setAmountOfSlides] = useState(3);
  
  useEffect(()=> {
    window.addEventListener('resize', ()=> {
      if (window.innerWidth >= 800) {
        setAmountOfSlides(3)
      } else if (window.innerWidth >= 600) {
        setAmountOfSlides(2)
      } else {
        setAmountOfSlides(1)
      }
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