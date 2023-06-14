/* eslint-disable react/prop-types */
import { CategoryCard } from "../cards/categoryCard/CategoryCard";
import { CategoriesContainer, CategoriesCardContainer, CategoryTitle } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
import "swiper/css/navigation";
import celulares from "../../../../public/assets/categories/Celulares.webp";
import consoles from "../../../../public/assets/categories/Consoles.webp";
import gabinetes from "../../../../public/assets/categories/Gabinetes.webp";
import headsets from "../../../../public/assets/categories/Headsets.webp";
import kitGamer from "../../../../public/assets/categories/Kit Gamer.webp";
import monitores from "../../../../public/assets/categories/Monitores.webp";
import mouses from "../../../../public/assets/categories/Mouses.webp";
import notebooks from "../../../../public/assets/categories/Notebooks.webp";
import tablets from "../../../../public/assets/categories/Tablets.webp";
import teclados from "../../../../public/assets/categories/Teclados.webp";
import { useState } from "react";

export function Categories(props) {
  const [categoriesImages] = useState([
    consoles,
    gabinetes,
    headsets,
    kitGamer,
    monitores,
    mouses,
    notebooks,
    celulares,
    tablets,
    teclados,
  ]);

  const { categories } = props;

  return (
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
          {categories.map((category, index) => (
            <SwiperSlide key={category.nome}>
              <CategoryCard
                nome={category.nome}
                img={categoriesImages[index]}
              />
            </SwiperSlide>
          ))}
        </CategoriesCardContainer>
      </Swiper>
    </CategoriesContainer>
  );
}
