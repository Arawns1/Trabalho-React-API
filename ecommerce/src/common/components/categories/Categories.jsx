import { CategoryCard } from "../cards/categoryCard/CategoryCard"
import {CategoriesContainer, CategoriesCardContainer} from "./style"

export function Categories(){
    return(
        <CategoriesContainer>
        <h3>Categorias</h3>
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