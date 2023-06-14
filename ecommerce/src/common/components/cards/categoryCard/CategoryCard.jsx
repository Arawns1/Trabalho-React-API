/* eslint-disable react/prop-types */

import {CardContainer, CategoryImage, CategoryTitle, CategoryImageWrapper} from "./style"

export function CategoryCard(props){
    return(
        <CardContainer>
            <CategoryImageWrapper>
                <CategoryImage src={props.img} alt="Imagem da Categoria"/>
            </CategoryImageWrapper>
            <CategoryTitle>{props.nome}</CategoryTitle>
        </CardContainer>
    )
}