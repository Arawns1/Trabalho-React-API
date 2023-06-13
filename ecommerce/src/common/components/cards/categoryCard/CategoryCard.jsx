/* eslint-disable react/prop-types */

import {CardContainer, CategoryImage, CategoryTitle} from "./style"

export function CategoryCard(props){
    return(
        <CardContainer>
            <CategoryImage src="" alt="Imagem da Categoria"/>
            <CategoryTitle>{props.nome}</CategoryTitle>
        </CardContainer>
    )
}