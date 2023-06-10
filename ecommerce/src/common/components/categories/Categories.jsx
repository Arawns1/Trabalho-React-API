/* eslint-disable react/prop-types */
import { CategoryCard } from "../cards/categoryCard/CategoryCard"
import {CategoriesContainer, CategoriesCardContainer,CategoryTitle} from "./style"

export function Categories(props){

    const {categories} = props;

    return(
        <CategoriesContainer>
        <CategoryTitle>Categorias</CategoryTitle>
        <CategoriesCardContainer>
            {
            categories.map(category =>{
            return(
                <CategoryCard nome={category.nome}  key={categories.indexOf(category)}/>
            )})
                
            }
        </CategoriesCardContainer>
        </CategoriesContainer>
    )
}