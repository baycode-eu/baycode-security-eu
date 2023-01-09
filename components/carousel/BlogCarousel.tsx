import React, { useEffect } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import { EffectCoverflow, Grid, Pagination } from "swiper";
import CarouselArticle from "./CarouselArticle"

import "swiper/css";

import { useState } from 'react';

export default (props) => {
  return <>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[  EffectCoverflow]}
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