/* eslint-disable react/prop-types */
import { CategoryCard } from "../cards/categoryCard/CategoryCard"
import {CategoriesContainer, CategoriesCardContainer,CategoryTitle} from "./style"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";
import 'swiper/css/navigation';

// import required modules
import { Navigation, FreeMode, Pagination } from "swiper";

export function Categories(props){

    const {categories} = props;

    return(
        <CategoriesContainer>
        <CategoryTitle>Categorias</CategoryTitle>
        <Swiper
        slidesPerView={5}
        spaceBetween={0}
        navigation
        freeMode={true}
        modules={[Navigation, FreeMode, Pagination]}
        className="CategorySwiper"
      >
        
        <CategoriesCardContainer>
            {
            categories.map(category =>{
            return(
                <SwiperSlide key={categories.indexOf(category)}>
                    <CategoryCard nome={category.nome}  key={categories.indexOf(category)}/>
                </SwiperSlide>
            )})
                
            }
        </CategoriesCardContainer>
        </Swiper>
        </CategoriesContainer>
    )
}