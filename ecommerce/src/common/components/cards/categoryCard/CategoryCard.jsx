
import {CardContainer, CategoryImage, CategoryTitle} from "./style"

export function CategoryCard(){
    return(
        <CardContainer>
            <CategoryImage src="https://source.unsplash.com/150x150?cute-animals" alt="Imagem da Categoria"/>
            <CategoryTitle>Nome da Categoria</CategoryTitle>
        </CardContainer>
    )
}