import { CategoryCard } from "../cards/categoryCard/CategoryCard"
import {CategoriesContainer, CategoriesCardContainer} from "./style"

export function Categories(){
    return(
        <CategoriesContainer>
        <h2>Categorias</h2>
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