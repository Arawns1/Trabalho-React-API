import { CategoryCard } from "../cards/categoryCard/CategoryCard"
import {CategoriesContainer, CategoriesCardContainer,CategoryTitle} from "./style"

export function Categories(){
    return(
        <CategoriesContainer>
        <CategoryTitle>Categorias</CategoryTitle>
        <CategoriesCardContainer>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
        </CategoriesCardContainer>
        </CategoriesContainer>
    )
}