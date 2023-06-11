
import {CardContainer, CategoryImage, CategoryTitle} from "./style"

export function CategoryCard(props){
    return(
        <CardContainer>
            <CategoryImage src="https://source.unsplash.com/150x150?cute-animals" alt="Imagem da Categoria"/>
            <CategoryTitle>{props.nome}</CategoryTitle>
        </CardContainer>
    )
}